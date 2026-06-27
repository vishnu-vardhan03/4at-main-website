"use client";

import Image from "next/image";
import TiltCard from "@/components/ui/TiltCard";
import AmbientBackground from "@/components/ai-home/3d/AmbientBackground";

const capabilities = [
  {
    icon: "🔄", title: "Reconciliation Engine",
    desc: "Automate transaction matching, variance review, and journal preparation across multi-entity workflows",
    stat: "99.7%", statLabel: "Match accuracy", wide: true, color: "t",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    imgAlt: "Real-time ledger reconciliation dashboard showing matched transactions",
  },
  {
    icon: "🔍", title: "Anomaly  Detection",
    desc: "Python/FastAPI behavioural AI trained on financial patterns. Surfaces duplicate payments, policy violations, and anomalous transactions in real-time.",
    stat: "<200ms", statLabel: "Detection latency", color: "v",
  },
  {
    icon: "📄", title: "Document AI",
    desc: "Extract, classify, and route invoices, contracts, and receipts. Zero manual indexing. Feeds directly into AP/AR workflows.",
    color: "b",
  },
  {
    icon: "📊", title: "Forecasting Models",
    desc: "Turn operational finance data into forward-looking visibility across cash flow, spend, and variance.",
    stat: "±2.1%", statLabel: "Forecast variance", color: "v", chart: true,
  },
  {
    icon: "✅", title: "Audit Copilot",
    desc: "Automated evidence package assembly. Maps every transaction to controls. Reduces audit prep from weeks to hours.",
    color: "t",
  },
  {
    icon: "⚡", title: "ERP Integration",
    desc: "Connect ERP and adjacent systems so AI runs inside live workflows, not in isolated exports.",
    color: "b",
  },
];

const glowMap: Record<string, string> = {
  v: "rgba(167,139,250,0.18)",
  t: "rgba(45,212,191,0.14)",
  b: "rgba(125,211,252,0.14)",
};
const iconBgMap: Record<string, string> = {
  v: "rgba(167,139,250,.15)",
  t: "rgba(45,212,191,.12)",
  b: "rgba(125,211,252,.12)",
};

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section" style={{ background: "#04060f" }}>
      <AmbientBackground variant="violet" intensity={0.7} />

      <div className="section-inner">
        <div className="text-center mb-14">
          <div className="eyebrow mb-6 justify-center"><span className="dot" />Core Capabilities</div>
          <h2 className="font-bold tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
            Finance AI <span className="grad-v">Built Different</span>
          </h2>
          <p className="text-white/55 mx-auto" style={{ maxWidth: 580, fontSize: "1.05rem" }}>
            Most AI tools are built horizontally and then adapted for finance. 4AT starts with accounting logic, controls, review workflows, and implementation realities from the beginning.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="bento-grid"
        >
          {capabilities.map((cap, idx) => (
            <TiltCard
              key={cap.title}
              glowColor={glowMap[cap.color]}
              className={`glass-card rounded-[18px] p-7 flex flex-col transition-colors duration-300
                hover:border-white/14 ${cap.wide ? "col-span-2" : ""}`}
              // style={{ ["--glow-opacity" as string]: 0 } as React.CSSProperties}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 flex-shrink-0"
                style={{ background: iconBgMap[cap.color] }}
              >
                {cap.icon}
              </div>

              <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
              <p className="text-sm text-white/52 leading-relaxed flex-1">{cap.desc}</p>

              {/* Stat */}
              {cap.stat && (
                <div className="mt-4">
                  <div className="text-3xl font-bold"
                    style={{ color: cap.color === "t" ? "#5eead4" : "#c4b5fd" }}>
                    {cap.stat}
                  </div>
                  <div className="text-xs text-white/35 uppercase tracking-widest mt-1">
                    {cap.statLabel}
                  </div>
                </div>
              )}

              {/* Image for wide card */}
              {cap.img && (
                <div className="relative mt-5 rounded-xl overflow-hidden" style={{ height: 140 }}>
                  <Image
                    src={cap.img}
                    alt={cap.imgAlt || cap.title}
                    fill
                    className="object-cover opacity-60"
                    sizes="600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04060f]/80 to-transparent" />
                </div>
              )}

              {/* Mini sparkline for chart card */}
              {cap.chart && (
                <svg className="mt-5 w-full" height="50" viewBox="0 0 200 50" preserveAspectRatio="none">
                  <polyline
                    points="0,40 25,30 50,35 75,15 100,22 125,10 150,18 175,8 200,12"
                    fill="none"
                    stroke="rgba(167,139,250,.7)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(167,139,250,.25)" />
                      <stop offset="100%" stopColor="rgba(167,139,250,0)" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="0,40 25,30 50,35 75,15 100,22 125,10 150,18 175,8 200,12 200,50 0,50"
                    fill="url(#spark-fill)"
                  />
                </svg>
              )}
            </TiltCard>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .bento-grid { grid-template-columns: 1fr 1fr !important; }
          .col-span-2 { grid-column: span 1 !important; }
        }
        @media (max-width: 560px) {
          .bento-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
