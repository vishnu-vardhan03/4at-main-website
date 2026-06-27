"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function MicrographicLoader() {
  const counterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Instantly reveal content and hide loader
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        gsap.set(mainContent, { opacity: 1, scale: 1 });
      }
      setIsVisible(false);
      return;
    }

    // Initialize counter animation
    const counterVal = { value: 0 };
    const counterEl = counterRef.current;

    // Animate the counter value with an elegant, dramatic ease
    const counterTween = gsap.to(counterVal, {
      value: 100,
      duration: 2.2,
      ease: "power4.inOut",
      onUpdate: () => {
        if (counterEl) {
          const val = Math.floor(counterVal.value);
          counterEl.textContent = val < 10 ? `0${val}` : `${val}`;
        }
      },
      onComplete: () => {
        // Trigger reveal timeline once counter completes
        const mainContent = document.getElementById("main-content");
        
        const loaderTl = gsap.timeline({
          onComplete: () => {
            setIsVisible(false);
          }
        });

        loaderTl.to(["#loader-logo", "#loader-counter-container"], {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power3.inOut"
        })
        .to("#loader-bg", {
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
          duration: 1.0,
          ease: "power4.inOut"
        }, "-=0.2")
        .to(mainContent, {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power4.out"
        }, "-=0.8");
      }
    });

    return () => {
      counterTween.kill();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="loader-bg"
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center pointer-events-none"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      {/* Ambient background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Glowing radial accent light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Minimalist branding logo at bottom-left */}
      <div 
        id="loader-logo" 
        className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex items-center gap-3 select-none pointer-events-none"
      >
        <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
          <span className="text-accent font-mono font-bold text-sm tracking-tighter">4AT</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white text-[11px] font-bold tracking-[0.25em] font-sans">4AT ACADEMY</span>
          <span className="text-accent text-[9px] font-mono tracking-widest uppercase">Curriculum V2.0</span>
        </div>
      </div>

      {/* Massive progress indicator at bottom-right */}
      <div 
        id="loader-counter-container" 
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex flex-col items-end leading-none font-black text-white select-none pointer-events-none"
      >
        <div 
          ref={counterRef}
          className="text-[12vw] sm:text-[10vw] font-sans tracking-tighter"
        >
          00
        </div>
        <div className="text-[9px] text-accent font-mono tracking-[0.4em] uppercase opacity-60 mr-2 mt-2">
          LOADING SYSTEM
        </div>
      </div>
    </div>
  );
}
