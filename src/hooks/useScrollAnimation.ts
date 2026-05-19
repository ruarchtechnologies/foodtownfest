"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollTriggerOptions = {
  start?: string;
  end?: string;
  scrub?: boolean | number;
  toggleActions?: string;
  pin?: boolean;
  markers?: boolean;
};

type ScrollAnimConfig = {
  from?: gsap.TweenVars;
  to: gsap.TweenVars;
  trigger?: ScrollTriggerOptions;
};

export function useScrollAnimation<T extends HTMLElement>(
  config: ScrollAnimConfig
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const scrollTrigger: ScrollTrigger.Vars = {
        trigger: el,
        start: config.trigger?.start ?? "top 85%",
        end: config.trigger?.end ?? "bottom 15%",
        toggleActions:
          config.trigger?.toggleActions ?? "play none none reverse",
        scrub: config.trigger?.scrub,
        pin: config.trigger?.pin,
        markers: config.trigger?.markers,
      };

      if (config.from) {
        gsap.fromTo(el, config.from, { ...config.to, scrollTrigger });
      } else {
        gsap.to(el, { ...config.to, scrollTrigger });
      }
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
