"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "./Button";
import { heroAssets } from "@/lib/site-data";

export function SubpageNavbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative h-5 w-9">
            <Image
              src={heroAssets.logo}
              alt="4AT Academy"
              fill
              sizes="48px"
              priority
              className="object-contain"
            />
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm-ui font-medium text-white/70">
          <Link href="/#about" className="hover-fine:text-accent transition-colors">
            About
          </Link>
          <Link href="/#features" className="hover-fine:text-accent transition-colors">
            Features
          </Link>
          <Link href="/courses" className="hover-fine:text-accent transition-colors text-white font-semibold">
            Courses
          </Link>
          <Link href="/#contact-us" className="hover-fine:text-accent transition-colors">
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button href="https://lms.4at-academy.com/#/register/user" variant="primary" size="sm" className="hidden sm:inline-flex">
            Login / Register
          </Button>
          <button type="button" className="inline-flex rounded-full p-2.5 bg-white/[0.06] text-white lg:hidden">
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
