"use client";

import type { HTMLAttributes } from "react";

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  /** The number/value to display (e.g. "500+" or "2 MW+") */
  value: React.ReactNode;
  /** Label below the number (e.g. "Happy Customers") */
  label: string;
  /** Optional data-id for CountUp targeting in Phase 2A */
  dataId?: string;
}

export function StatCard({
  value,
  label,
  dataId,
  className = "",
  ...props
}: StatCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-2 text-center ${className}`}
      data-stat-id={dataId}
      {...props}
    >
      <span
        className="font-mono text-4xl lg:text-5xl font-bold text-primary leading-none"
        aria-label={`${value} ${label}`}
      >
        {value}
      </span>
      <span className="text-text-secondary text-sm font-medium">{label}</span>
    </div>
  );
}
