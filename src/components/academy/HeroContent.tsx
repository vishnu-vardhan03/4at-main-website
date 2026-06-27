"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { useState, useEffect } from "react";
import { client } from "@/lib/sanity";

export function HeroContent() {
  const [subtitle, setSubtitle] = useState("From training to hiring to deployment, our model is designed to turn finance learners into employer-ready talent.");
  const [ctaText, setCtaText] = useState("Explore Courses");

  useEffect(() => {
    async function fetchSettings() {
      try {
        const query = `*[_type == "siteSettings"][0] { heroSubtitle, ctaText }`;
        const data = await client.fetch(query);
        if (data) {
          if (data.heroSubtitle) setSubtitle(data.heroSubtitle);
          if (data.ctaText) setCtaText(data.ctaText);
        }
      } catch (err) {
        console.warn("Failed to fetch Hero Content settings, using default:", err);
      }
    }
    fetchSettings();
  }, []);

  return (
    <div className="hero-desc-container mt-12 max-w-2xl flex flex-col items-center lg:items-start w-full mx-auto lg:mx-0">
      <p className="hero-desc text-lead font-normal leading-[1.75] tracking-[0.01em] text-ink-primary/95 font-sans text-center lg:text-left">
        {subtitle === "From training to hiring to deployment, our model is designed to turn finance learners into employer-ready talent." ? (
          <>
            From <em className="font-sans italic text-accent font-bold">training</em> to <em className="font-sans italic text-accent font-bold">hiring</em> to <em className="font-sans italic text-accent font-bold">deployment</em>, our model is designed to turn finance learners into employer-ready talent.
          </>
        ) : (
          subtitle
        )}
      </p>

      <div className="hero-cta-container mt-12 flex flex-wrap gap-6 items-center justify-center lg:justify-start">
        <Button
          href="#courses"
          className="hero-cta-btn group"
        >
          {ctaText}
          <div className="w-5 h-5 rounded-full bg-black/10 group-hover:bg-black/20 flex items-center justify-center transition-colors ml-1 shrink-0">
            <ArrowRight className="w-3 h-3 text-current transition-transform group-hover:translate-x-0.5 shrink-0" />
          </div>
        </Button>
        <Button
          href="#contact-us"
          variant="secondary"
          className="hero-cta-btn"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}
