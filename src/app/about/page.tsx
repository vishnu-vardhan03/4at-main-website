import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us - 4AT",
  description: "Explore 4AT's vision and mission for hybrid finance services powered by people, process, and AI.",
};

export default function About() {
  return <AboutClient />;
}
