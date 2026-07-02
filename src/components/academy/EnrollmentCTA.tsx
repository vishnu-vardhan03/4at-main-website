"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./Button";
import { NeonGlowOrb } from "@/components/academy/NeonGlowOrb";

type EnrollmentCTAProps = {
  href: string;
  sectionId?: string;
};

export function EnrollmentCTA({ href, sectionId = "enroll" }: EnrollmentCTAProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const twitchRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Staggered slide and lift reveal for CTA sections
      gsap.fromTo(
        ".cta-element-animate",
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Force instant refresh for newly mounted dynamic component trigger coordinates
      ScrollTrigger.refresh();

      if (twitchRef.current) {
        // Oscillate letter-spacing to create the "twitch" effect specified
        gsap.to(twitchRef.current, {
          letterSpacing: "-0.04em",
          duration: 1.5,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
      }
    }, sectionRef.current || undefined);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className="w-full bg-transparent section-padding overflow-visible relative flex items-center justify-center min-h-[70vh]"
    >
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.12; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.25; transform: translate(-50%, -50%) scale(1.15); }
        }
        .pulse-glow {
          animation: pulseGlow 6s ease-in-out infinite;
        }
      `}</style>

      {/* Glow behind CTA */}
      <NeonGlowOrb 
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        size={450}
        opacity={0.18}
        blur={50}
      />

      <div className="site-shell relative z-10 text-center">
        <div className="max-w-[800px] mx-auto flex flex-col items-center">
          
          <span className="cta-element-animate section-eyebrow mb-6">
            TAKE THE NEXT STEP
          </span>

          <h2 className="cta-element-animate section-title text-center mb-8 mt-0">
            Ready to transition from learning to{" "}
            <span
              ref={twitchRef}
              className="font-serif italic text-accent inline-block tracking-[-0.02em] select-none"
            >
              outcomes?
            </span>
          </h2>

          <p className="cta-element-animate section-desc text-center max-w-[620px] mb-12 border-t border-b border-white/5 py-4 mt-6">
            Start your enrollment today. Join the ranks of finance professionals trained for the demands of the modern industry.
          </p>

          <div className="cta-element-animate flex flex-col md:flex-row gap-4 justify-center items-center w-full md:w-auto">
            <Button
              href={href}
              variant="primary"
              className="w-full md:w-auto px-10 py-5 text-sm rounded-xl font-bold hover-fine:shadow-cta transition-[transform,opacity,box-shadow,background-color,border-color] duration-300"
            >
              Enroll Now →
            </Button>
            <Button
              href="#recommender"
              variant="secondary"
              className="w-full md:w-auto px-10 py-5 text-sm rounded-xl font-bold backdrop-blur-md bg-white/[0.02] border-white/10"
            >
              Assess Your Fit
            </Button>
            <Button
              href="#contact-us"
              variant="secondary"
              className="w-full md:w-auto px-10 py-5 text-sm rounded-xl font-bold backdrop-blur-md bg-white/[0.02] border-white/10"
            >
              Talk to an Advisor
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

