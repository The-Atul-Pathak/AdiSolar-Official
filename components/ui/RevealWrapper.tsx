"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  scaleIn,
  slideLeft,
  slideRight,
  standardTransition,
} from "@/lib/animations";

const variants = {
  fadeUp,
  fadeIn,
  scaleIn,
  slideLeft,
  slideRight,
};

type RevealWrapperProps = {
  variant?: keyof typeof variants;
  delay?: number;
  className?: string;
  children: React.ReactNode;
  staggerChild?: boolean;
};

export function RevealWrapper({
  variant = "fadeUp",
  delay = 0,
  className,
  children,
  staggerChild = false,
}: RevealWrapperProps) {
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  if (staggerChild) {
    return (
      <motion.div variants={variants[variant]} className={className}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={variants[variant]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ ...standardTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
