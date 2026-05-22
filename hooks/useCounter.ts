"use client";

import { useState, useEffect, useRef } from "react";

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  enabled?: boolean;
}

export function useCounter({
  start = 0,
  end,
  duration = 2000,
  enabled = true,
}: UseCounterOptions): number {
  const [count, setCount] = useState(start);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const startTime = performance.now();
    const range = end - start;

    const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);

      setCount(start + range * easedProgress);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [start, end, duration, enabled]);

  return count;
}
