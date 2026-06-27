import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { GlowLine } from "./GlowLine";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString() + suffix);
  useEffect(() => {
    if (inView) animate(count, to, { duration: 2, ease: "easeOut" });
  }, [inView, to, count]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 240, suffix: "+", label: "Projects Delivered" },
  { value: 45, suffix: "+", label: "AI Models Deployed" },
];

export function Stats() {
  return (
    <section className="relative py-32 px-6">
      <GlowLine className="absolute top-0 left-0" />
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="text-left"
          >
            <div className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
              <CountUp to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-sm text-muted-foreground uppercase tracking-widest">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
