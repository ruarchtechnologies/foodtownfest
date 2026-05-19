"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer, floatAnimation } from "@/lib/animations";
import {
  FESTIVAL_DATE,
  FESTIVAL_LOCATION,
  FESTIVAL_NAME,
  FESTIVAL_YEAR,
  HERO_MARQUEE_TEXT,
} from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";

/* ─── Blob config ──────────────────────────────────────────────────────────── */
interface BlobConfig {
  id:       number;
  color:    string;
  size:     number;
  left:     string;
  top:      string;
  animX:    number[];
  animY:    number[];
  duration: number;
  delay:    number;
}

const BLOBS: BlobConfig[] = [
  { id: 1, color: "#FF3D00", size: 750, left: "-15%", top: "-20%",  animX: [0, 80, -50, 30, 0],   animY: [0, -70, 50, -30, 0],  duration: 22, delay: 0 },
  { id: 2, color: "#FF6D00", size: 600, left: "55%",  top: "-10%",  animX: [0, -90, 60, -20, 0],  animY: [0, 80, -60, 40, 0],   duration: 28, delay: 4 },
  { id: 3, color: "#FFAB40", size: 450, left: "25%",  top: "50%",   animX: [0, 70, -40, 20, 0],   animY: [0, -90, 50, -20, 0],  duration: 20, delay: 8 },
];

/* ─── Floating emoji config ────────────────────────────────────────────────── */
interface EmojiConfig { id: number; emoji: string; top: string; left: string; duration: number; delay: number; }

const FLOATING_EMOJIS: EmojiConfig[] = [
  { id: 1, emoji: "🍖", top: "15%", left: "8%",   duration: 5.5, delay: 0   },
  { id: 2, emoji: "🍛", top: "20%", left: "88%",  duration: 7,   delay: 1   },
  { id: 3, emoji: "🥘", top: "70%", left: "5%",   duration: 6,   delay: 2   },
  { id: 4, emoji: "🌶️", top: "65%", left: "90%",  duration: 5,   delay: 0.5 },
  { id: 5, emoji: "🫕", top: "40%", left: "3%",   duration: 8,   delay: 3   },
  { id: 6, emoji: "🍢", top: "35%", left: "93%",  duration: 6.5, delay: 1.5 },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target:  heroRef,
    offset:  ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-svh flex-col overflow-hidden bg-dark"
    >
      {/* ── Animated gradient blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {BLOBS.map((blob) => (
          <motion.div
            key={blob.id}
            animate={{ x: blob.animX, y: blob.animY }}
            transition={{
              duration: blob.duration,
              delay:    blob.delay,
              repeat:   Infinity,
              ease:     "linear",
            }}
            style={{
              position:   "absolute",
              width:      blob.size,
              height:     blob.size,
              left:       blob.left,
              top:        blob.top,
              borderRadius: "50%",
              background: `radial-gradient(circle at 50% 50%, ${blob.color} 0%, transparent 70%)`,
              opacity:    0.25,
              filter:     "blur(80px)",
            }}
          />
        ))}

        {/* Floating emojis */}
        {FLOATING_EMOJIS.map((item) => (
          <motion.span
            key={item.id}
            className="absolute select-none text-4xl md:text-5xl"
            style={{ top: item.top, left: item.left }}
            animate={{
              y:      [0, -14, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: item.duration,
              delay:    item.delay,
              repeat:   Infinity,
              ease:     "easeInOut",
            }}
          >
            {item.emoji}
          </motion.span>
        ))}
      </div>

      {/* ── Main content ── */}
      <motion.div
        style={{ y: heroY }}
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-32 pt-28 text-center"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-5"
        >
          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="font-syne font-black uppercase leading-none tracking-tighter text-text"
          >
            <span className="block text-[clamp(1.6rem,5vw,4rem)]">
            THE{" "}
            <motion.span
              className="inline-block text-primary"
              animate={{
                scale: [1, 1.07, 1, 1.03, 1],
                textShadow: [
                  "0 0 0px transparent",
                  "0 0 28px rgba(255,61,0,0.9)",
                  "0 0 0px transparent",
                  "0 0 14px rgba(255,61,0,0.5)",
                  "0 0 0px transparent",
                ],
              }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut", repeatDelay: 0.4 }}
            >
              PULSE
            </motion.span>
            {" "}OF
            </span>
            <span className="block text-[clamp(2.8rem,9vw,7.5rem)]">NIGERIAN</span>
            <span className="block text-[clamp(2.8rem,9vw,7.5rem)]">FOOD CULTURE</span>
          </motion.h1>

          {/* Outlined title */}
          <motion.p
            variants={fadeUp}
            className="font-syne text-stroke-primary text-[clamp(1.6rem,5vw,4.5rem)] font-black uppercase leading-none tracking-tight"
          >
            {FESTIVAL_NAME} {FESTIVAL_YEAR}
          </motion.p>

          {/* Date / location badge */}
          <motion.div
            variants={fadeUp}
            className="mt-2 inline-flex items-center gap-3 rounded-pill border border-white/10 bg-surface/60 px-5 py-2 backdrop-blur-sm"
          >
            <span className="font-dm text-sm font-bold text-primary">{FESTIVAL_DATE}</span>
            <span className="h-3 w-px bg-white/20" />
            <span className="font-dm text-sm text-muted">{FESTIVAL_LOCATION}</span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-4 flex flex-wrap justify-center gap-4">
            <a href="#">
              <Button size="lg">GET TICKETS</Button>
            </a>
            <Button size="lg" variant="ghost">EXPLORE LINEUP</Button>
          </motion.div>

          {/* ── Tour stops timeline ── */}
          <motion.div variants={fadeUp} className="mt-8 w-full max-w-2xl px-2">
            <p className="mb-5 text-center font-dm text-[9px] uppercase tracking-[0.4em] text-muted/50">
              2026 · 3 STOPS
            </p>
            <div className="relative flex justify-between">
              {/* Curved connecting line */}
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-x-0 h-4 w-full"
                style={{ top: "20px" }}
                viewBox="0 0 300 16"
                preserveAspectRatio="none"
              >
                <path
                  d="M 16 8 Q 150 0 284 8"
                  stroke="rgba(255,61,0,0.32)"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                  fill="none"
                />
              </svg>

              {/* Stop 1 — confirmed */}
              <div className="z-10 flex flex-col items-center gap-2">
                <span className="font-dm text-[10px] font-bold uppercase tracking-widest text-primary">
                  JUNE 12
                </span>
                <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_14px_rgba(255,61,0,0.5)] ring-[3px] ring-primary/20" />
                <span className="whitespace-nowrap font-dm text-[10px] uppercase tracking-wide text-text/70">
                  OAU · ILE-IFE
                </span>
              </div>

              {/* Stop 2 — TBA */}
              <div className="z-10 flex flex-col items-center gap-2">
                <span className="font-dm text-[10px] font-bold text-muted/40">TBA</span>
                <div className="flex h-4 w-4 items-center justify-center rounded-full border border-dashed border-muted/30 bg-dark">
                  <span className="text-[7px] font-bold text-muted/40">?</span>
                </div>
                <span className="font-dm text-[10px] text-muted/30">TBA</span>
              </div>

              {/* Stop 3 — TBA */}
              <div className="z-10 flex flex-col items-center gap-2">
                <span className="font-dm text-[10px] font-bold text-muted/40">TBA</span>
                <div className="flex h-4 w-4 items-center justify-center rounded-full border border-dashed border-muted/30 bg-dark">
                  <span className="text-[7px] font-bold text-muted/40">?</span>
                </div>
                <span className="font-dm text-[10px] text-muted/30">TBA</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-36 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} className="text-muted" />
        </motion.div>
      </motion.div>

      {/* ── Marquee strip ── */}
      <div className="relative z-10 border-t border-white/5 bg-surface/40 backdrop-blur-sm">
        <Marquee className="py-3 text-sm font-bold tracking-widest text-muted">
          <span className="px-8 font-dm text-xs uppercase">{HERO_MARQUEE_TEXT}</span>
        </Marquee>
      </div>
    </section>
  );
}
