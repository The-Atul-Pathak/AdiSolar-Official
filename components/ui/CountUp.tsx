"use client";

import { useState, useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useMotionValueEvent, useReducedMotion } from "framer-motion";

type CountUpProps = {
  to: number;
  from?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
};

export function CountUp({
  to,
  from = 0,
  duration = 1.5,
  suffix = "",
  prefix = "",
  decimals = 0,
}: CountUpProps) {
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const [display, setDisplay] = useState(
    prefix + Number(from.toFixed(decimals)).toLocaleString('en-IN') + suffix
  );

  useEffect(() => {
    if (isInView && !shouldReduce) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to, shouldReduce]);

  useMotionValueEvent(springValue, "change", (latest) => {
    if (!shouldReduce) {
      setDisplay(
        prefix +
        Number(latest.toFixed(decimals)).toLocaleString('en-IN') +
        suffix
      );
    }
  });

  if (shouldReduce) {
    return <span className="font-mono text-4xl font-bold text-primary">{prefix + Number(to.toFixed(decimals)).toLocaleString('en-IN') + suffix}</span>;
  }

  return <span ref={ref} className="font-mono text-4xl font-bold text-primary">{display}</span>;
}
