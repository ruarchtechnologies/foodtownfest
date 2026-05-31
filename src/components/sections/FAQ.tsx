"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp } from "@/lib/animations";

const FAQS = [
  {
    q: "When and where is FoodTownFest 2026?",
    a: "Event 1 is on June 12, 2026 at OAU, Ile-Ife, Osun State, Nigeria. Gates open at 12:00 PM and the event runs into the night. Dates and locations for Events 2 and 3 will be announced soon.",
  },
  {
    q: "How do I get tickets?",
    a: "Hit the GET TICKETS button on the homepage or scroll up to register. Early bird pricing is available for a limited time, don't sleep on it.",
  },
  {
    q: "What kind of food will be available?",
    a: "Everything. Smoky bolé with pepper sauce, grilled fish, suya, jollof, egusi, traditional heritage recipes, puff puff, chin chin, and so much more. If it's Nigerian food culture, it's here.",
  },
  {
    q: "Can I register as a food vendor?",
    a: "Yes! We're looking for the best food vendors to join us. Click the VENDORS button on the homepage to apply. Spots are limited so apply early.",
  },
  {
    q: "Is FoodTownFest family-friendly?",
    a: "Absolutely. FoodTownFest is open to all ages. Come with your family, your squad, your partner. Everyone is welcome at the table.",
  },
  {
    q: "Will there be live music and performances?",
    a: "Yes. The evening closes with live Afrobeats and highlife performances on the main stage. Eat, dance, and vibe. All in one place.",
  },
  {
    q: "When will Events 2 and 3 be announced?",
    a: "Dates and locations for Events 2 and 3 are coming soon. Follow us on Instagram and TikTok to be the first to know when they drop.",
  },
  {
    q: "What should I bring?",
    a: "Your appetite, your best outfit, and your love for Nigerian food culture. Your ticket (digital is fine), a valid ID, and some cash for vendors. Leave the stress at home.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="faq" className="bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="Got Questions?"
          title="We've Got Answers"
          subtitle="Everything you need to know before June 12. If your question isn't here, slide into our DMs."
          align="center"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mt-14 flex flex-col gap-3"
        >
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="overflow-hidden rounded-2xl border border-white/5 bg-dark/60"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-syne text-sm font-bold text-text sm:text-base">
                  {faq.q}
                </span>
                <span
                  className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-muted transition-all duration-300"
                  style={{
                    background: open === i ? "rgba(239,159,39,0.12)" : "transparent",
                    borderColor: open === i ? "rgba(239,159,39,0.3)" : undefined,
                    color: open === i ? "#EF9F27" : undefined,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <motion.line
                      x1="6" y1="1" x2="6" y2="11"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      animate={{ scaleY: open === i ? 0 : 1 }}
                      transition={{ duration: 0.2 }}
                      style={{ originY: "50%" }}
                    />
                    <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="px-6 pb-6 font-dm text-sm leading-relaxed text-muted">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
