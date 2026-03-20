/**
 * lib/tokens.ts
 * Single source of truth for design tokens — mirrors DESIGN.md
 * Use these in component className strings via Tailwind utilities.
 * Never hardcode colour hex values in components.
 */

export const colors = {
  primary:        'text-primary',
  primaryBg:      'bg-primary',
  primaryLight:   'bg-primary-light',
  primaryPale:    'bg-primary-pale',
  accent:         'text-accent',
  accentBg:       'bg-accent',
  surface:        'bg-surface',
  surfaceDark:    'bg-surface-dark',
  textPrimary:    'text-text-primary',
  textSecondary:  'text-text-secondary',
  textTertiary:   'text-text-tertiary',
  border:         'border-border',
} as const;

export const typography = {
  /** hero headline */
  display:  'text-5xl lg:text-6xl font-bold font-heading',
  /** page H1 */
  h1:       'text-4xl lg:text-5xl font-bold font-heading',
  /** section H2 */
  h2:       'text-3xl font-bold font-heading',
  /** card/subsection H3 */
  h3:       'text-xl font-semibold font-heading',
  /** list heading H4 */
  h4:       'text-lg font-semibold font-heading',
  /** large body copy */
  bodyLg:   'text-lg font-normal',
  /** standard body copy */
  body:     'text-base font-normal',
  /** small / helper text */
  small:    'text-sm font-normal',
  /** caption / eyebrow label */
  caption:  'text-xs font-semibold uppercase tracking-widest',
  /** mono — calculator numbers */
  mono:     'font-mono',
} as const;

export const spacing = {
  /** Section vertical padding */
  section:    'py-20 lg:py-28',
  /** Standard container */
  container:  'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  /** Card internal padding */
  card:       'p-6 lg:p-8',
  /** Default component gap */
  gap:        'gap-6',
  /** Section-level gap */
  gapSection: 'gap-8',
  /** Form field gap */
  gapForm:    'gap-4',
} as const;

export const radius = {
  button: 'rounded-full',
  card:   'rounded-2xl',
  input:  'rounded-xl',
  badge:  'rounded-full',
  image:  'rounded-2xl',
  panel:  'rounded-3xl',
} as const;

export const shadows = {
  card:   'shadow-sm hover:shadow-lg transition-shadow duration-300',
  ctaCard:'shadow-md hover:shadow-xl transition-shadow duration-300',
  button: 'shadow-sm hover:shadow-md transition-shadow',
  nav:    'shadow-sm backdrop-blur-md',
} as const;
