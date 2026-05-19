"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { foodItems } from "@/data/food-items";
import { BRAND_COLORS } from "@/lib/constants";

/* ─── Spice level dots ─────────────────────────────────────────────────────── */
const SPICE_COLORS = ["#FFAB40", "#FF6D00", "#FF3D00"] as const;

function SpiceDots({ level }: { level: 1 | 2 | 3 }) {
  return (
    <div className="flex items-center gap-1">
      {([1, 2, 3] as const).map((n) => (
        <span
          key={n}
          className="size-2 rounded-full"
          style={{ background: n <= level ? SPICE_COLORS[level - 1] : "#333" }}
        />
      ))}
    </div>
  );
}

/* ─── Food Card ────────────────────────────────────────────────────────────── */
function FoodCard({ item }: { item: (typeof foodItems)[number] }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ scale: 1.04, y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex w-72 shrink-0 flex-col overflow-hidden rounded-card bg-surface"
      style={{
        boxShadow: "0 0 0 1px rgba(255,255,255,0.05)",
      }}
    >
      {/* Image placeholder — coloured to evoke the dish */}
      <div
        className="relative h-44 w-full overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${BRAND_COLORS.surface} 0%, ${BRAND_COLORS.primary}30 100%)`,
        }}
      >
        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-end bg-gradient-to-t from-dark/80 to-transparent p-4"
        >
          <p className="font-dm text-xs leading-snug text-text/80">{item.description}</p>
        </motion.div>

        {/* Glow ring on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="pointer-events-none absolute inset-0 rounded-card"
          style={{ boxShadow: `inset 0 0 0 2px ${BRAND_COLORS.primary}` }}
        />
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="font-syne text-base font-bold uppercase leading-tight text-text">
          {item.name}
        </p>
        <div className="flex items-center gap-2">
          <SpiceDots level={item.spiceLevel} />
          <p className="font-dm text-[10px] uppercase tracking-wider text-muted">
            {item.spiceLevel === 1 ? "Mild" : item.spiceLevel === 2 ? "Medium" : "Hot"}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Section ──────────────────────────────────────────────────────────────── */
export function FoodShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="food" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Must-Try Dishes"
          title="What We're Eating"
          subtitle="A curated selection of the dishes you cannot leave without tasting."
        />
      </div>

      {/* Horizontal scroll carousel */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="no-scrollbar mt-12 flex gap-5 overflow-x-auto px-6 pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {foodItems.map((item) => (
          <div key={item.id} style={{ scrollSnapAlign: "start" }}>
            <FoodCard item={item} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
