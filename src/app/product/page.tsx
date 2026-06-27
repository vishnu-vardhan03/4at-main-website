import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import HeroSection from "@/components/ai-home/hero/HeroSection";
import AgentsSection from "@/components/ai-home/sections/AgentsSection";
import CapabilitiesSection from "@/components/ai-home/sections/CapabilitiesSection";
import GlimpseSection from "@/components/ai-home/sections/GlimpseSection";
import HowItWorksSection from "@/components/ai-home/sections/HowItWorksSection";
import HybridSection from "@/components/ai-home/sections/HybridSection";
import IntegrationsSection from "@/components/ai-home/sections/IntegrationsSection";
import { FaqSection, PricingSection, SecuritySection } from "@/components/ai-home/sections/OtherSections";
import WhySection from "@/components/ai-home/sections/WhySection";

export const metadata: Metadata = {
  title: "4AT AI — Finance-Native AI for Accounting",
  description:
    "Finance-native AI for reconciliation, exception review, document handling, reporting, and audit support.",
};

export default function ProductPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#04060f]">
        <HeroSection />
        <CapabilitiesSection />
        <AgentsSection />
        <GlimpseSection />
        <WhySection />
        <IntegrationsSection />
        <HowItWorksSection />
        <HybridSection />
        <SecuritySection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
