"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Users, Sparkles, ShieldCheck, MonitorPlay, Check, Play, ChevronRight, Terminal } from "lucide-react";
import { ScrollRevealText } from "@/components/academy/ScrollRevealText";
import { cn } from "@/lib/utils";
import { NeonGlowOrb } from "@/components/academy/NeonGlowOrb";

interface FeatureItem {
  id: string;
  title: string;
  body: string;
  icon: React.ComponentType<any>;
}

const features: FeatureItem[] = [
  {
    id: "01",
    title: "Career-aligned tracks",
    body: "Every program is mapped to real finance roles, so learners train with the destination in mind.",
    icon: Target,
  },
  {
    id: "02",
    title: "Role-based pathways",
    body: "Freshers, early-career professionals, and specialists do not need the same curriculum, so we do not treat them the same.",
    icon: Users,
  },
  {
    id: "03",
    title: "AI and automation exposure",
    body: "Learners build familiarity with the tools shaping today’s finance workflows.",
    icon: Sparkles,
  },
  {
    id: "04",
    title: "Global finance context",
    body: "Compliance, audit discipline, reporting standards, and control awareness are built into the learning experience.",
    icon: ShieldCheck,
  },
  {
    id: "05",
    title: "Practical simulations",
    body: "Learners apply concepts through cases, scenarios, and workflows that resemble actual finance work.",
    icon: MonitorPlay,
  },
];

export function CoreFeatures({ sectionId = "core-features" }: { sectionId?: string }) {
  const [activeId, setActiveId] = useState("01");
  const [activeRoleTab, setActiveRoleTab] = useState("grad");

  // Helper to render mock UI depending on selected feature
  const renderMockUI = () => {
    switch (activeId) {
      case "01":
        // Career-aligned tracks: Learning Roadmap
        return (
          <div className="flex flex-col h-full justify-between text-left font-sans">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div>
                  <div className="text-[10px] font-mono text-accent uppercase tracking-wider">Active Curriculum</div>
                  <h4 className="text-sm font-semibold text-white mt-1">Corporate Finance Analyst Pathway</h4>
                </div>
                <span className="text-[10px] font-mono bg-accent/10 text-accent px-2 py-0.5 rounded border border-accent/20">Level 1</span>
              </div>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-white">Phase 1: Valuation & Accounting Foundations</h5>
                    <p className="text-[11px] text-white/50 mt-0.5">Excel modeling, three-statement basics, and ratio analysis</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent flex items-center justify-center shrink-0 animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-accent flex items-center gap-1.5">
                      Phase 2: Advanced Deal Structuring
                      <span className="text-[8px] uppercase tracking-widest bg-accent text-[#04060f] px-1 font-bold rounded">In Progress</span>
                    </h5>
                    <p className="text-[11px] text-white/70 mt-0.5">DCF models, sensitivity analysis, and debt scheduling</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4 opacity-40">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-mono">3</span>
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-white">Phase 3: Real M&A Deal Simulation</h5>
                    <p className="text-[11px] text-white/50 mt-0.5">Sponsor buyout case study and presentation to partners</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
              <span>EST. TIME: 4 Weeks Remaining</span>
              <span className="text-accent">Outcome: Investment Ready</span>
            </div>
          </div>
        );

      case "02":
        // Role-based pathways: Custom Curriculum Switcher
        return (
          <div className="flex flex-col h-full justify-between text-left font-sans">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Switch Pathway View</div>
                  <h4 className="text-sm font-semibold text-white mt-1">Adaptive Curriculum Builder</h4>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 bg-white/5 p-1 rounded-lg mb-6 border border-white/5">
                <button
                  onClick={() => setActiveRoleTab("grad")}
                  className={cn(
                    "flex-1 text-[11px] py-1.5 rounded-md transition-all font-medium cursor-pointer",
                    activeRoleTab === "grad" ? "bg-accent text-[#04060f] font-bold" : "text-white/60 hover:text-white"
                  )}
                >
                  Undergrad / Fresher
                </button>
                <button
                  onClick={() => setActiveRoleTab("pro")}
                  className={cn(
                    "flex-1 text-[11px] py-1.5 rounded-md transition-all font-medium cursor-pointer",
                    activeRoleTab === "pro" ? "bg-accent text-[#04060f] font-bold" : "text-white/60 hover:text-white"
                  )}
                >
                  Early Professional
                </button>
                <button
                  onClick={() => setActiveRoleTab("spec")}
                  className={cn(
                    "flex-1 text-[11px] py-1.5 rounded-md transition-all font-medium cursor-pointer",
                    activeRoleTab === "spec" ? "bg-accent text-[#04060f] font-bold" : "text-white/60 hover:text-white"
                  )}
                >
                  Specialist
                </button>
              </div>

              {/* Tab Contents */}
              <div className="min-h-[120px] bg-white/[0.02] border border-white/5 rounded-xl p-4">
                {activeRoleTab === "grad" && (
                  <div className="space-y-2.5">
                    <div className="text-xs font-semibold text-white">Target Skill Gap: Academic to Practical</div>
                    <ul className="space-y-1.5 text-[11px] text-white/60">
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent" /> Real-world Accounting Standards (GAAP/IFRS)</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent" /> Financial Modeling & Excel Workflows</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent" /> Interview Prep & Pitch Presentation Drill</li>
                    </ul>
                  </div>
                )}
                {activeRoleTab === "pro" && (
                  <div className="space-y-2.5">
                    <div className="text-xs font-semibold text-white">Target Skill Gap: Acceleration & Upskill</div>
                    <ul className="space-y-1.5 text-[11px] text-white/60">
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent" /> Advanced Leveraged Buyout Modeling (LBO)</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent" /> M&A Transaction Structures & Negotiation</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent" /> Dynamic Forecasting & Scenario Automation</li>
                    </ul>
                  </div>
                )}
                {activeRoleTab === "spec" && (
                  <div className="space-y-2.5">
                    <div className="text-xs font-semibold text-white">Target Skill Gap: Sector & Vertical Domination</div>
                    <ul className="space-y-1.5 text-[11px] text-white/60">
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent" /> Real Estate & Infrastructure Modeling</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent" /> Biotech/SaaS Enterprise Valuation Metrics</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent" /> Distressed Asset Valuation & Credit Modeling</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-white/40 flex justify-between">
              <span>CURRICULUM STREAMS: 3 distinct paths</span>
              <span className="text-accent">100% Adaptive learning system</span>
            </div>
          </div>
        );

      case "03":
        // AI and automation exposure: Code Terminal
        return (
          <div className="flex flex-col h-full text-left font-mono text-[11px] leading-relaxed">
            <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-4 shrink-0 text-white/40">
              <Terminal className="w-3.5 h-3.5 text-accent" />
              <span>data_pipeline.py</span>
              <div className="ml-auto flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              </div>
            </div>

            <div className="flex-grow space-y-2 pr-2">
              <p className="text-white/40"># Initialize automation ledger tools</p>
              <p className="text-white"><span className="text-purple-400">import</span> pyfinance_agent <span className="text-purple-400">as</span> fa</p>
              <p className="text-white">agent = fa.FinanceAgent(model=<span className="text-emerald-400">"ledger-v4"</span>)</p>
              <br />
              <p className="text-white/60">[INFO] Connecting to corporate ERP endpoints...</p>
              <p className="text-accent">[SUCCESS] Connected (HTTP 200 OK)</p>
              <p className="text-white/60">[RUNNING] Fetching transaction ledgers for FY 2026...</p>
              <p className="text-white/80"> - Processed 42,400 journal entries in 2.1s</p>
              <p className="text-white/60">[RUNNING] Reconciling and calculating cashflow forecasts...</p>
              <p className="text-emerald-400">✓ No discrepancies detected. Cash balance matches.</p>
              <p className="text-white/40"># Save automatically generated workbook</p>
              <p className="text-white">agent.export_to_excel(<span className="text-emerald-400">"fy26_cashflow_model.xlsx"</span>)</p>
              <p className="text-accent font-bold">[SUCCESS] File saved successfully. Ready for partner review.</p>
            </div>
          </div>
        );

      case "04":
        // Global finance context: Audit/Compliance Checklist
        return (
          <div className="flex flex-col h-full justify-between text-left font-sans">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
                <div>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Internal Audit Control</div>
                  <h4 className="text-sm font-semibold text-white mt-1">Audit Trail & Control Log</h4>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Monitor
                </span>
              </div>

              <div className="space-y-3.5">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">IAS 1 Presentation Framework</div>
                    <div className="text-[10px] text-white/40 mt-0.5">Accrual basis of accounting & materiality logic</div>
                  </div>
                  <span className="text-[10px] bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 px-2 py-0.5 rounded">Verified</span>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">SEC Section 404 Control Check</div>
                    <div className="text-[10px] text-white/40 mt-0.5">Internal control over financial reporting documentation</div>
                  </div>
                  <span className="text-[10px] bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 px-2 py-0.5 rounded">Verified</span>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">SOX Section 302 Disclosure</div>
                    <div className="text-[10px] text-white/40 mt-0.5">Officer sign-off simulation and compliance log verification</div>
                  </div>
                  <span className="text-[10px] bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 px-2 py-0.5 rounded">Verified</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-white/40 flex justify-between">
              <span>SYSTEM: Multi-region Compliance Audit</span>
              <span className="text-accent">Target: ZERO Errors</span>
            </div>
          </div>
        );

      case "05":
        // Practical simulations: Balance Sheet Chart
        return (
          <div className="flex flex-col h-full justify-between text-left font-sans">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Asset Simulation Workspace</div>
                  <h4 className="text-sm font-semibold text-white mt-1">Simulated Balance Sheet & KPIs</h4>
                </div>
                <span className="text-[10px] font-mono bg-white/5 text-white/60 px-2 py-0.5 rounded">Workbook 04</span>
              </div>

              {/* Numbers */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5">
                  <div className="text-[9px] text-white/45 uppercase tracking-wider font-mono">Revenue</div>
                  <div className="text-sm font-bold text-white mt-0.5">$12,420,000</div>
                  <div className="text-[8px] text-emerald-400 font-mono mt-0.5">+14.2% YoY</div>
                </div>
                <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5">
                  <div className="text-[9px] text-white/45 uppercase tracking-wider font-mono">EBITDA Margin</div>
                  <div className="text-sm font-bold text-white mt-0.5">25.8%</div>
                  <div className="text-[8px] text-emerald-400 font-mono mt-0.5">+1.8% QoQ</div>
                </div>
                <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5">
                  <div className="text-[9px] text-white/45 uppercase tracking-wider font-mono">Free Cash Flow</div>
                  <div className="text-sm font-bold text-white mt-0.5">$1,840,000</div>
                  <div className="text-[8px] text-rose-400 font-mono mt-0.5">-2.4% Capital Exp</div>
                </div>
              </div>

              {/* Visual Bars representation */}
              <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3">
                <div className="text-[9px] text-white/45 uppercase tracking-wider font-mono mb-2.5">Projected Cash Balance (6 months)</div>
                <div className="flex items-end gap-2 h-[50px] pt-2">
                  <div className="flex-1 bg-white/5 rounded-t h-[40%] hover:bg-accent/40 transition-colors" />
                  <div className="flex-1 bg-white/5 rounded-t h-[55%] hover:bg-accent/40 transition-colors" />
                  <div className="flex-1 bg-white/5 rounded-t h-[50%] hover:bg-accent/40 transition-colors" />
                  <div className="flex-1 bg-white/5 rounded-t h-[70%] hover:bg-accent/40 transition-colors" />
                  <div className="flex-1 bg-white/5 rounded-t h-[80%] hover:bg-accent/40 transition-colors" />
                  <div className="flex-1 bg-accent rounded-t h-[95%]" />
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-white/40 flex justify-between">
              <span>FINANCE RUNTIME: active workbook loaded</span>
              <span className="text-accent">Drill-down active</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id={sectionId}
      className="w-full bg-transparent text-white section-padding overflow-visible relative"
    >
      <NeonGlowOrb 
        className="left-[20%] top-[25%] -translate-x-1/2 -translate-y-1/2 z-0"
        size={450}
        opacity={0.18}
        blur={50}
      />
      <NeonGlowOrb 
        className="left-[75%] top-[70%] -translate-x-1/2 -translate-y-1/2 z-0"
        size={450}
        opacity={0.18}
        blur={50}
      />

      <div className="site-shell relative z-10">
        {/* Storytelling Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-start">
          <div className="lg:col-span-7">
            <span className="section-eyebrow">
              CORE FEATURES
            </span>
            <h2 className="section-title">
              Why learners and employers take 4AT Academy seriously
            </h2>
          </div>
          <div className="lg:col-span-5 lg:mt-12">
            <div className="border-l-2 border-accent/40 pl-6">
              <ScrollRevealText
                text="Most finance training stops at content delivery. We go further by connecting learning to job roles, practical workflows, readiness checks, and the expectations of modern finance teams."
                className="section-desc"
              />
            </div>
          </div>
        </div>

        {/* Feature Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left panel: Feature Explorer list */}
          <div className="lg:col-span-5 space-y-4">
            {features.map((feat) => {
              const IconComp = feat.icon;
              const isActive = activeId === feat.id;
              
              return (
                <div
                  key={feat.id}
                  onClick={() => setActiveId(feat.id)}
                  className={cn(
                    "flex flex-col text-left p-6 rounded-xl border transition-all duration-300 select-none cursor-pointer",
                    isActive 
                      ? "bg-[#121212]/60 border-accent/20 shadow-[0_12px_30px_rgba(0,0,0,0.3)]" 
                      : "bg-transparent border-transparent hover-fine:bg-[#121212]/20"
                  )}
                >
                  <div className="flex items-center gap-4">
                    {/* Glowing index or icon indicator */}
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                        isActive 
                          ? "bg-accent/10 border border-accent/30 text-[var(--color-accent)]" 
                          : "bg-white/5 border border-white/10 text-white/40"
                      )}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-white/30 tracking-wider">FEAT_{feat.id}</span>
                        {isActive && <span className="w-1 h-1 rounded-full bg-accent animate-ping" />}
                      </div>
                      <h3
                        className={cn(
                          "text-base font-bold font-sans mt-0.5 transition-colors duration-300",
                          isActive ? "text-accent" : "text-white/80"
                        )}
                      >
                        {feat.title}
                      </h3>
                    </div>
                  </div>

                  {/* Expanded description inside left panel */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm font-normal leading-relaxed text-ink-secondary pl-14 pr-4">
                          {feat.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right panel: High-Fidelity Mock Screen Area */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="relative w-full aspect-[16/11] rounded-2xl bg-[#121212] border border-white/8 p-6 sm:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden">
              {/* Decorative top dot status header */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0" />
              
              {/* Inner glowing radial blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/3 rounded-full blur-[70px] pointer-events-none" />

              {/* Render dynamic screens based on state with fade animations */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="h-full w-full"
                >
                  {renderMockUI()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Double Column Narrative Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mt-20 lg:mt-28 pt-12 border-t border-white/8 text-base font-normal leading-relaxed text-ink-secondary font-sans">
          <div>
            <p>
              Our curriculum-mapping and job role targets ensure that every hour spent studying translates directly into employer-valued skills. We align closely with corporate finance teams to meet hiring demands.
            </p>
          </div>
          <div>
            <p>
              By introducing automation, real audit disciplines, and practical simulations early, we prepare candidates to hit the ground running from day one, minimizing training costs for recruiters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
