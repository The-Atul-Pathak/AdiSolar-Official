import type { ReactNode } from "react";

export interface StepCardProps {
  /** Step number displayed in the circle badge */
  step: number;
  /** Step title */
  title: string;
  /** Step body text */
  body: ReactNode;
  /** Optional image URL for the step */
  image?: string;
  className?: string;
}

export function StepCard({ step, title, body, image, className = "" }: StepCardProps) {
  return (
    <div className={`flex flex-col items-start gap-4 ${className}`}>
      {/* Step Image */}
      {image && (
        <div className="w-full aspect-square overflow-hidden mb-2">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Number badge */}
      <div
        className="w-10 h-10 rounded-none bg-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0"
        aria-hidden="true"
      >
        {step}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5">
        <h3 className="font-semibold text-text-primary font-heading text-base lg:text-lg">
          {title}
        </h3>
        <div className="text-text-secondary text-sm leading-relaxed">
          {body}
        </div>
      </div>
    </div>
  );
}
