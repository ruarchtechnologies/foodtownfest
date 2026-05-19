import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
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
      className={`${syne.variable} ${dmSans.variable}`}
    >
      <body>
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  );
}
