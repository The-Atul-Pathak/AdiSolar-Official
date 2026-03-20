"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export interface MorphingHeadlineProps {
  phrases: string[];
  interval?: number;
  className?: string;
}

export const MorphingHeadline: React.FC<MorphingHeadlineProps> = ({ 
  phrases, 
  interval = 2800, 
  className 
}) => {
  const shouldReduce = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (shouldReduce) return;
    
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrent(i => (i + 1) % phrases.length);
        setIsVisible(true);
      }, 400);
    }, interval);

    // Pause when tab is not in focus
    const handleVisibility = () => {
      if (document.hidden) {
        clearInterval(timer);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [interval, phrases.length, shouldReduce]);

  if (shouldReduce) {
    const staticText = phrases.join(', ').replace(/,\s*([^,]+)$/, ', and $1');
    return <div className={className}>{staticText}</div>;
  }

  return (
    <span aria-live="polite" aria-atomic="true" className={className}>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.span
            key={current}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="inline-block"
          >
            {phrases[current]}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};
