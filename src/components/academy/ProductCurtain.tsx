"use client";

import { DarkZoneWrapper } from "@/components/academy/DarkZoneWrapper";
import { DeferredSection } from "@/components/academy/DeferredSection";

export function ProductCurtain({
  lmsSection,
  children,
}: {
  lmsSection: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* Light Zone — Features loaded via DeferredSection for consistent lazy loading */}
      <div className="relative z-10 zone-light">
        <DeferredSection section="features" sectionId="programs" />
      </div>

      {/* Dark Zone */}
      <div className="relative z-30 zone-dark">
        <DarkZoneWrapper>
          <DeferredSection section="target-audience" sectionId="audience" />

          <div id="lms-pin-wrapper" className="w-full relative z-20">
            {lmsSection}
          </div>

          {children}
        </DarkZoneWrapper>
      </div>
    </div>
  );
}
