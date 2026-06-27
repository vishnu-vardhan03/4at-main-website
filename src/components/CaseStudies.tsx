import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, stagger, fadeUp } from "./Reveal";

const cases = [
  { tag: "FinTech", title: "Real-time fraud detection at scale", metric: "−72% false positives", grad: "from-blue-500/20 to-purple-500/20" },
  { tag: "Retail", title: "AI demand forecasting engine", metric: "+38% margin lift", grad: "from-amber-500/20 to-rose-500/20" },
  { tag: "Healthcare", title: "Clinical copilot for triage", metric: "4× faster intake", grad: "from-emerald-500/20 to-cyan-500/20" },
  { tag: "Logistics", title: "Autonomous routing platform", metric: "−21% fuel cost", grad: "from-zinc-400/20 to-zinc-700/20" },
];

export function CaseStudies() {
  return (
    <section id="work" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex items-end justify-between mb-16 gap-8 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Selected Work</p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">Outcomes, not slideware.</h2>
          </div>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">View all <ArrowUpRight className="size-4" /></a>
        </Reveal>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <motion.a
              href="#"
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group glass rounded-3xl overflow-hidden block"
            >
              <div className={`aspect-[16/10] bg-gradient-to-br ${c.grad} relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-grid opacity-40"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-black/40 backdrop-blur border border-white/10">{c.tag}</div>
                <div className="absolute bottom-4 right-4 size-12 rounded-full bg-white text-black grid place-items-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="size-5" />
                </div>
              </div>
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold tracking-tight">{c.title}</h3>
                <span className="text-sm text-muted-foreground">{c.metric}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
