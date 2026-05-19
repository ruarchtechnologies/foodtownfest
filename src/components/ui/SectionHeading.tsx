"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { HeadingAlign, WithClassName } from "@/types/components";

interface SectionHeadingProps extends WithClassName {
  label?:    string;
  title:     string;
  subtitle?: string;
  align?:    HeadingAlign;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align     = "left",
  className,
}: SectionHeadingProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {label && (
        <motion.span
          variants={fadeUp}
          className="font-dm text-xs font-bold uppercase tracking-[0.3em] text-primary"
        >
          {label}
        </motion.span>
      )}

      <motion.h2
        variants={fadeUp}
        className="font-syne text-4xl font-black uppercase leading-none tracking-tight text-text sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>

      <motion.div
        variants={fadeUp}
        className={cn("h-0.5 w-12 bg-primary", align === "center" && "mx-auto")}
      />

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="mt-1 max-w-xl font-dm text-base leading-relaxed text-muted"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
