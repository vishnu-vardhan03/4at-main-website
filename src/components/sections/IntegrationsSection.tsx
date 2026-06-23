"use client";

import Image from "next/image";
import AmbientBackground from "@/components/3d/AmbientBackground";

const integrations = [
  { name: "SAP",        type: "ERP",         emoji: "📊", img: null },
  { name: "Oracle",     type: "ERP",         emoji: "🔷", img: null },
  { name: "NetSuite",   type: "ERP",         emoji: "📱", img: null },
  { name: "Salesforce", type: "CRM",         emoji: "☁️", img: null },
  { name: "Stripe",     type: "Payments",    emoji: "💳", img: null },
  { name: "Razorpay",   type: "Payments",    emoji: "💰", img: null },
  { name: "QuickBooks", type: "Accounting",  emoji: "📒", img: null },
  { name: "Zoho Books", type: "Accounting",  emoji: "📋", img: null },
  { name: "HubSpot",    type: "CRM",         emoji: "🧲", img: null },
  { name: "Slack",      type: "Comms",       emoji: "💬", img: null },
  { name: "Workday",    type: "HR/Finance",  emoji: "🏢", img: null },
  { name: "Plaid",      type: "Open Banking",emoji: "🏦", img: null },
  { name: "Xero",       type: "Accounting",  emoji: "✕",  img: null },
  { name: "Rippling",   type: "Payroll",     emoji: "🔁", img: null },
  { name: "MySQL",      type: "Database",    emoji: "🗄️", img: null },
  { name: "AWS S3",     type: "Storage",     emoji: "🪣", img: null },
];

const row1 = integrations.slice(0, 8);
const row2 = integrations.slice(8);

function IntCard({ i }: { i: typeof integrations[0] }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-3 px-5 py-3.5 rounded-xl
        border transition-colors duration-300 hover:border-violet-500/30 cursor-default"
      style={{
        border: "1px solid rgba(255,255,255,.08)",
        background: "linear-gradient(160deg,rgba(16,12,34,.85),rgba(8,11,26,.85))",
        minWidth: 170,
      }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
        style={{ background: "rgba(255,255,255,.07)" }}
      >
        {i.emoji}
      </div>
      <div>
        <div className="text-sm font-bold">{i.name}</div>
        <div className="text-[11px] uppercase tracking-wider"
          style={{ color: "rgba(255,255,255,.38)" }}>{i.type}</div>
      </div>
    </div>
  );
}

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="section" style={{ background: "#04060f" }}>
      <AmbientBackground variant="teal" intensity={0.5} />

      <div className="section-inner">
        <div className="text-center mb-14">
          <div className="eyebrow mb-6 justify-center"><span className="dot" />Integrations</div>
          <h2 className="font-bold tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
            Unified Across <span className="grad-v">All Your Systems</span>
          </h2>
          <p className="text-white/55 mx-auto" style={{ maxWidth: 600 }}>
            4AT AI connects with ERP, banking, payroll, billing, and custom platforms so automation happens inside real finance operations — not in disconnected exports. 
          </p>
        </div>

        {/* Architecture reference image */}
        <div className="relative mx-auto mb-10 rounded-xl overflow-hidden"
          style={{ maxWidth: 860, height: 200 }}>
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
            alt="System integration architecture showing ERP, banking API, and payment gateway connections"
            fill
            className="object-cover opacity-35"
            sizes="860px"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm text-white/40 mb-2 uppercase tracking-widest">Architecture</div>
              <div className="text-lg font-bold text-white/70">
                {/* NestJS API Layer → FastAPI AI Layer → PostgreSQL → ElastiCache (Redis) → CloudFront CDN */}
              </div>
            </div>
          </div>
        </div>

        {/* Marquee rows */}
        <div className="relative overflow-hidden" style={{ marginBottom: 16 }}>
          {/* Fade edges */}
          <div className="absolute top-0 bottom-0 left-0 w-28 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #04060f, transparent)" }} />
          <div className="absolute top-0 bottom-0 right-0 w-28 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #04060f, transparent)" }} />

          <div className="flex gap-4 mb-4" style={{ animation: "marquee 25s linear infinite" }}>
            {[...row1, ...row1].map((i, idx) => <IntCard key={`r1-${idx}`} i={i} />)}
          </div>
          <div className="flex gap-4" style={{ animation: "marquee 30s linear infinite reverse" }}>
            {[...row2, ...row2].map((i, idx) => <IntCard key={`r2-${idx}`} i={i} />)}
          </div>
        </div>

        {/* CTA box */}
        <div
          className="mt-14 p-12 rounded-2xl text-center"
          style={{
            border: "1.5px dashed rgba(167,139,250,.2)",
            background: "radial-gradient(ellipse at 50% 100%, rgba(167,139,250,.05), transparent 60%)",
          }}
        >
          <h3 className="text-3xl font-bold mb-3">Don&apos;t see your integration?</h3>
          <p className="text-white/52 text-[15px] mx-auto mb-7" style={{ maxWidth: 480 }}>
            Our NestJS integration team can connect virtually any system — internal databases, custom APIs, legacy platforms, and industry-specific ERPs.
          </p>
          <a
            href="#cta-final"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold
              text-white transition-all duration-250 hover:-translate-y-0.5
              hover:shadow-[0_12px_30px_rgba(167,139,250,.4)]"
            style={{ background: "linear-gradient(90deg,#a78bfa,#c084fc)" }}
          >
            Request a custom connection →
          </a>
        </div>
      </div>
    </section>
  );
}
