import React from 'react';
import { splitToChars, splitToWords } from '@/lib/splitUtils';

export interface SplitTextProps {
  text: string;
  by: 'char' | 'word';
  className?: string;
}

export const SplitText: React.FC<SplitTextProps> = ({ text, by, className }) => {
  const splits = by === 'char' ? splitToChars(text) : splitToWords(text);

  return (
    <span className={`relative inline-block ${className || ''}`}>
      {/* Accessible full text hidden from view but available to screen readers */}
      <span className="absolute w-[1px] h-[1px] overflow-hidden whitespace-nowrap" style={{ clip: 'rect(0,0,0,0)' }} aria-hidden="false">
        {text}
      </span>
      {/* Visual split text grouped by characters or words */}
      <span aria-hidden="true">
        {splits.map((split, i) => (
          split.trim() === '' ? (
            <span key={i} className="inline-block whitespace-pre">
              {split}
            </span>
          ) : (
            <span key={i} className="inline-block overflow-hidden">
              {split}
            </span>
          )
        ))}
      </span>
    </span>
  );
};
