"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { vendors } from "@/data/vendors";
import { BRAND_COLORS } from "@/lib/constants";

/* ─── Vendor Card ──────────────────────────────────────────────────────────── */
function VendorCard({ vendor }: { vendor: (typeof vendors)[number] }) {
  const stars = Math.round(vendor.rating);

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="flex flex-col gap-4 rounded-card border border-white/5 bg-surface p-5"
    >
      {/* Avatar placeholder */}
      <div
        className="flex size-12 items-center justify-center rounded-xl text-2xl"
        style={{
          background: `linear-gradient(135deg, ${BRAND_COLORS.primary}20 0%, ${BRAND_COLORS.accent}15 100%)`,
          border: `1px solid ${BRAND_COLORS.primary}30`,
        }}
      >
        🍽️
      </div>

      <div className="flex-1">
        <p className="font-syne text-base font-bold uppercase leading-tight text-text">
          {vendor.name}
        </p>
        <p className="mt-1 font-dm text-sm text-muted">{vendor.specialty}</p>
      </div>

      <div className="flex items-center justify-between">
        {/* Stars */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              size={12}
              className={i < stars ? "fill-accent text-accent" : "fill-muted/20 text-muted/20"}
            />
          ))}
          <span className="ml-1 font-dm text-xs text-muted">{vendor.rating.toFixed(1)}</span>
        </div>

        {/* Location tag */}
        <p className="font-dm text-[10px] uppercase tracking-wider text-muted/60">
          {vendor.location}
        </p>
      </div>
    </motion.article>
  );
}

/* ─── Section ──────────────────────────────────────────────────────────────── */
export function Vendors() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="vendors" className="bg-dark px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Vendors"
          title="Meet the Makers"
          subtitle="Over 50 curated vendors. Every bite tells a story."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-4"
        >
          {vendors.map((vendor) => (
            <div key={vendor.id} className="mb-4 break-inside-avoid">
              <VendorCard vendor={vendor} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
