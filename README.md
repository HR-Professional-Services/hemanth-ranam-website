# Hemanth Ranam — Personal Technology & Services Platform

> **Business Systems • Technology • Automation • Trading Technology**
> 
> *I help businesses design, build and optimise digital systems that reduce manual work, improve workflows and increase operational efficiency.*

---

## 🌟 Executive Overview

This repository houses the official personal technology and services website for **Hemanth Ranam** — a 2X Founder, CEO of **ScaleNova Pvt Ltd**, MBA graduate from the University of South Wales, and CMI Level 7 qualified leader in Strategic Management & Leadership.

The platform is engineered as a high-performance, single-page application (SPA) designed to communicate executive business thinking paired with deep technical implementation.

---

## 🚀 Key Website Sections

1. **Hero & Architecture Hub**: High-impact, minimal technical hero featuring dynamic interactive system architecture and algorithmic telemetry switcher.
2. **Trust & Credibility Strip**: Key metrics (2X Founder, ~10 Years Experience, 5+ Years Trading & Markets, MBA, CMI Level 7, Systems Architecture).
3. **About & Background**: Executive profile, professional portrait presentation, continuous decade journey timeline (2017 → 2026), and academic credentials.
4. **Services Grid**: Interactive category filtering across 4 core domains:
   - *Business Systems & Consulting* (Architecture, BPMN, ERP/CRM, Data Analytics)
   - *Software & Digital Products* (Custom SaaS, Client Portals, Web Applications, APIs)
   - *Automation & AI Workflows* (Internal Triggers, Telegram Telemetry, LLM Parsing)
   - *Trading Technology & Algo Systems* (Pine Script v5, MT5 Custom EAs, Webhook Routing)
5. **Business Systems Ecosystem**: Interactive 9-node connected business pipeline (Leads → Sales → Customers → Projects → Tasks → Finance → People → Operations → Reports → Automation).
6. **Trading Technology Pipeline**: Interactive 6-step strategy-to-execution pipeline (Strategy → Rules → Indicator → Confirmation → Alert → Automation → Execution/Journal) with compliance disclaimer.
7. **Technology Stack**: Curated production tools (Frappe Framework, ERPNext, Next.js 15, TypeScript, Python, REST APIs, MariaDB, PostgreSQL, Redis, Pine Script v5, MetaTrader 5, MQL5, Telegram Bot API).
8. **5-Stage Engineering Methodology**: 01 Understand → 02 Analyse → 03 Design → 04 Build → 05 Improve.
9. **Experience Timeline**: Nearly a decade of continuous problem-solving from 2017 to 2026.
10. **ScaleNova Spotlight**: Feature on the ScaleNova Business Operating System initiative.
11. **Contact & Consultation Form**: Minimal high-conversion inquiry interface with direct copy-to-clipboard email and LinkedIn connect triggers.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Custom design tokens, glassmorphism, subtle blue gradients)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG geometric HR monogram
- **Animations & Micro-interactions**: Native CSS keyframes, Canvas Confetti
- **SEO & Performance**: OpenGraph metadata, Twitter cards, Dynamic `sitemap.xml`, `robots.txt`, and Schema.org JSON-LD structured data

---

## 📂 Project Structure

```text
hemanth-ranam-website/
├── app/
│   ├── globals.css          # Design system variables, grid patterns, glassmorphism
│   ├── icon.svg             # Vector geometric HR monogram favicon
│   ├── layout.tsx           # SEO metadata, Open Graph, JSON-LD Schema
│   ├── page.tsx             # Main single-page application flow
│   ├── robots.ts            # Dynamic robots.txt
│   └── sitemap.ts           # Dynamic sitemap.xml
├── components/
│   ├── Navbar.tsx           # Sticky glassmorphic navigation with scroll spy
│   ├── sections/
│   │   ├── AboutSection.tsx         # Executive bio, portrait, qualifications
│   │   ├── BusinessSystemsSection.tsx # Connected business ecosystem map
│   │   ├── ContactSection.tsx       # Interactive consultation form & email copy
│   │   ├── ExperienceSection.tsx    # 2017-2026 chronological journey
│   │   ├── Footer.tsx               # Compliance disclaimer, brand, navigation
│   │   ├── Hero.tsx                 # Technical hero with interactive architecture preview
│   │   ├── ProcessSection.tsx       # 5-stage engineering methodology
│   │   ├── ScaleNovaSection.tsx     # ScaleNova OS spotlight
│   │   ├── ServicesSection.tsx      # Filterable service capability cards
│   │   ├── TechStackSection.tsx     # Categorized production technologies
│   │   ├── TradingTechSection.tsx   # Trading pipeline & market structures
│   │   └── TrustStrip.tsx           # Key credibility metrics
│   └── ui/
│       ├── BackToTop.tsx            # Smooth scroll to top button
│       ├── FloatingContactCTA.tsx   # Mobile floating inquiry trigger
│       ├── LinkedinIcon.tsx         # Crisp vector LinkedIn icon
│       ├── Logo.tsx                 # Geometric HR Monogram component
│       └── ScrollProgressBar.tsx    # Viewport reading progress indicator
├── data/
│   └── siteData.ts          # Structured single source of truth for all content
├── public/
│   ├── favicon.svg          # Vector favicon
│   ├── images/
│   │   └── hemanth-portrait.jpg # Executive portrait asset
│   └── logo.svg             # Master HR Monogram vector logo
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and build scripts
├── postcss.config.mjs       # PostCSS plugins
├── tsconfig.json            # TypeScript compiler configuration
└── README.md                # Project documentation
```

---

## 💻 Local Development

### Prerequisites
- Node.js 18.18+ or Node.js 20+ / 22+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/hemanthranam/hemanth-ranam-website.git
cd hemanth-ranam-website

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

---

## 🔒 Security & Privacy Notice

- No environment variables, secret keys, or private tokens are stored in this repository.
- Trading technology workflows are software engineering services and strictly follow client-defined deterministic logic without providing financial advice.

---

## 👤 Author & Contact

**Hemanth Ranam**  
*Technology Entrepreneur • Business Systems Architect • Trading Technology Developer*

- 🌐 **ScaleNova**: [https://www.scalenovasys.com](https://www.scalenovasys.com)
- 💼 **LinkedIn**: [https://www.linkedin.com/in/hemanth-ranam-41b542253](https://www.linkedin.com/in/hemanth-ranam-41b542253)
- ✉️ **Email**: [hemanth.ranam@gmail.com](mailto:hemanth.ranam@gmail.com)

---

© 2026 Hemanth Ranam. All rights reserved.
