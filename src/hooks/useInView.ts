"use client";

import { useInView as useInViewObserver } from "react-intersection-observer";

type UseInViewOptions = {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
};

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.15, triggerOnce = true, rootMargin } = options;

  return useInViewObserver({ threshold, triggerOnce, rootMargin });
}
