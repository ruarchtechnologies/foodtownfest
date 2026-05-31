"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { schedule } from "@/data/schedule";

const TYPE_LABEL: Record<string, string> = {
  culture: "Culture",
  food: "Experience",
  music: "Live",
};

const TYPE_COLOR: Record<string, string> = {
  culture: "#FF6D00",
  food: "#FFAB40",
  music: "#FF3D00",
};

export function Schedule() {
  const [activeDay, setActiveDay] = useState<0 | 1 | 2>(0);
  const currentDay = schedule[activeDay] ?? schedule[0]!;

  return (
    <section id="schedule" className="bg-dark px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="What To Expect"
          title="Everything Going Down"
          subtitle="From street food, heritage recipes, to the best entertainment, and Afrobeats into the night."
          align="center"
        />

        {/* Event tabs */}
        <div className="mt-10 flex justify-center gap-2 flex-wrap">
          {schedule.map((day, i) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(i as 0 | 1 | 2)}
              className={cn(
                "rounded-pill border px-5 py-2.5 font-syne text-xs font-bold uppercase tracking-widest transition-all duration-200",
                i === activeDay
                  ? "border-primary bg-primary text-white"
                  : "border-white/10 bg-surface text-muted hover:border-primary/40 hover:text-text"
              )}
            >
              <span className="block">{day.label}</span>
              <span className="mt-0.5 block text-[10px] opacity-70">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {currentDay.items.length === 0 ? (
              <div className="mt-20 flex flex-col items-center gap-3 rounded-card border border-dashed border-white/10 py-20 text-center">
                <span className="font-syne text-4xl font-black text-white/10">?</span>
                <p className="font-dm text-sm text-muted/50">Schedule coming soon</p>
                <p className="font-dm text-xs text-muted/30">Date & location to be announced</p>
              </div>
            ) : (
              <div className="mt-16 flex flex-col gap-8">
                {currentDay.items.map((item, idx) => {
                  const isEven = idx % 2 === 1;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.07, duration: 0.4 }}
                      className={cn(
                        "flex flex-col md:flex-row items-center gap-10 py-10",
                        isEven && "md:flex-row-reverse"
                      )}
                    >
                      {/* Image */}
                      <div className="w-full md:w-[45%] overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>

                      {/* Text */}
                      <div className="w-full md:w-[55%] flex flex-col justify-center gap-5">
                        <span
                          className="font-dm text-xs font-bold uppercase tracking-[0.22em]"
                          style={{ color: TYPE_COLOR[item.type] }}
                        >
                          {String(idx + 1).padStart(2, "0")} · {TYPE_LABEL[item.type]}
                        </span>

                        <h3 className="font-syne text-2xl font-black uppercase leading-tight text-text sm:text-3xl">
                          {item.title}
                        </h3>

                        <p className="font-dm text-base leading-relaxed text-muted">
                          {item.description}
                        </p>

                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
