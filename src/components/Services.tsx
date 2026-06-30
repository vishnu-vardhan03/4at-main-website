"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

// Images placed in src/assets/
import consultingEcosystemImg from "@/assets/consulting_ecosystem.png";
import academyCurriculumImg from "@/assets/academy_curriculum.png";
import aiEcosystemImg from "@/assets/ai_ecosystem.png";

const SERVICES = [
  {
    id: "01",
    title: "4AT Consulting",
    subtitle: "FINANCIAL STRATEGY\n& ADVISORY",
    image: consultingEcosystemImg,
    desc: "We provide structured financial consulting to help organizations plan, manage, and optimize performance.",
    backTitle: "Strategic Advisory Details",
    backDesc: "Providing next-generation financial architecture, tailored consulting workflows, and corporate growth roadmaps. Detailed content about corporate restructure and audit services will be configured here.",
    includes: [
      "Financial planning & structuring",
      "Risk & compliance advisory",
      "Business performance evaluation",
      "Strategic decision support"
    ],
  },
  {
    id: "02",
    title: "4AT Academy",
    subtitle: "SKILL DEVELOPMENT\n& ENABLEMENT",
    image: academyCurriculumImg,
    desc: "We build industry-ready talent by equipping professionals with practical skills in finance, accounting, and technologies.",
    backTitle: "Academy Modules",
    backDesc: "Practical certification pathways, professional enablement bootcamps, and career placement services. Curriculum modules, lesson scheduling, and enrollment links will be added here.",
    includes: [
      "Industry-aligned training programs",
      "Practical and hands-on learning",
      "Certification & skill pathways",
      "Career readiness & placement support"
    ],
  },
  {
    id: "03",
    title: "4AT.AI",
    subtitle: "INTELLIGENT AUTOMATION\n& ANALYTICS",
    image: aiEcosystemImg,
    desc: "We develop AI-powered solutions that automate financial workflows and deliver real-time, data-driven insights.",
    backTitle: "AI & Automation Scope",
    backDesc: "Integrating machine learning models, custom analytics dashboard engineering, and transactional anomaly detection systems. Future integrations and analytics documentation will be outlined here.",
    includes: [
      "Financial process automation",
      "Advanced analytics & dashboards",
      "Predictive insights & forecasting",
      "Intelligent reporting systems"
    ],
  },
];

interface FlipCardProps {
  service: typeof SERVICES[number];
  index: number;
}

function FlipCard({ service, index }: FlipCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isFlipDisabled = index === 0;

  return (
    <div
      className="w-full h-[450px] [perspective:1000px] cursor-pointer"
      onMouseEnter={() => !isFlipDisabled && setIsHovered(true)}
      onMouseLeave={() => !isFlipDisabled && setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full duration-500 select-none"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* FRONT SIDE */}
        {index === 0 ? (
          <a
            href="#consulting"
            className="absolute inset-0 w-full h-full rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block bg-zinc-950"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={service.image.src}
              alt={service.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-750"
            />
          </a>
        ) : (
          <div
            className={`absolute inset-0 w-full h-full p-6 rounded-2xl border flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
              index === 1
                ? "bg-[#2dd4bf] border-teal-300/80 text-black"
                : "bg-[#a78bfa] border-purple-300/80 text-black"
            }`}
            style={{
              backfaceVisibility: "hidden"
            }}
          >
            {/* Subtle color gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Top: Card Number & Title */}
              <div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-black/20 text-3xl font-black">{service.id}</span>
                  <span className={`text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded border ${
                    index === 1
                      ? "bg-teal-950/10 text-teal-950 border-teal-950/20"
                      : "bg-purple-950/10 text-purple-950 border-purple-950/20"
                  }`}>
                    {service.title}
                  </span>
                </div>

                <h3 className="font-black uppercase text-xl leading-none text-black whitespace-pre-line mt-4">
                  {service.subtitle}
                </h3>

                <p className="text-xs text-zinc-500 mt-3 leading-relaxed font-medium">
                  {service.desc}
                </p>

                <div className={`flex items-center gap-1 mt-4 text-xs font-bold uppercase tracking-wider ${
                  index === 1 ? "text-teal-950" : "text-purple-950"
                }`}>
                  <span>Flip Card</span>
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Bottom Image Section: absolute positioned to fit completely to the bottom and side borders */}
              {service.image && (
                <div className="absolute bottom-0 left-0 right-0 h-[210px] rounded-b-2xl overflow-hidden flex items-center justify-center p-2 bg-transparent">
                  <img
                    src={service.image.src}
                    alt={service.title}
                    className="w-full h-full object-contain scale-95 invert opacity-90"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* BACK SIDE */}
        {!isFlipDisabled && (
          <div
            className={`absolute inset-0 w-full h-full p-6 rounded-2xl border flex flex-col justify-between overflow-hidden shadow-sm ${
              index === 1
                ? "bg-[#2dd4bf] border-teal-300/80 text-black"
                : "bg-[#a78bfa] border-purple-300/80 text-black"
            }`}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              {/* Top Details */}
              <div>
                <span className={`text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded border inline-block ${
                  index === 1
                    ? "bg-teal-950/10 text-teal-950 border-teal-950/20"
                    : "bg-purple-950/10 text-purple-950 border-purple-950/20"
                }`}>
                  {service.title}
                </span>
                <h4 className="font-black uppercase text-lg text-black mt-3 leading-tight">
                  {service.backTitle}
                </h4>
                <p className="text-zinc-500 text-[11px] leading-relaxed mt-2 font-medium">
                  {service.backDesc}
                </p>
              </div>

              {/* Middle Key Focus Areas */}
              <div className="my-3">
                <p className={`text-[9px] uppercase tracking-widest mb-2 font-bold ${
                  index === 1 ? "text-teal-950/60" : "text-purple-950/60"
                }`}>
                  KEY FOCUS AREAS
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.includes.map((inc) => (
                    <span
                      key={inc}
                      className={`text-[10px] px-2.5 py-1 font-semibold rounded border ${
                        index === 1
                          ? "bg-teal-950/5 border-teal-950/10 text-teal-950"
                          : "bg-purple-950/5 border-purple-950/10 text-purple-950"
                      }`}
                    >
                      {inc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className={`mt-auto pt-2 border-t ${
                index === 1 ? "border-teal-950/10" : "border-purple-950/10"
              }`}>
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all px-4 py-2 rounded border ${
                    index === 1
                      ? "text-teal-950 border-teal-950/20 hover:bg-teal-950 hover:text-white"
                      : "text-purple-950 border-purple-950/20 hover:bg-purple-950 hover:text-white"
                  }`}
                >
                  <span>Know more</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" data-nav-theme="light" className="bg-white text-black py-24 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-zinc-200">
      {/* Heading */}
      <div className="px-6 mb-16 max-w-4xl mx-auto text-center">
        <Reveal>
          <div className="inline-block border border-zinc-300 rounded-full px-4 py-1.5 mb-4 bg-zinc-100/50">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#0052d4] block">
              Services & Frameworks
            </span>
          </div>
          <h2
            className="font-black uppercase tracking-tight text-center mb-6 text-black"
            style={{ fontSize: "clamp(36px, 6vw, 76px)", lineHeight: 0.95 }}
          >
            What 4AT Does
          </h2>
          <p className="text-zinc-650 text-base md:text-lg font-bold leading-relaxed max-w-2xl mx-auto">
            We enable intelligent financial ecosystems by combining strategic consulting, AI-driven technology, and industry-focused talent development.
          </p>
        </Reveal>
      </div>

      {/* Grid containing flipping cards */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 [perspective:1500px]">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 100, rotateX: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
            style={{ transformOrigin: "bottom center", transformStyle: "preserve-3d" }}
            className="w-full"
          >
            <FlipCard service={service} index={index} />
          </motion.div>
        ))}
      </div>

      {/* Stats row */}
      <div className="w-full max-w-[1280px] mx-auto px-8 mt-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 pt-16 border-t border-zinc-200">
        {/* Left: text + CTA */}
        <div>
          <h3 className="text-black text-2xl md:text-3xl font-bold tracking-tight leading-snug">
            From insight to impact—<br />
            <span className="text-zinc-400">empowering businesses and future talent.</span>
          </h3>
          <a
            href="#contact"
            className="group mt-6 inline-flex items-center border border-zinc-300 overflow-hidden hover:shadow-md transition-all rounded-sm bg-white"
          >
            <span className="bg-black text-white px-6 py-3.5 text-sm font-bold">Get started now</span>
            <span className="bg-white text-black border-l border-zinc-300 px-4 py-3.5 self-stretch flex items-center transition-transform">
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </div>

        {/* Right: 3 stats */}
        <div className="flex flex-row gap-8 sm:gap-12 lg:gap-16">
          {[
            { num: "5X", label: "Faster. Smarter Execution." },
            { num: "99%", label: "Reliable system uptime" },
            { num: "62+", label: "Businesses supported" },
          ].map((s) => (
            <div key={s.num} className="flex flex-col">
              <span className="font-black text-black tracking-tighter" style={{ fontSize: "clamp(40px, 4.5vw, 60px)", lineHeight: 1 }}>
                {s.num}
              </span>
              <span className="text-zinc-500 text-xs md:text-sm font-medium mt-2 whitespace-nowrap">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
