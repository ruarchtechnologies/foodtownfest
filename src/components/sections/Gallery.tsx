"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, scaleIn } from "@/lib/animations";

/* ─── Gallery data ─────────────────────────────────────────────────────────── */
interface GalleryItem {
  id: number;
  image: string;
  spanClass: string;
  label: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1,  image: "/image/IMG3.JPG",  spanClass: "md:col-span-3 md:row-span-2", label: "Crowd Love"        },
  { id: 2,  image: "/image/IMG1.jpg",  spanClass: "md:col-span-3 md:row-span-2", label: "FoodTownFest Vibes"},
  { id: 3,  image: "/image/IMG2.PNG",  spanClass: "md:col-span-3 md:row-span-2", label: "The Energy"        },
  { id: 4,  image: "/image/IMG4.PNG",  spanClass: "md:col-span-3 md:row-span-2", label: "Food Culture"      },
  { id: 5,  image: "/image/IMG5.jpg",  spanClass: "md:col-span-3 md:row-span-2", label: "The Experience"    },
  { id: 6,  image: "/image/IMG6.jpg",  spanClass: "md:col-span-3 md:row-span-2", label: "Good Times"        },
  { id: 7,  image: "/image/IMG7.jpg",  spanClass: "md:col-span-3 md:row-span-2", label: "The Culture"       },
  { id: 8,  image: "/image/IMG8.jpg",  spanClass: "md:col-span-3 md:row-span-2", label: "Festival Moments"  },
  { id: 9,  image: "/image/IMG9.jpg",  spanClass: "md:col-span-3 md:row-span-2", label: "Nigerian Flavours" },
  { id: 10, image: "/image/IMG10.jpg", spanClass: "md:col-span-3 md:row-span-2", label: "Street Vibes"      },
  { id: 11, image: "/image/IMG11.jpg", spanClass: "md:col-span-2 md:row-span-2", label: "The Movement"      },
  { id: 12, image: "/image/IMG12.jpg", spanClass: "md:col-span-2 md:row-span-2", label: "Pure Energy"       },
  { id: 13, image: "/image/IMG13.PNG", spanClass: "md:col-span-2 md:row-span-2", label: "FoodTownFest 2026" },
];

/* ─── Gallery Card ─────────────────────────────────────────────────────────── */
function GalleryCard({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
}) {
  return (
    <motion.button
      variants={scaleIn}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`relative w-full cursor-pointer overflow-hidden rounded-card group ${item.spanClass}`}
      style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
      aria-label={`View: ${item.label}`}
    >
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.label}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-750 ease-out group-hover:scale-108"
        loading="lazy"
      />

      {/* Modern Overlay with blur on text */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300" />



      {/* Subtle border glow */}
      <div className="absolute inset-0 border border-white/5 group-hover:border-primary/30 rounded-card transition-colors duration-300" />
    </motion.button>
  );
}

/* ─── Section ──────────────────────────────────────────────────────────────── */
export function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="gallery" className="bg-surface px-6 py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Gallery"
          title="Taste the Vibes"
          subtitle="Relive the sights and energy from previous editions of FoodTownFest."
        />

        {/* Bento Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[320px] md:auto-rows-[240px]"
        >
          {GALLERY_ITEMS.map((item) => (
            <GalleryCard key={item.id} item={item} onOpen={setSelected} />
          ))}
        </motion.div>
      </div>

      {/* ── Lightbox Modal ── */}
      <Dialog.Root
        open={selected !== null}
        onOpenChange={(open) => { if (!open) setSelected(null); }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-card p-4 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
            {selected && (
              <div className="relative overflow-hidden rounded-card border border-white/10 bg-dark">
                <div className="aspect-[4/3] w-full relative">
                  <img
                    src={selected.image}
                    alt={selected.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-surface/80 p-6 backdrop-blur-md border-t border-white/5">
                  <Dialog.Title className="font-syne text-2xl font-black uppercase text-text">
                    {selected.label}
                  </Dialog.Title>
                  <Dialog.Description className="mt-2 font-dm text-sm text-muted">
                    Reliving cultural memories and premium food experiences from FoodTownFest 2026 stop in Lagos, Nigeria.
                  </Dialog.Description>
                </div>
              </div>
            )}

            <Dialog.Close className="absolute right-6 top-6 rounded-full bg-dark/80 p-2.5 text-text backdrop-blur-md border border-white/10 transition-colors hover:text-primary">
              <X size={20} />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
