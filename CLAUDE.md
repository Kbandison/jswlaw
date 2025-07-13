# JSW Law Website Improvement Project

## Project Overview
This is a Next.js project to improve and modernize the JSW Law Group website (https://jswlaw.com/).

## Current Analysis
- **Existing Site**: 8 accessible pages with basic functionality
- **Missing Elements**: Contact page, individual practice area pages, FAQ section
- **Technology Stack**: Next.js, TypeScript, Tailwind CSS, shadcn/ui

## Development Commands
(To be added as development progresses)

## Notes
- Law firm based in Suwanee, GA
- Serves metro-Atlanta area since 2003
- Licensed in Georgia and California
- Bilingual support (English/Korean)
- 6 main practice areas: Commercial Real Estate, Residential Real Estate, Business Transactions, Corporate Law, Business Immigration, Foreign Investments

## Gameplan
(ChatGPT gameplan to be added below)

# JSW Law Website Redesign · Planning Brief  
_Last updated: 2025-07-12_

---

## 1 · Goals & Audience

| Item | Details |
|------|---------|
| **Primary objectives** | • Increase qualified consultation calls / form leads<br>• Highlight 6 core practice areas with clear CTAs<br>• Modernize brand credibility & mobile UX |
| **Target audiences** | • Metro‑Atlanta home buyers & sellers (residential closings)<br>• Commercial real‑estate investors & brokers<br>• SMB owners needing corporate / immigration counsel |
| **Pain points to fix** | • Buried CTAs on current Home<br>• Cluttered nav hierarchy<br>• Non‑responsive layout on some devices |

---

## 2 · Branding & Voice

| Token | Value |
|-------|-------|
| **Palette** | Keep existing burgundy / navy — expose as CSS variables (`--jsw-primary`, `--jsw-accent`, etc.) |
| **Typography** | EB Garamond (headings) + Inter (body) via `@next/font/google` |
| **Tone / Voice** | Professional, plain‑English, approachable; avoid dense legal jargon |

---

## 3 · Final Site Map

```text
/
├── about
│   ├── (bio + firm values)          – merged page
│   └── faq                          – accordion list
├── resources
│   ├── attorney-client-101          – educational article
│   └── curated-links                – link section
├── practice
│   ├── index                        – overview grid
│   ├── commercial-real-estate
│   ├── residential-real-estate
│   ├── business-transactions
│   ├── corporate-law
│   ├── business-immigration
│   └── foreign-investments
├── contact
│   └── success                      – “Thank you” page
└── utility
    ├── privacy
    ├── disclaimer
    └── 404 / 500
```

---

## 4 · Feature Checklist (MVP)

| # | Feature | Notes |
|---|---------|-------|
| 1 | Responsive Tailwind v4 UI | WCAG 2.2 AA; no Tailwind config file |
| 2 | Sticky “Free Consultation” call button | Mobile‑only |
| 3 | TestimonialsCarousel on Home | Swiper + shadcn/ui |
| 4 | Dynamic ContactForm | React‑Hook‑Form + zod → Resend email + Supabase logging |
| 5 | Embedded Google Map | Lazy‑loaded iframe on Contact page |
| 6 | SEO‑ready pages | `next/metadata` per page (or `next-seo`) |
| 7 | Analytics | Vercel Analytics starter |

*(Blog & AI chatbot earmarked for Phase 2.)*

---

## 5 · Technical Architecture

| Layer | Choice |
|-------|--------|
| **Framework** | Next.js 15 (App Router, RSC) |
| **Language** | TypeScript (`.tsx` only) |
| **Styling** | Tailwind CSS v4 + CSS variables in `globals.css`; shadcn/ui components |
| **State & Forms** | React‑Hook‑Form, zod |
| **Email** | Resend |
| **Data** | Supabase (store form submissions) |
| **Hosting** | Vercel (edge network, auto SSL) |

### Folder Skeleton (v1)

```text
/app
  └── (marketing)
       ├── page.tsx        – Home
       ├── about/
       ├── resources/
       ├── practice/
       ├── contact/
       └── utility/
 /components
 /lib
 /styles/globals.css
```

---

## 7 · Outstanding Items

| Need | Owner | Notes |
|------|-------|-------|
| Logo SVG / brand assets | Client | Optional higher‑res |
| Google Maps embed URL / API key | Client | For `MapEmbed` component |
| Launch target | Client | e.g. “End Aug 2025” |
| Budget ceiling | Client | Determines Phase 2 scope |

---

> **Client Action Items**  
> • Provide logo assets & Google Map embed URL  
> • Confirm launch month / budget cap  
> • Approve wireframes → “Proceed to repo scaffold”

---
