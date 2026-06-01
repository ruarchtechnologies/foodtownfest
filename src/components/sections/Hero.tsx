"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  FESTIVAL_DATE,
  FESTIVAL_LOCATION,
  FESTIVAL_NAME,
  FESTIVAL_YEAR,
  TICKETS_URL,
  VENDORS_FORM_URL,
} from "@/lib/constants";
import { Button } from "@/components/ui/Button";

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

/* ─── Floating food image config ───────────────────────────────────────────── */
interface FoodConfig { id: number; src: string; top: string; left: string; duration: number; delay: number; size: number; flipX?: boolean; }

const FLOATING_FOODS: FoodConfig[] = [
  { id: 1, src: "/image/suya.png",        top: "15%", left: "6%",   duration: 5.5, delay: 0,   size: 110 },
  { id: 2, src: "/image/chicken.png",     top: "18%", left: "87%",  duration: 7,   delay: 1,   size: 105, flipX: true },
  { id: 3, src: "/image/chips.png",       top: "68%", left: "4%",   duration: 6,   delay: 2,   size: 100 },
  { id: 4, src: "/image/jollof_rice.png", top: "64%", left: "89%",  duration: 5,   delay: 0.5, size: 170 },
  { id: 5, src: "/image/drink.png",       top: "38%", left: "2%",   duration: 8,   delay: 3,   size: 180 },
  { id: 6, src: "/image/spag.png",        top: "45%", left: "92%",  duration: 6.5, delay: 1.5, size: 104 },
];

const MOBILE_FLOATING_FOODS: FoodConfig[] = [
  { id: 1, src: "/image/suya.png",    top: "16%", left: "1%",  duration: 5.5, delay: 0, size: 80 },
  { id: 2, src: "/image/chicken.png", top: "16%", left: "74%", duration: 7,   delay: 1, size: 80, flipX: true },
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
      </div>

      {/* Floating food images — mobile */}
      <div className="md:hidden pointer-events-none absolute inset-0 overflow-hidden">
        {MOBILE_FLOATING_FOODS.map((item) => (
          <motion.img
            key={item.id}
            src={item.src}
            alt=""
            className="absolute select-none pointer-events-none"
            style={{ top: item.top, left: item.left, width: item.size, height: item.size, objectFit: "contain", scaleX: item.flipX ? -1 : 1 }}
            animate={{ y: [0, -14, 0], rotate: [0, -5, 5, 0] }}
            transition={{ duration: item.duration, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Floating food images — desktop */}
      <div className="hidden md:block pointer-events-none absolute inset-0">
        {FLOATING_FOODS.map((item) => (
          <motion.img
            key={item.id}
            src={item.src}
            alt=""
            className="absolute select-none pointer-events-none"
            style={{ top: item.top, left: item.left, width: item.size, height: item.size, objectFit: "contain", scaleX: item.flipX ? -1 : 1 }}
            animate={{ y: [0, -14, 0], rotate: [0, -5, 5, 0] }}
            transition={{ duration: item.duration, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <motion.div
        style={{ y: heroY }}
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 pb-6 pt-52 md:px-6 md:pt-60 text-center"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-5 w-full"
        >
          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="font-syne font-black uppercase leading-none tracking-tighter text-text"
          >
            <span className="block text-[1.5rem] md:text-[clamp(1.9rem,5vw,4rem)]">
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
            <span className="block text-[2.5rem] md:text-[clamp(3.2rem,9vw,7.5rem)]">NIGERIAN</span>
            <span className="block text-[1.7rem] md:text-[clamp(2.3rem,5.8vw,4.8rem)]">FOOD CULTURE</span>
          </motion.h1>

          {/* Outlined title with Premium Modern Gradient */}
          <div className="flex flex-col items-center gap-2">
            <motion.p
              variants={fadeUp}
              className="font-syne font-black tracking-tighter uppercase text-[1.5rem] md:text-[clamp(1.9rem,5.5vw,4.8rem)] leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary"
            >
              {FESTIVAL_NAME} {FESTIVAL_YEAR}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="font-kablammo text-[clamp(1.5rem,3.2vw,2.4rem)] tracking-wide text-accent"
            >
              "A Taste of Then"
            </motion.p>
          </div>

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
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-4 w-full px-2">
            <a href={TICKETS_URL} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] max-w-[200px]">
              <Button size="lg" className="w-full">GET TICKETS</Button>
            </a>
            <a href={VENDORS_FORM_URL} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] max-w-[200px]">
              <Button size="lg" variant="ghost" className="w-full">VENDORS</Button>
            </a>
          </motion.div>

          {/* Bottom floating icons — mobile only, in flow below buttons */}
          <motion.div
            variants={fadeUp}
            className="md:hidden flex w-full items-center justify-between pt-6"
          >
            <motion.img
              src="/image/drink.png"
              alt=""
              className="select-none pointer-events-none"
              style={{ width: 130, height: 130, objectFit: "contain" }}
              animate={{ y: [0, -14, 0], rotate: [0, -5, 5, 0] }}
              transition={{ duration: 8, delay: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="/image/jollof_rice.png"
              alt=""
              className="select-none pointer-events-none"
              style={{ width: 90, height: 90, objectFit: "contain" }}
              animate={{ y: [0, -14, 0], rotate: [0, -5, 5, 0] }}
              transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

      </motion.div>

    </section>
  );
}
