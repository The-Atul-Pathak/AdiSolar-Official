# DESIGN.md
# Design System — AdiSolar Website
# Created: March 2026

## BRAND COLOURS
/* Reference: evaskaenergy.com — Modern, clean solar energy aesthetic */
/* Palette: Deep green + warm amber/orange + clean whites and greys */

Primary (Green):        #1B6B3A   /* Deep solar green — CTAs, accents, active states */
Primary Light:          #2E8B57   /* Hover state for primary */
Primary Pale:           #E8F5ED   /* Light green backgrounds, tag backgrounds */
Accent (Amber):         #F59E0B   /* Energy/sun accent — highlights, badges, stats */
Accent Light:           #FEF3C7   /* Amber backgrounds */
Background:             #FFFFFF   /* Page background */
Surface:                #F8FAFB   /* Card backgrounds, section alternates */
Surface Dark:           #0F2417   /* Dark hero overlays, footer background */
Text Primary:           #1A1A1A   /* Main headings */
Text Secondary:         #4B5563   /* Body text, descriptions */
Text Tertiary:          #9CA3AF   /* Captions, placeholders */
Border:                 #E5E7EB   /* Card borders, input borders */
Success:                #16A34A
Error:                  #DC2626
White:                  #FFFFFF

## CSS CUSTOM PROPERTIES (add to globals.css)
:root {
  --color-primary:        #1B6B3A;
  --color-primary-light:  #2E8B57;
  --color-primary-pale:   #E8F5ED;
  --color-accent:         #F59E0B;
  --color-accent-light:   #FEF3C7;
  --color-bg:             #FFFFFF;
  --color-surface:        #F8FAFB;
  --color-surface-dark:   #0F2417;
  --color-text-primary:   #1A1A1A;
  --color-text-secondary: #4B5563;
  --color-text-tertiary:  #9CA3AF;
  --color-border:         #E5E7EB;
}

## TYPOGRAPHY
Heading font:   'Plus Jakarta Sans'   (Google Fonts — modern, clean, professional)
Body font:      'Inter'               (Google Fonts — highly readable, neutral)
Mono font:      'JetBrains Mono'      (for calculator numbers/data display)

/* Type scale */
Display:   text-5xl  lg:text-6xl  font-bold    (hero headlines)
H1:        text-4xl  lg:text-5xl  font-bold
H2:        text-3xl  font-bold
H3:        text-xl   font-semibold
H4:        text-lg   font-semibold
Body LG:   text-lg   font-normal
Body:      text-base font-normal
Small:     text-sm   font-normal
Caption:   text-xs   font-medium uppercase tracking-widest

## SPACING
Section vertical padding:  py-20 lg:py-28
Container max width:       max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Card internal padding:     p-6 lg:p-8
Component gap:             gap-6 (default)  gap-8 (sections)
Form field gap:            gap-4

## BORDER RADIUS
Buttons:       rounded-full
Cards:         rounded-2xl
Inputs:        rounded-xl
Badges/tags:   rounded-full
Images:        rounded-2xl
Large panels:  rounded-3xl

## SHADOWS
Card:          shadow-sm hover:shadow-lg transition-shadow duration-300
CTA Card:      shadow-md hover:shadow-xl transition-shadow duration-300
Button:        shadow-sm hover:shadow-md transition-shadow
Nav:           shadow-sm backdrop-blur-md bg-white/95
Hero overlay:  bg-gradient-to-r from-black/60 to-black/30

## COMPONENTS — PATTERNS

### Primary Button (Green — main CTA)
bg-primary text-white font-semibold px-6 py-3 rounded-full
hover:bg-primary-light shadow-sm hover:shadow-md
transition-all duration-200

### Secondary Button (Outline)
border-2 border-primary text-primary font-semibold px-6 py-3 rounded-full
hover:bg-primary hover:text-white transition-all duration-200

### Accent Button (Amber — secondary CTA on dark backgrounds)
bg-accent text-white font-semibold px-6 py-3 rounded-full
hover:bg-amber-600 shadow-sm hover:shadow-md transition-all duration-200

### Card (standard)
bg-white rounded-2xl shadow-sm p-6 lg:p-8
border border-border hover:shadow-lg transition-shadow duration-300

### Card (coloured surface)
bg-surface rounded-2xl p-6 lg:p-8 border border-border

### Section Header Pattern
Caption label: text-primary text-xs font-semibold uppercase tracking-widest mb-3
H2 heading:    text-text-primary text-3xl font-bold mb-4 (max 2 lines)
Subtext:       text-text-secondary text-lg max-w-2xl (centred on hero sections)

### Form Input
w-full px-4 py-3 rounded-xl border border-border bg-white
text-text-primary placeholder:text-text-tertiary
focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
transition-all duration-200

### Lead Form Card (Hero form)
bg-white/95 backdrop-blur rounded-2xl shadow-xl p-6
border border-white/20

### Step/Process Card
Number badge: w-10 h-10 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center
Title: font-semibold text-text-primary
Body: text-text-secondary text-sm

### FAQ Accordion
Question: font-semibold text-text-primary cursor-pointer flex justify-between items-center py-4
Answer: text-text-secondary text-base pb-4
Divider: border-b border-border

### Stat Number (for stats strip)
Number: font-mono text-4xl font-bold text-primary
Label: text-text-secondary text-sm font-medium

## NAVBAR
Height:         h-16 lg:h-20
Background:     bg-white/95 backdrop-blur-md shadow-sm
Logo:           h-10 object-contain
Nav links:      text-text-secondary hover:text-primary font-medium text-sm transition-colors
CTA button:     Primary button (smaller: px-4 py-2)
Phone:          text-primary font-semibold text-sm (desktop only)
Mobile:         Hamburger menu → full-screen or slide-in menu

## HERO SECTION
Layout:         Two-column grid on desktop, stacked on mobile
Left column:    Headline + subtext + secondary CTA
Right column:   Lead capture form card
Background:     Full-bleed solar image with dark gradient overlay
Headline colour: text-white
Subtext colour:  text-white/80
Min height:     min-h-[600px] lg:min-h-[700px]

## ICON STYLE
Use lucide-react icons throughout
Size standard: w-5 h-5 (inline), w-6 h-6 (cards), w-8 h-8 (feature sections)
Colour: text-primary (most icons), text-accent (energy/sun icons)
Never use raw SVG — always lucide-react

## SECTION ALTERNATION
Odd sections:  bg-white
Even sections: bg-surface (#F8FAFB)
Dark sections: bg-surface-dark text-white (footer, hero)
CTA strips:    bg-primary text-white

## ANIMATIONS (for Phase 2A)
Page enter:       fade-in + slide up 24px, duration 500ms, ease-out
Hover cards:      scale(1.02) duration 200ms
Scroll reveal:    fade + slide up, stagger 100ms between items
Count up:         Stats animate 0 → value on scroll into view
Line reveal:      Accent underlines draw left-to-right under headings
All animations:   Must respect prefers-reduced-motion: reduce

## FOOTER
Background: bg-surface-dark (#0F2417)
Text: text-white/80
Accent: text-accent
Columns: Logo+tagline | Quick Links | Services | Contact
Bottom bar: border-t border-white/10, copyright text

## WHATSAPP BUTTON
Position: fixed bottom-6 right-6 z-50
Style: bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg
       flex items-center justify-center hover:scale-110 transition-transform
Icon: WhatsApp SVG or MessageCircle from lucide (green)
Link: https://wa.me/918882088600

## DARK MODE
Not required for initial launch.