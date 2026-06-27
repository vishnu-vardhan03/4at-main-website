"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

export function Nav() {
  const [isDarkBg, setIsDarkBg] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const headerPos = 60; // position of navbar on screen
      const sections = document.querySelectorAll("section, div[id]");
      let activeBgIsLight = false;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= headerPos && rect.bottom >= headerPos) {
          const id = sec.id;
          const isLightSec = id === "services" || id === "features-grid" || id === "client-voices";
          if (isLightSec) {
            activeBgIsLight = true;
          }
        }
      });
      setIsDarkBg(!activeBgIsLight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,calc(100%-2rem))]"
    >
      <div
        className={`rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isDarkBg
            ? "bg-zinc-950/40 backdrop-blur-[20px] border border-white/[0.08]"
            : "bg-white/60 backdrop-blur-[20px] border border-black/[0.08]"
          }`}
      >
        <Link
          href="/"
          className="relative flex items-center"
        >
          <motion.div
            initial="initial"
            whileHover="hover"
            className="flex items-center cursor-pointer"
          >
            <motion.span
              aria-label="4AT Logo"
              role="img"
              className="brand-logo-gradient relative z-10"
              style={{ WebkitMaskImage: `url(${logo.src})`, maskImage: `url(${logo.src})` }}
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.1 }
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
            <motion.span
              variants={{
                initial: { width: 0, opacity: 0, marginLeft: 0 },
                hover: { width: "auto", opacity: 1, marginLeft: 10 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`font-black tracking-wider uppercase text-base overflow-hidden whitespace-nowrap ${
                isDarkBg ? "text-white" : "text-black"
              }`}
            >
              4AT
            </motion.span>
          </motion.div>
        </Link>
        <nav
          className={`hidden md:flex items-center gap-8 text-sm font-semibold transition-colors duration-300 ${isDarkBg ? "text-zinc-300" : "text-zinc-800"
            }`}
        >
          <Link href="/about" className={`transition-colors ${isDarkBg ? "hover:text-white" : "hover:text-black"}`}>About</Link>
          <Link href="/services" className={`transition-colors ${isDarkBg ? "hover:text-white" : "hover:text-black"}`}>Services</Link>
          <Link href="/product" className={`transition-colors ${isDarkBg ? "hover:text-white" : "hover:text-black"}`}>Product</Link>
          <Link href="/academy" className={`transition-colors ${isDarkBg ? "hover:text-white" : "hover:text-black"}`}>Academy</Link>
          <Link href="/contact" className={`transition-colors ${isDarkBg ? "hover:text-white" : "hover:text-black"}`}>Contact us</Link>
        </nav>
        <Link
          href="/contact"
          className={`text-sm rounded-full px-4 py-1.5 font-medium transition-all duration-300 ${isDarkBg
              ? "bg-white text-black hover:shadow-[0_0_24px_rgba(255,255,255,0.4)]"
              : "bg-black text-white hover:shadow-[0_0_24px_rgba(0,0,0,0.2)]"
            }`}
        >
          Let&apos;s talk
        </Link>
      </div>
    </motion.header>
  );
}
