import { motion } from "framer-motion";
import { Reveal, stagger, fadeUp } from "./Reveal";

const items = [
  { q: "They turned a 9-month backlog into a 6-week sprint. The model paid for itself in a quarter.", a: "Sara Lin", r: "CTO, Northwind" },
  { q: "4AT doesn't sell AI hype — they ship infrastructure that quietly compounds value.", a: "Marcus Vega", r: "VP Data, Helix" },
  { q: "Easily the most senior team we've worked with. Calm, fast, exact.", a: "Priya Anand", r: "COO, Lumen Labs" },
];

export function Testimonials() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Testimonials</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">Trusted by teams that ship.</h2>
        </Reveal>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.a}
              variants={fadeUp}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-2xl p-8"
            >
              <p className="text-lg leading-relaxed">"{t.q}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold">{t.a}</div>
                <div className="text-sm text-muted-foreground">{t.r}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
