import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./academy.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});


export default function AcademyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`academy-page ${spaceGrotesk.variable} ${cormorant.variable}`}
    >
      {children}
    </div>
  );
}
