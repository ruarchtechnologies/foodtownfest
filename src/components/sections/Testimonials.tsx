"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp } from "@/lib/animations";

const TESTIMONIALS = [
  {
    quote: "FoodTownFest is the one festival that truly gets Nigerian food culture. The suya, the pepper soup, the energy... e no dey cap. This is our thing.",
    name: "Adaeze O.",
    role: "Food Blogger",
    initials: "AO",
  },
  {
    quote: "I never thought a festival could make me feel this proud to be Nigerian. From the chefs to the vibes, FoodTownFest is a whole movement. Can't wait for the next stop.",
    name: "Tunde A.",
    role: "Culture Enthusiast",
    initials: "TA",
  },
  {
    quote: "The way FoodTownFest celebrates Nigerian cuisine, from jollof to asun to pounded yam, no be small thing. This festival dey hit different every single time.",
    name: "Chisom N.",
    role: "Food Enthusiast",
    initials: "CN",
  },
];

export function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="testimonials" className="bg-dark px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="The Buzz"
          title="What People Are Saying"
          subtitle="The excitement is real. Here's what food lovers, students, and culture enthusiasts are saying ahead of June 12."
          align="center"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="flex flex-col gap-5 rounded-2xl border border-white/5 bg-surface/40 p-6 sm:p-7"
            >
              {/* Quote mark */}
              <span className="font-syne text-4xl font-black leading-none text-primary/40">"</span>

              {/* Quote text */}
              <p className="font-dm text-sm leading-relaxed text-muted flex-1">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  <span className="font-syne text-[10px] font-black text-primary">{t.initials}</span>
                </div>
                <div>
                  <p className="font-syne text-sm font-bold text-text">{t.name}</p>
                  <p className="font-dm text-[11px] text-muted/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
