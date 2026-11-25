'use client';

import { useInView } from 'motion/react';
import { useCallback, useEffect, useState, useSyncExternalStore, type RefObject } from 'react';

const REDUCE = '(prefers-reduced-motion: reduce)';
const subscribe = (onChange: () => void) => {
  const mq = window.matchMedia(REDUCE);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
};

/**
 * True when the visitor asked for less motion. Starts false while the page
 * hydrates (matching the server HTML), then switches if needed.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(REDUCE).matches,
    () => false,
  );
}

/** True while the element is on screen (loops rest when it is not). */
export function useOnScreen(ref: RefObject<Element | null>, margin = '0px 0px -10% 0px') {
  return useInView(ref, { margin: margin as `${number}px ${number}px ${number}px ${number}px` });
}

/**
 * A step counter for small looping demos. Each step lasts its own time;
 * it only runs while `active`. With reduced motion it stays on `restStep`.
 */
export function useSteps(durations: number[], active: boolean, restStep = durations.length - 1) {
  const reduce = usePrefersReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce || !active) return;
    const t = window.setTimeout(() => setStep((s) => (s + 1) % durations.length), durations[step]);
    return () => window.clearTimeout(t);
  }, [step, active, reduce, durations]);

  return reduce ? restStep : step;
}

/** True while a media query matches. False during hydration (matches the server HTML), then the real value. */
export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    },
    [query],
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
