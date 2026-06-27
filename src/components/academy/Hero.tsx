"use client";

import { useRef, useState, useEffect } from "react";
import { badgeCopy, partnerLogos } from "@/lib/site-data";
import Image from "next/image";
import { BeamsBackground } from "@/components/ui/beams-background";
import gsap from "gsap";
import { NeonGlowOrb } from "@/components/academy/NeonGlowOrb";
import { client } from "@/lib/sanity";

const students = ["A", "B", "C"];

export function Hero({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLElement>(null);
  const [heroTitle, setHeroTitle] = useState("Finance training built for careers, not just certificates.");
  const [partners, setPartners] = useState<Array<{ name: string; src: string }>>([]);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const query = `*[_type == "siteSettings"][0] { heroTitle }`;
        const data = await client.fetch(query);
        if (data && data.heroTitle) {
          setHeroTitle(data.heroTitle);
        }
      } catch (err) {
        console.warn("Failed to fetch site settings, using default:", err);
      }
    }
    async function fetchPartners() {
      try {
        const query = `*[_type == "partner"] {
          name,
          "src": logo.asset->url
        }`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          const valid = data.filter((p: any) => p.src);
          if (valid.length > 0) {
            setPartners(valid);
          }
        }
      } catch (err) {
        console.warn("Failed to fetch partners, using static defaults:", err);
      }
    }
    fetchSettings();
    fetchPartners();
  }, []);

  return (
    <section ref={containerRef} id="hero" className="relative w-full overflow-x-hidden bg-transparent">



      {/* Main card nested container */}
      <div className="relative z-10 mx-auto w-full xl:w-[80%] xl:max-w-[1536px] max-w-[1920px] px-4 sm:px-6 lg:px-14 xl:px-20 2xl:px-28 min-h-[100svh] flex items-center justify-center pt-20 pb-4 lg:py-6">
        <div className="hero-inner-card relative min-h-[calc(100svh-32px)] sm:min-h-[calc(100svh-48px)] lg:min-h-[calc(100svh-64px)] w-full rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/[0.06] flex flex-col justify-center py-14 sm:py-18 lg:py-22 px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-28 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#0a0a0a]/90 backdrop-blur-md">

          {/* Beams Background underlay */}
          <BeamsBackground className="absolute inset-0 w-full h-full min-h-0 bg-transparent z-0 pointer-events-none" intensity="medium" />

          {/* Opaque black overlays */}
          <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none" />

          {/* Enhanced radial grid overlay (1px thin crisp lines on top) */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.25] z-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(246, 246, 246, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(246, 246, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(circle at 50% 50%, black 50%, transparent 95%)",
              WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 50%, transparent 95%)",
            }}
          />


          {/* Centered Hero Content Area */}
          <div className="hero-content-area relative z-30 flex-1 flex flex-col justify-center items-center py-6 w-full max-w-7xl mx-auto">
            <NeonGlowOrb
              className="left-[30%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              size={450}
              opacity={0.18}
              blur={50}
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full relative z-10">
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="hero-badge mb-6 inline-flex items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.04] px-4 sm:px-5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-md">
                  <span className="text-eyebrow font-semibold tracking-wider capitalize text-white/90 font-sans">
                    Career-focused training
                  </span>
                </div>

                <h1 className="hero-title font-sans text-white text-hero font-bold leading-[1.18] tracking-[-0.01em] w-full">
                  {heroTitle === "Finance training built for careers, not just certificates." ? (
                    <>
                      Finance training<br />
                      built for <span className="hero-title-shimmer">careers</span>,<br />
                      not just certificates<span className="text-accent">.</span>
                    </>
                  ) : (
                    heroTitle
                  )}
                </h1>

                <div className="w-full">
                  {children}
                </div>
              </div>

              {/* Right Column: Doodle (with identical animation & design) */}
              <div className="lg:col-span-5 flex justify-center w-full hero-svg-container">
                <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[500px]">
                  <style>{`
                    @keyframes floatHeroAnimation {
                      0%, 100% { transform: translateY(0px); }
                      50% { transform: translateY(-8px); }
                    }
                    @keyframes pulseHeroGlow {
                      0%, 100% { opacity: 0.4; }
                      50% { opacity: 0.8; }
                    }
                    .hero-svg-float {
                      animation: floatHeroAnimation 4s ease-in-out infinite;
                    }
                    .hero-svg-pulse {
                      animation: pulseHeroGlow 2.5s ease-in-out infinite;
                    }
                  `}</style>
                  <svg className="w-full h-auto opacity-90 transition-opacity duration-300" viewBox="0 0 400 250" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <defs>
                      <radialGradient id="heroGlowGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="var(--color-accent, #00e5c3)" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="var(--color-accent, #00e5c3)" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Background Glow */}
                    <circle cx="200" cy="125" r="80" fill="url(#heroGlowGrad)" className="hero-svg-pulse" />

                    {/* Connection lines */}
                    <path d="M 90 90 Q 150 100 170 120" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                    <path d="M 310 90 Q 250 100 230 120" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                    <path d="M 120 180 Q 170 160 185 140" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                    <path d="M 280 180 Q 230 160 215 140" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                    <path d="M 200 65 V 100" stroke="rgba(255,255,255,0.12)" strokeDasharray="4 4" />

                    {/* Graduation Cap */}
                    <g className="hero-svg-float" style={{ transformOrigin: '200px 125px' }}>
                      <path d="M 175 130 V 138 C 175 145, 225 145, 225 138 V 130" stroke="#00e5c3" strokeWidth="2" fill="#030303" />
                      <path d="M 200 110 L 245 122 L 200 134 L 155 122 Z" stroke="#00e5c3" strokeWidth="2" fill="#030303" />
                      <path d="M 200 122 L 165 128 V 140" stroke="#00e5c3" strokeWidth="1.5" />
                      <circle cx="165" cy="142" r="2.5" fill="#00e5c3" />
                    </g>

                    {/* Lightbulb */}
                    <g className="hero-svg-pulse">
                      <path d="M 190 40 C 190 25, 210 25, 210 40 C 210 48, 204 50, 204 55 H 196 C 196 50, 190 48, 190 40 Z" stroke="white" strokeWidth="1.5" fill="none" />
                      <path d="M 197 58 H 203 M 198 61 H 202" stroke="white" strokeWidth="1.5" />
                      <line x1="200" y1="20" x2="200" y2="12" stroke="#00e5c3" strokeWidth="1.5" />
                      <line x1="180" y1="30" x2="173" y2="24" stroke="#00e5c3" strokeWidth="1.5" />
                      <line x1="220" y1="30" x2="227" y2="24" stroke="#00e5c3" strokeWidth="1.5" />
                    </g>

                    {/* Laptop / Screen */}
                    <g>
                      <rect x="55" y="65" width="40" height="26" rx="3" stroke="white" strokeWidth="1.5" fill="#030303" />
                      <line x1="50" y1="91" x2="100" y2="91" stroke="white" strokeWidth="2" />
                      <circle cx="75" cy="74" r="4" stroke="white" strokeWidth="1" />
                      <path d="M 68 83 C 68 79, 82 79, 82 83" stroke="white" strokeWidth="1" />
                      <polygon points="61,71 61,77 66,74" fill="#00e5c3" stroke="#00e5c3" strokeWidth="1" />
                    </g>

                    {/* User Group */}
                    <g>
                      <circle cx="75" cy="140" r="14" stroke="white" strokeWidth="1.5" strokeDasharray="3 3" />
                      <circle cx="75" cy="135" r="3.5" fill="white" />
                      <path d="M 68 145 C 68 141, 82 141, 82 145" fill="white" />
                      <circle cx="68" cy="139" r="2.5" fill="rgba(255,255,255,0.7)" />
                      <circle cx="82" cy="139" r="2.5" fill="rgba(255,255,255,0.7)" />
                    </g>

                    {/* Certificate */}
                    <g>
                      <rect x="305" y="65" width="35" height="26" rx="2" stroke="white" strokeWidth="1.5" fill="#030303" />
                      <line x1="312" y1="71" x2="333" y2="71" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                      <line x1="312" y1="76" x2="333" y2="76" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                      <line x1="312" y1="81" x2="325" y2="81" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                      <circle cx="328" cy="81" r="3.5" fill="#00e5c3" />
                      <polygon points="328,83 326,89 330,89" fill="#00e5c3" />
                    </g>

                    {/* Student at Desk (Left) */}
                    <g>
                      <path d="M 50 215 H 100" stroke="white" strokeWidth="1.5" />
                      <path d="M 75 195 L 85 208 M 75 195 L 65 208" stroke="white" strokeWidth="1.5" />
                      <rect x="68" y="190" width="14" height="10" rx="1" stroke="white" strokeWidth="1" fill="#030303" />
                      <circle cx="60" cy="178" r="4.5" stroke="white" strokeWidth="1.5" />
                      <path d="M 50 195 C 50 188, 70 188, 70 195" stroke="white" strokeWidth="1.5" fill="none" />
                    </g>

                    {/* Books Stack */}
                    <g>
                      <rect x="180" y="200" width="40" height="8" rx="1" stroke="white" strokeWidth="1.2" fill="#030303" />
                      <rect x="183" y="193" width="34" height="7" rx="1" stroke="white" strokeWidth="1.2" fill="#030303" />
                      <rect x="181" y="186" width="38" height="7" rx="1" stroke="white" strokeWidth="1.2" fill="#030303" />
                      <rect x="225" y="192" width="10" height="16" rx="1" stroke="white" strokeWidth="1.5" fill="#030303" />
                      <path d="M 235 196 H 237 V 204 H 235" stroke="white" strokeWidth="1.2" />
                      <line x1="228" y1="192" x2="226" y2="182" stroke="#00e5c3" strokeWidth="1" />
                      <line x1="232" y1="192" x2="234" y2="184" stroke="white" strokeWidth="1" />
                    </g>

                    {/* Student at Desk (Right) */}
                    <g>
                      <path d="M 300 215 H 350" stroke="white" strokeWidth="1.5" />
                      <rect x="315" y="190" width="16" height="10" rx="1" stroke="white" strokeWidth="1" fill="#030303" />
                      <circle cx="338" cy="178" r="4.5" stroke="white" strokeWidth="1.5" />
                      <path d="M 328 195 C 328 188, 348 188, 348 195" stroke="white" strokeWidth="1.5" fill="none" />
                      <rect x="290" y="192" width="4" height="12" fill="#00e5c3" />
                      <rect x="295" y="196" width="4" height="8" fill="rgba(255,255,255,0.7)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Scroll to Explore + Student Avatars Overlay */}
          <div className="absolute bottom-8 left-0 w-full z-30 px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-28 pointer-events-none flex items-center justify-center sm:justify-between">
            {/* Scroll Indicator */}
            <div className="flex flex-col items-center gap-2 text-[10px] font-bold tracking-widest text-white/40 uppercase font-sans">
              <span>Scroll to explore</span>
              <div className="hero-scroll-line mt-1" />
            </div>

            {/* Social Proof */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex">
                {students.map((student, index) => (
                  <div
                    key={student}
                    className={`grid size-[32px] place-items-center rounded-full border border-white/[0.06] bg-brand-soft/80 text-eyebrow font-bold text-white shadow-sm ${index > 0 ? "-ml-3" : ""}`}
                  >
                    {student}
                  </div>
                ))}
              </div>
              <span className="tracking-[0.04em] text-[#cccccc] text-sm-ui font-semibold font-sans whitespace-nowrap">
                Trusted by 1,000+ finance professionals
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#f6f6f6]">
        <div className="absolute left-0 top-0 z-10 flex h-full w-full max-w-[300px] items-center justify-center bg-[#f6f6f6]/95 px-8 shadow-[20px_0_40px_rgba(0,0,0,0.03)] border-r border-[#e2e8f0]">
          <p className="max-w-[194px] text-center text-sm-ui font-medium leading-[1.4] text-slate-600">
            {badgeCopy}
          </p>
        </div>
        <div className="overflow-hidden border-y border-[#e2e8f0] bg-[#f6f6f6] px-4 py-6 sm:px-6 lg:px-10">
          <div className="marquee-track flex min-w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused] items-center gap-12 pr-12 will-change-transform">
            {(() => {
              const activePartners = partners.length > 0 ? partners : partnerLogos;
              return [...activePartners, ...activePartners].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="relative h-8 w-24 shrink-0 opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
              ));
            })()}
          </div>
        </div>
      </div>
      <style>{`
        .hero-title-shimmer {
          background: linear-gradient(90deg, #2dd4bf, #7dd3fc, #a78bfa, #2dd4bf);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 6s linear infinite;
        }
        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        .hero-radial-mask {
          mask-image: radial-gradient(circle at 50% 50%, black 50%, transparent 95%);
          -webkit-mask-image: radial-gradient(circle at 50% 50%, black 50%, transparent 95%);
        }
        .hero-grid-mask {
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='white' stroke-width='3'/%3E%3C/svg%3E");
          mask-size: 60px 60px;
          mask-repeat: repeat;
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='white' stroke-width='3'/%3E%3C/svg%3E");
          -webkit-mask-size: 60px 60px;
          -webkit-mask-repeat: repeat;
        }

        .navbar-transition {
          transition: transform 800ms cubic-bezier(0.16, 1, 0.3, 1),
                      translate 800ms cubic-bezier(0.16, 1, 0.3, 1),
                      padding 800ms cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 800ms cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 800ms cubic-bezier(0.16, 1, 0.3, 1),
                      border-radius 800ms cubic-bezier(0.16, 1, 0.3, 1),
                      color 800ms cubic-bezier(0.16, 1, 0.3, 1),
                      width 800ms cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 800ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-scroll-line {
          height: 32px;
          width: 1px;
          background: #555;
          transform-origin: top;
        }
      `}</style>
    </section>
  );
}
