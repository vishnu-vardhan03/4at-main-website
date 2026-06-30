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

import ScrollProgress from "@/components/ai-home/ui/ScrollProgress";
import MouseGlow from "@/components/ai-home/ui/MouseGlow";

import { useEffect, useState } from "react";

export function ServicesPage() {
  const [stars, setStars] = useState<{ left: string; top: string; size: number; opacity: number }[]>([]);
  useEffect(() => {
    setStars(
      Array.from({ length: 150 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() > 0.85 ? 2 : 1,
        opacity: 0.1 + Math.random() * 0.5,
      }))
    );
  }, []);

  return (
    <main id="top" className="services-page dark bg-background text-foreground antialiased min-h-screen relative">
      <ScrollProgress />
      <MouseGlow />

      {/* Fixed Ambient Background Tint (stuck behind scrolling content) */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#011116] via-[#01030e] to-[#010e17] pointer-events-none z-0" />
      


      {/* Global Starfield Background Layer (Fixed parallax dots spanning the whole page) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {stars.map((star, idx) => (
          <div
            key={idx}
            className="absolute bg-white rounded-full"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

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
