"use client";

import { CardsParallax, type ScrollCardItem } from "@/components/home/ui/scroll-cards";

const scenarios: ScrollCardItem[] = [
  {
    title: "Closing the books takes too long",
    pain: "Your team spends 10–12 days a month on close. Errors slip in. Your CFO is the last to know.",
    action: "Iris reconciles transactions in seconds, our senior controllers review exceptions daily, Atlas builds the reports.",
    outcome: "Close in 4–5 days. Audit-ready by default. Your CFO sees the dashboard before the team does.",
    color: "#38bdf8",
  },
  {
    title: "You're heading into an audit and not ready",
    pain: "Your auditor's PBC list is 200 items long. Your team is rebuilding workpapers from scratch. Walk-throughs are a mess.",
    action: "Atlas auto-generates the PBC list. Guardian flags control breaks before the audit. Our senior leads run the pre-audit close.",
    outcome: "Clean walk-throughs from day one. No all-nighters. Your audit timeline holds.",
    color: "#a78bfa",
  },
  {
    title: "You're growing, but can't hire fast enough",
    pain: "Volume is up 40%. You can't find experienced controllers. Hiring a full team takes 6 months and a Big 4 firm quotes you a fortune.",
    action: "You subscribe. We deploy a hybrid pod (AI agents + senior practitioners) in under 7 days.",
    outcome: "Capacity without headcount. Senior judgment without senior salaries. Scale up or down by service line.",
    color: "#2dd4bf",
  },
  {
    title: "You're an accounting firm with overflow",
    pain: "Tax season hits. Your associates are drowning. You're losing client work because you can't staff it.",
    action: "Hand us your overflow. We deliver workpapers in your format, on your timeline, white-labeled if you want.",
    outcome: "You keep the client relationship. We absorb the volume. No hiring, no training, no margin loss.",
    color: "#38bdf8",
  },
  {
    title: "You're going public and your finance stack isn't ready",
    pain: "S-1 in 12 months. Your books, controls, and reporting aren't where the SEC wants them. You don't have a CFO yet.",
    action: "End-to-end IPO readiness — books to SOX to S-1 narrative — backed by our Virtual CFO bench.",
    outcome: "Audit-ready financials. SOX-ready controls. A finance function that holds up to public-market scrutiny.",
    color: "#a78bfa",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative text-white [overflow:clip]">
      {/* Ambient glow blobs — overflow:clip lets these be visually clipped without breaking sticky */}
      <div className="pointer-events-none absolute left-0 top-1/3 size-96 rounded-full bg-[#2dd4bf]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 size-96 rounded-full bg-[#a78bfa]/10 blur-[120px]" />

      {/* Section header — sticky at the very top while scroll happens */}
      <div className="relative mx-auto max-w-[1200px] px-6 pt-10 pb-4 md:px-12">
        <span className="text-xs font-bold uppercase tracking-[.24em] text-[#7dd3fc]">
          Where Hybrid creates the most value
        </span>
        <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
          Five moments where finance teams{" "}
          <span className="text-brand-gradient-flow">switch to 4AT.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
          The buyers who pick us aren&apos;t shopping for &quot;an accounting firm&quot; or
          &quot;an AI tool.&quot; They&apos;re stuck in a specific situation. Here are the
          five we hear most.
        </p>
      </div>

      {/* Sticky scroll cards */}
      <CardsParallax items={scenarios} />

      {/* Footer CTA row */}
      <div className="relative mx-auto max-w-[1200px] px-6 pb-10 md:px-12">
        <div className="mt-10 rounded-2xl border border-white/15 bg-white/[0.035] px-7 py-9 text-center">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-white/50">
            What every engagement delivers
          </span>
          <p className="mt-3 text-xl font-semibold text-white md:text-2xl">
            No matter which scenario brought you here, every 4AT engagement gives you
          </p>
        </div>
        <div className="mt-8 text-center">
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#7dd3fc] transition hover:text-white"
          >
            Here&apos;s exactly how an engagement works <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
