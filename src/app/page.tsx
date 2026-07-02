<<<<<<< HEAD
import Nav from "@/components/layout/Nav";
import HeroSection from "@/components/hero/HeroSection";
import GlimpseSection from "@/components/sections/GlimpseSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import WhySection from "@/components/sections/WhySection";
import AgentsSection from "@/components/sections/AgentsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import {SecuritySection, PricingSection, FaqSection,} from "@/components/sections/OtherSections";
import HybridSection from "@/components/sections/HybridSection";
import FooterSection from "@/components/sections/FooterSection";
import Reveal from "@/components/ui/Reveal";
import ScrollProgress from "@/components/ui/ScrollProgress";
import MouseGlow from "@/components/ui/MouseGlow";
import SectionWrapper from "@/components/ui/SectionWrapper";


export default function HomePage() {
  return (
    <main>
       <ScrollProgress />
       <MouseGlow />
      {/* ── Sticky nav ────────────────── */}
      <Nav />

      {/* ── 1. Hero ───────────────────── */}
        <HeroSection />
        
      {/* ── 2. Product Glimpse ────────── */}
      <SectionWrapper>
      <Reveal>
        <GlimpseSection />
      </Reveal>
       </SectionWrapper>

      {/* ── 3. Core Capabilities ─────── */}
      <SectionWrapper>
      <Reveal>
        <CapabilitiesSection />
      </Reveal>
      </SectionWrapper>

      {/* ── 4. Why 4AT ───────────────── */}
      <SectionWrapper>
      <Reveal>
        <WhySection />
      </Reveal>
      </SectionWrapper>

      {/* ── 5. AI Agents ─────────────── */}
      <SectionWrapper>
      <Reveal>
        <AgentsSection />
      </Reveal>
      </SectionWrapper>

      {/* ── 6. How It Works ──────────── */}
      <SectionWrapper>
      <Reveal>
        <HowItWorksSection />
      </Reveal>
      </SectionWrapper>

      {/* ── 7. Integrations ──────────── */}
      <SectionWrapper>
      <Reveal>
        <IntegrationsSection />
      </Reveal>
      </SectionWrapper>

      {/* ── 8. Pricing ───────────────── */}
      <SectionWrapper>
      <Reveal>
        <PricingSection />
      </Reveal>
      </SectionWrapper>

      {/* ── 9. Security ──────────────── */}
      <SectionWrapper>
      <Reveal>
        <SecuritySection />
      </Reveal>
      </SectionWrapper>
{/* ── 10. Hybrid Support ───────── */}
      <SectionWrapper>
      <Reveal>
        <HybridSection />
      </Reveal>
      </SectionWrapper>

      {/* ── 12. FAQ ──────────────────── */}
      <FaqSection />

      {/* ── 13. CTA + Footer ─────────── */}

      <FooterSection />
    </main>
  );
=======
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "4AT | AI-Driven Digital Experiences",
  description: "Premium AI consulting studio helping ambitious teams simplify workflows and ship intelligent products.",
  openGraph: {
    title: "4AT | AI-Driven Digital Experiences",
    description: "Premium AI consulting studio helping ambitious teams simplify workflows and ship intelligent products.",
  },
};

export default function Home() {
  return <HomeClient />;
>>>>>>> eba822a4ba5f89e709ef2d53a3641fd0d3b52552
}
