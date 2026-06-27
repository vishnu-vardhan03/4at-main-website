"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { ProductCurtain } from "@/components/academy/ProductCurtain";
import { DeferredSection } from "@/components/academy/DeferredSection";

const SectionLoader = () => <div className="h-[50vh] w-full animate-pulse bg-surface/50" />;

const About = dynamic(() => import("@/components/academy/About").then(mod => mod.About), { loading: () => <SectionLoader /> });
const CourseRecommender = dynamic(() => import("@/components/academy/CourseRecommender").then(mod => mod.CourseRecommender), { loading: () => <SectionLoader /> });
const CoreFeatures = dynamic(() => import("@/components/academy/CoreFeatures").then(mod => mod.CoreFeatures), { loading: () => <SectionLoader /> });
const CredibilityRecruiters = dynamic(() => import("@/components/academy/CredibilityRecruiters").then(mod => mod.CredibilityRecruiters), { loading: () => <SectionLoader /> });
const Faculty = dynamic(() => import("@/components/academy/Faculty").then(mod => mod.Faculty), { loading: () => <SectionLoader /> });
const TestimonialsSocialProof = dynamic(() => import("@/components/academy/TestimonialsSocialProof").then(mod => mod.TestimonialsSocialProof), { loading: () => <SectionLoader /> });
const ContactUs = dynamic(() => import("@/components/academy/ContactUs").then(mod => mod.ContactUs), { loading: () => <SectionLoader /> });

export function PageShell({ ctaRoute, children }: { ctaRoute: string; children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden bg-transparent">
      {/* Solid canvas background wrapper placed at the very bottom stacking context */}
      <div className="absolute inset-0 bg-canvas z-[-20] pointer-events-none" />

      <div className="relative z-10 w-full bg-transparent">
        {children}
        <About />
        <ProductCurtain
          lmsSection={<DeferredSection section="lms-courses" sectionId="courses" />}
        >
          <CourseRecommender />
          <CoreFeatures />
          <DeferredSection section="how-it-works" sectionId="features" />
          <CredibilityRecruiters />
          <Faculty />
          <TestimonialsSocialProof />
          <DeferredSection section="enrollment-cta" sectionId="enroll" href={ctaRoute} />
          <ContactUs />
        </ProductCurtain>
      </div>
    </div>
  );
}
