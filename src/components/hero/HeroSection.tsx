"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const NeuralGlobe = dynamic(() => import("@/components/3d/NeuralGlobe"), { ssr: false });

export default function HeroSection() {
  const barsRef = useRef<NodeListOf<HTMLElement> | null>(null);

  useEffect(() => {
    // Animate metric bars after mount
    const timer = setTimeout(() => {
      barsRef.current = document.querySelectorAll<HTMLElement>(".metric-fill[data-w]");
      barsRef.current.forEach((el) => {
        el.style.width = el.getAttribute("data-w") + "%";
      });
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#04060f]"
    >
      {/* Ambient radial */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 80% at 72% 50%, rgba(167,139,250,.13) 0%, transparent 58%), radial-gradient(ellipse 35% 50% at 90% 85%, rgba(192,132,252,.07) 0%, transparent 60%), radial-gradient(ellipse 30% 40% at 8% 20%, rgba(45,212,191,.05) 0%, transparent 50%)",
        }}
      />

      <div
        className="relative z-10 mx-auto px-5 py-[150px]"
        style={{
          width: "min(1200px, 92%)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "54px",
          alignItems: "center",
        }}
      >
        {/* ── LEFT COPY ── */}
        <div className="min-w-0">
          <div className="eyebrow mb-7">
            <span className="dot" />
            Applied AI for Finance
          </div>

          <h1
            className="font-bold leading-none tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.4rem)", letterSpacing: "-.03em" }}
          >
            <span className="block text-white">AUTOMATE THE</span>
            <span className="block grad-v">INTELLIGENCE</span>
            <span className="block" style={{ color: "rgba(255,255,255,.22)" }}>LAYER.</span>
          </h1>

          <p
            className="mt-6 leading-relaxed"
            style={{
              fontSize: "clamp(1rem,1.4vw,1.18rem)",
              color: "rgba(255,255,255,.62)",
              maxWidth: "460px",
            }}
          >
            4AT builds and deploys{" "}
            <strong className="text-white font-medium">finance-native AI</strong> directly
            into your workflows — reconciliation agents, fraud detection, document extraction,
            and real-time audit dashboards. Connected to your{" "}
            <strong className="text-white font-medium">NestJS + FastAPI</strong> stack, live.
          </p>

          {/* Capability pills */}
          <div className="flex flex-wrap gap-2 mt-7">
            {[
              "Reconciliation Agents","Fraud Detection","Document AI",
              "Forecasting Models","Audit Copilot","ERP Integration",
            ].map((cap) => (
              <span
                key={cap}
                className="text-xs px-3.5 py-1.5 rounded-lg border transition-colors duration-200
                  hover:border-violet-500/40 hover:bg-violet-500/10"
                style={{
                  border: "1px solid rgba(167,139,250,.2)",
                  background: "rgba(167,139,250,.06)",
                  color: "rgba(255,255,255,.75)",
                }}
              >
                {cap}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 flex-wrap mt-8">
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold
                text-white transition-all duration-250 hover:-translate-y-0.5
                hover:shadow-[0_12px_30px_rgba(167,139,250,.4)]"
              style={{ background: "linear-gradient(90deg,#a78bfa,#c084fc)" }}
            >
              Explore AI Solutions →
            </a>
            <a
              href="#glimpse"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold
                text-white border border-white/20 bg-white/5 transition-all duration-250
                hover:bg-white/10 hover:border-white/35"
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/* ── RIGHT: NEURAL GLOBE + CONSOLE ── */}
        <div className="relative" style={{ maxWidth: 480, margin: "0 auto" }}>
          {/* Floating chips */}
          <div
            className="float-chip fc1 absolute z-10 text-xs font-bold px-3 py-2 rounded-full
              backdrop-blur-xl whitespace-nowrap"
            style={{
              top: -14, left: -18,
              background: "rgba(4,6,15,.88)",
              border: "1px solid rgba(255,255,255,.13)",
              animation: "bob 5s ease-in-out infinite",
            }}
          >
            ⚑ <span style={{ color: "#c4b5fd" }}>$18,400</span> recovered
          </div>
          <div
            className="absolute z-10 text-xs font-bold px-3 py-2 rounded-full backdrop-blur-xl whitespace-nowrap"
            style={{
              bottom: 64, right: -22,
              background: "rgba(4,6,15,.88)",
              border: "1px solid rgba(255,255,255,.13)",
              animation: "bob 6s 1.2s ease-in-out infinite",
            }}
          >
            8s <span style={{ color: "#c4b5fd" }}>invoice → ERP</span>
          </div>

          {/* Console card */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(167,139,250,.22)",
              background: "linear-gradient(160deg,rgba(16,12,34,.93),rgba(8,11,26,.93))",
              boxShadow: "0 30px 80px rgba(0,0,0,.5)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,.08)" }}
            >
              <div className="flex items-center gap-2.5 text-[13px] font-bold">
                <span
                  className="w-6 h-6 rounded-lg flex items-center justify-center text-[13px]"
                  style={{ background: "linear-gradient(135deg,#a78bfa,#c084fc)" }}
                >◆</span>
                4AT Finance Copilot
              </div>
              <div
                className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full"
                style={{ color: "#5eead4", background: "rgba(45,212,191,.12)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#2dd4bf", boxShadow: "0 0 8px #2dd4bf",
                    animation: "pulseDot 1.6s ease-in-out infinite" }}
                />
                LIVE
              </div>
            </div>

            {/* Neural Globe Canvas */}
            <div
              className="relative"
              style={{
                height: 220,
                borderBottom: "1px solid rgba(255,255,255,.06)",
                background: "radial-gradient(ellipse at 50% 0, rgba(167,139,250,.1), transparent 70%)",
              }}
            >
              <NeuralGlobe />
              <div
                className="absolute left-5 bottom-3 text-[10px] tracking-[1.5px] uppercase"
                style={{ color: "rgba(255,255,255,.35)" }}
              >
                Neural reconciliation engine
              </div>
            </div>

            {/* Metrics */}
            <div className="px-5 py-5 flex flex-col gap-4">
              {[
                { label: "Transactions matched", val: "99.7%", cls: "fill-t val-t", w: 97 },
                { label: "Anomaly confidence",   val: "High",  cls: "fill-v val-v", w: 88 },
                { label: "Document extraction",  val: "Auto",  cls: "fill-s val-s", w: 100 },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[13px]" style={{ color: "rgba(255,255,255,.8)" }}>
                      {m.label}
                    </span>
                    <span className={`text-[13px] font-bold ${m.cls.split(" ")[1]}`}
                      style={{ color: m.cls.includes("val-t") ? "#5eead4" : m.cls.includes("val-v") ? "#c4b5fd" : "#7dd3fc" }}>
                      {m.val}
                    </span>
                  </div>
                  <div className="metric-track">
                    <div
                      className={`metric-fill ${m.cls.split(" ")[0]}`}
                      data-w={m.w}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Log lines */}
            <div
              className="px-5 py-4 flex flex-col gap-2"
              style={{
                borderTop: "1px solid rgba(255,255,255,.08)",
                background: "rgba(0,0,0,.22)",
              }}
            >
              {[
                { msg: <>Matched <strong className="text-white">14,892</strong> transactions across 6 ledgers</> },
                { msg: <>Fraud signal flagged — vendor payment duplicate <strong className="text-white">$4,200</strong></> },
              ].map((l, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[12px]"
                  style={{ color: "rgba(255,255,255,.6)" }}>
                  <span className="font-bold" style={{ color: "#2dd4bf" }}>✓</span>
                  {l.msg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center
        gap-1.5 text-[11px] tracking-[2px] uppercase z-10"
        style={{ color: "rgba(255,255,255,.28)" }}>
        <div className="w-px h-8" style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,.28), transparent)"
        }} />
        scroll
      </div>
    </section>
  );
}
