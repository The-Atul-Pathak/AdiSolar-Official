"use client";

import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { splitToWords } from '@/lib/splitUtils';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

export interface ScrollHighlightProps {
  text: string;
  className?: string;
}

export const ScrollHighlight: React.FC<ScrollHighlightProps> = ({ text, className }) => {
  const shouldReduce = useReducedMotion();
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const words = splitToWords(text);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const index = Math.floor(latest * words.length);
    setActiveIndex(index);
  });

  // Apply splitting JS logic if required by DOM access (for accessibility/layout splitting)
  useEffect(() => {
    if (containerRef.current) {
      import('splitting').then((mod) => {
        const Splitting = mod.default;
        Splitting({ target: containerRef.current as HTMLElement, by: 'words' });
      });
    }
  }, []);

  if (shouldReduce) {
    return <p className={`text-primary ${className || ''}`}>{text}</p>;
  }

  return (
    <p ref={containerRef} className={`leading-relaxed ${className || ''}`}>
      {/* Accessible full text hidden from view */}
      <span className="absolute w-[1px] h-[1px] overflow-hidden whitespace-nowrap" style={{ clip: 'rect(0,0,0,0)' }} aria-hidden="false">
        {text}
      </span>
      {/* Visual split text grouped by words */}
      <span aria-hidden="true">
        {words.map((word, i) => (
          word.trim() === '' ? (
            <span key={i} className="inline-block whitespace-pre">
              {word}
            </span>
          ) : (
            <span
              key={i}
              className="inline-block transition-colors duration-150 ease-in-out"
              style={{
                color: i <= activeIndex ? 'var(--color-primary, #1B6B3A)' : 'var(--color-text-tertiary, #9CA3AF)',
                marginRight: '0.25em'
              }}
            >
              {word}
            </span>
          )
        ))}
      </span>
    </p>
  );
};
