"use client";

import React, { useState, useRef } from "react";
import { Button } from "./Button";
import { NeonGlowOrb } from "@/components/academy/NeonGlowOrb";

interface CourseInfo {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  price: string;
}

const coursesData: Record<string, Record<string, CourseInfo>> = {
  graduate: {
    mnc: {
      title: "MNC Finance Readiness — Level 1",
      subtitle: "PREPARATION PATHWAY: MNC FINANCE READINESS",
      description: "Best for beginners targeting accounting, ERP, reporting, and finance operations roles in growing or global companies.",
      bullets: [
        "60-70 hours of guided training.",
        "ERP, Excel, automation, and AI tool exposure.",
        "Business communication and interview readiness.",
        "Foundation in compliance and reporting expectations."
      ],
      price: "₹35,000"
    },
    audit: {
      title: "Specialized Course in Advanced Corporate Audit & Taxation",
      subtitle: "PREPARATION PATHWAY: STATUTORY COMPLIANCE & RISK AUDIT",
      description: "Delve straight into global tax architectures, statutory audit rules, internal control assessments, and automated audit tools used by Big 4 firms to verify corporate financial statements.",
      bullets: [
        "US Tax & GST Core Frameworks",
        "Internal Audit Simulation Lab",
        "Case studies on real corporate filings",
        "Mock statutory audit exercises"
      ],
      price: "₹42,000"
    }
  },
  professional: {
    fpna: {
      title: "Strategic Program in Financial Planning & Analysis (FP&A)",
      subtitle: "PREPARATION PATHWAY: ADVANCED MODELING & REPORTING",
      description: "Engineered for working accountants and junior analysts looking to transition to strategic advisory roles. Master dynamic forecasting models, capital budgeting formulas, and executive dashboards.",
      bullets: [
        "Three-statement integrated modeling in Excel",
        "AI tools for financial data extraction",
        "Variance analysis & rolling forecasts",
        "Business presentation & executive communication"
      ],
      price: "₹50,000"
    },
    "audit-tax": {
      title: "Global Audit & Tax Management Pathway",
      subtitle: "PREPARATION PATHWAY: CONTROLLER & TAX ARCHITECT RESKILL",
      description: "For finance practitioners looking to transition into high-paying global tax audit and financial controller roles. Covers complex cross-border tax structures, transfer pricing, and corporate governance.",
      bullets: [
        "Cross-Border Transfer Pricing modules",
        "International Taxation Treaties",
        "SOX Compliance & Internal Controls",
        "Direct connection to Global Delivery Centers"
      ],
      price: "₹58,000"
    }
  }
};

export function CourseRecommender() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<{
    profile: "graduate" | "professional" | null;
    target: string | null;
  }>({
    profile: null,
    target: null
  });

  const stepContainerRef = useRef<HTMLDivElement>(null);

  const handleProfileSelect = (profile: "graduate" | "professional") => {
    setAnswers((prev) => ({ ...prev, profile, target: null }));
    setStep(2);
  };

  const handleTargetSelect = (target: string) => {
    setAnswers((prev) => ({ ...prev, target }));
    setStep(3);
  };

  const resetWizard = () => {
    setAnswers({ profile: null, target: null });
    setStep(1);
  };

  const progressPercent = step === 1 ? 33 : step === 2 ? 66 : 100;
  const recommendedCourse =
    answers.profile && answers.target
      ? coursesData[answers.profile]?.[answers.target]
      : null;

  return (
    <section id="recommender" className="section-padding bg-transparent relative overflow-visible flex flex-col items-center">
      {/* Background circle covering the tool */}
      <NeonGlowOrb 
        className="left-[68%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-0"
        size={450}
        opacity={0.18}
        blur={50}
      />

      <style>{`
        .recommender-wizard-container {
          background: #121212;
          box-shadow:
            0 1px 0 0 rgba(255, 255, 255, 0.08) inset,
            0 -1px 0 0 rgba(0, 0, 0, 0.4) inset,
            0 20px 40px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.05);
          border: none;
        }

        .wizard-option-skeuo {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.04) 0%,
            rgba(255, 255, 255, 0.01) 100%
          );
          border: none;
          box-shadow:
            0 1px 0 0 rgba(255, 255, 255, 0.1) inset,
            0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
            0 4px 12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.06);
          transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .wizard-option-skeuo:hover {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.03) 100%
          );
          box-shadow:
            0 1px 0 0 rgba(255, 255, 255, 0.15) inset,
            0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
            0 12px 24px rgba(0, 229, 195, 0.08),
            0 0 0 1px rgba(0, 229, 195, 0.3);
          transform: translateY(-2px);
        }

        .wizard-option-skeuo:active {
          transform: translateY(0);
          box-shadow:
            0 1px 0 0 rgba(255, 255, 255, 0.08) inset,
            0 -1px 0 0 rgba(0, 0, 0, 0.4) inset,
            0 4px 6px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(0, 229, 195, 0.2);
        }

        .recommended-course-card-skeuo {
          background: #0f1c1a;
          box-shadow:
            0 1px 0 0 rgba(0, 229, 195, 0.2) inset,
            0 -1px 0 0 rgba(0, 0, 0, 0.4) inset,
            0 20px 40px rgba(0, 229, 195, 0.06),
            0 0 0 1px rgba(0, 229, 195, 0.25);
          border: none;
        }
      `}</style>

      <div className="site-shell relative z-10 flex flex-col items-center">
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="section-eyebrow">
            FITMENT PATHWAY TOOL
          </span>
          <h2 className="section-title text-center">
            Interactive Course Recommender
          </h2>
          <p className="section-desc text-center mt-6">
            Not sure where to start? Find the right finance track in minutes.
          </p>
          <p className="mt-2 max-w-xl mx-auto text-small text-ink-tertiary tracking-tight text-center font-sans">
            Choose your career goal and we’ll guide you to the track that best matches your background, readiness, and target role.
          </p>
        </div>

        {/* Wizard Container */}
        <div id="recommender-wizard" className="w-full max-w-[720px] recommender-wizard-container rounded-2xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
          {/* Progress Tracker */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-white/5">
            <div
              className="h-full w-full bg-accent transition-transform duration-500 ease-out origin-left"
              style={{ transform: `scaleX(${progressPercent / 100})` }}
            />
          </div>

          <div className="flex justify-between items-center text-xs text-ink-tertiary mb-8">
            <span className="font-mono tracking-wider">STEP 0{step} OF 03</span>
            <span className="font-mono">{progressPercent}% COMPLETE</span>
          </div>

          {/* Morphing step frame */}
          <div ref={stepContainerRef}>
            {step === 1 && (
              <div>
                <h3 className="text-h3 font-bold tracking-tight mb-8 font-sans">
                  Where are you currently in your career?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => handleProfileSelect("graduate")}
                    className="wizard-option-skeuo group cursor-pointer rounded-xl p-6 flex flex-col justify-between min-h-[160px]"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-3xl block select-none">🎓</span>
                      {/* Checkbox indicator circle */}
                      <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover-fine:border-accent transition-colors duration-300">
                        <span className="w-2.5 h-2.5 rounded-full bg-transparent group-hover-fine:bg-accent transition-colors duration-300" />
                      </span>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-bold text-white text-lg group-hover-fine:text-accent transition-colors duration-200">Fresh Graduate</h4>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">Commerce / Finance graduate seeking your first placement</p>
                    </div>
                  </div>

                  <div
                    onClick={() => handleProfileSelect("professional")}
                    className="wizard-option-skeuo group cursor-pointer rounded-xl p-6 flex flex-col justify-between min-h-[160px]"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-3xl block select-none">💼</span>
                      {/* Checkbox indicator circle */}
                      <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover-fine:border-accent transition-colors duration-300">
                        <span className="w-2.5 h-2.5 rounded-full bg-transparent group-hover-fine:bg-accent transition-colors duration-300" />
                      </span>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-bold text-white text-lg group-hover-fine:text-accent transition-colors duration-200">Working Professional</h4>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">Experienced finance practitioner looking to level up your career</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-h3 font-bold tracking-tight mb-8 font-sans">
                  What is your primary career target?
                </h3>
                {answers.profile === "graduate" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div
                      onClick={() => handleTargetSelect("mnc")}
                      className="wizard-option-skeuo group cursor-pointer rounded-xl p-6 flex flex-col justify-between min-h-[160px]"
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-2xl block select-none">🏢</span>
                        <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover-fine:border-accent transition-colors duration-300">
                          <span className="w-2.5 h-2.5 rounded-full bg-transparent group-hover-fine:bg-accent transition-colors duration-300" />
                        </span>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-bold text-white text-lg group-hover-fine:text-accent transition-colors duration-200">MNC Placement Track</h4>
                        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">Acquire core accounting & secure MNC placement</p>
                      </div>
                    </div>

                    <div
                      onClick={() => handleTargetSelect("audit")}
                      className="wizard-option-skeuo group cursor-pointer rounded-xl p-6 flex flex-col justify-between min-h-[160px]"
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-2xl block select-none">📈</span>
                        <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover-fine:border-accent transition-colors duration-300">
                          <span className="w-2.5 h-2.5 rounded-full bg-transparent group-hover-fine:bg-accent transition-colors duration-300" />
                        </span>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-bold text-white text-lg group-hover-fine:text-accent transition-colors duration-200">Chartered Accounting</h4>
                        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">Delve into high-stakes corporate accounting standards</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div
                      onClick={() => handleTargetSelect("fpna")}
                      className="wizard-option-skeuo group cursor-pointer rounded-xl p-6 flex flex-col justify-between min-h-[160px]"
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-2xl block select-none">📊</span>
                        <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover-fine:border-accent transition-colors duration-300">
                          <span className="w-2.5 h-2.5 rounded-full bg-transparent group-hover-fine:bg-accent transition-colors duration-300" />
                        </span>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-bold text-white text-lg group-hover-fine:text-accent transition-colors duration-200">FP&A & Modeling</h4>
                        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">Transition to financial planning & executive roles</p>
                      </div>
                    </div>

                    <div
                      onClick={() => handleTargetSelect("audit-tax")}
                      className="wizard-option-skeuo group cursor-pointer rounded-xl p-6 flex flex-col justify-between min-h-[160px]"
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-2xl block select-none">🛡️</span>
                        <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover-fine:border-accent transition-colors duration-300">
                          <span className="w-2.5 h-2.5 rounded-full bg-transparent group-hover-fine:bg-accent transition-colors duration-300" />
                        </span>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-bold text-white text-lg group-hover-fine:text-accent transition-colors duration-200">Global Audit & Tax</h4>
                        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">Master risk compliance, internal audit, global taxation</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <button
                  onClick={() => setStep(1)}
                  className="mt-8 text-xs text-ink-secondary hover-fine:text-accent font-semibold tracking-wider uppercase flex items-center gap-2 transition-colors duration-200"
                >
                  ← Go Back
                </button>
              </div>
            )}

            {step === 3 && recommendedCourse && (
              <div>
                <h3 className="text-h3 font-bold tracking-tight mb-6 text-center font-sans">
                  Your Fitment Profile Suggests:
                </h3>
                
                {/* Output Recommended Course Card with skeuomorphic design */}
                <div className="recommended-course-card-skeuo rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold tracking-widest text-accent uppercase bg-accent/5 border border-accent/30 px-3 py-1 rounded-md">
                      🏆 RECOMMENDED CURRICULUM PATHWAY
                    </span>
                    <span className="text-[10px] font-mono text-accent font-semibold bg-accent/10 border border-accent/20 px-2 py-0.5 rounded animate-pulse">
                      98% MATCH
                    </span>
                  </div>

                  <h4 className="text-h2 font-bold tracking-tight text-white mb-2 font-sans">
                    {recommendedCourse.title}
                  </h4>
                  <p className="text-sm font-semibold text-accent mb-6">
                    {recommendedCourse.subtitle}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {recommendedCourse.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                    {recommendedCourse.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-3 bg-white/[0.02] px-4 py-3 rounded-xl border border-white/5">
                        <span className="text-accent font-bold">✓</span>
                        <span className="text-xs font-semibold text-white/90">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5">
                    <div className="text-center sm:text-left">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Commitment Price</p>
                      <p className="text-2xl font-bold text-white mt-1 font-sans">{recommendedCourse.price}</p>
                    </div>
                    <Button href="#courses" variant="primary" className="w-full sm:w-auto font-bold tracking-wider px-8 py-4 shadow-[0_0_20px_rgba(0,229,195,0.3)]">
                      Claim Your Seat & Enroll →
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={resetWizard}
                    className="text-xs text-ink-secondary hover-fine:text-accent font-semibold tracking-wider uppercase flex items-center gap-2 transition-colors duration-200"
                  >
                    ↻ Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}