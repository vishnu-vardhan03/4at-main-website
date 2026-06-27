"use client";

import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "./Hero";
import { TrustBar } from "./TrustBar";
import { HybridReminder } from "./HybridReminder";
import { Services } from "./Services";
import { WhoWeServe } from "./WhoWeServe";
import { Engagement } from "./Engagement";
import { Testimonials } from "./Testimonials";
import { ContactCTA } from "./ContactCTA";

export function ServicesPage() {
  return (
    <main id="top" className="services-page dark bg-background text-foreground antialiased min-h-screen relative">
      {/* Fixed Ambient Background Tint (stuck behind scrolling content) */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#011116] via-[#01030e] to-[#010e17] pointer-events-none z-0" />
      
      {/* Soft fixed ambient glows that stay in place */}
      <div className="fixed left-0 top-[15%] -translate-x-[25%] w-[600px] h-[600px] rounded-full bg-sky-500/12 blur-[100px] pointer-events-none z-0" />
      <div className="fixed right-0 top-[25%] translate-x-[25%] w-[700px] h-[700px] rounded-full bg-sky-600/8 blur-[120px] pointer-events-none z-0" />

      {/* Content wrapper */}
      <div className="relative z-10">
        <Nav />
        <Hero />
        <TrustBar />
        <HybridReminder />
        <Services />
        <WhoWeServe />
        <Engagement />
        <Testimonials />
        <ContactCTA />
        <Footer />
      </div>
    </main>
  );
}
