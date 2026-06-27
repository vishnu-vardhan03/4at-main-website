import { motion } from "framer-motion";

export function ContactCTA() {
  return (
    <section id="contact" className="relative bg-transparent text-ink-foreground overflow-hidden">
      {/* Animated gradient field */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_60%_at_20%_30%,color-mix(in_oklab,var(--brand)_30%,transparent),transparent_60%),radial-gradient(60%_60%_at_80%_70%,color-mix(in_oklab,var(--brand-glow)_25%,transparent),transparent_60%)]"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-sm md:text-base uppercase tracking-[0.25em] font-semibold text-sky-400 mb-6">
            Let's build
          </div>
          <h2 className="text-display text-[clamp(2.5rem,5.2vw,4.5rem)] text-white font-black leading-[0.95]">
            Ready to build value
            <span className="block mt-2 text-[clamp(1.4rem,3vw,2.6rem)] tracking-tight bg-gradient-to-r from-sky-400 via-purple-500 to-sky-400 bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(99,102,241,0.25)] animate-gradient-x">
              for your enterprise?
            </span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-white/60 max-w-xl mx-auto">
            A 30-minute conversation with a senior practitioner. No decks, no
            templates, just the right questions.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:Info@consult-4at.com"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-ink px-7 py-4 text-sm font-medium hover:bg-brand hover:text-white transition-colors"
            >
              Info@consult-4at.com
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="tel:+918008685685"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-medium text-white hover:border-white transition-colors"
            >
              +91 80086 85685 (IN)
            </a>
            <a
              href="tel:+16092553118"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-medium text-white hover:border-white transition-colors"
            >
              +1 (609) 255-3118 (USA)
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
