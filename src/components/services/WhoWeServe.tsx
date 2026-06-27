import { motion } from "framer-motion";
import { Building2, Handshake, TrendingUp, Rocket } from "lucide-react";

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
  return (
    <section className="relative bg-transparent py-24 lg:py-32 overflow-hidden border-t border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-7">
            <div className="text-sm md:text-base uppercase tracking-[0.25em] font-semibold text-sky-400 mb-6">
              Who we serve
            </div>
            <h2 className="text-display text-[clamp(2.5rem,5.2vw,4.5rem)] text-white font-black leading-[0.95]">
              Built for the four kinds of teams
              <span className="block mt-2 text-[clamp(1.4rem,3vw,2.6rem)] tracking-tight bg-gradient-to-r from-sky-400 via-purple-500 to-sky-400 bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(99,102,241,0.25)] animate-gradient-x">
                who can't afford to get this wrong.
              </span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 self-end text-lg text-white/60 leading-relaxed">
            The teams who switch to 4AT Hybrid all share one thing: they're done choosing between expensive firms and risky AI.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-0">
          {segments.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 lg:p-8 transition-all duration-500 ease-out hover:bg-white/[0.08] hover:backdrop-blur-xl hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] flex flex-col justify-between"
            >
              {/* Subtle top indicator line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-sky-500/50 opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div>
                <div className="flex items-center gap-3.5 mb-6 min-h-[4.75rem] lg:min-h-[5.25rem]">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 border border-sky-500/20 select-none">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base lg:text-lg font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors duration-300 leading-snug">
                    {s.title}
                  </h3>
                </div>
                
                <div className="border-l-2 border-sky-500/30 pl-4 py-1">
                  <p className="text-sm lg:text-base text-zinc-300 font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
