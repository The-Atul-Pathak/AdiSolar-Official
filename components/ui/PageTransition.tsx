"use client";

import type { ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export interface PageTransitionProps {
  children: ReactNode;
  pageKey?: string;
}

const pageVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -12 },
};

const reducedVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
  exit:    { opacity: 0 },
};

export function PageTransition({ children, pageKey }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={shouldReduceMotion ? reducedVariants : pageVariants}
        transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
