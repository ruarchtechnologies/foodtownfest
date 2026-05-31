"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import { FESTIVAL_NAME, NAV_LINKS, TICKETS_URL, VENDORS_FORM_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { fadeInDown, staggerContainer, fadeUp } from "@/lib/animations";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollY         = useScrollPosition();
  const scrolled        = scrollY > 40;

  return (
    <>
      <motion.header
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-dark/90 backdrop-blur-md border-b border-white/5 shadow-[0_1px_0_rgba(255,61,0,0.1)]"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/image/foodtownlogo.png"
              alt={FESTIVAL_NAME}
              width={140}
              height={40}
              className="h-20 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="group relative font-dm text-sm font-medium text-muted transition-colors hover:text-text">
                  {label}
                  <motion.span
                    className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a href={TICKETS_URL} target="_blank" rel="noopener noreferrer">
              <Button size="sm">GET TICKETS</Button>
            </a>
            <a href={VENDORS_FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="ghost">VENDORS</Button>
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 text-text transition-colors hover:text-primary md:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%"  }}
            exit={{    opacity: 0, y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-dark"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
              <a href="#" className="flex items-center">
                <Image
                  src="/image/foodtownlogo.png"
                  alt={FESTIVAL_NAME}
                  width={140}
                  height={40}
                  className="h-20 w-auto object-contain"
                />
              </a>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-muted transition-colors hover:text-text"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Links */}
            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-1 flex-col items-center justify-center gap-6 px-6"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <motion.a
                  key={href}
                  variants={fadeUp}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-syne text-4xl font-black uppercase tracking-tight text-text transition-colors hover:text-primary"
                >
                  {label}
                </motion.a>
              ))}
              <motion.div variants={fadeUp} className="mt-4 flex flex-col items-center gap-3">
                <a href={TICKETS_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                  <Button size="lg">GET TICKETS</Button>
                </a>
                <a href={VENDORS_FORM_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                  <Button size="lg" variant="ghost">VENDORS</Button>
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
