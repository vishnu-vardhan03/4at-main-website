"use client";

import TiltCard from "@/components/ui/TiltCard";
import AmbientBackground from "@/components/ai-home/3d/AmbientBackground";

const reasons = [
  {
    icon: "🏗️", color: "v",
    title: "Finance-Native Architecture",
    desc: "Every model trained exclusively on financial datasets. Understands debits, credits, GAAP/IFRS requirements, and period-end logic natively — not bolted on. Powered by Python/FastAPI AI service layer.",
  },
  {
    icon: "🔒", color: "t",
    title: "Compliance by Design",
    desc: "SOC 2 Type II, GDPR, HIPAA-ready. JWT-secured API layer. Every action creates an immutable audit trail. AWS infrastructure with RDS PostgreSQL and ElastiCache Redis.",
  },
  {
    icon: "👁️", color: "b",
    title: "Human-in-the-Loop",
    desc: "AI surfaces decisions; humans approve them. Nothing posts without your explicit sign-off. Full explainability trace for every reconciliation decision via the User Dashboard.",
  },
  {
    icon: "🚀", color: "v",
    title: "Live in 4 Weeks",
    desc: "Pre-built NestJS connectors, workflow templates, and dedicated implementation specialists get you to first production run faster than any other platform.",
  },
];

const bgMap: Record<string, string> = {
  v: "rgba(167,139,250,.14)",
  t: "rgba(45,212,191,.11)",
  b: "rgba(125,211,252,.11)",
};
const glowMap: Record<string, string> = {
  v: "rgba(167,139,250,0.16)",
  t: "rgba(45,212,191,0.13)",
  b: "rgba(125,211,252,0.13)",
};

export default function WhySection() {
  return (
    <section id="why" className="section"
      style={{ background: "linear-gradient(180deg,#04060f 0%,#060916 100%)" }}>
      <AmbientBackground variant="violet" intensity={0.5} />
      <div className="section-inner">
        <div className="text-center mb-14">
          <div className="eyebrow mb-6 justify-center"><span className="dot" />The unfair advantage</div>
          <h2 className="font-bold tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
            The Only AI Built for{" "}
            <span className="grad-v">Finance Teams</span>
          </h2>
          <p className="text-white/55 mx-auto" style={{ maxWidth: 580 }}>
            Most AI tools are built horizontally and then adapted for finance.
             4AT starts with accounting logic, controls, review workflows, and implementation realities from the beginning. 
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <TiltCard
              key={r.title}
              glowColor={glowMap[r.color]}
              className="glass-card rounded-[18px] p-8 transition-colors duration-300
                hover:border-white/14"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: bgMap[r.color] }}
              >
                {r.icon}
              </div>
              <h3 className="text-[19px] font-bold mb-3">{r.title}</h3>
              <p className="text-sm text-white/52 leading-[1.7]">{r.desc}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
