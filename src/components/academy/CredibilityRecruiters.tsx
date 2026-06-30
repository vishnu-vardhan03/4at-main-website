"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { partnerLogos } from "@/lib/site-data";

import { CountUpNumber } from "@/components/academy/CountUpNumber";
import { NeonGlowOrb } from "@/components/academy/NeonGlowOrb";

const doubledLogos = [...partnerLogos, ...partnerLogos];

const SECTION_CONTENT = {
  eyebrow: "For Recruiters",
  headline: ["Hire finance talent", "with real baseline", "readiness."],
  description: "4AT Academy helps employers access candidates who already understand the workflows, tools, and expectations behind modern finance roles — reducing ramp time and lowering the burden of training from scratch.",
  curriculumLabel: "Curriculum tracks"
};

const BENTO_CARDS = [
  {
    id: "01",
    title: "Accounting & ERP",
    description: "Equipped with real baseline workflow exposure across modern corporate accounting databases and ERP systems.",
    tags: ["SAP", "QuickBooks", "NetSuite", "Tally"],
    iconType: "ledger"
  },
  {
    id: "02",
    title: "FP&A & Modeling",
    description: "Skilled in structural forecasting methods, capital planning models, and data-driven corporate budgeting.",
    tags: ["Budgeting", "Forecasting", "Financial modeling"],
    iconType: "chart"
  },
  {
    id: "03",
    title: "Audit & Controls",
    description: "Grounded in internal audit frameworks, SOX compliance regulations, and financial risk mitigation controls.",
    tags: ["Internal audit", "Compliance", "Risk controls"],
    iconType: "shield"
  },
  {
    id: "04",
    title: "Automation & AI",
    description: "Able to automate tabular workflows, build Power BI intelligence, and deploy standard RPA agents.",
    tags: ["Excel automation", "Power BI", "RPA", "AI workflows"],
    iconType: "automation"
  }
];

const renderCardIcon = (iconType: string) => {
  switch (iconType) {
    case "ledger":
      return (
        <svg className="svg-icon-custom" viewBox="0 0 100 100">
          <rect x="15" y="20" width="70" height="60" rx="6" strokeOpacity="0.3" />
          <line x1="15" y1="40" x2="85" y2="40" strokeOpacity="0.3" />
          <line x1="15" y1="60" x2="85" y2="60" strokeOpacity="0.3" />
          <line x1="38" y1="20" x2="38" y2="80" strokeOpacity="0.3" />
          <line x1="62" y1="20" x2="62" y2="80" strokeOpacity="0.3" />
          <rect className="anim-path-ledger" x="15" y="40" width="70" height="20" fill="var(--accent-color)" fillOpacity="0.05" stroke="var(--accent-color)" strokeWidth="2" />
        </svg>
      );
    case "chart":
      return (
        <svg className="svg-icon-custom" viewBox="0 0 100 100">
          <path d="M15 80 H 85" strokeOpacity="0.3" />
          <path d="M20 15 V 85" strokeOpacity="0.3" />
          <path className="anim-path-chart" d="M20 70 Q 40 60 50 45 T 80 25" stroke="var(--accent-color)" strokeWidth="2.5" />
          <circle className="anim-dot" cx="80" cy="25" r="4" fill="var(--accent-color)" />
        </svg>
      );
    case "shield":
      return (
        <svg className="svg-icon-custom" viewBox="0 0 100 100">
          <path d="M50 15 C 65 15 80 20 80 35 C 80 55 65 75 50 85 C 35 75 20 55 20 35 C 20 20 35 15 50 15 Z" strokeOpacity="0.3" />
          <path className="anim-path-check" d="M38 48 L 47 57 L 65 38" stroke="var(--accent-color)" strokeWidth="3" />
          <path d="M50 20 C 62 20 74 24 74 35 C 74 50 62 67 50 76 C 38 67 26 50 26 35 C 26 24 38 20 50 20 Z" stroke="var(--accent-color)" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
        </svg>
      );
    case "automation":
      return (
        <svg className="svg-icon-custom" viewBox="0 0 100 100">
          <circle cx="25" cy="50" r="8" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
          <circle cx="75" cy="30" r="8" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
          <circle cx="75" cy="70" r="8" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
          <path d="M33 46 L 67 34" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
          <path d="M33 54 L 67 66" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
          <path className="anim-path-connect-1" d="M33 46 L 67 34" stroke="var(--accent-color)" strokeWidth="2" />
          <path className="anim-path-connect-2" d="M33 54 L 67 66" stroke="var(--accent-color)" strokeWidth="2" />
          <circle cx="25" cy="50" r="4" fill="var(--accent-color)" />
          <circle cx="75" cy="30" r="4" fill="var(--accent-color)" />
          <circle cx="75" cy="70" r="4" fill="var(--accent-color)" />
        </svg>
      );
    default:
      return null;
  }
};

export function CredibilityRecruiters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      id="credibility"
      className={`w-full section-padding overflow-visible relative recruiters-section-custom ${
        isAnimated ? "animate-active" : ""
      }`}
    >
      <style>{`
        .recruiters-section-custom {
          background-color: transparent;
          color: #F0EFEB;
          --accent-color: var(--color-accent);
          --accent-rgb: 45, 212, 191;
          --text-color: #F0EFEB;
          --text-muted: var(--color-ink-secondary);
          --card-bg: rgba(11, 14, 26, 0.6);
          --card-border: rgba(255, 255, 255, 0.08);
          --font-display: var(--font-space-grotesk), sans-serif;
          --font-body: var(--font-space-grotesk), sans-serif;
          --grid-line: rgba(255, 255, 255, 0.03);
          position: relative;
        }



        .ambient-glow-decor {
          position: absolute;
          top: -10%;
          left: 20%;
          width: 700px;
          height: 600px;
          background: radial-gradient(circle, rgba(var(--accent-rgb), 0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .ambient-glow-decor-2 {
          position: absolute;
          bottom: 5%;
          right: 5%;
          width: 650px;
          height: 650px;
          background: radial-gradient(circle, rgba(var(--accent-rgb), 0.05) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        /* Eyebrow Label */
        .eyebrow-custom {
          display: inline-flex;
          align-self: flex-start;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(255, 255, 255, 0.85);
          padding: 8px 20px;
          border-radius: 999px;
          /* Skeuomorphic raised glassmorphic pill */
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.06) 0%,
            rgba(255, 255, 255, 0.02) 100%
          );
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          /* Subtle depth highlight and border */
          box-shadow:
            0 1px 0 0 rgba(255, 255, 255, 0.1) inset,          /* top highlight rim */
            0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,                /* bottom inner shadow */
            0 4px 12px rgba(0, 0, 0, 0.4),                      /* soft shadow */
            0 0 0 1px rgba(255, 255, 255, 0.08);                /* border matching rest of site */
          border: none;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
          
          /* Pre-animation state */
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 500ms ease-out, transform 500ms ease-out;
        }

        /* Headline text lines */
        .headline-custom {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5.5vw, 4rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--text-color);
          max-width: 850px;
        }

        .headline-custom span {
          display: block;
          /* Pre-animation state */
          clip-path: inset(0 0 100% 0);
          transition: clip-path 600ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Descriptor paragraph */
        .descriptor-custom {
          font-size: clamp(1rem, 1.8vw, 1.125rem);
          font-weight: 300;
          color: var(--text-muted);
          max-width: 650px;
          line-height: 1.6;
          
          /* Pre-animation state */
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 500ms ease-out, transform 500ms ease-out;
        }

        /* Metrics Strip styling */
        .metrics-strip-container {
          margin-top: 48px;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 600ms ease-out, transform 600ms ease-out;
          transition-delay: 200ms;
        }

        .animate-active .metrics-strip-container {
          opacity: 1;
          transform: translateY(0);
        }

        /* Logo Marquee styling */
        .marquee-container-full {
          width: 100%;
          overflow: hidden;
          position: relative;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 600ms ease-out, transform 600ms ease-out;
          transition-delay: 300ms;
        }

        .animate-active .marquee-container-full {
          opacity: 1;
          transform: translateY(0);
        }

        .horizontal-mask-fade {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 10;
        }

        .horizontal-mask-fade::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 15%;
          background: linear-gradient(to right, #04060f, transparent);
        }

        .horizontal-mask-fade::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 15%;
          background: linear-gradient(to left, #04060f, transparent);
        }

        .marquee-track-custom {
          display: flex;
          gap: 64px;
          width: max-content;
          animation: marquee-horizontal 35s linear infinite;
        }

        @keyframes marquee-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-container-full:hover .marquee-track-custom {
          animation-play-state: paused;
        }

        /* Section Label "Curriculum tracks" */
        .section-label-custom {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--text-muted);
          border-bottom: 1px solid var(--card-border);
          padding-bottom: 16px;
          
          /* Pre-animation state */
          opacity: 0;
          transition: opacity 400ms ease-out;
        }

        /* Custom SVGs line drawings */
        .svg-icon-custom {
          width: 24px;
          height: 24px;
          stroke: var(--accent-color);
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
          transition: transform 300ms ease;
        }

        .anim-path-ledger {
          stroke-dasharray: 260;
          stroke-dashoffset: 260;
          transition: stroke-dashoffset 1s ease;
        }

        .anim-path-chart {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          transition: stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .anim-dot {
          opacity: 0;
          transform: scale(0.5);
          transform-origin: 80px 25px;
          transition: opacity 0.3s ease 1s, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) 1s;
        }

        .anim-path-check {
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
          transition: stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
        }

        .anim-path-connect-1 {
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
        }

        .anim-path-connect-2 {
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
        }

        @keyframes draw-loop-1 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: -50; }
        }
        @keyframes draw-loop-2 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: -50; }
        }

        /* Bottom CTA Bar */
        .cta-bar-custom {
          background: linear-gradient(90deg, #111422 0%, #0a0a0d 100%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 24px;
          padding: 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          
          /* Pre-animation state */
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 500ms ease-out, transform 500ms ease-out;
        }

        .cta-text-custom {
          max-width: 600px;
        }

        .cta-title-custom {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
          color: var(--text-color);
          letter-spacing: -0.01em;
        }

        .cta-desc-custom {
          font-size: 14px;
          color: var(--text-muted);
          margin-top: 8px;
          line-height: 1.5;
        }

        .cta-actions-custom {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }

        /* Buttons */
        .btn-custom {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 16px 28px;
          border-radius: 12px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 200ms ease, border-color 200ms ease, background-color 200ms ease;
        }

        .btn-custom:active {
          transform: scale(0.97);
        }

        .btn-primary-custom {
          background: var(--accent-color);
          color: #000;
          border: 1px solid var(--accent-color);
          position: relative;
          overflow: hidden;
        }

        .btn-primary-custom::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
          pointer-events: none;
        }

        .btn-primary-custom:hover::after {
          left: 150%;
          transition: left 400ms ease-in-out;
        }

        .btn-primary-custom:hover {
          box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.4);
        }

        .btn-ghost-custom {
          background: transparent;
          color: var(--text-color);
          border: 1px solid var(--card-border);
        }

        .btn-ghost-custom:hover {
          border-color: rgba(240, 239, 235, 0.2);
          background: rgba(240, 239, 235, 0.02);
        }

        /* Animation Active States (triggered by JS observer) */
        .animate-active .eyebrow-custom {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-active .headline-custom span {
          clip-path: inset(0 0 0% 0);
        }
        .animate-active .headline-custom span:nth-child(1) { transition-delay: 100ms; }
        .animate-active .headline-custom span:nth-child(2) { transition-delay: 220ms; }
        .animate-active .headline-custom span:nth-child(3) { transition-delay: 340ms; }

        .animate-active .descriptor-custom {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-active .section-label-custom {
          opacity: 1;
        }

        /* CTA Bar animation */
        .animate-active .cta-bar-custom {
          opacity: 1;
          transform: translateY(0);
        }

        /* Grid Points Cells styling */
        .grid-cell-custom {
          position: relative;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 600ms ease-out, transform 600ms ease-out, background-color 300ms ease, border-color 300ms ease;
        }

        .animate-active .grid-cell-custom {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-active .grid-cell-custom:nth-child(1) { transition-delay: 150ms; }
        .animate-active .grid-cell-custom:nth-child(2) { transition-delay: 250ms; }
        .animate-active .grid-cell-custom:nth-child(3) { transition-delay: 350ms; }
        .animate-active .grid-cell-custom:nth-child(4) { transition-delay: 450ms; }

        .icon-box-custom {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(var(--accent-rgb), 0.05);
          border: 1px solid rgba(var(--accent-rgb), 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          transition: transform 300ms cubic-bezier(0.215, 0.61, 0.355, 1), background-color 300ms ease, border-color 300ms ease;
        }

        .grid-cell-custom:hover .icon-box-custom {
          transform: scale(1.08);
          background: rgba(var(--accent-rgb), 0.12);
          border-color: rgba(var(--accent-rgb), 0.25);
        }

        /* SVG Line drawing animation triggers on hover */
        .grid-cell-custom:hover .anim-path-ledger {
          stroke-dashoffset: 0;
        }

        .grid-cell-custom:hover .anim-path-chart {
          stroke-dashoffset: 0;
        }

        .grid-cell-custom:hover .anim-dot {
          opacity: 1;
          transform: scale(1);
        }

        .grid-cell-custom:hover .anim-path-check {
          stroke-dashoffset: 0;
        }

        .grid-cell-custom:hover .anim-path-connect-1 {
          animation: draw-loop-1 1.5s linear infinite;
        }

        .grid-cell-custom:hover .anim-path-connect-2 {
          animation: draw-loop-2 1.5s linear infinite 0.75s;
        }

        /* Tags container */
        .tags-container-custom {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }

        .tag-custom {
          font-size: 11px;
          font-weight: 500;
          color: var(--text-color);
          border: 1px solid rgba(var(--accent-rgb), 0.15);
          background: rgba(var(--accent-rgb), 0.02);
          padding: 6px 14px;
          border-radius: 100px;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 300ms ease-out, transform 300ms ease-out;
        }

        .animate-active .grid-cell-custom:nth-child(1) .tag-custom { opacity: 1; transform: translateX(0); }
        .animate-active .grid-cell-custom:nth-child(1) .tag-custom:nth-child(1) { transition-delay: calc(150ms + 60ms); }
        .animate-active .grid-cell-custom:nth-child(1) .tag-custom:nth-child(2) { transition-delay: calc(150ms + 120ms); }
        .animate-active .grid-cell-custom:nth-child(1) .tag-custom:nth-child(3) { transition-delay: calc(150ms + 180ms); }
        .animate-active .grid-cell-custom:nth-child(1) .tag-custom:nth-child(4) { transition-delay: calc(150ms + 240ms); }

        .animate-active .grid-cell-custom:nth-child(2) .tag-custom { opacity: 1; transform: translateX(0); }
        .animate-active .grid-cell-custom:nth-child(2) .tag-custom:nth-child(1) { transition-delay: calc(250ms + 60ms); }
        .animate-active .grid-cell-custom:nth-child(2) .tag-custom:nth-child(2) { transition-delay: calc(250ms + 120ms); }
        .animate-active .grid-cell-custom:nth-child(2) .tag-custom:nth-child(3) { transition-delay: calc(250ms + 180ms); }
        .animate-active .grid-cell-custom:nth-child(2) .tag-custom:nth-child(4) { transition-delay: calc(250ms + 240ms); }

        .animate-active .grid-cell-custom:nth-child(3) .tag-custom { opacity: 1; transform: translateX(0); }
        .animate-active .grid-cell-custom:nth-child(3) .tag-custom:nth-child(1) { transition-delay: calc(350ms + 60ms); }
        .animate-active .grid-cell-custom:nth-child(3) .tag-custom:nth-child(2) { transition-delay: calc(350ms + 120ms); }
        .animate-active .grid-cell-custom:nth-child(3) .tag-custom:nth-child(3) { transition-delay: calc(350ms + 180ms); }
        .animate-active .grid-cell-custom:nth-child(3) .tag-custom:nth-child(4) { transition-delay: calc(350ms + 240ms); }

        .animate-active .grid-cell-custom:nth-child(4) .tag-custom { opacity: 1; transform: translateX(0); }
        .animate-active .grid-cell-custom:nth-child(4) .tag-custom:nth-child(1) { transition-delay: calc(450ms + 60ms); }
        .animate-active .grid-cell-custom:nth-child(4) .tag-custom:nth-child(2) { transition-delay: calc(450ms + 120ms); }
        .animate-active .grid-cell-custom:nth-child(4) .tag-custom:nth-child(3) { transition-delay: calc(450ms + 180ms); }
        .animate-active .grid-cell-custom:nth-child(4) .tag-custom:nth-child(4) { transition-delay: calc(450ms + 240ms); }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .cta-bar-custom {
            flex-direction: column;
            align-items: stretch;
            padding: 32px 24px;
            gap: 24px;
          }

          .cta-actions-custom {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }

          .btn-custom {
            width: 100%;
          }
        }

        /* Prefers Reduced Motion override */
        @media (prefers-reduced-motion: reduce) {
          *, ::before, ::after {
            animation-delay: -1ms !important;
            animation-duration: 1ms !important;
            animation-iteration-count: 1 !important;
            background-attachment: initial !important;
            scroll-behavior: auto !important;
            transition-delay: 0s !important;
            transition-duration: 0s !important;
          }

          .eyebrow-custom,
          .descriptor-custom,
          .headline-custom span,
          .section-label-custom,
          .grid-cell-custom,
          .tag-custom,
          .cta-bar-custom,
          .metrics-strip-container,
          .marquee-container-full {
            opacity: 1 !important;
            transform: none !important;
            clip-path: none !important;
            transition: none !important;
          }

          .marquee-track-custom {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>


      <NeonGlowOrb 
        className="left-[75%] top-[25%] -translate-x-1/2 -translate-y-1/2 z-0"
        size={450}
        opacity={0.18}
        blur={50}
      />
      <NeonGlowOrb 
        className="left-[25%] top-[75%] -translate-x-1/2 -translate-y-1/2 z-0"
        size={450}
        opacity={0.18}
        blur={50}
      />

      <div className="site-shell relative z-10 flex flex-col gap-20">
        
        {/* Top: Content zone */}
        <div className="flex flex-col gap-6 max-w-4xl">
          <div className="eyebrow-custom">
            <svg className="w-3.5 h-3.5 stroke-current fill-none mr-2" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            {SECTION_CONTENT.eyebrow}
          </div>
          <h1 className="headline-custom font-sans font-extrabold">
            {SECTION_CONTENT.headline.map((line, idx) => (
              <span key={idx}>{line}</span>
            ))}
          </h1>
          <p className="descriptor-custom font-sans">
            {SECTION_CONTENT.description}
          </p>
        </div>

        {/* Curriculum Tracks Section */}
        <div>
          {/* Section Label "Curriculum tracks" */}
          <div className="section-label-custom">{SECTION_CONTENT.curriculumLabel}</div>

          {/* Glassmorphic wireframe-style grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 mt-12 md:gap-0 gap-6">
            {BENTO_CARDS.map((card, idx) => {
              const gridCellClasses = `
                grid-cell-custom flex flex-col gap-6 relative group p-6 md:p-8 lg:p-12
                bg-[#121212] hover:bg-[#1a1a1a]
                border border-white/8 rounded-xl
                md:border-0 md:rounded-none
                ${idx === 0 ? "md:border-r md:border-b md:border-white/8 md:rounded-tl-2xl" : ""}
                ${idx === 1 ? "md:border-b md:border-white/8 md:rounded-tr-2xl" : ""}
                ${idx === 2 ? "md:border-r md:border-white/8 md:rounded-bl-2xl" : ""}
                ${idx === 3 ? "md:rounded-br-2xl" : ""}
              `.trim().replace(/\s+/g, " ");

              return (
                <div key={idx} className={gridCellClasses}>
                  {/* Header block with Index, Title and Icon */}
                  <div className="flex items-center justify-between gap-4 select-none">
                    <div className="flex items-baseline gap-3">
                      <span className="text-sm font-mono text-white/30 group-hover:text-accent transition-colors duration-300">
                        {card.id}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-white group-hover:text-accent transition-colors duration-300 font-sans">
                        {card.title}
                      </h3>
                    </div>
                    <div className="icon-box-custom shrink-0">
                      {renderCardIcon(card.iconType)}
                    </div>
                  </div>

                  {/* Body and Tags */}
                  <p className="text-sm lg:text-base text-ink-secondary leading-relaxed font-sans group-hover:text-white/80 transition-colors duration-300">
                    {card.description}
                  </p>
                  <div className="tags-container-custom mt-auto pt-2">
                    {card.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="tag-custom">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Metrics Horizontal Strip */}
        <div className="metrics-strip-container w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="flex flex-col items-center justify-center text-center p-6 md:p-8 bg-[#121212] hover:bg-[#1a1a1a] border border-white/8 rounded-xl transition-all duration-300">
              <span className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold tracking-tight text-white leading-none font-sans font-mono">
                <CountUpNumber value="2,400+" />
              </span>
              <span className="text-[11px] uppercase tracking-wider text-ink-secondary mt-2.5 font-sans font-medium">
                Learners Enrolled
              </span>
            </div>
 
            <div className="flex flex-col items-center justify-center text-center p-6 md:p-8 bg-[#121212] hover:bg-[#1a1a1a] border border-white/8 rounded-xl transition-all duration-300">
              <span className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold tracking-tight text-white leading-none font-sans font-mono">
                <CountUpNumber value="87%" />
              </span>
              <span className="text-[11px] uppercase tracking-wider text-ink-secondary mt-2.5 font-sans font-medium">
                Placed in 90 Days
              </span>
            </div>
 
            <div className="flex flex-col items-center justify-center text-center p-6 md:p-8 bg-[#121212] hover:bg-[#1a1a1a] border border-white/8 rounded-xl transition-all duration-300">
              <span className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold tracking-tight text-white leading-none font-sans font-mono">
                <CountUpNumber value="140+" />
              </span>
              <span className="text-[11px] uppercase tracking-wider text-ink-secondary mt-2.5 font-sans font-medium">
                Recruiters Network
              </span>
            </div>
 
            <div className="flex flex-col items-center justify-center text-center p-6 md:p-8 bg-[#121212] hover:bg-[#1a1a1a] border border-white/8 rounded-xl transition-all duration-300">
              <span className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold tracking-tight text-accent leading-none font-sans font-mono">
                <CountUpNumber value="4.9★" />
              </span>
              <span className="text-[11px] uppercase tracking-wider text-ink-secondary mt-2.5 font-sans font-medium">
                Average Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}