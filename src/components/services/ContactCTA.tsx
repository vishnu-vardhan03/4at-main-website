import { motion } from "framer-motion";

export function ContactCTA() {
  return (
    <section id="contact" className="relative bg-[#01030e] text-ink-foreground overflow-hidden py-24 md:py-32 flex items-center justify-center">
      {/* Animated gradient field */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_60%_at_20%_30%,color-mix(in_oklab,var(--brand)_30%,transparent),transparent_60%),radial-gradient(60%_60%_at_80%_70%,color-mix(in_oklab,var(--brand-glow)_25%,transparent),transparent_60%)]"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-12 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 mb-6">
            Let's build
          </div>
          <h2 className="text-display text-[clamp(2.5rem,5.2vw,4.5rem)] text-white font-black leading-[0.95]">
            Ready to build value
            <span className="block mt-2 py-2 px-1 text-[clamp(1.4rem,3vw,2.6rem)] tracking-tight bg-gradient-to-r from-sky-400 via-purple-500 to-sky-400 bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(99,102,241,0.25)] animate-gradient-x">
              for your enterprise?
            </span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-white max-w-xl mx-auto">
            A 30-minute conversation with a senior practitioner. No decks, no
            templates, just the right questions.
          </p>
          <div className="mt-12 flex justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-4 text-base font-semibold hover:bg-sky-400 hover:text-black transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-sky-400/20 active:scale-95"
            >
              Let's talk
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
