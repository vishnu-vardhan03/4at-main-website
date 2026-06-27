"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { client, urlFor } from "@/lib/sanity";
import { NeonGlowOrb } from "@/components/academy/NeonGlowOrb";

interface Instructor {
  name: string;
  role: string;
  quote: string;
  tag: string;
  image?: string;
  sanityImage?: any;
}

const STATIC_FACULTY_LIST: Instructor[] = [
  {
    name: "Anand S. Patel",
    role: "Director of Finance & Accounting",
    quote: "12+ years in corporate accounting and global ERP integrations; Former Controller at Fortune 500 tech firm.",
    tag: "Accounting & ERP Track",
    image: "/faculty/robert.webp"
  },
  {
    name: "Nandini Sharma, CA",
    role: "Senior Audit Manager",
    quote: "Former Big 4 Audit Manager with 10+ years leading SOX compliance and internal control audits.",
    tag: "Audit & Risk Track",
    image: "/faculty/sarah.webp"
  },
  {
    name: "Vikas Juneja, CFA",
    role: "VP of Financial Planning & Analysis",
    quote: "Led FP&A for high-growth SaaS and fintech teams; Specialist in strategic forecasting and valuations.",
    tag: "FP&A & Modeling Track",
    image: "/faculty/david.webp"
  },
  {
    name: "Neha Verma",
    role: "Head of Global Taxation",
    quote: "US & Cross-border tax specialist; 8+ years advising MNCs on tax structuring and corporate filings.",
    tag: "Global Taxation Track",
    image: "/faculty/emily.webp"
  }
];

export function Faculty({ sectionId = "faculty" }: { sectionId?: string }) {
  const [facultyList, setFacultyList] = useState<Instructor[]>(STATIC_FACULTY_LIST);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Fetch mentors dynamically from Sanity CMS
  useEffect(() => {
    async function fetchMentors() {
      try {
        const query = `*[_type == "mentor"] {
          name,
          role,
          quote,
          tag,
          "sanityImage": image
        }`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          const sanityNames = new Set(data.map((m: any) => m.name));
          const uniqueStatic = STATIC_FACULTY_LIST.filter(m => !sanityNames.has(m.name));
          setFacultyList([...uniqueStatic, ...data]);
        }
      } catch (err) {
        console.warn("Failed to fetch mentors from Sanity, falling back to static config:", err);
      }
    }
    fetchMentors();
  }, []);

  // Auto-advance desktop carousel every 6s
  useEffect(() => {
    if (isHovered || facultyList.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facultyList.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, facultyList.length]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Header elements staggered reveal
      gsap.fromTo(
        ".faculty-header-animate",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // 2. Carousel entry
      gsap.fromTo(
        ".faculty-carousel-animate",
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: carouselRef.current || ".faculty-mobile-trigger",
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef.current || undefined);

    // Refresh immediately to avoid trigger calculation bugs on dynamic mounts
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [facultyList]); // Refires if data updates dynamically

  const handlePrev = () => {
    if (facultyList.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + facultyList.length) % facultyList.length);
  };

  const handleNext = () => {
    if (facultyList.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % facultyList.length);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  // Generate helper to get initials for avatars
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2);
  };

  // Helper for 3D card layout styling with increased perspective
  const getCardStyle = (idx: number) => {
    const total = facultyList.length;
    if (total === 0) return {};
    const diff = (idx - currentIndex + total) % total;
    let offset = diff;
    if (offset > total / 2) {
      offset -= total;
    }

    if (offset === 0) {
      return {
        transform: "rotateY(0deg) translateZ(160px) scale(1.02)",
        zIndex: 10,
        opacity: 1,
      };
    } else if (offset === -1 || (offset === total - 1 && total === 2)) {
      return {
        transform: "rotateY(28deg) translateZ(20px) translateX(-280px) scale(0.9)",
        zIndex: 5,
        opacity: 0.45,
      };
    } else if (offset === 1) {
      return {
        transform: "rotateY(-28deg) translateZ(20px) translateX(280px) scale(0.9)",
        zIndex: 5,
        opacity: 0.45,
      };
    } else {
      return {
        transform: `rotateY(${offset < 0 ? 35 : -35}deg) translateZ(-120px) translateX(${offset < 0 ? -420 : 420}px) scale(0.78)`,
        zIndex: 1,
        opacity: 0,
        pointerEvents: "none" as const,
      };
    }
  };

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className="w-full bg-transparent text-white section-padding overflow-visible relative"
    >
      <NeonGlowOrb 
        className="left-[75%] top-[35%] -translate-x-1/2 -translate-y-1/2 z-0"
        size={450}
        opacity={0.18}
        blur={50}
      />

      <div className="site-shell">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24 faculty-header-animate">
          <div className="max-w-[700px] flex flex-col items-start">
            <span className="section-eyebrow">
              EXECUTIVE MENTORS
            </span>
            <h2 className="section-title">
              Finance leaders behind the training <span className="font-serif italic text-accent">standard</span>.
            </h2>
          </div>

          {/* Navigation Controls (Desktop) */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={handlePrev}
              className="flex size-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-white hover-fine:bg-white/10 hover-fine:border-accent/40 active:scale-95 transition-[background-color,border-color,transform] duration-300 shadow-lg cursor-pointer"
              aria-label="Previous faculty"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={handleNext}
              className="flex size-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-white hover-fine:bg-white/10 hover-fine:border-accent/40 active:scale-95 transition-[background-color,border-color,transform] duration-300 shadow-lg cursor-pointer"
              aria-label="Next faculty"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Desktop 3D Coverflow view */}
        <div
          ref={carouselRef}
          className="hidden md:block relative w-full h-[500px] faculty-carousel-animate"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-label="Faculty members carousel"
          role="region"
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
          >
            {facultyList.map((person, idx) => {
              const isActive = idx === currentIndex;
              const avatarSrc = person.sanityImage 
                ? urlFor(person.sanityImage).url() 
                : person.image;
              return (
                <div
                  key={idx}
                  style={{
                    ...getCardStyle(idx),
                    transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease-out",
                    willChange: "transform",
                  }}
                  className={`absolute w-[380px] h-[400px] border rounded-2xl p-8 flex flex-col justify-between transition-[background-color,border-color,box-shadow] duration-300 ${
                    isActive 
                      ? "bg-[#121212] border-slate-600 shadow-2xl" 
                      : "bg-[#121212] border-white/5 shadow-lg"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Circle Avatar with gradient background or image */}
                    <div className="w-16 h-16 rounded-full bg-accent-gradient flex items-center justify-center text-[#04060f] font-bold text-lg shrink-0 overflow-hidden relative">
                      {avatarSrc ? (
                        <Image src={avatarSrc} width={64} height={64} className="w-full h-full object-cover" alt={person.name} />
                      ) : (
                        getInitials(person.name)
                      )}
                    </div>
                    <div>
                      <h3 className="text-h3 font-bold tracking-tight text-white font-sans">
                        {person.name}
                      </h3>
                      <p className="text-small text-ink-secondary mt-1 font-sans">
                        {person.role}
                      </p>
                    </div>
                  </div>

                  <p className="font-sans font-normal text-sm lg:text-base leading-relaxed my-6 line-clamp-4 text-white/70">
                    &ldquo;{person.quote}&rdquo;
                  </p>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-sans tracking-wider text-accent border border-accent/20 bg-accent/5 px-2.5 py-0.5 rounded-md">
                      {person.tag}
                    </span>
                    <span className="text-[9px] font-mono text-white/20 select-none">
                      MTR_0{idx + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dot Indicators using Framer Motion layoutId */}
          <div className="absolute bottom-0 left-0 w-full flex justify-center gap-2">
            {facultyList.map((_, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="relative h-2 rounded-full cursor-pointer focus-visible:outline-none transition-[width] duration-300"
                  style={{ width: isActive ? "24px" : "8px" }}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <span className="absolute inset-0 rounded-full bg-white/20" />
                  {isActive && (
                    <motion.span
                      layoutId="activeFacultyDot"
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      className="absolute inset-0 rounded-full bg-accent"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Accordion View */}
        <div className="md:hidden flex flex-col gap-4 w-full faculty-mobile-trigger faculty-carousel-animate">
          {facultyList.map((person, idx) => {
            const isExpanded = activeMobileIndex === idx;
            const avatarSrc = person.sanityImage 
              ? urlFor(person.sanityImage).url() 
              : person.image;
            return (
              <div
                key={idx}
                onClick={() => setActiveMobileIndex(idx)}
                className={`border rounded-xl p-6 overflow-hidden transition-[border-color,background-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer ${
                  isExpanded 
                    ? "border-slate-600 bg-[#121212] shadow-xl" 
                    : "border-white/5 bg-[#121212]"
                }`}
              >
                <div className="flex items-center gap-4 cursor-pointer">
                  {/* Initials Avatar */}
                  <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center font-bold text-[#04060f] bg-accent-gradient text-sm overflow-hidden relative">
                    {avatarSrc ? (
                      <Image src={avatarSrc} width={48} height={48} className="w-full h-full object-cover" alt={person.name} />
                    ) : (
                      getInitials(person.name)
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-h3 font-sans">{person.name}</h4>
                    <p className="text-small text-ink-secondary font-sans">{person.role}</p>
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-white/5 font-sans">
                    <p className="font-sans font-normal text-sm leading-relaxed my-4 text-white/70">
                      &ldquo;{person.quote}&rdquo;
                    </p>
                    <span className="text-[10px] tracking-wider uppercase text-ink-secondary border border-white/10 px-2 py-0.5 rounded font-sans">
                      {person.tag}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
