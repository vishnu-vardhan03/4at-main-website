"use client";

import { useState } from "react";
import AmbientBackground from "@/components/3d/AmbientBackground";

const steps = [
  {
    id: 1,
    icon: "🗄️",
    title: "Connect",
    desc: "Securely connect ERP, CRM, Open Banking APIs, payroll, and billing platforms via the NestJS API layer. One-click certified connectors — no custom code.",
    detail: "Auth Service + Finance Service handle JWT-secured data ingestion from SAP, Oracle, NetSuite, Razorpay, Stripe, and Open Banking.",
    color: "#a78bfa",
    glow: "rgba(167,139,250,.35)",
  },
  {
    id: 2,
    icon: "🧠",
    title: "Understand",
    desc: "The Python/FastAPI AI Service Layer analyzes transactions, builds a financial knowledge graph, and learns your unique accounting logic from historical patterns.",
    detail: "FastAPI AI Service: Fraud Detection, AI Chatbot, Audit Insights, Financial Analysis, Report Generation — all running on PostgreSQL-backed data.",
    color: "#c084fc",
    glow: "rgba(192,132,252,.3)",
  },
  {
    id: 3,
    icon: "⚡",
    title: "Automate",
    desc: "Reconciliations, journal entries, anomaly alerts, and compliance reports run autonomously on your schedule. Results sync back to ERP in under 10 seconds.",
    detail: "Finance Service orchestrates via NestJS. AI Results stored in PostgreSQL. Google Analytics + Mixpanel track daily active usage and ROI metrics.",
    color: "#7dd3fc",
    glow: "rgba(125,211,252,.28)",
  },
  {
    id: 4,
    icon: "🛡️",
    title: "Govern",
    desc: "Human-in-the-loop approval workflows. Every AI action is reviewable with a full explainability trace. Complete audit trail for regulators.",
    detail: "User Dashboard shows all AI actions. Role-Based Access Control (JWT). Notification Service alerts your team. Everything logged to immutable audit tables.",
    color: "#2dd4bf",
    glow: "rgba(45,212,191,.3)",
  },
];

export default function HowItWorksSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="howitworks" className="section" style={{ background: "#060916" }}>
      <AmbientBackground variant="violet" intensity={0.5} />

      <div className="section-inner">
        <div className="text-center mb-16">
          <div className="eyebrow mb-6 justify-center"><span className="dot" />Process</div>
          <h2 className="font-bold tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
            Transforming Finance Workflows{" "}
            <span className="grad-v">Step by Step</span>
          </h2>
          <p className="text-white/55 mx-auto" style={{ maxWidth: 580 }}>
            Connect → Understand → Automate → Govern. Hover each step to see the tech layer behind it.
          </p>
        </div>

        {/* Flow layout */}
        <div className="relative">
          {/* SVG connecting lines */}
          <svg
            className="absolute top-9 left-0 right-0 w-full pointer-events-none"
            height="4"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#a78bfa" />
                <stop offset="33%"  stopColor="#c084fc" />
                <stop offset="66%"  stopColor="#7dd3fc" />
                <stop offset="100%" stopColor="#2dd4bf" />
              </linearGradient>
            </defs>
            <line
              x1="12.5%" y1="2" x2="87.5%" y2="2"
              stroke="url(#line-grad)"
              strokeWidth="1.5"
              strokeDasharray="6 3"
              className="flow-line"
            />
          </svg>

          <div
            className="grid gap-5"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative z-10 flex flex-col items-center text-center cursor-pointer
                  group transition-all duration-300"
                onMouseEnter={() => setActive(step.id)}
                onMouseLeave={() => setActive(null)}
              >
                {/* Number circle */}
                <div
                  className="w-[76px] h-[76px] rounded-full flex items-center justify-center
                    text-2xl mb-6 transition-all duration-400"
                  style={{
                    background: "linear-gradient(160deg,rgba(16,12,34,.95),rgba(8,11,26,.95))",
                    border: `2px solid ${active === step.id ? step.color : "rgba(167,139,250,.3)"}`,
                    boxShadow: active === step.id ? `0 0 30px ${step.glow}` : "none",
                    transform: active === step.id ? "scale(1.12)" : "scale(1)",
                  }}
                >
                  {step.icon}
                </div>

                <h3 className="text-[19px] font-bold mb-3"
                  style={{ color: active === step.id ? step.color : "#fff" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-white/52 leading-relaxed">
                  {step.desc}
                </p>

                {/* Tooltip on hover */}
                <div
                  className="mt-4 px-4 py-3 rounded-xl text-xs text-left leading-relaxed transition-all duration-300"
                  style={{
                    background: "rgba(16,12,34,.9)",
                    border: `1px solid ${step.color}40`,
                    color: "rgba(255,255,255,.6)",
                    opacity: active === step.id ? 1 : 0,
                    transform: active === step.id ? "translateY(0)" : "translateY(6px)",
                  }}
                >
                  <span className="font-bold" style={{ color: step.color }}>Tech layer: </span>
                  {step.detail}
                </div>

                {/* Neon pulse glow below icon when active */}
                {active === step.id && (
                  <div
                    className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${step.glow} 0%, transparent 70%)`,
                      animation: "pulseStep .8s ease-in-out infinite alternate",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 760px) {
          [style*="grid-template-columns: repeat(4"] {
            grid-template-columns: 1fr 1fr !important;
            gap: 28px !important;
          }
        }
        @media (max-width: 460px) {
          [style*="grid-template-columns: repeat(4"] {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes pulseStep {
          from { opacity: .5; transform: translateX(-50%) scale(.8); }
          to   { opacity: 1;  transform: translateX(-50%) scale(1.2); }
        }
      `}</style>
    </section>
  );
}
