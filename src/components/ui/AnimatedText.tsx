"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text:       string;
  className?: string;
  as?:        "h1" | "h2" | "h3" | "h4" | "p" | "span";
  stagger?:   number;
  delay?:     number;
}

export function AnimatedText({
  text,
  className,
  as: Tag = "p",
  stagger  = 0.04,
  delay    = 0,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={cn("flex flex-wrap gap-x-[0.28em]", className)}>
      {words.map((word, i) => (
        <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay:    delay + i * stagger,
              ease:     [0.16, 1, 0.3, 1],
            }}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
