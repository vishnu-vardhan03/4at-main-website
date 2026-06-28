"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const productMenuItems = [
  { label: "Product", href: "/product#capabilities" },
  { label: "AI Agents", href: "/product#agents" },
  { label: "Integration", href: "/product#integrations" },
  { label: "Pricing", href: "/product#pricing" },
  { label: "Support", href: "/product#hybrid" },
];

const serviceMenuItems = [
  { label: "Run My Finance Operations", href: "/services#run-finance-operations" },
  { label: "Get Audit-Ready (and Stay That Way)", href: "/services#audit-ready" },
  { label: "Prepare for a Transaction", href: "/services#prepare-transaction" },
  { label: "Modernize Your Finance Stack", href: "/services#modernize-finance-stack" },
];

type NavDropdownProps = {
  label: string;
  href: string;
  imageHref: string;
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  headline: string;
  items: Array<{ label: string; href: string }>;
  isDarkBg: boolean;
};

function NavDropdown({
  label,
  href,
  imageHref,
  imageSrc,
  imageAlt,
  eyebrow,
  headline,
  items,
  isDarkBg,
}: NavDropdownProps) {
  return (
    <div className="group relative">
      <Link
        href={href}
        aria-haspopup="menu"
        className={`flex items-center gap-1 transition-colors ${isDarkBg ? "hover:text-white" : "hover:text-black"}`}
      >
        {label}
        <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
      </Link>

      <div className="pointer-events-none invisible absolute left-1/2 top-full z-[80] w-[640px] -translate-x-1/2 translate-y-2 pt-5 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="grid grid-cols-[1.05fr_.95fr] gap-3 overflow-hidden rounded-2xl border border-white/12 bg-[#070a14]/95 p-3 shadow-[0_28px_80px_rgba(0,0,0,.55)] backdrop-blur-2xl">
          <Link
            href={imageHref}
            className="group/image relative min-h-[250px] overflow-hidden rounded-xl border border-white/10"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="320px"
              className="object-cover transition-transform duration-500 group-hover/image:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050711] via-[#050711]/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[.22em] text-[#7dd3fc]">{eyebrow}</span>
              <p className="mt-2 text-lg font-bold leading-tight">{headline}</p>
            </div>
          </Link>

          <div className="flex flex-col rounded-xl border border-white/8 bg-white/[.025] p-2" role="menu">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                role="menuitem"
                className="group/item flex flex-1 items-center justify-between gap-3 rounded-lg border border-transparent px-4 text-sm font-semibold leading-tight text-zinc-300 transition hover:border-white/8 hover:bg-white/[.055] hover:text-white focus-visible:border-white/15 focus-visible:bg-white/[.055] focus-visible:text-white focus-visible:outline-none"
              >
                {item.label}
                <span className="shrink-0 text-[#7dd3fc] opacity-0 transition group-hover/item:translate-x-0.5 group-hover/item:opacity-100">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Nav({ contactHref = "/contact" }: { contactHref?: string }) {
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
          <NavDropdown
            label="Services"
            href="/services"
            imageHref="/services#run-finance-operations"
            imageSrc="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
            imageAlt="Placeholder for 4AT services"
            eyebrow="4AT Services"
            headline="Choose the outcome your finance team needs"
            items={serviceMenuItems}
            isDarkBg={isDarkBg}
          />
          <div className="group relative">
            <Link
              href="/product"
              aria-haspopup="menu"
              className={`flex items-center gap-1 transition-colors ${isDarkBg ? "hover:text-white" : "hover:text-black"}`}
            >
              Product
              <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
            </Link>

            <div className="pointer-events-none invisible absolute left-1/2 top-full z-[80] w-[640px] -translate-x-1/2 translate-y-2 pt-5 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="grid grid-cols-[1.05fr_.95fr] gap-3 overflow-hidden rounded-2xl border border-white/12 bg-[#070a14]/95 p-3 shadow-[0_28px_80px_rgba(0,0,0,.55)] backdrop-blur-2xl">
                <Link
                  href="/product#capabilities"
                  className="group/image relative min-h-[250px] overflow-hidden rounded-xl border border-white/10"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
                    alt="Placeholder for 4AT product"
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050711] via-[#050711]/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-[.22em] text-[#7dd3fc]">4AT Product</span>
                    <p className="mt-2 text-lg font-bold leading-tight">Explore the finance-native AI platform</p>
                  </div>
                </Link>

                <div className="flex flex-col rounded-xl border border-white/8 bg-white/[.025] p-2" role="menu">
                  {productMenuItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      role="menuitem"
                      className="group/item flex flex-1 items-center justify-between rounded-lg border border-transparent px-4 text-sm font-semibold text-zinc-300 transition hover:border-white/8 hover:bg-white/[.055] hover:text-white focus-visible:border-white/15 focus-visible:bg-white/[.055] focus-visible:text-white focus-visible:outline-none"
                    >
                      {item.label}
                      <span className="text-[#7dd3fc] opacity-0 transition group-hover/item:translate-x-0.5 group-hover/item:opacity-100">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link href="/academy" className={`transition-colors ${isDarkBg ? "hover:text-white" : "hover:text-black"}`}>Academy</Link>
          <Link href="/contact" className={`transition-colors ${isDarkBg ? "hover:text-white" : "hover:text-black"}`}>Contact us</Link>
        </nav>
        <Link
          href={contactHref}
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
