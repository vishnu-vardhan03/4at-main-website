"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featuresList } from "@/lib/site-data";
import { NeonGlowOrb } from "@/components/academy/NeonGlowOrb";

export function HowItWorks({ sectionId = "how-it-works" }: { sectionId?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const lineMobileRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Desktop Horizontal Timeline
    mm.add("(min-width: 768px)", () => {
      const nodes = gsap.utils.toArray<HTMLElement>(".desktop-node");
      if (nodes.length < 4 || !lineRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".desktop-timeline-trigger",
          start: "top 65%",
          end: "bottom 35%",
          scrub: 0.5,
        },
      });

      // Node 1 starts immediately
      const node1Fill = nodes[0].querySelector(".node-fill");
      const node1Num = nodes[0].querySelector(".node-number");
      tl.to(node1Fill, { scale: 1, duration: 0.2, ease: "power1.out" })
        .to(node1Num, { color: "#04060f", duration: 0.1 }, "<");

      // Draw line to Node 2 and activate
      const node2Fill = nodes[1].querySelector(".node-fill");
      const node2Num = nodes[1].querySelector(".node-number");
      tl.to(lineRef.current, { scaleX: 0.333, duration: 1, ease: "none" })
        .to(node2Fill, { scale: 1, duration: 0.3, ease: "back.out(1.7)" })
        .to(node2Num, { color: "#04060f", duration: 0.15 }, "<");

      // Draw line to Node 3 and activate
      const node3Fill = nodes[2].querySelector(".node-fill");
      const node3Num = nodes[2].querySelector(".node-number");
      tl.to(lineRef.current, { scaleX: 0.666, duration: 1, ease: "none" })
        .to(node3Fill, { scale: 1, duration: 0.3, ease: "back.out(1.7)" })
        .to(node3Num, { color: "#04060f", duration: 0.15 }, "<");

      // Draw line to Node 4 and activate
      const node4Fill = nodes[3].querySelector(".node-fill");
      const node4Num = nodes[3].querySelector(".node-number");
      tl.to(lineRef.current, { scaleX: 1.0, duration: 1, ease: "none" })
        .to(node4Fill, { scale: 1, duration: 0.3, ease: "back.out(1.7)" })
        .to(node4Num, { color: "#04060f", duration: 0.15 }, "<");
    });

    // Mobile Vertical Timeline
    mm.add("(max-width: 767px)", () => {
      const nodes = gsap.utils.toArray<HTMLElement>(".mobile-node");
      if (nodes.length < 4 || !lineMobileRef.current) return;

      const firstNode = nodes[0];
      const lastNode = nodes[nodes.length - 1];
      const topY = firstNode.offsetTop + firstNode.offsetHeight / 2;
      const bottomY = lastNode.offsetTop + lastNode.offsetHeight / 2;

      const lineContainer = lineMobileRef.current.parentElement;
      if (lineContainer) {
        lineContainer.style.top = `${topY}px`;
        lineContainer.style.height = `${bottomY - topY}px`;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mobile-timeline-trigger",
          start: "top 65%",
          end: "bottom 35%",
          scrub: 0.5,
        },
      });

      // Node 1 starts immediately
      const node1Fill = nodes[0].querySelector(".node-fill");
      const node1Num = nodes[0].querySelector(".node-number");
      tl.to(node1Fill, { scale: 1, duration: 0.2, ease: "power1.out" })
        .to(node1Num, { color: "#04060f", duration: 0.1 }, "<");

      // Draw line to Node 2 and activate
      const node2Fill = nodes[1].querySelector(".node-fill");
      const node2Num = nodes[1].querySelector(".node-number");
      tl.to(lineMobileRef.current, { scaleY: 0.333, duration: 1, ease: "none" })
        .to(node2Fill, { scale: 1, duration: 0.3, ease: "back.out(1.7)" })
        .to(node2Num, { color: "#04060f", duration: 0.15 }, "<");

      // Draw line to Node 3 and activate
      const node3Fill = nodes[2].querySelector(".node-fill");
      const node3Num = nodes[2].querySelector(".node-number");
      tl.to(lineMobileRef.current, { scaleY: 0.666, duration: 1, ease: "none" })
        .to(node3Fill, { scale: 1, duration: 0.3, ease: "back.out(1.7)" })
        .to(node3Num, { color: "#04060f", duration: 0.15 }, "<");

      // Draw line to Node 4 and activate
      const node4Fill = nodes[3].querySelector(".node-fill");
      const node4Num = nodes[3].querySelector(".node-number");
      tl.to(lineMobileRef.current, { scaleY: 1.0, duration: 1, ease: "none" })
        .to(node4Fill, { scale: 1, duration: 0.3, ease: "back.out(1.7)" })
        .to(node4Num, { color: "#04060f", duration: 0.15 }, "<");
    });

    // Section header reveal
    gsap.fromTo(
      ".hiw-header",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hiw-header",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      mm.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className="w-full bg-transparent text-white section-padding overflow-visible relative"
    >
      <NeonGlowOrb 
        className="left-[75%] top-[30%] -translate-x-1/2 -translate-y-1/2 z-0"
        size={450}
        opacity={0.18}
        blur={50}
      />

      <div className="site-shell">
        {/* Header Row */}
        <div className="hiw-header max-w-[760px] mb-20 lg:mb-28">
          <span className="section-eyebrow">
            SELECTION METRICS
          </span>
          <h2 className="section-title">
            Every learner is evaluated before being presented as job-ready
          </h2>
          <p className="section-desc mt-6">
            We do not treat course completion as the same thing as readiness. Each learner moves through a structured evaluation process before placement support begins.
          </p>
        </div>

        {/* Desktop Horizontal View */}
        <div className="hidden md:block desktop-timeline-trigger relative pb-10">
          {/* Horizontal connecting line */}
          <div className="absolute top-6 left-6 right-6 h-[2px] pointer-events-none z-0">
            {/* Background line track */}
            <div className="absolute inset-0 bg-white/10" />
            {/* Active connecting line */}
            <div
              ref={lineRef}
              className="absolute inset-y-0 left-0 bg-accent origin-left scale-x-0 w-full"
            />
          </div>

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {featuresList.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-6"
              >
                {/* Node bubble */}
                <div
                  className="desktop-node w-12 h-12 rounded-full border-2 border-accent bg-[#04060f] flex items-center justify-center relative overflow-hidden shrink-0"
                >
                  <div className="node-fill absolute inset-0 bg-accent-gradient scale-0 rounded-full origin-center" />
                  <span className="node-number relative z-10 text-accent font-bold text-sm">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-h3 font-bold tracking-tight text-white mb-3 min-h-[48px] flex items-end font-sans">
                    {step.title}
                  </h3>
                  <p className="text-ink-secondary text-small leading-relaxed max-w-[240px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical View */}
        <div className="md:hidden mobile-timeline-trigger relative pl-8">
          {/* Vertical connecting line */}
          <div className="absolute left-6 w-[2px] pointer-events-none z-0" style={{ top: '24px', height: '0px' }}>
            {/* Background line track */}
            <div className="absolute inset-0 bg-white/10" />
            {/* Active connecting line */}
            <div
              ref={lineMobileRef}
              className="absolute inset-x-0 top-0 bg-accent origin-top scale-y-0 h-full"
            />
          </div>

          <div className="flex flex-col gap-12 relative z-10">
            {featuresList.map((step, idx) => (
              <div
                key={idx}
                className="flex gap-6 items-start"
              >
                {/* Node bubble */}
                <div
                  className="mobile-node w-12 h-12 rounded-full border-2 border-accent bg-[#04060f] flex items-center justify-center relative overflow-hidden shrink-0"
                >
                  <div className="node-fill absolute inset-0 bg-accent-gradient scale-0 rounded-full origin-center" />
                  <span className="node-number relative z-10 text-accent font-bold text-sm">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-h3 font-bold tracking-tight text-white mb-2 font-sans">
                    {step.title}
                  </h3>
                  <p className="text-ink-secondary text-small leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

