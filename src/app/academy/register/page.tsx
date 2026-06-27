"use client";

import React from "react";
import { SubpageNavbar } from "@/components/academy/SubpageNavbar";
import { Footer } from "@/components/academy/Footer";
import { RegisterForm } from "@/components/academy/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#04060f] text-white flex flex-col pt-0">
      <SubpageNavbar />

      {/* Main Form Section */}
      <section className="relative pt-[120px] pb-24 sm:pt-[140px] sm:pb-32 flex-grow overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[150px] pointer-events-none" />

        <div className="site-shell relative z-10">
          <RegisterForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
