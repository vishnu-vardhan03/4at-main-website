"use client";

import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CountUpNumber } from "@/components/academy/CountUpNumber";

interface CardProps {
  id: string;
  title: string;
  body: string;
  type: "dark" | "glass";
  spanClass?: string;
  badges?: string[];
  metadata?: string[];
}

function BentoCard({ id, title, body, type, spanClass = "", badges, metadata }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  function handleMouseEnter() {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!rectRef.current) {
      if (cardRef.current) {
        rectRef.current = cardRef.current.getBoundingClientRect();
      } else {
        return;
      }
    }
    const left = rectRef.current.left;
    const top = rectRef.current.top;
    const x = e.clientX - left;
    const y = e.clientY - top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  }

  function handleMouseLeave() {
    rectRef.current = null;
  }

  // Define styling depending on card theme
  const cardStyles =
    type === "dark"
      ? "bg-gradient-to-br from-[#0c0d14] to-[#040507] border-white/[0.04] text-white hover-fine:border-emerald-500/30"
      : "bg-white/[0.015] backdrop-blur-[12px] border-white/[0.06] text-white hover-fine:border-emerald-500/40";

  const glowColor =
    type === "dark"
      ? "rgba(16, 185, 129, 0.12)" // subtle emerald glow
      : "rgba(255, 255, 255, 0.06)"; // soft white glow

  return (
    <div className={`bento-card-wrapper ${spanClass}`}>
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`bento-card group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border p-6 sm:p-8 transition-[border-color,box-shadow,transform] duration-500 hover-fine:-translate-y-1 hover-fine:shadow-2xl hover-fine:shadow-emerald-950/20 min-h-[300px] ${cardStyles}`}
      >
        {/* Interactive Radial Hover Glow */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover-fine:opacity-100 z-0"
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${glowColor}, transparent 80%)`,
          }}
        />

        {/* Card Contents */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <span className="text-eyebrow font-medium tracking-[0.13em] uppercase text-white/30 font-mono">
              {id}
            </span>
            <h3 className="mt-8 text-h3 font-bold leading-[1.2] tracking-tight text-white/95">
              {title}
            </h3>
            <p className="mt-4 text-body-md font-normal leading-[1.6] text-white/60 tracking-wide max-w-[54ch]">
              {body}
            </p>
          </div>

          {/* Bottom Metadata / Badges */}
          <div className="mt-8">
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-sm-ui font-medium leading-[1.4] text-white/80 transition-colors hover-fine:bg-white/[0.05] hover-fine:border-white/[0.12]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            {metadata && metadata.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 text-eyebrow font-medium tracking-[0.13em] uppercase text-white/40 font-mono">
                {metadata.map((item, idx) => (
                  <div key={item} className="flex items-center">
                    <span>{item}</span>
                    {idx < metadata.length - 1 && (
                      <span className="mx-2 text-white/10 font-sans">•</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CoreDifferentiators({ sectionId = "why-academy" }: { sectionId?: string }) {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Fade-in headings
      gsap.fromTo(
        ".diff-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".diff-heading",
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Bento cards staggered entrance
      gsap.fromTo(
        ".bento-card-wrapper",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".bento-grid",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Metrics strip stagger entrance
      gsap.fromTo(
        ".metric-block",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".metrics-strip",
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, containerRef.current || undefined);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id={sectionId}
      className="w-full relative overflow-hidden text-white py-14 sm:py-20 lg:py-28"
    >
      {/* Decorative Grid Mesh & Ambient Light */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="site-shell section-frame relative z-10">
        {/* [TOP HEADER ZONE] */}
        <div className="diff-heading grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-start mb-16 lg:mb-24">
          <div>
            <p className="text-eyebrow font-medium tracking-[0.13em] uppercase text-accent">
              WHY ACADEMY
            </p>
            <h2 className="section-title mt-6 text-white">
              Built for Software{" "}
              <span className="font-serif italic font-normal text-accent">
                Engineering.
              </span>
              <br className="hidden sm:inline" />
              Designed for{" "}
              <span className="font-serif italic font-normal text-accent">
                Production.
              </span>
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="text-lead font-normal leading-[1.6] text-white/60 max-w-[54ch]">
              We engineered this platform specifically for the structural complexity, optimization
              demands, and scale of modern enterprise systems. That means structured paths built
              around real-world code execution loops, with clean system design, DevOps automation,
              and secure API boundaries treated as the foundation rather than optional add-ons.
            </p>
          </div>
        </div>

        {/* [BENTO GRID WORKSPACE] */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {/* Card 01 */}
          <BentoCard
            id="01"
            title="Placement-first production curriculum"
            body="Each track is built backwards from a specific senior engineering destination, from scaling high-throughput APIs to managing enterprise database sharding rules."
            type="dark"
            badges={["Enterprise Core Stack", "System Architecture Mentorship"]}
          />

          {/* Card 02 */}
          <BentoCard
            id="02"
            title="Role-based scalability tracks"
            body="Separate structured paths tailored for fresh engineering graduates, 3+ year active full-stack developers, and 5+ year infrastructure specialists. No filler content."
            type="glass"
            metadata={["Associate → Architect", "CI/CD · Edge Deployments"]}
          />

          {/* Card 03 */}
          <BentoCard
            id="03"
            title="Native sandboxes & browser IDEs"
            body="Hands-on engineering execution loops using isolated container playgrounds and automated testing suites natively inside your browser window."
            type="glass"
            metadata={["In-Browser Dev Environment", "Next.js · Docker · AWS"]}
          />

          {/* Card 04 */}
          <BentoCard
            id="04"
            title="Secure code parity metrics"
            body="OWASP Top 10 vulnerabilities, secure API routing protocols, performance optimization benchmarks, and clean code paradigms are treated as permanent, operating constraints."
            type="glass"
            metadata={["Secure Code Standards", "Production-Ready Execution"]}
          />

          {/* Card 05 */}
          <BentoCard
            id="05"
            title="Enterprise-scale architectural simulations & environments"
            body="Engineers stress-test real system memory leaks, debug active server crash logs, resolve network timeout latency issues, and make architecture judgment calls inside simulated large-scale environments that mirror actual live systems."
            type="dark"
            spanClass="md:col-span-2"
            badges={[
              "Live Chaos Engineering",
              "Distributed Traffic Simulation",
              "Infrastructure Assessment",
            ]}
          />
        </div>

        {/* [FOOTER TIED STRIP] */}
        <div className="metrics-strip mt-6 lg:mt-8 border border-white/[0.06] rounded-[20px] bg-white/[0.01] backdrop-blur-md overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
          {/* Column 1 */}
          <div className="metric-block p-6 sm:p-8 flex flex-col justify-center min-h-[140px] transition-colors hover-fine:bg-white/[0.02]">
            <span className="text-h2 font-bold tracking-tight text-white font-sans">
              <CountUpNumber value="4.8 ★" duration={1.5} />
            </span>
            <span className="mt-3 text-sm-ui font-medium leading-[1.4] text-white/50 max-w-[28ch]">
              average tracking rating across all engineering modules
            </span>
          </div>

          {/* Column 2 */}
          <div className="metric-block p-6 sm:p-8 flex flex-col justify-center min-h-[140px] transition-colors hover-fine:bg-white/[0.02]">
            <span className="text-h2 font-bold tracking-tight text-white font-sans">
              <CountUpNumber value="15,000+" duration={1.8} />
            </span>
            <span className="mt-3 text-sm-ui font-medium leading-[1.4] text-white/50 max-w-[28ch]">
              registered active developers inside our network
            </span>
          </div>

          {/* Column 3 */}
          <div className="metric-block p-6 sm:p-8 flex flex-col justify-center min-h-[140px] transition-colors hover-fine:bg-white/[0.02]">
            <span className="text-h2 font-bold tracking-tight text-white font-sans">
              <CountUpNumber value="50+" duration={1.5} />
            </span>
            <span className="mt-3 text-sm-ui font-medium leading-[1.4] text-white/50 max-w-[28ch]">
              specialized enterprise scale pipeline tracks
            </span>
          </div>

          {/* Column 4 */}
          <div className="metric-block p-6 sm:p-8 flex flex-col justify-center min-h-[140px] transition-colors hover-fine:bg-white/[0.02]">
            <span className="text-h2 font-bold tracking-tight text-white font-sans">
              <CountUpNumber value="Tools" duration={1.5} />
            </span>
            <span className="mt-3 text-sm-ui font-medium leading-[1.4] text-white/50 max-w-[28ch]">
              commitment fee to initialize your admissions assessment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
