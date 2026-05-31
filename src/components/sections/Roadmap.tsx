"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/animations";

/* ─── Countdown Timer Component ────────────────────────────────────────────── */
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("June 12, 2026 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Mins", value: timeLeft.minutes },
        { label: "Secs", value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <span className="font-syne font-black text-3xl md:text-5xl text-primary">{String(item.value).padStart(2, '0')}</span>
          <span className="font-dm text-[10px] uppercase tracking-widest text-muted">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Section ──────────────────────────────────────────────────────────────── */
export function Roadmap() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="roadmap" className="bg-dark px-6 py-24 sm:py-32 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionHeading
            label="The Journey"
            title="Roadmap 2026"
            subtitle="Follow the trail of flavours as we move across the nation."
          />
          
          <motion.div 
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="mt-8"
          >
            <p className="font-dm text-sm uppercase tracking-[0.3em] text-accent mb-4">Countdown to Launch</p>
            <CountdownTimer />
          </motion.div>
        </div>

        <div className="relative mt-16 flex flex-col items-center w-full">
          {/* Horizontal Roadmap wave SVG */}
          <div className="relative w-full max-w-5xl h-[280px]">
            <svg
              viewBox="0 0 1000 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
            >
              {/* ─── Abstract SAVANNA SAFARI landscape decorations (watermarks) ─── */}
              
              {/* Flying Birds */}
              <g fill="rgba(255,109,0,0.14)">
                {/* Bird 1 */}
                <path d="M 680 70 Q 685 62 690 70 Q 695 62 700 70 Q 690 75 680 70 Z" />
                {/* Bird 2 */}
                <path d="M 705 55 Q 710 47 715 55 Q 720 47 725 55 Q 715 60 705 55 Z" />
                {/* Bird 3 */}
                <path d="M 720 75 Q 725 67 730 75 Q 735 67 740 75 Q 730 80 720 75 Z" />
              </g>

              {/* Acacia Tree Group 1 */}
              <g transform="translate(240, 80)" fill="rgba(255,171,64,0.12)">
                <rect x="9" y="16" width="2.5" height="18" rx="0.5" />
                <ellipse cx="10" cy="13" rx="16" ry="4" />
                <ellipse cx="10" cy="8" rx="12" ry="3.5" />
              </g>

              {/* Acacia Tree Group 2 */}
              <g transform="translate(620, 70)" fill="rgba(255,171,64,0.1)">
                <rect x="8.5" y="15" width="2" height="16" rx="0.5" />
                <ellipse cx="9.5" cy="12" rx="14" ry="3.5" />
                <ellipse cx="9.5" cy="7" rx="10" ry="3" />
              </g>

              {/* Acacia Tree Group 3 (small) */}
              <g transform="translate(770, 210)" fill="rgba(255,171,64,0.08)">
                <rect x="5.5" y="10" width="1.5" height="12" rx="0.5" />
                <ellipse cx="6" cy="8" rx="10" ry="2.5" />
              </g>

              {/* Wandering Gazelle (Geometric Silhouette) */}
              <g transform="translate(340, 200)" fill="rgba(255,171,64,0.12)" stroke="rgba(255,171,64,0.12)" strokeWidth="0.5">
                {/* Body */}
                <ellipse cx="12" cy="15" rx="8" ry="4.5" />
                {/* Neck & Head */}
                <path d="M 18 14 L 24 4 L 26 2 L 27 4" fill="none" strokeWidth="2" strokeLinecap="round" />
                {/* Legs */}
                <line x1="6" y1="18" x2="4" y2="28" strokeWidth="1.2" />
                <line x1="10" y1="18" x2="8" y2="28" strokeWidth="1.2" />
                <line x1="14" y1="18" x2="15" y2="28" strokeWidth="1.2" />
                <line x1="17" y1="18" x2="19" y2="28" strokeWidth="1.2" />
              </g>

              {/* Walking Elephant (Minimalist modern silhouette) */}
              <g transform="translate(540, 80)" fill="rgba(255,61,0,0.08)" stroke="rgba(255,61,0,0.08)" strokeWidth="0.5">
                {/* Body */}
                <ellipse cx="20" cy="18" rx="14" ry="10" />
                {/* Head */}
                <circle cx="8" cy="14" r="6.5" />
                {/* Trunk */}
                <path d="M 4 14 C 1 14, 0 20, 2 23" fill="none" strokeWidth="2.2" strokeLinecap="round" />
                {/* Legs */}
                <rect x="10" y="25" width="4" height="11" rx="0.5" />
                <rect x="25" y="25" width="4" height="11" rx="0.5" />
                {/* Ears */}
                <ellipse cx="11" cy="12" rx="4" ry="6" />
              </g>

              {/* ─── Roadmap Horizontal Waves ─── */}
              <motion.path
                d="M 100 180 C 250 80, 350 280, 500 180 C 650 80, 750 280, 900 180"
                stroke="rgba(255,61,0,0.18)"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M 100 180 C 250 80, 350 280, 500 180 C 650 80, 750 280, 900 180"
                stroke="var(--color-primary)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="16 10"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              
              {/* Point 1 - OAU Ile-Ife */}
              <circle cx="100" cy="180" r="14" fill="var(--color-primary)" />
              <circle cx="100" cy="180" r="22" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="2">
                <animate attributeName="r" values="14;26;14" dur="2s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Point 2 - TBA */}
              <circle cx="500" cy="180" r="9" fill="var(--color-surface)" stroke="var(--color-muted)" strokeWidth="2" />
              
              {/* Point 3 - TBA */}
              <circle cx="900" cy="180" r="9" fill="var(--color-surface)" stroke="var(--color-muted)" strokeWidth="2" />
            </svg>
          </div>

          {/* Glowing Circular Location Thumbnails next to Labels Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-4xl px-6">
            
            {/* Stop 1: OAU campus */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative h-20 w-20 rounded-full border-2 border-primary overflow-hidden shadow-[0_0_20px_rgba(255,61,0,0.3)] mb-4 transition-transform duration-500 group-hover:scale-108 group-hover:shadow-[0_0_25px_rgba(255,61,0,0.5)]">
                <img
                  src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=200&auto=format&fit=crop"
                  alt="OAU Ile-Ife Landmark"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              </div>
              <p className="font-syne font-black text-primary uppercase text-lg leading-tight">JUNE 12</p>
              <p className="font-dm text-sm text-text font-bold mt-1">OAU · ILE-IFE</p>
              <p className="font-dm text-[10px] text-accent uppercase tracking-widest mt-1">The Awakening</p>
            </div>

            {/* Stop 2: Mystery destination */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative h-20 w-20 rounded-full border-2 border-white/10 overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.05)] mb-4 transition-transform duration-500 group-hover:scale-108 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(255,61,0,0.2)]">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=200&auto=format&fit=crop"
                  alt="TBA mystery land"
                  className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-center justify-center">
                  <span className="font-syne font-black text-white text-xl">?</span>
                </div>
              </div>
              <p className="font-syne font-black text-muted uppercase text-lg leading-tight group-hover:text-primary transition-colors duration-300">AUGUST</p>
              <p className="font-dm text-sm text-muted/60 font-bold mt-1">TO BE ANNOUNCED</p>
              <p className="font-dm text-[10px] text-muted/40 uppercase tracking-widest mt-1">The Expansion</p>
            </div>

            {/* Stop 3: Grand Finale */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative h-20 w-20 rounded-full border-2 border-white/10 overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.05)] mb-4 transition-transform duration-500 group-hover:scale-108 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(255,61,0,0.2)]">
                <img
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200&auto=format&fit=crop"
                  alt="Concert stage glow"
                  className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-center justify-center">
                  <span className="font-syne font-black text-white text-xl">🎉</span>
                </div>
              </div>
              <p className="font-syne font-black text-muted uppercase text-lg leading-tight group-hover:text-primary transition-colors duration-300">DECEMBER</p>
              <p className="font-dm text-sm text-muted/60 font-bold mt-1">GRAND FINALE</p>
              <p className="font-dm text-[10px] text-muted/40 uppercase tracking-widest mt-1">The Heritage</p>
            </div>

          </div>
        </div>

        {/* Phase card timeline grid */}
        <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
            {[
                { title: "The Awakening", date: "June 2026", desc: "Setting the stage at the historic Obafemi Awolowo University." },
                { title: "The Expansion", date: "August 2026", desc: "Taking the flavours to the heart of the nation." },
                { title: "The Heritage", date: "December 2026", desc: "Celebrating our roots in a grand cultural explosion." },
            ].map((step, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-surface p-8 rounded-card border border-white/5">
                    <span className="font-syne text-primary font-bold text-xl mb-2 block">0{i+1}</span>
                    <h3 className="font-syne font-bold text-xl text-text mb-2 uppercase">{step.title}</h3>
                    <p className="font-dm text-xs text-accent mb-4 uppercase tracking-widest">{step.date}</p>
                    <p className="font-dm text-sm text-muted leading-relaxed">{step.desc}</p>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
