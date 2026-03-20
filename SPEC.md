# SPEC.md
# Project Specification — AdiSolar Website
# Created: March 2026 | Last updated: March 2026

## PROJECT OVERVIEW
Client:           AdiSolar
Industry:         Solar Panel Installation & Services
Website type:     New build
Primary goal:     Generate leads (site visit requests) from residential, commercial, and institutional customers
Target audience:  Homeowners, business owners, and institutional decision-makers across India looking to switch to solar
Primary CTA:      "Get Free Site Visit" — fill in the lead form
Phone:            +91 8882088600
WhatsApp:         +91 8882088600
Email:            adisolar@gmail.com ← PLACEHOLDER ONLY — confirm real email before Phase 4
Location:         New Delhi (Service: Pan India)
Deadline:         No hard deadline
Role:             Middleman between solar manufacturers and end customers (B2B + B2C)
Reference site:   https://www.evaskaenergy.com/

## SITEMAP — PAGES TO BUILD
1. Home (/)
   - Navbar
   - Hero section with inline lead capture form
   - Why Solar strip
   - Who We Serve section
   - Our Process section
   - FAQs
   - Contact strip (phone + CTA to contact page)
   - Footer
   - Floating WhatsApp button
   - Chatbot widget

2. About Us (/about)
   - What We Do
   - Why Choose AdiSolar
   - Technology We Use
   - Our Team

3. All About Solar (/all-about-solar)
   - How Solar Works (with rich visuals + animations)
   - Solar Myths Busted
   - FAQs
   NOTE FOR AGENT: Images for this page should be generated using Google's image generation
   tool (Imagen / "nano banana"). Include [IMAGE PROMPT: description] placeholders at each
   spot where an AI-generated image should appear, so the human can generate and drop them in.

4. Solar Calculator (/solar-calculator)
   - Interactive calculator: input monthly electricity bill → output:
     a) Estimated monthly savings (₹)
     b) Recommended system size (kW)
     c) Approximate installation cost (₹)
   - Results displayed visually (cards/chart)
   - CTA after results: "Get Your Free Site Visit"

5. Get Solar (/get-solar)
   - Lead capture form: Name, Phone, Address, Property Type (Residential/Commercial/Industrial/Institutional)
   - Our Process explained in detail (expanded version of homepage process)
   - CTA after form submission: confirmation message + WhatsApp prompt

## DESIGN PREFERENCES
Style:       Modern & Clean — inspired by evaskaenergy.com
Feel:        Professional, trustworthy, green-energy forward
Colours:     To be defined in DESIGN.md (green + amber/orange palette)
Fonts:       To be selected — clean sans-serif
Logo:        Client has a logo — add to /public/assets/logo.png when received
Brand guide: Not yet defined — agent to propose and note in DESIGN.md

## CONTENT
Copy written by:   Agent writes everything from scratch
Photos provided:   No — use high-quality stock solar images (reference Unsplash/placeholder)
Logo provided:     Yes — [PLACEHOLDER: /public/assets/logo.png — awaiting client file]
Testimonials:      No — use placeholder testimonials (3 cards: Residential, Commercial, Industrial)

## STATS STRIP (Homepage)
Use placeholder numbers until client confirms real data:
- [PLACEHOLDER: 500+] Happy Customers
- [PLACEHOLDER: 10+] Years of Experience
- [PLACEHOLDER: 2 MW+] Installed Capacity
- [PLACEHOLDER: 28] States Served
NOTE: Wrap in <CountUp> components (Phase 2A animation)

## FEATURES & INTEGRATIONS
- [x] Hero lead form (Name, Mobile, Pincode, Approx Monthly Electricity Bill)
- [x] Get Solar full enquiry form (Name, Phone, Address, Property Type)
- [x] WhatsApp floating button (+91 8882088600)
- [x] Chatbot widget (basic — third-party embed or simple FAQ bot)
- [x] Solar savings calculator (client-side JS, no backend needed)
- [x] Contact strip with phone number
- [x] Google Analytics 4 (measurement ID: [PLACEHOLDER: G-XXXXXXXXXX])
- [x] Basic SEO (meta tags, sitemap, robots.txt)
- [x] Mobile responsive
- [ ] Google Maps embed (address TBD — add when client confirms office address)
- [ ] Email delivery for form submissions (CONFIRM EMAIL BEFORE PHASE 4 — see AGENTS.md note)

## SOLAR CALCULATOR LOGIC
Input: Monthly electricity bill (₹)
Assumptions (standard industry averages for India):
  - ₹1 of electricity bill ≈ 0.1 kWh of monthly consumption
  - 1 kW of solar generates ~120 kWh/month in India
  - Cost per kW installed: ₹60,000 (approx — use as default, make it editable)
  - Solar covers ~80% of consumption
  - Grid electricity cost: ₹8/kWh (average)

Output formula:
  monthly_units     = bill_amount / 8
  solar_units       = monthly_units * 0.8
  system_size_kw    = solar_units / 120
  installation_cost = system_size_kw * 60000
  monthly_savings   = solar_units * 8

Display:
  - Monthly Savings: ₹[monthly_savings]
  - System Size: [system_size_kw] kW
  - Est. Installation Cost: ₹[installation_cost]
  - Payback Period: ~[installation_cost / (monthly_savings * 12)] years

## CONTENT — PAGE BY PAGE

### HOME PAGE

**Navbar:**
Logo (left) | Nav links: Home, About Us, All About Solar, Solar Calculator, Get Solar | CTA Button: "Get Free Site Visit" (links to /get-solar) | Phone number visible on desktop

**Hero Section:**
Headline: "India's Sunshine, Your Savings — Go Solar with AdiSolar"
Subtext: "Pan India solar installation services. Free site visit. Zero hassle. Maximum savings."
Left side: headline + subtext + secondary CTA button "Learn How Solar Works"
Right side: Lead capture form with heading "Get a Free Site Visit"
  Form fields: Full Name | Mobile Number | Pincode | Approx Monthly Electricity Bill (₹)
  Submit button: "Book My Free Visit"
Background: High-quality solar panel/rooftop image with dark overlay

**Why Solar Strip (horizontal scrolling cards or icon grid):**
- Save up to 90% on electricity bills
- Zero electricity cuts — power independence
- 25-year panel lifespan
- Government subsidies available
- Clean, green, zero emission
- Low maintenance, high returns

**Who We Serve:**
Section heading: "Solar Solutions for Every Need"
Three cards:
  1. Residential — Homes, villas, apartments, housing societies
  2. Commercial — Offices, retail, warehouses, hotels
  3. Industrial / Institutional — Factories, schools, colleges, hospitals, government buildings

**Our Process (5 steps, horizontal or vertical timeline):**
  Step 1: Free Site Visit — Our expert visits your location at no cost
  Step 2: Energy Evaluation — We assess your consumption and roof suitability
  Step 3: Custom Design — A system designed specifically for your property
  Step 4: Professional Installation — Certified technicians install your system
  Step 5: Monitor & Support — Ongoing monitoring and after-sales support

**Testimonials (Placeholder — 3 cards):**
  1. "AdiSolar made going solar completely hassle-free. Highly recommend!" — Rajesh Sharma, Homeowner, Delhi
  2. "Reduced our office electricity bill by 70%. Great service and support." — Priya Mehta, Business Owner, Gurugram
  3. "Installed solar for our factory. Professional team, on-time delivery." — Vikram Singh, Factory Owner, Noida

**FAQs (Accordion):**
  Q: How much does a solar installation cost?
  A: The cost depends on your electricity consumption and roof area. On average, a 3 kW residential system costs ₹1.5–2 lakh. Use our Solar Calculator for a personalised estimate.
  Q: Is my roof suitable for solar?
  A: Most rooftops in India are suitable. Our team does a free site visit and feasibility check before any commitment.
  Q: How long does installation take?
  A: A standard residential installation takes 1–3 days. Commercial projects may take longer depending on size.
  Q: What happens on cloudy days?
  A: Solar panels work on diffused sunlight too — they continue generating power, just at slightly reduced output. Batteries or grid connectivity ensure uninterrupted supply.
  Q: Are there government subsidies?
  A: Yes. The Government of India offers PM Surya Ghar Muft Bijli Yojana — up to ₹78,000 subsidy for residential rooftop solar. We help you apply.
  Q: What after-sales support do you provide?
  A: We offer monitoring, maintenance, and technical support post-installation. Your system health is our responsibility.

**Contact Strip:**
Text: "Ready to switch to solar? Let's talk."
Phone: +91 8882088600
Button: "Contact Us" → (links to /get-solar)

**Footer:**
Logo | Tagline | Quick links | Services | Phone | Email | WhatsApp | Copyright

---

### ABOUT US PAGE (/about)

**What We Do:**
AdiSolar is a Pan India solar solutions company bridging the gap between premium solar manufacturers and end customers — residential, commercial, and institutional. We handle everything from initial site assessment to final installation and post-sale support, making the switch to solar simple and seamless.

**Why Choose AdiSolar:**
- Manufacturer tie-ups: Direct partnerships with certified solar panel manufacturers
- End-to-end service: From consultation to installation to maintenance
- Certified installers: All technicians are trained and certified
- Pan India reach: Operations across 28+ states
- Subsidy assistance: We help customers claim government subsidies
- No hidden costs: Transparent pricing from day one

**Technology We Use:**
Reference the ielecssol catalogue data for product specifications:
- Monocrystalline solar panels (high efficiency, MNRE certified)
- LiFePO4 lithium batteries (2000+ charge cycles, 5-year lifespan)
- MPPT/PWM charge controllers
- All-in-One solar street light systems (where applicable)
- Remote monitoring systems (RMS) for commercial installations
NOTE: Do not use ielecssol branding — present these as general technology specs that AdiSolar works with

**Our Team:**
[PLACEHOLDER: 3-4 team member cards with roles like Founder/CEO, Technical Head, Sales Head, Operations Manager — use placeholder names and headshots]

---

### ALL ABOUT SOLAR PAGE (/all-about-solar)

**Section 1 — How Solar Works:**
Explain the photovoltaic process step by step:
  1. Sunlight hits solar panels → photons knock electrons loose
  2. DC electricity generated in panels
  3. Inverter converts DC to AC
  4. AC powers your home/office
  5. Surplus electricity sent to grid (net metering) or stored in battery
[IMAGE PROMPT: A clear, modern diagram showing sunlight hitting rooftop solar panels, arrows showing electricity flow through inverter to house and grid, clean white background, flat illustration style]

**Section 2 — Types of Solar Systems:**
  - On-Grid: Connected to electricity grid. Net metering. No battery. Most popular for homes.
  - Off-Grid: Fully independent. Battery storage. Best for remote areas.
  - Hybrid: Best of both — grid connected + battery backup.
[IMAGE PROMPT: Three side-by-side illustrations comparing on-grid, off-grid, and hybrid solar systems, minimalist flat design, green and amber colour palette]

**Section 3 — Solar Myths Busted:**
  Myth 1: "Solar doesn't work on cloudy days" → Fact: Panels work on diffused light too
  Myth 2: "Solar is too expensive" → Fact: Prices have dropped 90% in 10 years + subsidies
  Myth 3: "Solar panels need constant maintenance" → Fact: Very low maintenance — just occasional cleaning
  Myth 4: "My roof isn't suitable" → Fact: Most roofs work — our team will assess for free
  Myth 5: "Solar takes decades to pay off" → Fact: Average payback in India is 4–6 years
[IMAGE PROMPT: Fun myth-busting illustration with crossed-out misconceptions and bright checkmark facts, modern infographic style, solar industry themed]

**Section 4 — Government Subsidies:**
  - PM Surya Ghar Muft Bijli Yojana: Up to ₹78,000 subsidy for residential
  - Eligible for 1–10 kW systems
  - AdiSolar assists with full subsidy application process
[IMAGE PROMPT: Illustration of Indian household with solar panels, government subsidy badge/seal, clean and trustworthy visual style]

**FAQs (Expanded — 8-10 questions specific to solar technology)**

---

### SOLAR CALCULATOR PAGE (/solar-calculator)

Heading: "How Much Can You Save with Solar?"
Subheading: "Enter your monthly electricity bill and get an instant estimate"
Input: Monthly electricity bill (₹) — slider + manual input
Outputs displayed as cards:
  - Monthly Savings (₹) — with green highlight
  - Recommended System Size (kW)
  - Estimated Installation Cost (₹)
  - Payback Period (years)
CTA below results: "Get an Accurate Quote — Book Free Site Visit" → /get-solar
Disclaimer: "Estimates are indicative. Actual savings depend on location, roof area, and consumption patterns."

---

### GET SOLAR PAGE (/get-solar)

Heading: "Start Your Solar Journey Today"
Subheading: "Fill in the form below. Our expert will call you within 24 hours to schedule your free site visit."

Form fields:
  - Full Name (required)
  - Phone Number (required)
  - Full Address (required, textarea)
  - Property Type (required, dropdown): Residential / Commercial / Industrial / Institutional
  - Approximate Monthly Electricity Bill (₹) (optional)
  - Any Additional Notes (optional, textarea)
  Submit: "Book My Free Site Visit"
  Success message: "Thank you! Our team will contact you within 24 hours. You can also WhatsApp us at +91 8882088600"

Process section below form (detailed, 5 steps — expanded from homepage):
  Step 1 — Free Site Visit: [2-3 sentences explaining what happens]
  Step 2 — Energy Evaluation & Proposal: [2-3 sentences]
  Step 3 — Custom System Design: [2-3 sentences]
  Step 4 — Installation by Certified Technicians: [2-3 sentences]
  Step 5 — Monitoring, Maintenance & Support: [2-3 sentences]

## TECHNICAL REQUIREMENTS
Domain:           Needs to be purchased (suggest adisolar.in or adisolar.co.in)
Hosting:          Vercel
CMS needed:       No (static for now)
Languages:        English only
Special:          Solar calculator must work client-side with no backend
                  Chatbot: embed a simple third-party chatbot (e.g. Tidio or Crisp free tier)