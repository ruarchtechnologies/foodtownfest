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

export function Hero() {
    const heroRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative flex min-h-svh flex-col overflow-hidden bg-dark"
        >
            {/* ── Video background ── */}
            <motion.div
                style={{ y: videoY }}
                className="pointer-events-none absolute inset-0 scale-110"
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                    src="/video/gtco_video_content.mp4"
                />
            </motion.div>

            {/* ── Dark base overlay ── */}
            <div className="pointer-events-none absolute inset-0 bg-black/55" />

            {/* ── Primary color edge vignette ── */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: `
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,61,0,0.28) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 0% 50%,   rgba(255,61,0,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 100% 50%, rgba(255,61,0,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 80% 40% at 50% 0%,   rgba(0,0,0,0.6)     0%, transparent 70%)
          `,
                }}
            />

            {/* ── Main content ── */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
                className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-36 pt-52 md:pt-60 text-center"
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
                        <span className="block text-[clamp(1.2rem,3.5vw,2.8rem)]">
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
                        <span className="block text-[clamp(2rem,6.5vw,5.5rem)]">NIGERIAN</span>
                        <span className="block text-[clamp(2rem,6.5vw,5.5rem)]">FOOD CULTURE</span>
                    </motion.h1>

                    {/* Festival name + tagline */}
                    <div className="flex flex-col items-center gap-2">
                        <motion.p
                            variants={fadeUp}
                            className="font-syne font-black tracking-tighter uppercase text-[clamp(1.6rem,4.5vw,4rem)] leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary"
                        >
                            {FESTIVAL_NAME} {FESTIVAL_YEAR}
                        </motion.p>
                        <motion.p
                            variants={fadeUp}
                            className="font-kablammo text-[clamp(1rem,2.4vw,1.8rem)] tracking-wide text-accent"
                        >
                            "A Taste of Then"
                        </motion.p>
                    </div>

                    {/* Date / location badge */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-2 inline-flex items-center gap-3 rounded-pill border border-white/10 bg-black/40 px-5 py-2 backdrop-blur-sm"
                    >
                        <span className="font-dm text-sm font-bold text-primary">{FESTIVAL_DATE}</span>
                        <span className="h-3 w-px bg-white/20" />
                        <span className="font-dm text-sm text-muted">{FESTIVAL_LOCATION}</span>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
                        <a href={TICKETS_URL} target="_blank" rel="noopener noreferrer">
                            <Button size="lg">GET TICKETS</Button>
                        </a>
                        <a href={VENDORS_FORM_URL} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="ghost">VENDORS</Button>
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
