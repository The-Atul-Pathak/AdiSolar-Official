# TASKS.md
# Master Task List — AdiSolar Website
# Created: March 2026

## PHASE 0 — SETUP (You)
- [x] 0.1  Fill SPEC.md from client intake
- [x] 0.2  Fill DESIGN.md with brand and style system
- [x] 0.3  Fill AGENTS.md with rules and stack
- [x] 0.4  Create project folder structure
- [ ] 0.5  Set up Next.js project with TypeScript + Tailwind
- [ ] 0.6  Add client logo to /public/assets/ when received
- [ ] 0.7  Confirm real business email (currently using placeholder adisolar@gmail.com)

## PHASE 1 — DESIGN SYSTEM (Agent Session 1)
- [x] 1.1  Configure Tailwind with design tokens from DESIGN.md
- [x] 1.2  Set up Google Fonts: Plus Jakarta Sans + Inter + JetBrains Mono
- [x] 1.3  Create Button component (primary, secondary, accent variants)
- [x] 1.4  Create Card component (standard + coloured surface variants)
- [x] 1.5  Create SectionHeader component (caption + heading + subtext)
- [x] 1.6  Create Navbar component (desktop + mobile hamburger)
- [x] 1.7  Create Footer component (4-column dark footer)
- [x] 1.8  Create WhatsApp floating button component
- [x] 1.9  Create FormInput component (styled input + textarea + select)
- [x] 1.10 Create Badge/Tag component (for "Residential", "Commercial" etc.)
- [x] 1.11 Create StepCard component (number badge + title + body)
- [x] 1.12 Create StatCard component (large number + label for stats strip)
- [x] 1.13 Set up page transition animations base (Framer Motion config)

## PHASE 2 — PAGE STRUCTURE (Agent Session 2)
- [x] 2.1  Home page — section shells in correct order (Hero, WhySolar, WhoWeServe, Process, Testimonials, FAQ, ContactStrip)
- [x] 2.2  About Us page — section shells (WhatWeDo, WhyChooseUs, TechWeUse, Team)
- [x] 2.3  All About Solar page — section shells (HowSolarWorks, SystemTypes, MythsBusted, Subsidies, FAQ)
- [x] 2.4  Solar Calculator page — shell with input area + results area
- [x] 2.5  Get Solar page — form section + detailed process section
- [x] 2.6  Verify all routes work and navigation links are correct
- [x] 2.7  Verify mobile layout on all pages (375px, 768px)
- [x] 2.8  Verify Navbar links to all 5 pages correctly

## PHASE 2A — SCROLL REVEAL ANIMATIONS (Agent Session 2A)
- [x] 2A.1  Create useScrollReveal custom hook
- [x] 2A.2  Create <RevealWrapper> component
- [x] 2A.3  Create <StaggerContainer> component
- [x] 2A.4  Create <CountUp> component (for stats strip numbers)
- [x] 2A.5  Wrap all section headings and body paragraphs in <RevealWrapper>
- [x] 2A.6  Wrap all card grids in <StaggerContainer>
- [x] 2A.7  Apply <CountUp> to stat numbers on homepage stats strip
- [x] 2A.8  Add line-reveal animation to major section headings
- [x] 2A.9  Verify useReducedMotion() is respected on all animated components
- [x] 2A.10 Lighthouse check — score must remain 80+

## PHASE 2D — KINETIC TYPOGRAPHY (Agent Session 2D — for All About Solar page)
- [x] 2D.1  Ask permission to install splitting.js
- [x] 2D.2  Create <TypeReveal> component — for hero headline on All About Solar
- [x] 2D.3  Create <BlurReveal> component — for section headings on All About Solar
- [x] 2D.4  Create <ScrollHighlight> component — for key paragraph on All About Solar
- [x] 2D.5  Apply TypeReveal to H1 on All About Solar page
- [x] 2D.6  Apply BlurReveal to all section H2s on All About Solar
- [x] 2D.7  Apply ScrollHighlight to the "How Solar Works" explanation paragraph
- [x] 2D.8  Verify all text animations have screen-reader accessible fallbacks
- [x] 2D.9  Verify useReducedMotion() respected on all components

## PHASE 3 — CONTENT & COPY (Agent Session 3)
- [x] 3.1  Home: hero headline, subtext, hero form labels and button
- [x] 3.2  Home: Why Solar strip — 6 benefit cards with icons and copy
- [x] 3.2a Home: ROI & Impact Scorecard — Result-driven benefit showcase [/]
- [x] 3.3  Home: Who We Serve — 3 segment cards (Residential, Commercial, Industrial/Institutional)
- [x] 3.4  Home: Our Process — 5 steps with full copy
- [x] 3.5  Home: Stats strip — 4 placeholder stat cards
- [x] 3.6  Home: Testimonials — 3 placeholder testimonial cards
- [x] 3.7  Home: FAQ accordion — 6 questions with full answers
- [x] 3.8  Home: Contact strip copy + phone + CTA
- [x] 3.9  About: What We Do section copy
- [x] 3.10 About: Why Choose AdiSolar — 6 differentiators with icons
- [x] 3.11 About: Technology We Use — panel specs, battery specs, inverter info (from ielecssol data, AdiSolar branded)
- [x] 3.12 About: Team section — 4 placeholder team cards
- [x] 3.13 All About Solar: How Solar Works — step-by-step with IMAGE PROMPT placeholders
- [x] 3.14 All About Solar: System Types (On-Grid, Off-Grid, Hybrid) with IMAGE PROMPT placeholders
- [x] 3.15 All About Solar: Myths Busted — 5 myth/fact pairs with IMAGE PROMPT placeholder
- [x] 3.16 All About Solar: Government Subsidies section
- [x] 3.17 All About Solar: FAQ — 8-10 technical questions
- [x] 3.18 Solar Calculator: labels, result card copy, disclaimer text
- [x] 3.19 Get Solar: form labels, heading, subtext, success message
- [x] 3.20 Get Solar: detailed process section — 5 steps with 2-3 sentence explanations each

## PHASE 4 — INTEGRATIONS & FUNCTIONALITY (Agent Session 4)
- [ ] 4.1  Hero lead form — React Hook Form + Zod validation + submission handler
- [ ] 4.2  Get Solar form — React Hook Form + Zod validation + submission handler
- [ ] 4.3  ⚠️ STOP: Confirm real email with client before wiring email delivery (see AGENTS.md)
- [ ] 4.4  Solar Calculator — full client-side JS logic (see SPEC.md for formulas)
- [ ] 4.5  FAQ Accordion — interactive open/close with Framer Motion
- [ ] 4.6  WhatsApp button — link to wa.me/918882088600
- [ ] 4.7  Chatbot widget — embed Tidio or Crisp free tier
- [ ] 4.8  Google Analytics 4 — via next/script (confirm measurement ID with client)
- [ ] 4.9  Meta tags — unique title + description for every page
- [ ] 4.10 Open Graph tags for social sharing
- [ ] 4.11 robots.txt + sitemap.xml (Next.js dynamic sitemap)

## PHASE 5 — QA & LAUNCH (Agent Session 5)
- [ ] 5.1  PageSpeed Insights — 85+ on mobile and desktop
- [ ] 5.2  Optimise all images (next/image with proper sizing + WebP)
- [ ] 5.3  Cross-browser check: Chrome, Safari, Firefox
- [ ] 5.4  Mobile check: 375px, 390px, 430px, 768px
- [ ] 5.5  Check hero form submits and shows success state
- [ ] 5.6  Check Get Solar form submits and shows success state
- [ ] 5.7  Check Solar Calculator produces correct outputs
- [ ] 5.8  Check all FAQ accordions open/close correctly
- [ ] 5.9  Check WhatsApp button opens correct chat on mobile
- [ ] 5.10 Check all nav links work and active states are correct
- [ ] 5.11 Verify Analytics fires on page load
- [ ] 5.12 Domain purchase guidance (adisolar.in or adisolar.co.in)
- [ ] 5.13 Connect custom domain on Vercel
- [ ] 5.14 Verify SSL certificate active
- [ ] 5.15 Submit sitemap to Google Search Console
- [ ] 5.16 Launch Readiness Report in PROGRESS.md