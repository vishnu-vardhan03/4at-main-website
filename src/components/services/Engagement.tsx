import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Subscribe",
    timeline: "Day 0",
    desc: "Pick the service(s) you need. Pay your first month. That's the entire procurement cycle. No SOW. No legal review. No 6-week sales cycle."
  },
  {
    n: "02",
    title: "Onboard",
    timeline: "Days 1–7",
    desc: "Connector ingests your ERP, ledgers, and policies. Your dedicated pod of AI agents plus senior practitioners is live within 7 days. You don't change tools. We meet you inside the systems you already use."
  },
  {
    n: "03",
    title: "We run it",
    timeline: "Day 8 onward",
    desc: "Iris reconciles. Guardian monitors controls. Atlas builds your reports. Senior practitioners review everything before it reaches you. You see it all in one dashboard. One bill. One team."
  },
  {
    n: "04",
    title: "You scale",
    timeline: "Month 3 and beyond",
    desc: "Add controls. Add tax. Add audit readiness. Add a vCFO. Every new service line plugs into the same subscription. This is where most clients start with one service and end the year running their entire finance function on 4AT."
  }
];

export function Engagement() {
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
      const count = Math.ceil(progress * steps.length);
      setVisibleCount(count);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ height: "240vh" }} className="relative">
      <section id="engagement" className="sticky top-0 h-screen flex flex-col justify-start pt-28 lg:pt-36 bg-transparent overflow-hidden border-t border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 mb-6">
                How an engagement works
              </div>
              <h2 className="text-display text-[clamp(2.5rem,5.2vw,4.5rem)] text-white font-black leading-[0.95]">
                Four steps
                <span className="block mt-2 py-2 px-1 text-[clamp(1.4rem,3vw,2.6rem)] tracking-tight bg-gradient-to-r from-sky-400 via-purple-500 to-sky-400 bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(99,102,241,0.25)] animate-gradient-x">
                  No procurement cycle
                </span>
              </h2>
            </div>
            <p className="md:col-span-4 md:col-start-9 self-end text-lg text-white leading-relaxed">
              Every service above runs on the same engagement model, whether you're subscribing to bookkeeping or hiring a Virtual CFO.
            </p>
          </div>

          <div className="relative mt-12">
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className={`hidden lg:block pointer-events-none absolute left-[44px] right-[calc(25%-44px)] top-[44px] h-[2px] z-0 transition-opacity duration-500 ${visibleCount > 0 ? 'opacity-100' : 'opacity-0'}`}>
                <div 
                  className="absolute left-0 top-0 bottom-0 bg-sky-400 transition-all duration-500 ease-out" 
                  style={{ width: `${visibleCount <= 1 ? 0 : ((visibleCount - 1) / (steps.length - 1)) * 100}%` }}
                />
              </div>

              {steps.map((s, index) => {
                const isVisible = index < visibleCount;
                return (
                  <div
                    key={s.title}
                    className={`transition-all duration-700 ease-out ${
                      isVisible 
                        ? "opacity-100 translate-y-0 scale-100" 
                        : "opacity-0 translate-y-6 scale-95 pointer-events-none"
                    }`}
                  >
                    <div
                      className={`relative z-10 flex items-center justify-center h-[88px] w-[88px] rounded-full bg-[#01030e] border shadow-[0_4px_20px_rgba(0,0,0,0.4)] text-sm font-mono tracking-widest transition-all duration-500 cursor-default select-none ${
                        isVisible 
                          ? "border-sky-400 text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.15)]" 
                          : "border-white/15 text-zinc-600"
                      }`}
                    >
                      <span>{s.n}</span>
                    </div>
                    
                    <h3 className={`mt-8 text-2xl font-bold tracking-tight transition-colors duration-300 ${isVisible ? 'text-white' : 'text-zinc-600'}`}>
                      {s.title}
                    </h3>
                    <span className={`block text-xs font-bold mt-1.5 uppercase tracking-widest select-none transition-colors duration-300 ${isVisible ? 'text-sky-400/80' : 'text-zinc-700'}`}>
                      {s.timeline}
                    </span>
                    
                    <p className={`mt-4 leading-relaxed text-sm lg:text-base font-normal transition-colors duration-300 ${isVisible ? 'text-zinc-400' : 'text-zinc-700'}`}>
                      {s.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
