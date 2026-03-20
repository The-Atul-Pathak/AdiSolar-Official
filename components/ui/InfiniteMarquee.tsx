"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  pauseOnHover?: boolean;
}

/**
 * A simple infinite horizontal scroll/marquee using Framer Motion.
 * It duplicates children to ensure a seamless looping effect.
 */
export function InfiniteMarquee({
  children,
  speed = 40,
  direction = "left",
  className = "",
  pauseOnHover = true,
}: InfiniteMarqueeProps) {
  return (
    <div className={`relative flex overflow-hidden group ${className}`}>
      <motion.div
        className="flex shrink-0 gap-6"
        animate={{
          x: direction === "left" ? [0, "-50%"] : ["-50%", 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        // Using CSS variable or state to pause on hover if needed
        style={{
          display: "flex",
          width: "max-content",
        }}
      >
        {/* First set of items */}
        <div className="flex gap-6 py-4">
          {children}
        </div>
        {/* Second set of items for seamless loop */}
        <div className="flex gap-6 py-4">
          {children}
        </div>
      </motion.div>

      {/* Optional: Add gradient fades on the sides for a premium look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary-pale to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary-pale to-transparent z-10" />
    </div>
  );
}
