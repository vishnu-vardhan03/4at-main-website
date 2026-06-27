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
<div className="bg-red-500 md:bg-blue-500 lg:bg-green-500 p-8 text-white text-center">
  BREAKPOINT TEST
</div>
  return (
    <section id="howitworks" className="section" style={{ background: "#060916" }}>
      <AmbientBackground variant="violet" intensity={0.5} />

      <div className="section-inner">
        <div className="text-center mb-10">
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
        {/* Mobile Layout */}
        <div className="flex flex-col gap-10 md:hidden">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
      <div className="w-[76px] h-[76px] mx-auto mb-4 rounded-full flex items-center justify-center text-2xl"
        style={{
          background:
            "linear-gradient(160deg,rgba(16,12,34,.98),rgba(8,11,26,.98))",
          border: `2px solid ${step.color}`,
        }}
      >
        {step.icon}
      </div>

      <h3
        className="text-[22px] font-bold mb-3"
        style={{ color: step.color }}
      >
        {step.title}
      </h3>

      <p className="text-white/55 leading-relaxed max-w-[320px] mx-auto">
        {step.desc}
      </p>
    </div>
  ))}
</div>

        {/* desktop layout */}
        <div className="relative hidden md:block">
          {/* Timeline */}
<div className="relative mb-12">

  {/* Center Line */}
  <div
    className="hidden lg:block absolute top-[38px] left-[12.5%] right-[12.5%] h-[2px]"
    style={{
      background:
        "linear-gradient(90deg,#a78bfa,#c084fc,#7dd3fc,#2dd4bf)",
      opacity: 0.7,
    }}
  />

  {/* Timeline Nodes */}
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
    {steps.map((step) => (
      <div
        key={step.id}
        className="flex justify-center"
        onMouseEnter={() => setActive(step.id)}
        onMouseLeave={() => setActive(null)}
      >
        <div
          className="w-[76px] h-[76px] rounded-full flex items-center justify-center text-2xl transition-all duration-300"
          style={{
            background:
              "linear-gradient(160deg,rgba(16,12,34,.98),rgba(8,11,26,.98))",
            border: `2px solid ${
              active === step.id
                ? step.color
                : "rgba(167,139,250,.35)"
            }`,
            boxShadow:
              active === step.id
                ? `0 0 30px ${step.glow}`
                : "none",
            transform:
              active === step.id
                ? "scale(1.08)"
                : "scale(1)",
          }}
        >
          {step.icon}
        </div>
      </div>
    ))}
  </div>
</div>

{/* Content */}
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
  {steps.map((step) => (
    <div
      key={step.id}
      className="text-center"
      onMouseEnter={() => setActive(step.id)}
      onMouseLeave={() => setActive(null)}
    >
      <h3
        className="text-[19px] font-bold mb-4"
        style={{
          color:
            active === step.id
              ? step.color
              : "#fff",
        }}
      >
        {step.title}
      </h3>

      <p
        className="mx-auto text-white/55 leading-relaxed"
        style={{
          maxWidth: "280px",
        }}
      >
        {step.desc}
      </p>

      {active === step.id && (
        <div
          className="mt-5 p-4 rounded-xl text-xs text-left"
          style={{
            background: "rgba(16,12,34,.9)",
            border: `1px solid ${step.color}40`,
            color: "rgba(255,255,255,.65)",
          }}
        >
          <span
            style={{
              color: step.color,
              fontWeight: 700,
            }}
          >
            Tech layer:
          </span>{" "}
          {step.detail}
        </div>
      )}
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}