import type { Metadata } from "next";

import HeroSection from "@/components/hero/HeroSection";
import { Nav } from "@/components/home/Nav";
import AgentsSection from "@/components/sections/AgentsSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import { Footer } from "@/components/Footer";
import GlimpseSection from "@/components/sections/GlimpseSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import HybridSection from "@/components/sections/HybridSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import {
  FaqSection,
  PricingSection,
  SecuritySection,
} from "@/components/sections/OtherSections";
import { ParallaxObserver } from "@/components/ai-home/sections/ParallaxObserver";
import WhySection from "@/components/sections/WhySection";
import MouseGlow from "@/components/ui/MouseGlow";
import Reveal from "@/components/ui/Reveal";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProductCTA from "@/components/ai-home/sections/FooterSection";

export const metadata: Metadata = {
  title: "4AT AI | Finance Automation Platform",
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
