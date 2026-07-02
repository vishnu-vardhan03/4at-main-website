import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { useEffect, useState } from "react";

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

const HYBRID_SERVICES = ["Accounting.", "Audit.", "Advisory.", "Assurance.", "TAX.", "FP&A.", "Transformation."];

export function Hero() {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveService((current) => (current + 1) % HYBRID_SERVICES.length);
    }, 1800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero-ecosystem relative min-h-screen overflow-hidden bg-[#04060f] px-6 pb-20 pt-32 text-white md:px-12 lg:px-20" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="hero-ecosystem-grid" aria-hidden="true" />
      <div className="hero-ecosystem-glow hero-ecosystem-glow-left" aria-hidden="true" />
      <div className="hero-ecosystem-glow hero-ecosystem-glow-right" aria-hidden="true" />
      <div className="hero-ecosystem-orbit" aria-hidden="true">
        <span className="hero-ecosystem-orbit-core" />
        <span className="hero-ecosystem-orbit-ring hero-ecosystem-orbit-ring-one" />
        <span className="hero-ecosystem-orbit-ring hero-ecosystem-orbit-ring-two" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-13rem)] w-full max-w-[1200px] flex-col justify-center">
        <motion.span
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-[#04060f]/50 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/75 backdrop-blur"
        >
          <span
            aria-label="4AT Logo"
            role="img"
            className="brand-logo-gradient shrink-0"
            style={{ WebkitMaskImage: `url(${logo.src})`, maskImage: `url(${logo.src})` }}
          />
          <span>Introducing Hybrid Services Eco-System</span>
        </motion.span>

        <motion.h1
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl font-bold leading-[0.98] tracking-[-0.045em]"
        >
          <span className="block max-w-4xl text-[clamp(2rem,3.4vw,4rem)] leading-[1.12]">
            Adopting the new age technology innovation to the proven professional services…
          </span>
          <span className="relative mt-5 block min-h-[1.3em] max-w-5xl pb-3 text-[clamp(2.4rem,5vw,5.6rem)] leading-[1.12]">
            <AnimatePresence mode="wait">
              <motion.span
                key={HYBRID_SERVICES[activeService]}
                initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -35, filter: "blur(8px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-brand-gradient-flow block"
              >
                {HYBRID_SERVICES[activeService]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-start gap-8"
        >
          <p className="max-w-2xl text-base leading-relaxed text-white/75 md:text-xl">
            4AT combines AI-powered workflows with human expertise to deliver accounting, advisory, and finance support with greater speed, control, and confidence.
          </p>

          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href="/services"
              className="group inline-flex items-center overflow-hidden rounded-md border border-white/20 bg-white text-sm font-bold text-[#04060f] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(125,211,252,0.25)]"
            >
              <span className="px-6 py-4">Explore Hybrid Services</span>
              <span className="flex self-stretch items-center border-l border-black/10 px-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="size-4" />
              </span>
            </a>
            <a
              href="#process"
              className="inline-flex items-center rounded-md border border-white/25 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              See How It Works
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
