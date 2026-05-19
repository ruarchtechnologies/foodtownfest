import type { Variants } from "framer-motion";

/* ─── Scroll-triggered variants ────────────────────────────────────────────── */

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeInDown: Variants = {
  hidden:  { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.34, 1.56, 0.64, 1] } },
};

export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export const clipReveal: Variants = {
  hidden:  { clipPath: "inset(0 100% 0 0)" },
  visible: { clipPath: "inset(0 0% 0 0)", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } },
};

/* ─── Stagger orchestrators ────────────────────────────────────────────────── */

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
};

/* ─── Infinite loop animations (spread into `animate` prop) ────────────────── */

export const floatAnimation = {
  y:          [0, -14, 0],
  rotate:     [0, -4, 4, 0],
  transition: { duration: 6, ease: "easeInOut", repeat: Infinity },
} as const;

export const floatSlow = {
  y:          [0, -20, 0],
  transition: { duration: 9, ease: "easeInOut", repeat: Infinity },
} as const;

export const pulseGlow = {
  opacity:    [0.3, 0.6, 0.3],
  scale:      [1, 1.08, 1],
  transition: { duration: 3, ease: "easeInOut", repeat: Infinity },
} as const;
