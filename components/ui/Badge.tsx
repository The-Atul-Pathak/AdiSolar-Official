import type { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant = "primary" | "accent" | "surface" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-primary-pale text-primary",
  accent:  "bg-accent-light text-amber-800",
  surface: "bg-surface text-text-secondary border border-border",
  outline: "border border-primary text-primary bg-transparent",
};

export function Badge({
  variant = "primary",
  children,
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-none text-xs font-semibold uppercase tracking-wide ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
