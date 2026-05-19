"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/animations";
import { performers } from "@/data/performers";
import { BRAND_COLORS } from "@/lib/constants";
import type { PerformerFilter } from "@/types/festival";

/* ─── Filter tabs ──────────────────────────────────────────────────────────── */
const FILTERS: { label: string; value: PerformerFilter }[] = [
  { label: "ALL",       value: "ALL"       },
  { label: "MUSIC",     value: "music"     },
  { label: "CULTURE",   value: "culture"   },
  { label: "FOOD DEMO", value: "food_demo" },
];

/* ─── Performer Card ───────────────────────────────────────────────────────── */
function PerformerCard({
  performer,
  large = false,
}: {
  performer: (typeof performers)[number];
  large?:    boolean;
}) {
  const badgeVariant =
    performer.category === "music"
      ? "music"
      : performer.category === "culture"
        ? "culture"
        : "food";

  return (
    <motion.article
      variants={large ? scaleIn : fadeUp}
      layout
      whileHover="hovered"
      className={cn(
        "group relative overflow-hidden rounded-card bg-surface",
        large ? "col-span-2 sm:col-span-1" : ""
      )}
      style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.05)" }}
    >
      {/* Image area */}
      <div
        className={cn("relative w-full overflow-hidden", large ? "h-72" : "h-48")}
        style={{
          background: `linear-gradient(135deg, ${BRAND_COLORS.surface} 0%, ${BRAND_COLORS.secondary}20 100%)`,
        }}
      >
        {/* Orange gradient overlay on hover */}
        <motion.div
          variants={{ hovered: { opacity: 1 }, initial: { opacity: 0 } }}
          initial="initial"
          className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"
        />

        {/* HEADLINER badge */}
        {performer.headliner && (
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute right-3 top-3"
          >
            <Badge variant="primary">HEADLINER</Badge>
          </motion.div>
        )}

        {/* Name slide-up on hover */}
        <motion.div
          variants={{ hovered: { y: 0, opacity: 1 }, initial: { y: 20, opacity: 0 } }}
          initial="initial"
          className="absolute bottom-0 left-0 right-0 p-4"
        >
          <p className="font-dm text-xs uppercase tracking-wider text-white/70">
            {performer.stage} · {performer.time}
          </p>
        </motion.div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <p className={cn("font-syne font-bold uppercase leading-tight text-text", large ? "text-2xl" : "text-base")}>
            {performer.name}
          </p>
          <Badge variant={badgeVariant}>{performer.genre}</Badge>
        </div>
        <p className="font-dm text-xs text-muted">
          {performer.stage} · {performer.time}
        </p>
      </div>
    </motion.article>
  );
}

/* ─── Section ──────────────────────────────────────────────────────────────── */
export function Performers() {
  const [activeFilter, setActiveFilter] = useState<PerformerFilter>("ALL");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered =
    activeFilter === "ALL"
      ? performers
      : performers.filter((p) => p.category === activeFilter);

  return (
    <section id="performers" className="bg-dark px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Lineup"
          title="The Lineup"
          subtitle="Music, culture, and food demonstrations across three stages."
        />

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={cn(
                "rounded-pill border px-5 py-2 font-syne text-xs font-bold uppercase tracking-widest transition-all duration-200",
                activeFilter === value
                  ? "border-primary bg-primary text-white"
                  : "border-white/10 bg-surface text-muted hover:border-primary/50 hover:text-text"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {filtered.map((performer) => (
              <PerformerCard
                key={performer.id}
                performer={performer}
                large={performer.headliner}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
