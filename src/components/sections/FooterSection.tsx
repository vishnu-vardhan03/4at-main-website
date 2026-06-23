"use client";

import AmbientBackground from "@/components/3d/AmbientBackground";

const footerLinks = {
  Product:   ["Features","Integrations","Pricing","Security","Changelog"],
  Company:   ["About","Blog","Careers","Press Kit"],
  Resources: ["Documentation","API Reference","Community","Webinars"],
  Legal:     ["Privacy","Terms","Security","Compliance"],
};

export default function FooterSection() {
  return (
    <>
      {/* ── Final CTA ── */}
      <section
        id="cta-final"
        className="relative overflow-hidden text-center"
        style={{
          padding: "130px 20px",
          background: "linear-gradient(135deg,#0d0820 0%,#060916 100%)",
        }}
      >
        <AmbientBackground variant="violet" intensity={0.9} />
        <div className="relative z-10 mx-auto" style={{ maxWidth: 720 }}>
          <div className="eyebrow mb-7 justify-center">
            <span className="dot" />Get Started
          </div>
       <h1 className="font-black leading-[0.88] tracking-[-0.05em]">
  <span className="block text-[clamp(3rem,5vw,4.5rem)] text-white">
    Bring AI into
  </span>

  <span className="block whitespace-nowrap text-[clamp(3.5rem,15vw,5rem)] bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
    Finance Workflows
  </span>

  <span className="block text-[clamp(3rem,5vw,4.5rem)] text-white">
    that matters most
  </span>
</h1>
          <p className="text-white/55 mx-auto mb-10"
            style={{ fontSize: "1.1rem", maxWidth: 560 }}>
            See how 4AT helps teams automate high-friction processes, strengthen control, and turn finance operations into a faster, more scalable system. 
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[15px]
                font-bold text-white transition-all duration-250 hover:-translate-y-0.5
                hover:shadow-[0_16px_40px_rgba(167,139,250,.45)]"
              style={{ background: "linear-gradient(90deg,#a78bfa,#c084fc)" }}
            >
              Start Free Trial →
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[15px]
                font-bold text-white border border-white/22 bg-white/5 transition-all
                hover:bg-white/10 hover:border-white/35"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{ background: "#020408", borderTop: "1px solid rgba(255,255,255,.06)" }}
        className="px-5 pt-16 pb-10"
      >
        <div style={{ width: "min(1200px,92%)", margin: "0 auto" }}>
          <div
            className="grid gap-10 mb-14"
            style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr" }}
          >
            {/* Brand col */}
            <div>
              <div className="brand-mask mb-5" style={{ width: 44, height: 29 }} />
              <p className="text-sm leading-[1.7] mb-5" style={{ color: "rgba(255,255,255,.42)", maxWidth: 240 }}>
                Finance-native AI for reconciliation, compliance, and reporting. Built on NestJS + FastAPI + AWS.
              </p>
              <div className="flex gap-3">
                {["𝕏", "in", "gh"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-sm
                      transition-all duration-200 hover:border-violet-500/30 hover:text-violet-400"
                    style={{
                      border: "1px solid rgba(255,255,255,.1)",
                      color: "rgba(255,255,255,.48)",
                    }}
                  >{s}</a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-[11px] uppercase tracking-[2px] mb-4"
                  style={{ color: "rgba(255,255,255,.32)" }}>
                  {heading}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm transition-colors duration-200 hover:text-violet-400"
                        style={{ color: "rgba(255,255,255,.48)" }}>
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="flex justify-between items-center flex-wrap gap-4 pt-7 text-[13px]"
            style={{
              borderTop: "1px solid rgba(255,255,255,.06)",
              color: "rgba(255,255,255,.28)",
            }}
          >
            <span>© 2024 4AT AI. All rights reserved.</span>
            <span>Built on Next.js · NestJS · FastAPI · AWS · SOC 2 Certified</span>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 860px) {
            [style*="grid-template-columns: 2fr"] {
              grid-template-columns: 1fr 1fr !important;
            }
          }
          @media (max-width: 500px) {
            [style*="grid-template-columns: 2fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </footer>
    </>
  );
}
