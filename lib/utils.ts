/**
 * lib/utils.ts
 * Shared utility functions for AdiSolar website.
 */

/**
 * Merge class names — simple utility to join truthy class strings.
 * Use instead of clsx/cn when you need conditional class merging.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format an Indian phone number for display.
 * e.g. "918882088600" → "+91 88820 88600"
 */
export function formatIndianPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) {
    const local = digits.slice(2);
    return `+91 ${local.slice(0, 5)} ${local.slice(5)}`;
  }
  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return raw;
}

/**
 * Format a number to Indian locale with commas.
 * e.g. 150000 → "1,50,000"
 */
export function formatIndianNumber(n: number): string {
  return n.toLocaleString("en-IN");
}
