import type { Metadata } from "next";
import { Syne, DM_Sans, Danfo, Ga_Maamli, Kablammo } from "next/font/google";
import { SmoothScroller } from "@/components/layout/SmoothScroller";
import "./globals.css";

const syne = Syne({
  subsets:  ["latin"],
  variable: "--font-syne-var",
  weight:   ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets:  ["latin"],
  variable: "--font-dm-sans-var",
});

const danfo = Danfo({
  subsets: ["latin"],
  variable: "--font-danfo-var",
});

const gaMaamli = Ga_Maamli({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ga-maamli-var",
});

const kablammo = Kablammo({
  subsets: ["latin"],
  variable: "--font-kablammo-var",
});

export const metadata: Metadata = {
  title:       "FOOD TOWN FEST",
  description: "Nigeria's premier food culture festival. Three events, three cities, 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${danfo.variable} ${gaMaamli.variable} ${kablammo.variable}`}
    >
      <body>
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  );
}
