"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { shouldDisableExpensiveEffects } from "@/lib/performance";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (shouldDisableExpensiveEffects()) {
      return;
    }

    let lenis: Lenis | null = null;
    let tickerCallback: ((time: number) => void) | null = null;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#")) {
          if (href === "#") {
            e.preventDefault();
            lenis?.scrollTo(0);
          } else {
            try {
              const targetElement = document.querySelector(href) as HTMLElement;
              if (targetElement) {
                e.preventDefault();
                lenis?.scrollTo(targetElement);
              }
            } catch (err) {
              console.error(err);
            }
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { passive: false });

    const handleVisibilityChange = () => {
      const tracks = document.querySelectorAll(".marquee-track");
      tracks.forEach((track) => {
        const element = track as HTMLElement;
        if (document.hidden) {
          element.style.animationPlayState = "paused";
        } else {
          element.style.animationPlayState = "";
        }
      });
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const init = () => {
      lenis = new Lenis({
        lerp: 0.065,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.05,
      });

      lenis.on("scroll", ScrollTrigger.update);
      tickerCallback = (time) => lenis?.raf(time * 1000);

      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
    };

    init();

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (tickerCallback) gsap.ticker.remove(tickerCallback);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
