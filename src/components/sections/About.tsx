"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";

/* ─── Stat Card ────────────────────────────────────────────────────────────── */
interface Stat {
  value:  number;
  suffix: string;
  label:  string;
}

const STATS: Stat[] = [
  { value: 50,    suffix: "+",   label: "Vendors"    },
  { value: 20,    suffix: "+",   label: "Live Acts"  },
  { value: 3,     suffix: "",    label: "Events"     },
  { value: 10000, suffix: "+",   label: "Attendees"  },
];

function StatCard({ value, suffix, label }: Stat) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const count           = useCountUp(value, 2200, inView);

  const display =
    value >= 1000
      ? `${Math.floor(count / 1000)}K`
      : String(count);

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      className="flex flex-col gap-1 rounded-card border border-white/5 bg-surface p-6"
    >
      <p className="font-syne text-5xl font-black leading-none text-primary sm:text-6xl">
        {display}
        <span className="text-secondary">{suffix}</span>
      </p>
      <p className="font-dm text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
    </motion.div>
  );
}

/* ─── Section ──────────────────────────────────────────────────────────────── */
export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="bg-dark px-6 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — stats */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex flex-col justify-center gap-6"
          >
            <SectionHeading
              label="About the Festival"
              title="Three Events. One Nation. Every Flavour."
            />

            <motion.p
              variants={fadeUp}
              className="font-dm text-base leading-relaxed text-muted"
            >
              FoodTownFest is Nigeria's most celebrated food and culture festival. Three events,
              three cities, one movement. The country's best chefs, vendors, musicians, and
              communities come together across Nigeria to honour the rich, unapologetic depth of
              Nigerian cuisine.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-dm text-base leading-relaxed text-muted"
            >
              From smoky suya grills in the north to rich palm-oil stews from the east and spiced
              street snacks from the west. Every region brings its soul to the table. This is not
              just a festival. It is a movement.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-3">
              <div className="h-0.5 w-8 self-center bg-primary" />
              <p className="font-syne text-sm font-bold uppercase tracking-widest text-text">
                Est. 2019 · Nigeria
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
