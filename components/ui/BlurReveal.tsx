"use client";

import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

export interface BlurRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const BlurReveal: React.FC<BlurRevealProps> = ({ children, delay = 0, className }) => {
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ filter: 'blur(8px)', opacity: 0 }}
      animate={isInView
        ? { filter: 'blur(0px)', opacity: 1 }
        : { filter: 'blur(8px)', opacity: 0 }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }}
      style={{ willChange: 'filter, opacity' }}
    >
      {children}
    </motion.div>
  );
};
