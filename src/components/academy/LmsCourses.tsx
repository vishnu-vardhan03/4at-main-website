"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lmsCourses } from "@/lib/site-data";
import { Lock, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/academy/Button";
import { client, urlFor } from "@/lib/sanity";
import { NeonGlowOrb } from "@/components/academy/NeonGlowOrb";


// Custom Hero CTA button with clip-path wipe animation
function HeroCTAButton({ href, label }: { href: string; label: string }) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <a
      ref={btnRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full inline-flex items-center justify-center py-3.5 px-6 rounded-full border-[1.5px] border-white/20 bg-transparent text-white font-sans font-semibold text-[13px] uppercase tracking-[0.12em] select-none transition-transform duration-150 active:scale-[0.97]"
    >
      <span className="relative z-10 pointer-events-none">{label}</span>
      <div 
        className="absolute inset-[-1.5px] rounded-full bg-accent text-canvas flex items-center justify-center pointer-events-none font-semibold text-[13px] uppercase tracking-[0.12em]"
        style={{
          clipPath: `circle(${hovered ? "150%" : "0%"} at ${coords.x}px ${coords.y}px)`,
          transition: "clip-path 600ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <span className="relative z-10">{label}</span>
      </div>
    </a>
  );
}

export function LmsCourses({ sectionId = "courses" }: { sectionId?: string }) {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [coursesList, setCoursesList] = useState<any[]>(lmsCourses);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const query = `*[_type == "course"] {
          title,
          subtitle,
          badge,
          rating,
          reviewsCount,
          description,
          bullets,
          locked,
          category,
          instructor,
          price,
          originalPrice,
          badgeType,
          "sanityImage": image,
          slug
        }`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          const sanityTitles = new Set(data.map((c: any) => c.title));
          const uniqueStatic = lmsCourses.filter(c => !sanityTitles.has(c.title));
          setCoursesList([...uniqueStatic, ...data]);
        }
      } catch (err) {
        console.warn("Failed to fetch courses from Sanity, using defaults:", err);
      }
    }
    fetchCourses();
  }, []);

  const categories = ["All", "Accounting & ERP", "Audit & Risk", "Global Taxation", "FP&A & Modeling"];

  const filteredCourses = coursesList.filter(
    (course) => selectedCategory === "All" || course.category === selectedCategory
  );

  useEffect(() => {
    cardRefs.current = [];
  }, [selectedCategory]);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = container.firstElementChild?.getBoundingClientRect().width || 290;
    container.scrollBy({ left: -(cardWidth + 24), behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = container.firstElementChild?.getBoundingClientRect().width || 290;
    container.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, [isMobile]);

  // GSAP Interaction for Card Hover Dimming/Lifting
  const handleMouseEnter = (index: number) => {
    if (isMobile) return;
    setHoveredIndex(index);

    const cards = cardRefs.current.filter(Boolean);
    cards.forEach((card, idx) => {
      if (idx === index) {
        gsap.to(card, {
          y: -6,
          borderColor: "rgba(0, 255, 204, 0.2)",
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
          overwrite: "auto",
        });
      } else {
        gsap.to(card, {
          opacity: 0.6,
          duration: 0.4,
          ease: "power3.out",
          overwrite: "auto",
        });
      }
    });
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setHoveredIndex(null);

    const cards = cardRefs.current.filter(Boolean);
    cards.forEach((card) => {
      gsap.to(card, {
        y: 0,
        borderColor: "rgba(255, 255, 255, 0.08)",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        overwrite: "auto",
      });
    });
  };

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className="w-full pt-20 pb-8 md:pt-40 md:pb-12 font-sans select-none overflow-visible relative"
      style={{ backgroundColor: "transparent", color: "#ffffff" }}
    >
      {/* Glow orb centered behind header and category pills area */}
      <NeonGlowOrb 
        className="left-[75%] top-[250px] -translate-x-1/2 -translate-y-1/2 z-0"
        size={450}
        opacity={0.18}
        blur={50}
      />

      <div className="site-shell relative z-10">
        
        {/* Header */}
        <div id="explore-pathways-header" className="mb-16 text-left max-w-[580px]">
          <span className="section-eyebrow">
            EXPLORE PATHWAYS
          </span>
          <h2 className="section-title">
            Specialized Finance Curriculum built for actual execution.
          </h2>
        </div>

        {/* Category Pills & Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 border-b border-white/5 pb-6">
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors border cursor-pointer ${
                    isSelected
                      ? "bg-white text-[#04060f] border-white"
                      : "bg-[#0b0e1a] text-slate-400 border-white/10 hover-fine:text-white hover-fine:border-white/20"
                  }`}
                >
                  {cat === "All" ? "ALL" : cat}
                </button>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 shrink-0 justify-end">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div className="relative w-full">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pt-4 pb-8 -mt-4 w-full"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {filteredCourses.map((course, idx) => {
              const isLocked = course.locked;

              return (
                <div
                  key={course.title}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  data-cursor-view="true"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => {
                    const slug = course.slug?.current || course.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                    router.push(`/academy/courses/${slug}`);
                  }}
                  className={`snap-start shrink-0 w-[230px] sm:w-[260px] md:w-[290px] group relative flex flex-col justify-between p-4 rounded-2xl border border-white/8 bg-[#121212] hover:border-accent/20 cursor-pointer transition-[border-color,transform,opacity,box-shadow] duration-300 min-h-[390px] ${
                    isMobile ? "active:scale-[0.98] transition-transform duration-200" : ""
                  }`}
                  style={{
                    willChange: "transform",
                  }}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-[#04060f] mb-4">
                    <Image
                      src={(() => {
                        if (course.sanityImage?.asset) {
                          return urlFor(course.sanityImage).url();
                        }
                        if (course.image) {
                          return course.image;
                        }
                        const staticCourse = lmsCourses.find((c) => c.title === course.title);
                        return staticCourse?.image || "/default-thumbnail.jpg";
                      })()}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-105 grayscale contrast-[1.1] brightness-[0.85] group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100"
                    />
                    {/* Uniform editorial brand-tint overlays */}
                    <div className="absolute inset-0 bg-accent/15 mix-blend-color transition-opacity duration-500 group-hover:opacity-0 pointer-events-none z-10" />
                    <div className="absolute inset-0 bg-black/30 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-10 pointer-events-none z-10" />

                    {/* Lock Overlay for locked courses */}
                    {isLocked && (
                      <div className="absolute inset-0 bg-[#04060f]/60 backdrop-blur-[2px] flex items-center justify-center z-20">
                        <div className="bg-[#0b0e1a]/95 text-white rounded-full p-2.5 shadow-md border border-white/10">
                          <Lock className="size-4" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col flex-grow">
                    {/* Course Category */}
                    <span className="text-[10px] font-bold tracking-[0.13em] uppercase text-accent">
                      {course.category === "Accounting & ERP" ? "F&A" : course.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-bold text-lead tracking-tight text-white transition-colors duration-300 group-hover:text-accent font-sans mt-1.5 line-clamp-2 min-h-[40px] sm:min-h-[44px]">
                      {course.title}
                    </h3>

                    {/* Instructor / Subtitle */}
                    <p className="text-[13px] font-semibold leading-[1.4] text-slate-400 mt-1">
                      {course.instructor || "4AT Academy Core"}
                    </p>

                    {/* Rating Row */}
                    <div className="mt-2.5 flex items-center gap-1">
                      <span className="text-[13px] font-bold leading-[1.4] text-amber-500">{course.rating.toFixed(1)}</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => {
                          const isFilled = i < Math.floor(course.rating);
                          return (
                            <Star
                              key={i}
                              className={`size-3 ${isFilled ? "fill-amber-500 text-amber-500" : "text-white/10"}`}
                            />
                          );
                        })}
                      </div>
                      <span className="text-[10px] font-medium tracking-[0.13em] uppercase text-slate-500 font-sans">
                        ({course.reviewsCount})
                      </span>
                    </div>

                    {/* Description subtitle with horizontal line */}
                    <p className="mt-3.5 text-[13px] font-medium leading-[1.4] italic text-ink-secondary line-clamp-1 border-t border-white/5 pt-2.5">
                      {course.subtitle}
                    </p>
                  </div>

                  {/* Footer Container */}
                  <div className="mt-6 pt-3.5 border-t border-white/5 flex items-center justify-between z-10">
                    <div className="flex items-baseline">
                      <span className="text-[15px] font-extrabold leading-[1.4] text-white">{course.price}</span>
                      {course.originalPrice && (
                        <span className="text-[11px] font-medium leading-[1.4] line-through text-slate-500 ml-1.5">
                          {course.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Action button */}
                    {!isLocked ? (
                      <Button
                        variant="primary"
                        size="sm"
                        className="!px-4.5 !py-2 rounded-full !text-[11px] !tracking-[0.12em] uppercase font-bold text-[#003830]"
                        onClick={() => {
                          const slug = course.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                          router.push(`/academy/courses/${slug}`);
                        }}
                      >
                        Enroll
                      </Button>
                    ) : (
                      <Button
                        variant="secondary"
                        size="sm"
                        disabled
                        className="!px-4.5 !py-2 rounded-full !text-[11px] !tracking-[0.12em] uppercase font-bold !bg-[#04060f] !border-white/10 !text-white/35 !shadow-none"
                      >
                        Locked
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
