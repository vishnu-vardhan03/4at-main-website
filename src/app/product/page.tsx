import type { Metadata } from "next";

import HeroSection from "@/components/ai-home/hero/HeroSection";
import { Nav } from "@/components/home/Nav";
import AgentsSection from "@/components/ai-home/sections/AgentsSection";
import CapabilitiesSection from "@/components/ai-home/sections/CapabilitiesSection";
import { Footer } from "@/components/Footer";
import GlimpseSection from "@/components/ai-home/sections/GlimpseSection";
import HowItWorksSection from "@/components/ai-home/sections/HowItWorksSection";
import HybridSection from "@/components/ai-home/sections/HybridSection";
import IntegrationsSection from "@/components/ai-home/sections/IntegrationsSection";
import {
  FaqSection,
  PricingSection,
  SecuritySection,
} from "@/components/ai-home/sections/OtherSections";
import { ParallaxObserver } from "@/components/ai-home/sections/ParallaxObserver";
import WhySection from "@/components/ai-home/sections/WhySection";
import MouseGlow from "@/components/ai-home/ui/MouseGlow";
import Reveal from "@/components/ai-home/ui/Reveal";
import ScrollProgress from "@/components/ai-home/ui/ScrollProgress";
import SectionWrapper from "@/components/ai-home/ui/SectionWrapper";
import ProductCTA from "@/components/ai-home/sections/FooterSection";

export const metadata: Metadata = {
  title: "4AT AI — Finance Automation Platform",
  description:
    "Finance-native AI for reconciliation, compliance, and reporting. Purpose-built for your numbers.",
};

export default function ProductPage() {
  return (
    <main>
      <ScrollProgress />
      <MouseGlow />
      <Nav />
      <HeroSection />

      <SectionWrapper>
        <Reveal>
          <GlimpseSection />
        </Reveal>
      </SectionWrapper>

      <SectionWrapper>
        <Reveal>
          <CapabilitiesSection />
        </Reveal>
      </SectionWrapper>

      <SectionWrapper>
        <Reveal>
          <WhySection />
        </Reveal>
      </SectionWrapper>

      <SectionWrapper>
        <Reveal>
          <AgentsSection />
        </Reveal>
      </SectionWrapper>

      <SectionWrapper>
        <Reveal>
          <HowItWorksSection />
        </Reveal>
      </SectionWrapper>

      <SectionWrapper>
        <Reveal>
          <IntegrationsSection />
        </Reveal>
      </SectionWrapper>

      <SectionWrapper>
        <Reveal>
          <PricingSection />
        </Reveal>
      </SectionWrapper>

      <SectionWrapper>
        <Reveal>
          <SecuritySection />
        </Reveal>
      </SectionWrapper>

      <SectionWrapper>
        <Reveal>
          <HybridSection />
        </Reveal>
      </SectionWrapper>

      <FaqSection />
      <ProductCTA />
      <Footer />
      <ParallaxObserver />
    </main>
  );
}
