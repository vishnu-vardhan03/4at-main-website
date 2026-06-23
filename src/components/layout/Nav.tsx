"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "Product", href: "#capabilities", id: "capabilities" },
  { label: "AI Agents", href: "#agents", id: "agents" },
  { label: "Integrations", href: "#integrations", id: "integrations" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "Support", href: "#hybrid", id: "hybrid" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      let currentSection = "hero";

      NAV_LINKS.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150) {
          currentSection = link.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-[200]
        relative flex items-center justify-between
        px-6 py-3 rounded-full
        backdrop-blur-2xl transition-all duration-500 ease-out
        ${
          scrolled
            ? "border border-violet-500/20 bg-[rgba(4,6,15,0.78)] shadow-[0_8px_50px_rgba(139,92,246,0.15)]"
            : "border border-white/10 bg-[rgba(4,6,15,0.55)] shadow-[0_0_30px_rgba(139,92,246,0.05)]"
        }
      `}
      style={{
        width: "min(1200px, calc(100% - 2rem))",
      }}
    >
      {/* Ambient Glow */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-full
          bg-gradient-to-r
          from-violet-500/5
          via-blue-500/5
          to-cyan-500/5
        "
      />

      {/* Brand */}
      <Link
        href="#hero"
        className="relative z-10 flex items-center gap-3"
      >
        <span className="brand-mask" aria-hidden="true" />
        <span className="font-bold tracking-widest text-[16px]">
          4AT
        </span>
      </Link>

      {/* Navigation */}
      <ul className="relative z-10 hidden md:flex gap-7 text-sm font-medium">
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.id;

          return (
            <li key={link.href}>
              <a
                href={link.href}
                className={`
                  relative group transition-all duration-300
                  ${
                    isActive
                      ? "text-white"
                      : "text-white/65 hover:text-white"
                  }
                `}
              >
                {link.label}

                <span
                  className={`
                    absolute -bottom-1 left-0 h-[2px]
                    rounded-full
                    bg-gradient-to-r
                    from-violet-500
                    via-fuchsia-500
                    to-cyan-400
                    transition-all duration-300
                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </a>
            </li>
          );
        })}
      </ul>

      {/* CTA */}
      <a
        href="#cta-final"
        className="
          relative z-10 hidden md:inline-flex
          items-center gap-2
          px-5 py-2.5 rounded-full
          text-[13px] font-bold
          bg-white text-void
          transition-all duration-300
          hover:bg-gradient-to-r
          hover:from-violet-500
          hover:via-fuchsia-500
          hover:to-cyan-400
          hover:text-white
          hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]
        "
      >
        Let&apos;s talk
      </a>
    </nav>
  );
}
