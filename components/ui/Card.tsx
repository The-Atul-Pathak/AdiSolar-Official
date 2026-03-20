import type { HTMLAttributes, ReactNode } from "react";

export type CardVariant = "standard" | "surface";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: ReactNode;
  hover?: boolean;
}

const variantClasses: Record<CardVariant, string> = {
  standard:
    "bg-white border border-border shadow-sm",
  surface:
    "bg-surface border border-border",
};

export function Card({
  variant = "standard",
  children,
  hover = true,
  className = "",
  ...props
}: CardProps) {
  const base = "rounded-none p-6 lg:p-8";
  const hoverClass = hover
    ? "hover:shadow-lg transition-shadow duration-300"
    : "";

  return (
    <div
      className={`${base} ${variantClasses[variant]} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
