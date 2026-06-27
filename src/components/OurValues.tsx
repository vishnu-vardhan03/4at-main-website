import { motion } from "framer-motion";
import { Shield, Target, Lightbulb, Users, Award } from "lucide-react";

const VALUES = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We operate with transparency and accountability.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Target,
    title: "Ownership",
    desc: "We take responsibility and deliver outcomes.",
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We embrace change and continuously improve.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We work as one team with our clients.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We strive for the highest standards in everything we do.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
];

export function OurValues() {
  return (
    <section className="bg-[#fcfcfc] text-black py-24 px-6 md:px-12 lg:px-20 w-full overflow-hidden border-t border-zinc-200">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400 block mb-3">
            Core Principles
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black leading-[0.95]">
            Our Values
          </h2>
          <p className="text-zinc-500 text-sm md:text-base mt-4 font-medium">
            Our values define how we think, act, and deliver value to our partners.
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`bg-white border ${val.border} rounded-2xl p-8 flex flex-col justify-between min-h-[260px] shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300`}
              >
                <div className={`size-12 rounded-xl ${val.bg} flex items-center justify-center ${val.color} mb-6`}>
                  <Icon className="size-6 stroke-[2.5px]" />
                </div>
                
                <div>
                  <h4 className="text-lg font-black uppercase tracking-tight text-black mb-2">
                    {val.title}
                  </h4>
                  <p className="text-zinc-505 text-xs md:text-sm leading-relaxed font-semibold">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
