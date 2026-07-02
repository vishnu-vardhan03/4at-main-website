"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import React, { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";
    
    if (key) {
      posthog.init(key, {
        api_host: host,
        person_profiles: "identified_only", // Optimal serverless event structure
        capture_pageview: true, // Auto-capture page views on client navigation
        capture_heatmaps: true,
        // Strict security/masking configuration
        mask_all_element_attributes: true,
      });
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
