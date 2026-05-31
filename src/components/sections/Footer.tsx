"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/Marquee";
import {
  FESTIVAL_NAME,
  SOCIAL_LINKS,
  FOOTER_MARQUEE_TEXT,
  NAV_LINKS,
  TICKETS_URL,
  VENDORS_FORM_URL,
} from "@/lib/constants";

/* ─── Social icon map ──────────────────────────────────────────────────────── */
const SOCIAL_ICONS: Record<string, string> = {
  Instagram: "IG",
  TikTok:    "TK",
  X:         "X",
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

        {/* Footer columns */}
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">

          {/* Logo — spans full width on mobile, one col on desktop */}
          <div className="col-span-2 flex justify-center sm:col-span-1 sm:justify-start">
            <Image
              src="/image/foodtownlogo.png"
              alt={FESTIVAL_NAME}
              width={360}
              height={120}
              className="h-24 w-auto object-contain sm:h-32 lg:h-40"
            />
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-4 font-dm text-[10px] font-bold uppercase tracking-[0.25em] text-muted/50">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <motion.a
                    href={href}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="font-dm text-sm text-muted transition-colors hover:text-primary"
                  >
                    {label}
                  </motion.a>
                </li>
              ))}
              {[
                { label: "Get Tickets", href: TICKETS_URL },
                { label: "Vendors", href: VENDORS_FORM_URL },
              ].map(({ label, href }) => (
                <li key={href}>
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="font-dm text-sm text-muted transition-colors hover:text-primary"
                  >
                    {label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <p className="mb-4 font-dm text-[10px] font-bold uppercase tracking-[0.25em] text-muted/50">
              Follow Us
            </p>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ platform, href, handle }) => (
                <motion.a
                  key={platform}
                  href={href}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center gap-3 font-dm text-sm text-muted transition-colors hover:text-primary"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 transition-colors hover:border-primary/50 hover:text-primary">
                    <span className="font-dm text-[10px] font-bold">{SOCIAL_ICONS[platform] ?? platform[0]}</span>
                  </span>
                  <span>{handle}</span>
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
            Made by Ruarch Technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
