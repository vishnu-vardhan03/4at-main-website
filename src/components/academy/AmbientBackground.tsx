// Ambient background subtle lighting
// This component renders diffused radial gradient blobs with low opacity
// to replace the previous bright green blobs.

import React from "react";

// Configuration for each glow region
const glows = [
  // hero
  {
    name: "hero",
    color: "rgba(0,255,180,0.035)", // emerald
    size: "800px",
    intensity: "3%",
    position: "calc(10% + var(--random-x)) calc(15% + var(--random-y))",
  },
  // about_academy
  {
    name: "about",
    color: "rgba(0,210,255,0.03)", // cyan
    size: "600px",
    intensity: "2.5%",
    position: "calc(50% + var(--random-x)) calc(40% + var(--random-y))",
  },
  // executive_mentors
  {
    name: "mentors",
    color: "rgba(170,120,255,0.03)", // violet
    size: "700px",
    intensity: "2.5%",
    position: "calc(70% + var(--random-x)) calc(30% + var(--random-y))",
  },
  // recruiters
  {
    name: "recruiters",
    color: "rgba(0,220,180,0.035)", // teal (approx)
    size: "900px",
    intensity: "3%",
    position: "calc(80% + var(--random-x)) calc(70% + var(--random-y))",
  },
  // testimonials
  {
    name: "testimonials",
    color: "rgba(145,100,255,0.028)", // purple
    size: "500px",
    intensity: "2%",
    position: "calc(50% + var(--random-x)) calc(70% + var(--random-y))",
  },
  // final_cta
  {
    name: "cta",
    color: "rgba(0,255,180,0.035)", // emerald again
    size: "850px",
    intensity: "3.5%",
    position: "calc(20% + var(--random-x)) calc(85% + var(--random-y))",
  },
];

// Helper to generate a random offset between -120px and 120px
const randomOffset = () => `${Math.floor(Math.random() * 241 - 120)}px`;

export const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden" aria-hidden="true">
      {glows.map((g) => {
        const randomX = randomOffset();
        const randomY = randomOffset();
        const style: React.CSSProperties = {
          position: "absolute",
          width: g.size,
          height: g.size,
          background: `radial-gradient(circle, ${g.color} 0%, transparent 70%)`,
          filter: "blur(200px)",
          opacity: parseFloat(g.intensity) / 100,
          left: g.position.replace("var(--random-x)", randomX),
          top: g.position.replace("var(--random-y)", randomY),
          animation: "ambientMove 40s ease-in-out infinite alternate",
          willChange: "transform",
          transform: "translate3d(0,0,0)",
        };
        return <div key={g.name} style={style} />;
      })}
    </div>
  );
};

// Animation keyframes (will be added via global CSS)
