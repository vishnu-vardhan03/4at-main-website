import Nav from "@/components/layout/Nav";
import HeroSection from "@/components/hero/HeroSection";
import GlimpseSection from "@/components/sections/GlimpseSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import WhySection from "@/components/sections/WhySection";
import AgentsSection from "@/components/sections/AgentsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import {
  SecuritySection,
  PricingSection,
  FaqSection,
} from "@/components/sections/OtherSections";
import HybridSection from "@/components/sections/HybridSection";
import FooterSection from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <main>
      {/* ── Sticky nav ────────────────── */}
      <Nav />

      {/* ── 1. Hero ───────────────────── */}
      <HeroSection />

      {/* ── 2. Product Glimpse ────────── */}
      <GlimpseSection />

      {/* ── 3. Core Capabilities ─────── */}
      <CapabilitiesSection />

      {/* ── 4. Why 4AT ───────────────── */}
      <WhySection />

      {/* ── 5. AI Agents ─────────────── */}
      <AgentsSection />

      {/* ── 6. How It Works ──────────── */}
      <HowItWorksSection />

      {/* ── 7. Integrations ──────────── */}
      <IntegrationsSection />

      {/* ── 8. Pricing ───────────────── */}
      <PricingSection />

      {/* ── 9. Security ──────────────── */}
      <SecuritySection />

      {/* ── 10. Hybrid Support ───────── */}
      <HybridSection />

      {/* ── 12. FAQ ──────────────────── */}
      <FaqSection />

      {/* ── 13. CTA + Footer ─────────── */}
      <FooterSection />
    </main>
  );
}
