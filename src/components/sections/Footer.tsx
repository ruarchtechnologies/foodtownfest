"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/Marquee";
import {
  FESTIVAL_NAME,
  NAV_LINKS,
  SOCIAL_LINKS,
  FOOTER_MARQUEE_TEXT,
} from "@/lib/constants";

/* ─── Social icon map ──────────────────────────────────────────────────────── */
const SOCIAL_ICONS: Record<string, string> = {
  Instagram: "IG",
  Twitter:   "X",
  TikTok:    "TK",
  YouTube:   "YT",
};

export function Footer() {
  return (
    <footer className="bg-surface">
      {/* ── Top marquee ── */}
      <div className="border-y border-white/5 bg-dark">
        <Marquee className="py-3" speed="slow">
          <span className="px-6 font-syne text-xs font-black uppercase tracking-[0.25em] text-muted">
            {FOOTER_MARQUEE_TEXT}
          </span>
        </Marquee>
      </div>

      {/* ── Main footer ── */}
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-24">

        {/* Logo — centred on mobile, left on desktop */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/image/foodtownlogo.png"
            alt={FESTIVAL_NAME}
            width={360}
            height={120}
            className="h-28 w-auto object-contain sm:h-36 lg:h-48"
          />
        </div>

        {/* Link columns */}
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:mt-14 sm:grid-cols-3 lg:grid-cols-3">

          {/* Quick links */}
          <div>
            <p className="mb-5 font-dm text-[10px] font-bold uppercase tracking-[0.25em] text-muted/50">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="font-dm text-sm text-muted transition-colors hover:text-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 font-dm text-[10px] font-bold uppercase tracking-[0.25em] text-muted/50">
              Contact
            </p>
            <ul className="flex flex-col gap-3 font-dm text-sm text-muted">
              <li>hello@foodtownfest.ng</li>
              <li>+234 800 FOODFEST</li>
              <li>Tafawa Balewa Square</li>
              <li>Lagos Island, Lagos</li>
            </ul>
          </div>

          {/* Follow us */}
          <div className="col-span-2 sm:col-span-1">
            <p className="mb-5 font-dm text-[10px] font-bold uppercase tracking-[0.25em] text-muted/50">
              Follow Us
            </p>
            {/* Icon row on mobile, stacked list on desktop */}
            <div className="flex flex-wrap gap-3 sm:flex-col sm:gap-4">
              {SOCIAL_LINKS.map(({ platform, href, handle }) => (
                <motion.a
                  key={platform}
                  href={href}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center gap-3 font-dm text-sm text-muted transition-colors hover:text-primary"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 transition-colors hover:border-primary/50 hover:text-primary">
                    <span className="font-dm text-xs font-bold">{SOCIAL_ICONS[platform] ?? platform[0]}</span>
                  </span>
                  <span className="hidden sm:inline">{handle}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-center sm:flex-row sm:text-left">
          <p className="font-dm text-xs text-muted/50">
            © 2026 {FESTIVAL_NAME}. All rights reserved.
          </p>
          <p className="font-dm text-xs text-muted/30">
            Made with love in Lagos 🇳🇬
          </p>
        </div>
      </div>
    </footer>
  );
}
