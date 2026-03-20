"use client";

import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { SplitText } from './SplitText';
import { splitToChars } from '@/lib/splitUtils';

export interface TypeRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TypeReveal: React.FC<TypeRevealProps> = ({ text, className, delay = 0 }) => {
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  if (shouldReduce) {
    return <div className={className}>{text}</div>;
  }

  const containerVariants = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.025,
        delayChildren: delay
      } 
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' as const }
    }
  };

  const chars = splitToChars(text);

  return (
    <div ref={ref} className={`relative inline-block ${className || ''}`}>
      {/* Accessible full text hidden from view */}
      <span className="absolute w-[1px] h-[1px] overflow-hidden whitespace-nowrap" style={{ clip: 'rect(0,0,0,0)' }} aria-hidden="false">
        {text}
      </span>
      {/* Visual split text grouped by characters */}
      <motion.span 
        aria-hidden="true"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {chars.map((char, i) => (
          char.trim() === '' ? (
            <span key={i} className="inline-block whitespace-pre">
              {char}
            </span>
          ) : (
            <motion.span key={i} variants={childVariants} className="inline-block overflow-hidden">
              {char}
            </motion.span>
          )
        ))}
      </motion.span>
    </div>
  );
};
