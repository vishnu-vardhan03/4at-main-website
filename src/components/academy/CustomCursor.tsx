"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [hoverState, setHoverState] = useState<"default" | "interactive" | "card">("default");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Direct DOM update for zero-delay position tracking
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isCard = target.closest('[data-cursor-view="true"]');
      const isInteractive = target.closest("a") || target.closest("button") || target.closest('[role="button"]');

      if (isCard) {
        setHoverState("card");
      } else if (isInteractive) {
        setHoverState("interactive");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Hide system cursor on desktop
    const styleEl = document.createElement("style");
    styleEl.id = "custom-cursor-hide-system";
    styleEl.innerHTML = `
      @media (pointer: fine) {
        body, a, button, [role="button"], [data-cursor-view="true"] {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      const styleNode = document.getElementById("custom-cursor-hide-system");
      if (styleNode) styleNode.remove();
    };
  }, [mounted]);

  if (!mounted) return null;

  // Map hover states to style values
  let width = 20;
  let height = 20;
  let bg = "transparent";
  let border = "rgba(255, 255, 255, 0.4)";
  let textOpacity = 0;

  if (hoverState === "card") {
    width = 48;
    height = 48;
    bg = "#ffffff";
    border = "#ffffff";
    textOpacity = 1;
  } else if (hoverState === "interactive") {
    width = 28;
    height = 28;
    bg = "transparent";
    border = "rgba(255, 255, 255, 0.8)";
    textOpacity = 0;
  }

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
      style={{
        transform: "translate3d(0px, 0px, 0) translate(-50%, -50%)",
        willChange: "transform",
      }}
    >
      <div
        className="rounded-full flex items-center justify-center border transition-all duration-200 ease-out"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: bg,
          borderColor: border,
        }}
      >
        <span
          className="text-[11px] font-semibold font-sans uppercase tracking-wider text-[#04060f] transition-opacity duration-200 select-none pointer-events-none"
          style={{
            opacity: textOpacity,
          }}
        >
          View
        </span>
      </div>
    </div>
  );
}
