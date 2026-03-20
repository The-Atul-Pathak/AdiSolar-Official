"use client";

import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { splitToWords } from '@/lib/splitUtils';

export interface WordFadeProps {
  text: string;
  className?: string;
  delay?: number;
}

export const WordFade: React.FC<WordFadeProps> = ({ text, className, delay = 0 }) => {
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
        staggerChildren: 0.06,
        delayChildren: delay
      } 
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const words = splitToWords(text);

  return (
    <div ref={ref} className={`relative inline-block ${className || ''}`}>
      {/* Accessible full text hidden from view */}
      <span className="absolute w-[1px] h-[1px] overflow-hidden whitespace-nowrap" style={{ clip: 'rect(0,0,0,0)' }} aria-hidden="false">
        {text}
      </span>
      {/* Visual split text grouped by words */}
      <motion.span 
        aria-hidden="true"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, i) => (
          word.trim() === '' ? (
            <span key={i} className="inline-block whitespace-pre">
              {word}
            </span>
          ) : (
            <motion.span key={i} variants={childVariants} className="inline-block overflow-hidden">
              {word}
            </motion.span>
          )
        ))}
      </motion.span>
    </div>
  );
};
