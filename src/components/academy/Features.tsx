"use client";

import { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featureCards, ratings, type FeatureCard } from "@/lib/site-data";
import { ScrollRevealText } from "@/components/academy/ScrollRevealText";
import { DecryptedText } from "@/components/academy/DecryptedText";
import { client } from "@/lib/sanity";
import { NeonGlowOrb } from "@/components/academy/NeonGlowOrb";

function FeatureTile({ card, index }: { card: FeatureCard; index: number }) {
  const cardRef = useRef<HTMLElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  }

  // Border mapping to build a seamless grid outline
  const borderClassesList = [
    "border-b lg:border-r border-[#151e2e]",
    "border-b lg:border-r border-[#151e2e]",
    "border-b lg:border-r-0 border-[#151e2e]",
    "border-b lg:border-b-0 lg:border-r border-[#151e2e]",
    "border-b-0 lg:border-none border-[#151e2e]",
  ];
  const borderClasses = borderClassesList[index] || "border-b border-[#151e2e]";

  return (
    <div className={`feature-tile-wrapper h-full ${card.span === "double" ? "lg:col-span-2" : ""}`}>
      <article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={`feature-tile group relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden rounded-none px-6 py-8 transition-[background-color,border-color,box-shadow] duration-500 sm:px-8 sm:py-9 lg:min-h-[460px] bg-[#121212] ${borderClasses} hover-fine:bg-[#1a1a1a]`}
      >
        {/* Dynamic Cursor Blob highlight on hover */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover-fine:opacity-100 z-0"
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 229, 195, 0.08), transparent 80%)`,
          }}
        />

        <div className="relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#00e5c3]/70 font-mono">
            {card.id}
          </p>
          <h3 className="mt-8 lg:mt-12 text-h3 font-bold leading-[1.25] tracking-[-0.02em] text-white font-sans group-hover-fine:text-accent transition-colors duration-300">
            {card.title}
          </h3>
          <p className="mt-4 text-small font-normal leading-[1.65] tracking-[0.015em] text-ink-secondary font-sans max-w-[58ch]">
            {card.body}
          </p>
        </div>

        <div className="relative z-10 mt-8 flex flex-wrap gap-2">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-[11px] font-semibold leading-none tracking-[0.04em] font-sans text-white/70 hover-fine:bg-accent-muted hover-fine:border-accent-border/30 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}

export function Features({ sectionId = "programs" }: { sectionId?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [cards, setCards] = useState<FeatureCard[]>([]);

  useEffect(() => {
    async function fetchFeatureCards() {
      try {
        const query = `*[_type == "featureCard"] | order(id asc) {
          id,
          title,
          body,
          tags,
          tone,
          span
        }`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          setCards(data);
        }
      } catch (err) {
        console.warn("Failed to fetch features from Sanity, falling back to static config:", err);
      }
    }
    fetchFeatureCards();
  }, []);

  const activeCards = cards.length > 0 ? cards : featureCards;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Heading block reveal
      gsap.fromTo(
        ".features-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-heading",
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Staggered tile reveals — each tile lifts in individually
      const tiles = gsap.utils.toArray(".feature-tile-wrapper");
      if (tiles.length > 0) {
        gsap.fromTo(
          tiles,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".features-grid",
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // Ratings strip — staggered scale+fade
      const stats = gsap.utils.toArray(".feature-stat");
      if (stats.length > 0) {
        gsap.fromTo(
          stats,
          { opacity: 0, y: 20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.12,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".features-stats-grid",
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    }, sectionRef.current || undefined);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-transparent">
      <section
        ref={sectionRef}
        id={sectionId}
        className="site-shell section-padding relative overflow-visible"
      >
        {/* Background ambient radial glow handled by traveling orb */}

        <div className="features-heading relative z-10 flex flex-col gap-6">
          {/* Eyebrow Label */}
          <div>
            <span className="section-eyebrow">
              WHY OUR PRODUCT
            </span>
          </div>

          {/* Main heading and description layout */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-stretch gap-8 lg:gap-12">
            <div id="why-our-product-heading" className="max-w-[560px] shrink-0">
              <h2 className="section-title">
                Built for <span className="font-serif italic text-accent">Finance,</span>
                <br />
                Designed for <span className="font-serif italic text-accent">Outcomes.</span>
              </h2>
            </div>

            {/* Vertical Divider */}
            <div className="w-full h-px bg-[#151e2e] lg:w-px lg:h-auto lg:self-stretch lg:my-2" />

            <div className="lg:pt-2.5 max-w-[560px] relative">
              <NeonGlowOrb 
                className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                size={450}
                opacity={0.18}
                blur={50}
              />
              <ScrollRevealText
                text="We engineered this platform specifically for the complexity, compliance demands, and pace of financial education. That means structured tracks built around real job roles, with SOX, IFRS, and Big 4 standards treated as foundation rather than add-ons."
                className="section-desc"
              />
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="features-grid mt-16 lg:mt-24 grid grid-cols-1 gap-0 lg:grid-cols-3 border border-[#151e2e] relative z-10">
          {activeCards.map((card, index) => (
            <FeatureTile key={card.id} card={card} index={index} />
          ))}
        </div>

        {/* Ratings Footer */}
        <div className="features-stats-grid grid grid-cols-2 border-x border-b border-[#151e2e] sm:grid-cols-4 relative z-10">
          {ratings.map((stat, index) => {
            const statBorderClasses = [
              "border-r border-b border-[#151e2e] sm:border-b-0",
              "border-b border-[#151e2e] sm:border-r sm:border-b-0",
              "border-r border-[#151e2e]",
              "",
            ][index];

            return (
              <div
                key={stat.label}
                className={`feature-stat flex min-h-[160px] flex-col items-center justify-center px-6 py-8 text-center last:border-r-0 bg-[#121212] hover-fine:bg-[#1a1a1a] transition-[background-color] duration-500 ${statBorderClasses}`}
              >
                <p className="feature-stat-value text-[38px] font-bold tracking-tight text-[#151e2e] leading-none font-sans">
                  <DecryptedText text={stat.value} speed={50} delay={index * 100} />
                </p>
                <p className="feature-stat-label mt-3 max-w-[18ch] text-[12px] font-semibold leading-[1.4] uppercase tracking-wider text-[#4a6a7a] font-mono">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
