"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";
import Image from "next/image";

/* ─── Images Array ───────────────────────────────────────────────────────── */
const IMAGES = [
  { src: "/image/IMG3.JPG",  alt: "FoodTownFest Crowd" },
  { src: "/image/IMG7.jpg",  alt: "FoodTownFest Vibes" },
  { src: "/image/IMG4.PNG",  alt: "FoodTownFest Culture" },
];

/* ─── Section ──────────────────────────────────────────────────────────────── */
export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="bg-dark px-6 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — Images */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex flex-col gap-4"
          >
            {/* Top — full-width tall image */}
            <motion.div
              variants={scaleIn}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-card border border-white/5 bg-surface"
            >
              <Image
                src={IMAGES[0]!.src}
                alt={IMAGES[0]!.alt}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Bottom — two equal images side by side */}
            <div className="grid grid-cols-2 gap-4">
              {IMAGES.slice(1).map((img, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  className="relative aspect-[4/3] overflow-hidden rounded-card border border-white/5 bg-surface"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex flex-col justify-center gap-6"
          >
            <SectionHeading
              label="About Us"
              title="We are the pulse of nigerian food culture."
            />

            <motion.p
              variants={fadeUp}
              className="font-dm text-base leading-relaxed text-muted"
            >
              FoodTownFest is Nigeria's most celebrated food and culture festival. The country's best chefs, vendors, musicians, and
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
                Est. 2021
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
