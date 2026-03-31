"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export type SectionHeaderAlign = "center" | "left";

export interface SectionHeaderProps {
  /** Small eyebrow label above the heading (e.g. "Why Solar") */
  caption?: string;
  /** Main H2 heading */
  heading: ReactNode;
  /** Optional supporting paragraph below the heading */
  subtext?: ReactNode;
  /** Text alignment — default "center" */
  align?: SectionHeaderAlign;
  /** Optional extra className on the wrapper */
  className?: string;
  /** Automatically append the animated accent underline per phase 2A */
  withLine?: boolean;
}

export function SectionHeader({
  caption,
  heading,
  subtext,
  align = "center",
  className = "",
  withLine = false,
}: SectionHeaderProps) {
  const shouldReduce = useReducedMotion();
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const } 
    }
  };

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {caption && (
        <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
          {caption}
        </span>
      )}
      <h2 className="text-text-primary text-3xl font-bold font-heading mb-4 leading-tight flex flex-col items-center sm:items-start group-animate">
        {heading}
        {withLine && (
          shouldReduce ? (
            <div className="h-1 w-16 bg-primary rounded-full mt-3" />
          ) : (
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              style={{ transformOrigin: align === "center" ? "center" : "left" }}
              className={`h-1 w-16 bg-primary rounded-full mt-3 ${align === "center" ? "self-center" : "self-start"}`}
            />
          )
        )}
      </h2>
      {subtext && (
        <div
          className={`text-text-secondary text-lg ${
            align === "center" ? "max-w-2xl" : "max-w-xl"
          }`}
        >
          {subtext}
        </div>
      )}
    </div>
  );
}
