"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { staggerContainer, scaleIn, fadeUp } from "@/lib/animations";
import { TICKET_TIERS, BRAND_COLORS } from "@/lib/constants";

export function Tickets() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="tickets" className="relative overflow-hidden bg-dark px-6 py-24 sm:py-32">
      {/* Radial glow behind featured card */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2"
        style={{
          width:  700,
          height: 500,
          background: `radial-gradient(ellipse at center, ${BRAND_COLORS.primary}18 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          label="Tickets"
          title="Get Your Spot"
          subtitle="Early bird pricing until July 1st, 2025. Quantities are limited."
          align="center"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {TICKET_TIERS.map((tier) => (
            <motion.div
              key={tier.id}
              variants={scaleIn}
              className={cn(
                "relative flex flex-col rounded-card p-6 transition-shadow duration-300",
                tier.featured
                  ? "bg-surface ring-2 ring-primary ring-offset-2 ring-offset-dark"
                  : "bg-surface border border-white/5"
              )}
              style={
                tier.featured
                  ? { boxShadow: `0 0 40px 0 ${BRAND_COLORS.primary}30` }
                  : undefined
              }
            >
              {/* Most Popular badge */}
              {tier.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-pill bg-primary px-4 py-1 font-syne text-[10px] font-bold uppercase tracking-widest text-white">
                  Most Popular
                </div>
              )}

              {/* Tier name */}
              <p
                className={cn(
                  "font-syne text-lg font-black uppercase tracking-widest",
                  tier.featured ? "text-primary" : "text-muted"
                )}
              >
                {tier.name}
              </p>

              {/* Price */}
              <motion.p
                variants={fadeUp}
                className="mt-4 font-syne text-5xl font-black leading-none text-text"
              >
                ₦{(tier.price / 1000).toFixed(0)}
                <span className="text-2xl text-muted">k</span>
              </motion.p>

              {/* Perks */}
              <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                {tier.perks.map((perk) => (
                  <motion.li
                    key={perk}
                    variants={fadeUp}
                    className="flex items-start gap-2.5"
                  >
                    <Check
                      size={14}
                      className={cn(
                        "mt-0.5 shrink-0",
                        tier.featured ? "text-primary" : "text-muted"
                      )}
                    />
                    <span className="font-dm text-sm leading-snug text-muted">{perk}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <Button
                  className="w-full"
                  variant={tier.featured ? "primary" : "outline"}
                  disabled={!tier.available}
                >
                  {tier.available ? "BUY NOW" : "SOLD OUT"}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
