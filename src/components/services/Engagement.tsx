import { motion } from "framer-motion";

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
  return (
    <section id="engagement" className="relative bg-transparent py-24 lg:py-32 overflow-hidden border-t border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-7">
            <div className="text-sm md:text-base uppercase tracking-[0.25em] font-semibold text-sky-400 mb-6">
              How an engagement works
            </div>
            <h2 className="text-display text-[clamp(2.5rem,5.2vw,4.5rem)] text-white font-black leading-[0.95]">
              Four steps.
              <span className="block mt-2 text-[clamp(1.4rem,3vw,2.6rem)] tracking-tight bg-gradient-to-r from-sky-400 via-purple-500 to-sky-400 bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(99,102,241,0.25)] animate-gradient-x">
                No SOW. No procurement cycle.
              </span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 self-end text-lg text-white/60 leading-relaxed">
            Every service above runs on the same engagement model, whether you're subscribing to bookkeeping or hiring a Virtual CFO.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Single continuous connecting line */}
            <div className="hidden lg:block pointer-events-none absolute left-[44px] right-[calc(25%-68px)] top-[44px] h-[2px] bg-white/10 overflow-hidden z-0">
              <motion.div
                initial={{ left: "-30%" }}
                animate={{ left: "130%" }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 bottom-0 w-[30%] bg-gradient-to-r from-transparent via-sky-400 to-transparent"
              />
            </div>

            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, margin: "-80px" }}
                variants={{
                  initial: { opacity: 0, y: 28 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.7,
                      delay: i * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }
                }}
                className="group relative"
              >
                <motion.div
                  variants={{
                    initial: { y: 0 },
                    animate: { y: 0 },
                    hover: { y: -6 }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  className="relative z-10 flex items-center justify-center h-[88px] w-[88px] rounded-full bg-[#01030e] border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.4)] text-sky-400 text-sm font-mono tracking-widest transition-colors duration-300 group-hover:border-sky-400 group-hover:bg-[#041d2d] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] cursor-default select-none"
                >
                  <span>{s.n}</span>
                </motion.div>
                
                <h3 className="mt-8 text-2xl font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors duration-300">
                  {s.title}
                </h3>
                <span className="block text-xs font-bold text-sky-400/80 mt-1.5 uppercase tracking-widest select-none">
                  {s.timeline}
                </span>
                
                <p className="mt-4 text-zinc-400 leading-relaxed text-sm lg:text-base font-normal">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
