Here's the complete SDLC plan document for JustGirls. You can create this as `SDLC-Plan.md` in your repo:

```markdown
# JustGirls — SDLC Project Plan

> **Project:** JustGirls Creator Agency Website  
> **Type:** Static Landing Page / Recruitment Funnel  
> **Stack:** React + Vite + TypeScript + Tailwind CSS  
> **Start Date:** January 2026  

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Phase 1: Requirements & Planning](#2-phase-1-requirements--planning)
3. [Phase 2: Design](#3-phase-2-design)
4. [Phase 3: Development](#4-phase-3-development)
5. [Phase 4: Testing](#5-phase-4-testing)
6. [Phase 5: Deployment](#6-phase-5-deployment)
7. [Phase 6: Maintenance & Iteration](#7-phase-6-maintenance--iteration)
8. [Risk Assessment](#8-risk-assessment)
9. [Timeline & Milestones](#9-timeline--milestones)

---

## 1. Project Overview

### 1.1 Purpose
Build a high-conversion recruitment website for JustGirls, an OnlyFans creator management agency. The site attracts, educates, and converts visiting creators into agency applicants.

### 1.2 Success Metrics
| Metric | Target |
|--------|--------|
| Page Load Time | < 2 seconds |
| Lighthouse Performance | > 90 |
| Lighthouse SEO | > 95 |
| Application Form Submissions | Track via analytics |
| Bounce Rate | < 50% |

### 1.3 Tech Stack Summary
| Layer | Technology |
|-------|------------|
| Framework | React 18+ |
| Build Tool | Vite 5+ |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Routing | React Router v6 |
| SEO | react-helmet-async + vite-ssg |
| Forms | Formspree (free tier) |
| Hosting | Vercel (free tier) |
| Version Control | GitHub |

---

## 2. Phase 1: Requirements & Planning

### 2.1 Functional Requirements

#### Pages & Routes
| Route | Page | Priority | Purpose |
|-------|------|----------|---------|
| `/` | Home | P0 | First impression, conversion hook |
| `/about` | About | P1 | Trust building, agency story |
| `/services` | Services | P1 | Explain agency offerings |
| `/apply` | Apply | P0 | **Primary conversion endpoint** |
| `/contact` | Contact | P2 | General inquiries |
| `/legal` | Legal | P2 | Compliance (Terms, Privacy, 18+) |

#### Core Features
- [ ] Responsive design (mobile-first)
- [ ] Smooth page transitions
- [ ] SEO meta tags per page
- [ ] Application form with validation
- [ ] Form submission to external service
- [ ] 18+ age gate/disclaimer
- [ ] Social links

### 2.2 Non-Functional Requirements
- **Performance:** Static HTML generation, lazy loading, WebP images
- **Accessibility:** WCAG 2.1 AA compliance, semantic HTML
- **SEO:** Prerendered routes, Open Graph tags, sitemap.xml
- **Security:** No sensitive data stored, HTTPS only
- **Browser Support:** Chrome, Firefox, Safari, Edge (last 2 versions)

### 2.3 Content Requirements
| Content Type | Source | Status |
|--------------|--------|--------|
| Hero headline & copy | Client/Copywriter | ⏳ Pending |
| Service descriptions | Client | ⏳ Pending |
| About page story | Client | ⏳ Pending |
| Legal documents | Template + Review | ⏳ Pending |
| Brand images/assets | Client/Stock | ⏳ Pending |
| Logo & favicon | Designer | ⏳ Pending |

---

## 3. Phase 2: Design

### 3.1 Brand Guidelines

#### Color Palette
```
Primary Pink:     #FF6B9D (vibrant pink)
Secondary Pink:   #FFB6C1 (light pink)
Accent:           #FF1493 (deep pink)
Background:       #FFF5F7 (soft pink white)
Dark Text:        #2D2D2D
Light Text:       #FFFFFF
Neutral:          #F8F4F5
```

#### Typography
| Use | Font | Weight |
|-----|------|--------|
| Headings | Poppins / Outfit | 600-700 |
| Body | Inter / DM Sans | 400-500 |
| Accent | Script font (sparingly) | - |

#### UI Principles
- Rounded corners (8-16px radius)
- Soft shadows
- Generous whitespace
- Feminine, premium aesthetic
- Anime/girly inspired accents

### 3.2 Wireframes
| Page | Sections |
|------|----------|
| Home | Hero → Pain Points → Benefits → Social Proof → CTA |
| About | Story → Values → Team Vibe → CTA |
| Services | Service Cards → Process → CTA |
| Apply | Intro → Form → Reassurance |
| Contact | Form → Social Links |
| Legal | Tabbed/Accordion legal docs |

### 3.3 Design Deliverables
- [ ] Figma mockups (Desktop + Mobile)
- [ ] Component library design
- [ ] Animation specifications
- [ ] Asset export (SVG icons, optimized images)

---

## 4. Phase 3: Development

### 4.1 Environment Setup

#### Prerequisites
```bash
Node.js >= 18.x
npm >= 9.x
Git
VS Code (recommended)
```

#### Project Initialization
```bash
# Create Vite project
npm create vite@latest . -- --template react-ts

# Install dependencies
npm install react-router-dom framer-motion react-helmet-async

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install dev dependencies
npm install -D @types/node vite-ssg
```

### 4.2 Folder Structure
```
JustGirls/
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Benefits.tsx
│   │       └── CTA.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Apply.tsx
│   │   ├── Contact.tsx
│   │   └── Legal.tsx
│   ├── hooks/
│   │   └── useScrollToTop.ts
│   ├── utils/
│   │   └── seo.ts
│   ├── styles/
│   │   └── index.css
│   ├── router.tsx
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── .env.example
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

### 4.3 Development Tasks

#### Sprint 1: Foundation (Week 1)
- [ ] Initialize Vite + TypeScript project
- [ ] Configure Tailwind CSS with brand colors
- [ ] Set up React Router with all routes
- [ ] Create Layout component (Header + Footer)
- [ ] Implement SEO wrapper with react-helmet-async
- [ ] Configure vite-ssg for prerendering

#### Sprint 2: Core Pages (Week 2)
- [ ] Build Home page with all sections
- [ ] Build About page
- [ ] Build Services page
- [ ] Implement responsive navigation
- [ ] Add Framer Motion page transitions

#### Sprint 3: Conversion & Polish (Week 3)
- [ ] Build Apply page with form
- [ ] Integrate Formspree for form handling
- [ ] Build Contact page
- [ ] Build Legal page (Terms, Privacy, Disclaimers)
- [ ] Add form validation

#### Sprint 4: Optimization (Week 4)
- [ ] Image optimization (WebP, lazy loading)
- [ ] Performance audit & fixes
- [ ] SEO audit (meta tags, sitemap, robots.txt)
- [ ] Cross-browser testing
- [ ] Accessibility audit

### 4.4 Component Development Guide

#### Button Component Example
```tsx
// src/components/common/Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}
```

#### Animation Standards
```tsx
// Fade in from bottom
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Hover scale
const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 }
};
```

---

## 5. Phase 4: Testing

### 5.1 Testing Strategy

| Test Type | Tool | Scope |
|-----------|------|-------|
| Unit Tests | Vitest | Utility functions |
| Component Tests | React Testing Library | UI components |
| E2E Tests | Playwright (optional) | Critical flows |
| Visual Regression | Percy (optional) | Design consistency |
| Performance | Lighthouse CI | Core Web Vitals |
| Accessibility | axe-core | WCAG compliance |

### 5.2 Test Checklist

#### Functional Testing
- [ ] All routes render correctly
- [ ] Navigation works on all pages
- [ ] Form validation shows errors
- [ ] Form submission sends data
- [ ] Mobile menu opens/closes
- [ ] All links work (no 404s)
- [ ] 18+ disclaimer displays

#### Cross-Browser Testing
- [ ] Chrome (Desktop + Mobile)
- [ ] Firefox
- [ ] Safari (Desktop + iOS)
- [ ] Edge

#### Performance Testing
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse SEO > 95
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s

#### SEO Testing
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] Open Graph tags work (test with sharing debugger)
- [ ] sitemap.xml generated
- [ ] robots.txt configured
- [ ] Canonical URLs set

---

## 6. Phase 5: Deployment

### 6.1 Deployment Pipeline

```
GitHub Push → Vercel Build → Preview Deploy → Production Deploy
```

### 6.2 Vercel Configuration

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

### 6.3 Environment Variables
```env
# .env.example
VITE_FORMSPREE_ID=your_formspree_form_id
VITE_SITE_URL=https://justgirls.net
VITE_GA_ID=G-XXXXXXXXXX (optional)
```

### 6.4 Pre-Launch Checklist

#### Technical
- [ ] Build passes with no errors
- [ ] All environment variables set in Vercel
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Redirects configured (www → non-www)

#### Content
- [ ] All placeholder content replaced
- [ ] Images optimized and uploaded
- [ ] Legal pages reviewed
- [ ] Contact email verified

#### SEO
- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] Analytics installed

---

## 7. Phase 6: Maintenance & Iteration

### 7.1 Post-Launch Tasks
| Task | Frequency |
|------|-----------|
| Monitor form submissions | Daily (first week) |
| Check analytics | Weekly |
| Review Lighthouse scores | Monthly |
| Dependency updates | Monthly |
| Content updates | As needed |

### 7.2 Iteration Roadmap

#### v1.1 (Post-Launch)
- [ ] Add analytics tracking (GA4 or Plausible)
- [ ] A/B test hero headlines
- [ ] Add testimonials/social proof

#### v1.2 (Future)
- [ ] Blog section (optional)
- [ ] FAQ page
- [ ] Multi-language support

#### v2.0 (Future Phase)
- [ ] Creator dashboard/portal
- [ ] Authenticated submissions
- [ ] Backend API integration
- [ ] Headless CMS for content

---

## 8. Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Content delays | High | Medium | Use placeholder content, parallel workstreams |
| Design changes mid-dev | Medium | Medium | Lock design before Sprint 2 |
| Form spam | Medium | High | Use Formspree spam protection, add honeypot |
| Performance issues | Medium | Low | Lighthouse CI in pipeline |
| Legal compliance | High | Low | Template legal docs, professional review |

---

## 9. Timeline & Milestones

```
Week 1  ████████████████░░░░  Foundation & Setup
Week 2  ████████████████████  Core Pages Development
Week 3  ████████████████████  Conversion Pages & Forms
Week 4  ████████████████░░░░  Testing & Optimization
Week 5  ████████░░░░░░░░░░░░  Deployment & Launch
```

### Key Milestones
| Milestone | Target Date | Status |
|-----------|-------------|--------|
| Project Kickoff | Week 1 | ⏳ |
| Design Approval | Week 1 | ⏳ |
| Development Complete | Week 3 | ⏳ |
| Testing Complete | Week 4 | ⏳ |
| Production Launch | Week 5 | ⏳ |

---

## Appendix

### A. Useful Commands
```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build

# Testing
npm run test         # Run tests
npm run lint         # Run linter

# Deployment
vercel               # Deploy to Vercel
vercel --prod        # Deploy to production
```

### B. Resources
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Router Documentation](https://reactrouter.com/)
- [Formspree Documentation](https://formspree.io/docs)

---

**Document Version:** 1.0  
**Last Updated:** January 4, 2026  
**Author:** Development Team
```

---

This comprehensive SDLC plan covers:
- ✅ All 6 phases (Requirements → Maintenance)
- ✅ Detailed technical setup instructions
- ✅ Sprint-based development tasks
- ✅ Testing checklists
- ✅ Deployment pipeline
- ✅ Risk assessment
- ✅ Timeline with milestones

Copy this into a new file called `SDLC-Plan.md` in your repo. Want me to proceed with scaffolding the actual project files next?---

This comprehensive SDLC plan covers:
- ✅ All 6 phases (Requirements → Maintenance)
- ✅ Detailed technical setup instructions
- ✅ Sprint-based development tasks
- ✅ Testing checklists
- ✅ Deployment pipeline
- ✅ Risk assessment
- ✅ Timeline with milestones

Copy this into a new file called `SDLC-Plan.md` in your repo. Want me to proceed with scaffolding the actual project files next?