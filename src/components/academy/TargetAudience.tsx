"use client";

import { useRef, useLayoutEffect } from "react";
import { Button } from "@/components/academy/Button";
import { Check } from "lucide-react";
import { NeonGlowOrb } from "@/components/academy/NeonGlowOrb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TargetCard {
  id: "l1" | "l2";
  level: string;
  badgeColor: string;
  textColor: string;
  bgGradient: string;
  glowColor: string;
  title: string;
  description: string;
  bullets: string[];
  btnText: string;
  btnVariant: "primary" | "secondary";
  href: string;
}

const cards: TargetCard[] = [
  {
    id: "l1",
    level: "L1",
    badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/30",
    textColor: "text-teal-400",
    bgGradient: "bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(45,212,191,0.08),transparent)]",
    glowColor: "rgba(45,212,191,0.2)",
    title: "Freshers Track",
    description: "Build role clarity, confidence, and your first credible finance portfolio.",
    bullets: [
      "Structured MNC accounting and audit tracks",
      "Interview and resume calibration from day one",
      "Tool-first learning with guided mentorship"
    ],
    btnText: "Explore Freshers Track",
    btnVariant: "primary",
    href: "#courses"
  },
  {
    id: "l2",
    level: "L2+",
    badgeColor: "bg-violet-500/10 text-violet-300 border-violet-500/30",
    textColor: "text-violet-400",
    bgGradient: "bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(167,139,250,0.08),transparent)]",
    glowColor: "rgba(167,139,250,0.15)",
    title: "Professionals Track",
    description: "Move from experience to specialization with sharper compliance and strategic exposure.",
    bullets: [
      "Advanced IFRS, SOX, IA, and FP&A pathways",
      "Promotion-oriented project simulations",
      "Placement support for global finance teams"
    ],
    btnText: "Explore Professional Track",
    btnVariant: "secondary",
    href: "#courses"
  }
];

export function TargetAudience({ sectionId = "audience" }: { sectionId?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Header reveal
      gsap.fromTo(
        ".audience-header-animate",
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // 2. Domino cards entrance
      gsap.fromTo(
        ".audience-card-animate",
        { opacity: 0, y: 120, rotateY: -8, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: cardContainerRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef.current || undefined);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={sectionId} 
      className="w-full bg-transparent text-white section-padding overflow-visible relative"
    >
      <NeonGlowOrb 
        className="left-[75%] top-[150px] -translate-x-1/2 -translate-y-1/2 z-0"
        size={450}
        opacity={0.18}
        blur={50}
      />

      <div className="site-shell relative z-10">
        {/* Header Section */}
        <div className="max-w-[760px] mb-16 lg:mb-24 audience-header-animate">
          <span className="section-eyebrow">
            AUDIENCE SPECTRUM
          </span>
          <h2 className="section-title">
            Built for two different momentum curves, without flattening them into one.
          </h2>
        </div>

        {/* Static Split Cards wrapped in a relative container to center the background orb */}
        <div className="relative mt-8">
          <div 
            ref={cardContainerRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative z-10"
          >
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                className="audience-card-animate relative rounded-2xl border border-white/8 p-8 md:p-12 bg-[#0b0e1a] flex flex-col justify-between overflow-hidden"
                style={{
                  boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.5)",
                }}
              >
                {/* Floating internal radial neon ring backing */}
                <div 
                  className="absolute w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none -z-10" 
                  style={{
                    background: card.glowColor,
                    transform: "translate(0%, 0%) scale(0.8)",
                    top: "-50px",
                    right: "-50px"
                  }}
                />

                <div>
                  {/* Eyebrow badge */}
                  <div className="flex justify-between items-center mb-12">
                    <span className={`inline-block text-[11px] font-bold tracking-widest px-4 py-1.5 rounded-full border ${card.badgeColor}`}>
                      {card.level}
                    </span>
                    <span className="text-[11px] font-mono text-white/20 select-none">
                      {card.id === "l1" ? "STAGE_01" : "STAGE_02"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-h2 font-bold text-white tracking-tight mb-4 transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-ink-secondary text-small mb-8 leading-relaxed max-w-[95%]">
                    {card.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-5">
                    {card.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        {/* Custom geometric list marker */}
                        <span className="relative text-accent shrink-0 mt-1 select-none w-5 h-5 rounded-full bg-accent/8 border border-accent/20 flex items-center justify-center">
                          <Check className="absolute inset-0 m-auto size-3 text-accent stroke-[3.5]" />
                        </span>
                        <p className="text-ink-secondary text-body leading-relaxed">
                          {bullet}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-12 pt-6 border-t border-white/5 relative z-10">
                  <Button 
                    href={card.href} 
                    variant={card.btnVariant} 
                    className="w-full justify-center py-4 rounded-xl shadow-lg transition-transform duration-300"
                  >
                    {card.btnText}
                  </Button>
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