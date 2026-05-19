"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, scaleIn } from "@/lib/animations";
import type { GalleryItem } from "@/types/festival";

/* ─── Gallery data ─────────────────────────────────────────────────────────── */
const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1,  color: "#FF3D00",  tall: false, label: "Jollof Rice Cook-off"      },
  { id: 2,  color: "#FF6D00",  tall: true,  label: "Main Stage Night"          },
  { id: 3,  color: "#FFAB40",  tall: false, label: "Suya Station"              },
  { id: 4,  color: "#1a0800",  tall: false, label: "Food Market"               },
  { id: 5,  color: "#FF3D00",  tall: true,  label: "Cultural Performance"      },
  { id: 6,  color: "#FF6D00",  tall: false, label: "Crowd Vibes"               },
  { id: 7,  color: "#FFAB40",  tall: false, label: "Night Show"                },
  { id: 8,  color: "#2a1000",  tall: true,  label: "Vendor Row"                },
  { id: 9,  color: "#FF3D00",  tall: false, label: "Food Judging"              },
  { id: 10, color: "#FF6D00",  tall: false, label: "DJ Set"                    },
  { id: 11, color: "#FFAB40",  tall: true,  label: "Heritage Workshop"         },
  { id: 12, color: "#1a0800",  tall: false, label: "Awards Ceremony"           },
];

/* ─── Gallery Card ─────────────────────────────────────────────────────────── */
function GalleryCard({
  item,
  onOpen,
}: {
  item:   GalleryItem;
  onOpen: (item: GalleryItem) => void;
}) {
  return (
    <motion.button
      variants={scaleIn}
      whileHover={{ scale: 1.03 }}
      onClick={() => onOpen(item)}
      className={`relative mb-4 w-full cursor-pointer overflow-hidden rounded-card ${item.tall ? "aspect-[3/4]" : "aspect-square"}`}
      style={{ background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}60 100%)` }}
      aria-label={`View: ${item.label}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 flex items-end bg-gradient-to-t from-dark/80 to-transparent p-3"
      >
        <p className="font-dm text-xs font-bold uppercase tracking-wider text-white">
          {item.label}
        </p>
      </motion.div>
    </motion.button>
  );
}

/* ─── Section ──────────────────────────────────────────────────────────────── */
export function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="gallery" className="bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Gallery"
          title="Taste the Vibes"
          subtitle="Relive the sights and energy from previous editions."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4"
        >
          {GALLERY_ITEMS.map((item) => (
            <GalleryCard key={item.id} item={item} onOpen={setSelected} />
          ))}
        </motion.div>
      </div>

      {/* ── Lightbox ── */}
      <Dialog.Root
        open={selected !== null}
        onOpenChange={(open) => { if (!open) setSelected(null); }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-dark/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-card p-0 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
            {selected && (
              <div className="relative overflow-hidden rounded-card">
                <div
                  className="aspect-square w-full"
                  style={{
                    background: `linear-gradient(135deg, ${selected.color} 0%, ${selected.color}60 100%)`,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/90 to-transparent p-6">
                  <Dialog.Title className="font-syne text-xl font-black uppercase text-text">
                    {selected.label}
                  </Dialog.Title>
                  <Dialog.Description className="mt-1 font-dm text-xs text-muted">
                    FOODTOWNFEST 2026, Lagos, Nigeria
                  </Dialog.Description>
                </div>
              </div>
            )}

            <Dialog.Close className="absolute right-3 top-3 rounded-full bg-dark/70 p-2 text-text backdrop-blur-sm transition-colors hover:text-primary">
              <X size={18} />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
