"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { staggerContainer } from "@/lib/animations";

interface BrandConfig {
  name: string;
  src: string;
  className?: string;
}

const BRANDS: BrandConfig[] = [
  { name: "Nigerian Breweries", src: "/image/nigerian_breweries.png" },
  { name: "Monster",            src: "/image/monster-logo.png"       },
  { name: "Munch It",           src: "/image/munch it.png"           },
  { name: "Maltina",            src: "/image/maltina.png",            className: "h-16 md:h-20" },
  { name: "Golden Penny",       src: "/image/golden penny.png"       },
  { name: "Cold Stone",         src: "/image/coldstone-removebg.png" },
];


export function Brands() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="brands" className="bg-dark px-6 py-24 sm:py-32 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Partnerships"
          title="Brands We've Worked With"
          subtitle="Collaborating with Nigeria's and the world's most trusted platforms to elevate our food culture."
          align="center"
        />

        {/* Dual Marquees with modern layout */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mt-16 flex flex-col gap-6 md:gap-8"
        >
          {/* Single Marquee */}
          <div className="relative py-6">
            <Marquee speed="slow" className="flex items-center">
              <div className="flex gap-16 md:gap-24 px-8 items-center">
                {BRANDS.map((brand) => (
                  <img
                    key={brand.name}
                    src={brand.src}
                    alt={brand.name}
                    title={brand.name}
                    className={`${brand.className ?? "h-12 md:h-16"} w-auto object-contain cursor-pointer`}
                  />
                ))}
              </div>
            </Marquee>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
