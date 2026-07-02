"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollRevealText } from "@/components/academy/ScrollRevealText";
import { NeonGlowOrb } from "@/components/academy/NeonGlowOrb";

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  
  // Card refs for tracking cursor coordinates
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (ref: React.RefObject<HTMLDivElement | null>) => (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--mouse-x", `${x}px`);
    ref.current.style.setProperty("--mouse-y", `${y}px`);
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Underline scaleX animation on scroll
      if (underlineRef.current) {
        gsap.fromTo(
          underlineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      }

      // Heading section reveal
      gsap.fromTo(
        ".about-header-animate",
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
          }
        }
      );

      // Grid cards fade-up animation
      gsap.fromTo(
        ".about-grid-card",
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-grid-container",
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          }
        }
      );
    }, sectionRef.current || undefined);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full bg-transparent text-white section-padding overflow-visible relative"
    >
      <NeonGlowOrb 
        className="left-[70%] top-[25%] -translate-x-1/2 -translate-y-1/2 z-0" 
        size={450} 
        opacity={0.18} 
        blur={50} 
      />

      <div className="site-shell">
        <div className="about-heading relative z-10 flex flex-col gap-6">
          {/* Eyebrow Label */}
          <div className="about-header-animate">
            <span className="section-eyebrow">
              ABOUT ACADEMY
            </span>
          </div>

          {/* Main heading and description layout */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-stretch gap-8 lg:gap-12">
            <div className="max-w-[560px] shrink-0 about-header-animate">
              <h2 className="section-title">
                Where finance learning turns into career readiness
              </h2>
            </div>

            {/* Vertical Divider */}
            <div className="w-full h-px bg-[#151e2e] lg:w-px lg:h-auto lg:self-stretch lg:my-2" />

            <div className="lg:pt-2.5 max-w-[560px]">
              <ScrollRevealText
                text="We do more than teach courses. We combine structured learning, assessments, mentorship, and placement support so learners are better prepared for real finance roles, not just certification completion."
                className="section-desc"
              />
            </div>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="mt-16 lg:mt-24 relative">
          {/* 2x2 Bento-Style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 border border-[#151e2e] rounded-none overflow-hidden relative z-10 about-grid-container bg-transparent">
          {/* Card 1: Our Mission */}
          <div
            ref={card1Ref}
            onMouseMove={handleMouseMove(card1Ref)}
            className="p-8 sm:p-12 border-b md:border-r border-[#151e2e] flex flex-col justify-between min-h-[320px] relative group bg-[#121212] hover-fine:bg-[#1a1a1a] transition-colors duration-500 about-grid-card overflow-hidden"
          >
            {/* Radial glow overlay */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover-fine:opacity-100 z-0"
              style={{
                background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 229, 195, 0.06), transparent 80%)`,
              }}
            />
            <div className="absolute top-6 right-8 text-6xl sm:text-7xl font-light font-mono text-white/5 select-none transition-all duration-500 group-hover-fine:text-accent/15 group-hover-fine:-translate-y-1 group-hover-fine:translate-x-1 z-10">
              01
            </div>
            <div className="relative z-10">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-accent transition-colors duration-300 group-hover-fine:text-white">
                4AT ACADEMY // 01
              </span>
              <h3 className="text-h3 font-bold tracking-tight text-white mt-6 sm:mt-8 font-sans transition-transform duration-300 group-hover-fine:translate-x-1">
                Our Mission
              </h3>
              <p className="text-small text-ink-secondary leading-relaxed mt-4 font-sans max-w-[42ch]">
                Equip emerging finance talent with practical, employer-relevant training across accounting, audit, tax, FP&A, automation, and modern finance tools.
              </p>
            </div>
            <div className="relative z-10">
              <div className="w-full h-px bg-white/5 my-6 sm:my-8" />
              <div className="flex items-center justify-between text-[10px] font-semibold tracking-[0.15em] uppercase text-slate-500 font-mono">
                <span className="transition-colors duration-300 group-hover-fine:text-slate-300">PRACTICAL READY SOURCING</span>
                <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_#00e5c3] transition-transform duration-300 group-hover-fine:scale-150" />
              </div>
            </div>
          </div>

          {/* Card 2: Our Focus */}
          <div
            ref={card2Ref}
            id="about-card-02"
            onMouseMove={handleMouseMove(card2Ref)}
            className="p-8 sm:p-12 border-b border-[#151e2e] flex flex-col justify-between min-h-[320px] relative group bg-[#121212] hover-fine:bg-[#1a1a1a] transition-colors duration-500 about-grid-card overflow-hidden"
          >
            {/* Radial glow overlay */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover-fine:opacity-100 z-0"
              style={{
                background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 229, 195, 0.06), transparent 80%)`,
              }}
            />
            <div className="absolute top-6 right-8 text-6xl sm:text-7xl font-light font-mono text-white/5 select-none transition-all duration-500 group-hover-fine:text-accent/15 group-hover-fine:-translate-y-1 group-hover-fine:translate-x-1 z-10">
              02
            </div>
            <div className="relative z-10">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-accent transition-colors duration-300 group-hover-fine:text-white">
                4AT ACADEMY // 02
              </span>
              <h3 className="text-h3 font-bold tracking-tight text-white mt-6 sm:mt-8 font-sans transition-transform duration-300 group-hover-fine:translate-x-1">
                Our Focus
              </h3>
              <p className="text-small text-ink-secondary leading-relaxed mt-4 font-sans max-w-[42ch]">
                Build talent for real hiring demand by aligning training to the finance roles companies are actively trying to fill.
              </p>
            </div>
            <div className="relative z-10">
              <div className="w-full h-px bg-white/5 my-6 sm:my-8" />
              <div className="flex items-center justify-between text-[10px] font-semibold tracking-[0.15em] uppercase text-slate-500 font-mono">
                <span className="transition-colors duration-300 group-hover-fine:text-slate-300">CURATION // PIPELINE</span>
                <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_#00e5c3] transition-transform duration-300 group-hover-fine:scale-150" />
              </div>
            </div>
          </div>

          {/* Card 3: Our Vision */}
          <div
            ref={card3Ref}
            onMouseMove={handleMouseMove(card3Ref)}
            className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-[#151e2e] flex flex-col justify-between min-h-[320px] relative group bg-[#121212] hover-fine:bg-[#1a1a1a] transition-colors duration-500 about-grid-card overflow-hidden"
          >
            {/* Radial glow overlay */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover-fine:opacity-100 z-0"
              style={{
                background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 229, 195, 0.06), transparent 80%)`,
              }}
            />
            <div className="absolute top-6 right-8 text-6xl sm:text-7xl font-light font-mono text-white/5 select-none transition-all duration-500 group-hover-fine:text-accent/15 group-hover-fine:-translate-y-1 group-hover-fine:translate-x-1 z-10">
              03
            </div>
            <div className="relative z-10">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-accent transition-colors duration-300 group-hover-fine:text-white">
                4AT ACADEMY // 03
              </span>
              <h3 className="text-h3 font-bold tracking-tight text-white mt-6 sm:mt-8 font-sans transition-transform duration-300 group-hover-fine:translate-x-1">
                Our Vision
              </h3>
              <p className="text-small text-ink-secondary leading-relaxed mt-4 font-sans max-w-[42ch]">
                Develop finance professionals who can thrive in a world shaped by automation, analytics, compliance, and AI-enabled decision-making.
              </p>
            </div>
            <div className="relative z-10">
              <div className="w-full h-px bg-white/5 my-6 sm:my-8" />
              <div className="flex items-center justify-between text-[10px] font-semibold tracking-[0.15em] uppercase text-slate-500 font-mono">
                <span className="transition-colors duration-300 group-hover-fine:text-slate-300">VISION // FUTURE</span>
                <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_#00e5c3] transition-transform duration-300 group-hover-fine:scale-150" />
              </div>
            </div>
          </div>

          {/* Card 4: Our Approach */}
          <div
            ref={card4Ref}
            onMouseMove={handleMouseMove(card4Ref)}
            className="p-8 sm:p-12 flex flex-col justify-between min-h-[320px] relative group bg-[#121212] hover-fine:bg-[#1a1a1a] transition-colors duration-500 about-grid-card overflow-hidden"
          >
            {/* Radial glow overlay */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover-fine:opacity-100 z-0"
              style={{
                background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 229, 195, 0.06), transparent 80%)`,
              }}
            />
            <div className="absolute top-6 right-8 text-6xl sm:text-7xl font-light font-mono text-white/5 select-none transition-all duration-500 group-hover-fine:text-accent/15 group-hover-fine:-translate-y-1 group-hover-fine:translate-x-1 z-10">
              04
            </div>
            <div className="relative z-10">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-accent transition-colors duration-300 group-hover-fine:text-white">
                4AT ACADEMY // 04
              </span>
              <h3 className="text-h3 font-bold tracking-tight text-white mt-6 sm:mt-8 font-sans transition-transform duration-300 group-hover-fine:translate-x-1">
                Our Approach
              </h3>
              <p className="text-small text-ink-secondary leading-relaxed mt-4 font-sans max-w-[42ch]">
                Train with real workflows, test with role-based assessments, refine through mentorship, and move forward with placement support.
              </p>
            </div>
            <div className="relative z-10">
              <div className="w-full h-px bg-white/5 my-6 sm:my-8" />
              <div className="flex items-center justify-between text-[10px] font-semibold tracking-[0.15em] uppercase text-slate-500 font-mono">
                <span className="transition-colors duration-300 group-hover-fine:text-slate-300">APPROACH // METHOD</span>
                <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_#00e5c3] transition-transform duration-300 group-hover-fine:scale-150" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
