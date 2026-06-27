"use client";

import AmbientBackground from "@/components/ai-home/3d/AmbientBackground";

const offices = [
  {
    region: "USA",
    address: ["116 Village Blvd, Suite 200", "Princeton, New Jersey – 08540"],
    phones: ["+1 609 255 3118"],
    email: "info@consult-4at.com",
  },
  {
    region: "INDIA",
    address: ["3rd Floor, D-Block", "I Labs Center, Madhapur, Hyderabad, TS - 500081"],
    phones: ["+91 90110433456", "+91 9133203456"],
    email: "info@consult-4at.com",
  },
  {
    region: "AUS",
    address: ["KG01-86 Courallie Avenue", "Homebush West, NSW – 2140"],
    phones: [],
    email: "info@consult-4at.com",
  },
  {
    region: "UK",
    address: ["TBA"],
    phones: [],
    email: "info@consult-4at.com",
  },
];

const ctaStats = [
  { val: "99.7%", label: "Match accuracy", color: "#5eead4" },
  { val: "<200ms", label: "Detection", color: "#c4b5fd" },
  { val: "50+", label: "Enterprise clients", color: "#7dd3fc" },
  { val: "24/7", label: "Support", color: "#c084fc" },
];

const socials: { name: string; path: string }[] = [
  {
    name: "LinkedIn",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z",
  },
  {
    name: "Twitter",
    path: "M23.95 4.57a10 10 0 0 1-2.83.78 4.96 4.96 0 0 0 2.17-2.73c-.95.56-2.01.96-3.13 1.18a4.92 4.92 0 0 0-8.38 4.49A13.96 13.96 0 0 1 1.64 3.16a4.82 4.82 0 0 0-.67 2.48c0 1.7.87 3.21 2.19 4.09a4.9 4.9 0 0 1-2.23-.61v.06a4.92 4.92 0 0 0 3.95 4.83 4.96 4.96 0 0 1-2.21.08 4.94 4.94 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.54a13.94 13.94 0 0 0 7.56 2.21c9.05 0 14-7.5 14-13.99 0-.21 0-.42-.02-.63A9.94 9.94 0 0 0 24 4.59z",
  },
  {
    name: "Instagram",
    path: "M12 2.16c3.2 0 3.58.02 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.64.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.66-4.77 4.92-4.92C8.42 2.18 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z",
  },
  {
    name: "Facebook",
    path: "M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.02 24 18.06 24 12.07z",
  },
];

export default function FooterSection() {
  return (
    <>
      {/* ── Final CTA — executive dashboard ── */}
      <section
        id="cta-final"
        className="relative overflow-hidden"
        style={{
          padding: "78px 20px",
          background: "linear-gradient(135deg,#0d0820 0%,#060916 100%)",
        }}
      >
        <AmbientBackground variant="violet" intensity={0.9} />
        <div
          className="relative z-10 mx-auto flex items-center gap-12 flex-wrap"
          style={{ maxWidth: 1100 }}
        >
          {/* Left: message + actions */}
          <div style={{ flex: "1 1 420px", minWidth: 300 }}>
            <div className="eyebrow mb-5">
              <span className="dot" />Get Started
            </div>
            <h2 className="font-black leading-[0.98] tracking-[-0.03em] mb-4"
              style={{ fontSize: "clamp(2.1rem,4vw,3.2rem)" }}>
              Bring AI into{" "}
              <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                Finance Workflows
              </span>{" "}
              that matters most
            </h2>
            <p className="text-white/55 mb-7" style={{ fontSize: "1.02rem", maxWidth: 540 }}>
              See how 4AT helps teams automate high-friction processes, strengthen control, and turn finance operations into a faster, more scalable system.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[15px] font-bold text-white transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(167,139,250,.45)]"
                style={{ background: "linear-gradient(90deg,#a78bfa,#c084fc)" }}
              >
                Start Free Trial →
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[15px] font-bold text-white border border-white/22 bg-white/5 transition-all hover:bg-white/10 hover:border-white/35"
              >
                Book a Demo
              </a>
            </div>
          </div>

          {/* Right: metric tiles */}
          <div
            className="grid grid-cols-2 gap-3"
            style={{ flex: "1 1 300px", minWidth: 280 }}
          >
            {ctaStats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl px-5 py-5"
                style={{
                  border: "1px solid rgba(255,255,255,.08)",
                  background: "linear-gradient(160deg,rgba(16,12,34,.7),rgba(8,11,26,.7))",
                }}
              >
                <div className="text-3xl font-bold leading-none" style={{ color: s.color }}>
                  {s.val}
                </div>
                <div className="text-[11px] uppercase tracking-widest text-white/40 mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{ background: "#020408", borderTop: "1px solid rgba(255,255,255,.06)" }}
      >
        <div
          className="footer-main"
          style={{ width: "min(1200px,92%)", margin: "0 auto", padding: "56px 0 36px" }}
        >
          {/* Left: brand + socials */}
          <div className="footer-brand">
            <div className="footer-wordmark" aria-hidden="true">4AT</div>
            <div className="text-[11px] tracking-[3px] text-white/35 mt-3 mb-4">SOCIAL MEDIA</div>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="w-[38px] h-[38px] rounded-[9px] flex items-center justify-center transition-all duration-200 hover:border-violet-500/40 hover:text-violet-400"
                  style={{ border: "1px solid rgba(255,255,255,.12)", color: "rgba(255,255,255,.5)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="footer-divider" aria-hidden="true" />

          {/* Right: office grid */}
          <div className="footer-offices">
            {offices.map((o) => (
              <div key={o.region}>
                <div className="text-[12px] font-bold tracking-[2px] text-white mb-3">{o.region}</div>
                <div className="text-[13px] leading-[1.6] text-white/55">
                  {o.address.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
                {o.phones.length > 0 && (
                  <div className="text-[13px] leading-[1.55] text-white/80 mt-2.5">
                    {o.phones.map((p) => (
                      <div key={p}>{p}</div>
                    ))}
                  </div>
                )}
                <a
                  href={`mailto:${o.email}`}
                  className="text-[13px] mt-2.5 inline-block transition-colors hover:text-violet-300"
                  style={{ color: "rgba(167,139,250,.82)" }}
                >
                  {o.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", background: "rgba(255,255,255,.012)" }}>
          <div
            className="flex items-center gap-3"
            style={{ width: "min(1200px,92%)", margin: "0 auto", padding: "16px 0" }}
          >
            <div
              className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0"
              style={{ border: "1px solid rgba(255,255,255,.16)", color: "rgba(255,255,255,.62)" }}
            >
              N
            </div>
            <span className="text-[12px]" style={{ color: "rgba(255,255,255,.3)" }}>
              © 2026 4AT AI. All rights reserved.
            </span>
          </div>
        </div>

        <style jsx>{`
          .footer-main {
            display: flex;
            align-items: stretch;
            gap: 40px;
          }
          .footer-brand {
            flex: 1 1 240px;
            min-width: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
          .footer-wordmark {
            font-size: clamp(72px, 9vw, 116px);
            font-weight: 700;
            line-height: 0.9;
            letter-spacing: -2px;
            color: rgba(255,255,255,0.05);
            user-select: none;
          }
          .footer-divider {
            width: 1px;
            background: rgba(255,255,255,0.08);
            flex-shrink: 0;
          }
          .footer-offices {
            flex: 2 1 460px;
            min-width: 280px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 34px 30px;
            align-content: center;
          }
          @media (max-width: 860px) {
            .footer-main { flex-direction: column; gap: 32px; }
            .footer-divider { width: 100%; height: 1px; }
          }
          @media (max-width: 480px) {
            .footer-offices { grid-template-columns: 1fr; gap: 28px; }
          }
        `}</style>
      </footer>
    </>
  );
}
