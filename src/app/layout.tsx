 import type { Metadata,  } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

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
    <html lang="en" className="scroll-smooth">
      <body>
        {/* Fixed background grid */}
        <div className="bg-grid" aria-hidden="true" />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
