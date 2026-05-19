"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { schedule } from "@/data/schedule";
import type { ScheduleItem } from "@/types/festival";

/* ─── Type badge mapping ───────────────────────────────────────────────────── */
const TYPE_BADGE: Record<ScheduleItem["type"], "food" | "music" | "culture"> = {
  food:    "food",
  music:   "music",
  culture: "culture",
};

const TYPE_DOT: Record<ScheduleItem["type"], string> = {
  food:    "#FFAB40",
  music:   "#FF3D00",
  culture: "#FF6D00",
};

/* ─── Section ──────────────────────────────────────────────────────────────── */
export function Schedule() {
  const [activeDay, setActiveDay] = useState<0 | 1 | 2>(0);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const currentDay = schedule[activeDay] ?? schedule[0];

  return (
    <section id="schedule" className="bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Programme"
          title="3 Events. Endless Flavour."
          subtitle="Browse the full schedule across all confirmed events."
          align="center"
        />

        {/* Day tabs */}
        <div className="mt-10 flex justify-center gap-2">
          {schedule.map((day, i) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(i as 0 | 1 | 2)}
              className={cn(
                "rounded-pill border px-5 py-2.5 font-syne text-xs font-bold uppercase tracking-widest transition-all duration-200",
                i === activeDay
                  ? "border-primary bg-primary text-white"
                  : "border-white/10 bg-dark text-muted hover:border-primary/40 hover:text-text"
              )}
            >
              <span className="block">{day.label}</span>
              <span className="mt-0.5 block text-[10px] opacity-70">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
            className="mt-10 space-y-3"
          >
            {(currentDay?.items ?? []).length === 0 ? (
              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center gap-3 rounded-card border border-dashed border-white/10 bg-dark py-16 text-center"
              >
                <span className="font-syne text-3xl font-black text-muted/20">?</span>
                <p className="font-dm text-sm text-muted/50">Schedule coming soon</p>
                <p className="font-dm text-xs text-muted/30">Date & location to be announced</p>
              </motion.div>
            ) : (currentDay?.items ?? []).map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-card border border-white/5 bg-dark p-4"
              >
                {/* Type indicator */}
                <div className="flex flex-col items-center gap-1 pt-1">
                  <span
                    className="size-2.5 shrink-0 rounded-full"
                    style={{ background: TYPE_DOT[item.type] }}
                  />
                  <span className="h-full w-px bg-white/5" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-dm text-xs font-bold text-primary">{item.time}</p>
                    <Badge variant={TYPE_BADGE[item.type]}>{item.type}</Badge>
                  </div>
                  <p className="mt-1 font-syne text-base font-bold uppercase text-text">
                    {item.title}
                  </p>
                  <p className="mt-0.5 font-dm text-xs text-muted">{item.stage}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
