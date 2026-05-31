import type { TicketTier } from "@/types/festival";

/* ─── Festival ─────────────────────────────────────────────────────────────── */
export const FESTIVAL_NAME = "FOODTOWNFEST" as const;
export const FESTIVAL_TAGLINE = "The Pulse of Nigerian Food Culture" as const;
export const FESTIVAL_DATE = "JUNE 12, 2026" as const;
export const FESTIVAL_YEAR = "2026" as const;
export const FESTIVAL_LOCATION = "OAU, ILE-IFE" as const;

export const FESTIVAL_EVENTS = [
  { id: 1, date: "JUNE 12, 2026", location: "OAU · ILE-IFE", confirmed: true },
  { id: 2, date: null, location: null, confirmed: false },
  { id: 3, date: null, location: null, confirmed: false },
] as const;

/* ─── Brand Colors ─────────────────────────────────────────────────────────── */
export const BRAND_COLORS = {
  primary: "#FF3D00",
  secondary: "#FF6D00",
  accent: "#FFAB40",
  dark: "#0A0A0A",
  surface: "#111111",
  text: "#F5F5F5",
  muted: "#888888",
} as const;

/* ─── Navigation ───────────────────────────────────────────────────────────── */
export const NAV_LINKS = [
  { label: "Roadmap", href: "#roadmap" },
  { label: "About", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
] as const;

/* ─── Social ───────────────────────────────────────────────────────────────── */
export const SOCIAL_LINKS = [
  { platform: "Instagram", href: "https://www.instagram.com/foodtownfest?igsh=Z2wwbWQyNjBoMjF6", handle: "@foodtownfest" },
  { platform: "TikTok",    href: "https://www.tiktok.com/@foodtownfest?_r=1&_t=ZS-96Ao2m0DkDH",  handle: "@foodtownfest" },
  { platform: "X",         href: "https://x.com/foodtownfest?s=21",                               handle: "@foodtownfest" },
] as const;

/* ─── External URLs ─────────────────────────────────────────────────────────── */
export const TICKETS_URL   = "https://tix.africa/discover/raveatfoodtownfest" as const;
export const VENDORS_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSctQuIbs8K8hLecVCwtSz_0wOqB_DW25OwrOqwggFUZBhqyeA/viewform" as const;

/* ─── Marquee ──────────────────────────────────────────────────────────────── */
export const HERO_MARQUEE_TEXT =
  "SUYA · JOLLOF RICE · POUNDED YAM · EGUSI SOUP · MOIN MOIN · PEPPER SOUP · AKARA · BANGA SOUP · OFE ONUGBU · NKWOBI · ASUN ·" as const;

export const FOOTER_MARQUEE_TEXT =
  "FOODTOWNFEST · THE PULSE OF NIGERIAN FOOD CULTURE · 3 STOPS · 2026 · NIGERIA ARE YOU READYYYYYYYYYY??? ·" as const;

/* ─── Tickets ──────────────────────────────────────────────────────────────── */
export const TICKET_TIERS: TicketTier[] = [
  {
    id: "t-standard",
    name: "STANDARD",
    price: 15000,
    perks: ["3-day general access", "All food vendor areas", "Garden & Main Stage", "Festival wristband"],
    available: true,
    featured: false,
  },
  {
    id: "t-vip",
    name: "VIP",
    price: 45000,
    perks: ["3-day VIP access", "Exclusive VIP lounge", "Front-of-stage viewing", "₦10,000 food credit", "Meet & greet entry", "Dedicated bar"],
    available: true,
    featured: true,
  },
  {
    id: "t-vvip",
    name: "VVIP",
    price: 100000,
    perks: ["3-day VVIP access", "Private suite", "All VIP perks", "Personal concierge", "Unlimited food & drinks", "Backstage passes"],
    available: true,
    featured: false,
  },
];
