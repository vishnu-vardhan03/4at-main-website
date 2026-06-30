 import type { Metadata,  } from "next";
import "./globals.css";
import { ParallaxObserver } from '@/components/sections/ParallaxObserver';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "4AT AI — Finance Automation Platform",
  description:
    "Finance-native AI for reconciliation, compliance, and reporting. Purpose-built for your numbers.",
  openGraph: {
    title: "4AT AI — Finance Automation Platform",
    description: "Automate the Intelligence Layer with finance-native AI.",
    siteName: "4AT AI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics/>
        <ParallaxObserver />  {/* Replace the entire <script> block with this */}
      </body>
    </html>
  );
}