"use client";

import { useInView } from "react-intersection-observer";

interface UseScrollRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useScrollReveal({
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = "0px 0px -50px 0px",
}: UseScrollRevealOptions = {}) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  return { ref, inView };
}
