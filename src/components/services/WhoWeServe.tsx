import { motion } from "framer-motion";
import { Building2, Handshake, TrendingUp, Rocket } from "lucide-react";
import { TiltCard } from "./3d-card";
import { useRef, useState, useEffect } from "react";

const segments = [
  {
    icon: Building2,
    title: "CFOs and Controllers",
    desc: "At fast-growing companies stuck between Big 4 quotes they can't justify and AI tools they can't sign off on."
  },
  {
    icon: Handshake,
    title: "Accounting firm owners",
    desc: "Offering hybrid services to their own clients, or outsourcing tax-season overflow without losing margin or relationships."
  },
  {
    icon: TrendingUp,
    title: "PE-backed portfolio companies",
    desc: "Needing audit-ready books across multiple entities, controls that survive diligence, and reporting that satisfies the GP."
  },
  {
    icon: Rocket,
    title: "Pre-IPO finance teams",
    desc: "12-24 months from S-1, with everything (books, controls, S-1 narrative, first earnings) still to build."
  }
];

export function WhoWeServe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = Math.min(Math.max(scrolled / scrollable, 0), 1);
      const count = Math.ceil(progress * segments.length);
      setVisibleCount(count);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ height: `${(segments.length + 1) * 100}vh` }} className="relative">
      <section className="sticky top-0 h-screen flex flex-col justify-start pt-28 lg:pt-36 bg-transparent overflow-hidden border-t border-b border-white/5">
        {/* Background radial glow */}
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 w-full">
          {/* Header Block */}
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 mb-6">
                Who we serve
              </div>
              <h2 className="text-display text-[clamp(2.5rem,5.2vw,4.5rem)] text-white font-black leading-[0.95]">
                Built for the four kinds of teams
                <span className="block mt-2 py-2 px-1 text-[clamp(1.4rem,3vw,2.6rem)] tracking-tight bg-gradient-to-r from-sky-400 via-purple-500 to-sky-400 bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(99,102,241,0.25)] animate-gradient-x">
                  who can't afford to get this wrong
                </span>
              </h2>
            </div>
            <p className="md:col-span-4 md:col-start-9 self-end text-lg text-white leading-relaxed">
              The teams who switch to 4AT Hybrid all share one thing: they're done choosing between expensive firms and risky AI.
            </p>
          </div>

          {/* 4 Cards Grid - Fading and entering on scroll */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {segments.map((s, index) => {
              const isVisible = index < visibleCount;
              return (
                <div
                  key={s.title}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.96)",
                    transition: "opacity 0.55s ease, transform 0.55s ease",
                    transitionDelay: isVisible ? `${index * 60}ms` : "0ms",
                  }}
                  className="h-full"
                >
                  <div className="h-full">
                    <motion.div
                      className="group relative flex flex-col items-center justify-start h-full rounded-2xl overflow-hidden border border-white/15 bg-[#0b1020]/85 p-6 pt-8 pb-6 text-center transition-all duration-500 ease-out"
                      style={{ boxShadow: "inset 0 1px 0 rgba(34, 211, 238, 0.13)" }}
                    >
                      {/* Glow Accent Blob */}
                      <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full blur-3xl bg-sky-500/10 pointer-events-none" />

                      {/* Subtle top indicator line */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-sky-500/50 opacity-50 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Enhanced Graphical Icon Container */}
                      <div className="relative mb-6 flex items-center justify-center w-16 h-16 select-none">
                        {/* Orbiting dashed ring */}
                        <div className="absolute inset-0 rounded-full border border-dashed border-sky-500/20 animate-spin-slow group-hover:border-sky-500/50 transition-colors duration-500" />
                        
                        {/* Colored glow background */}
                        <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-sky-400/20 to-purple-500/20 opacity-40 blur-sm group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" />
                        
                        {/* Core Icon Box */}
                        <div className="relative h-12 w-12 rounded-xl bg-[#0b1020] border border-white/10 flex items-center justify-center text-white group-hover:border-sky-500/50 group-hover:text-sky-400 transition-all duration-500">
                          <s.icon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-base lg:text-lg font-bold tracking-tight text-white group-hover:text-sky-400 transition-all duration-500 leading-snug">
                        {s.title}
                      </h3>
                      
                      {/* Description Block */}
                      <div className="mt-4 border-t border-white/5 pt-4 w-full">
                        <p className="text-sm text-zinc-300 font-light leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
