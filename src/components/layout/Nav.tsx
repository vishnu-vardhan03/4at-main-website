"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home",         href: "#hero" },
  { label: "Product",      href: "#capabilities" },
  { label: "AI Agents",    href: "#agents" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing",      href: "#pricing" },
  { label: "Support",      href: "#hybrid" },
  // { label: "Academy",      href: "#academy" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[200] flex items-center justify-between
        px-6 py-3 rounded-full backdrop-blur-2xl transition-all duration-300
        ${scrolled
          ? "border border-violet-500/25 bg-[rgba(4,6,15,0.75)] shadow-[0_8px_40px_rgba(0,0,0,.4)]"
          : "border border-white/10 bg-[rgba(4,6,15,0.55)]"
        }`}
      style={{ width: "min(1200px, calc(100% - 2rem))" }}
    >
      {/* Brand */}
      <Link href="#hero" className="flex items-center gap-3">
        <span className="brand-mask" aria-hidden="true" />
        <span className="font-bold tracking-widest text-[16px]">4AT</span>
      </Link>

      {/* Links */}
      <ul className="hidden md:flex gap-7 text-sm font-medium text-white/65">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="hover:text-white transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full
                bg-gradient-to-r from-violet-500 to-violet-400 transition-all duration-300
                group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#cta-final"
        className="hidden md:inline-flex items-center gap-2 bg-white text-void
          px-5 py-2.5 rounded-full text-[13px] font-bold transition-all duration-200
          hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-400 hover:text-white"
      >
        Let&apos;s talk
      </a>
    </nav>
  );
}
