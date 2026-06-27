"use client";

import { Nav } from "@/components/home/Nav";
import { Hero } from "@/components/home/Hero";
import { OurVision } from "@/components/home/OurVision";
import { Results } from "@/components/home/Results";
import { Process } from "@/components/home/Process";
import { UseCases } from "@/components/home/UseCases";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Clients } from "@/components/home/Clients";
import { ClientVoices } from "@/components/home/ClientVoices";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/Footer";

export default function HomeClient() {
  return <div className="home-page min-h-screen bg-[#04060f] text-white"><Nav /><main><Hero /><OurVision /><Results /><Process /><UseCases /><HowItWorks /><Clients /><ClientVoices /><Contact /></main><Footer /></div>;
}
