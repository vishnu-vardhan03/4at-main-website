import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "4AT — AI-Driven Digital Experiences",
  description: "Premium AI consulting studio helping ambitious teams simplify workflows and ship intelligent products.",
  openGraph: {
    title: "4AT — AI-Driven Digital Experiences",
    description: "Premium AI consulting studio helping ambitious teams simplify workflows and ship intelligent products.",
  },
};

export default function Home() {
  return <HomeClient />;
}
