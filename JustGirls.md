# JustGirls — AI Agent Reference Specification
Version: v1
Purpose: Reference document for automated code generation (React + Vite)

---

## 1. Project Identity

Project Name: JustGirls  
Project Type: Marketing / Recruitment Website  
Industry: OnlyFans Creator Management Agency  
Primary Function: Convert creators into applicants  

This is NOT:
- A CMS
- A blog
- A SaaS dashboard
- A content-heavy site

This IS:
- A high-conversion recruitment funnel
- A premium brand presence
- A static, developer-managed website

---

## 2. Primary Objective

Primary Goal:
- Maximize creator applications via “Apply / Get Started” CTA

Secondary Goals:
- Build trust
- Reduce creator anxiety
- Communicate value quickly
- Emphasize done-for-you management

---

## 3. Target User Profile

User Type:
- OnlyFans creators / models

User Characteristics:
- Time-poor
- Burned out from DMs, posting, growth
- Wants higher income with less effort
- Skims content quickly
- Responds to visuals over long text

---

## 4. Content Constraints (Critical)

Allowed:
- Suggestive lifestyle imagery
- Abstract UI, dashboards, stats
- Feminine / anime-inspired visuals

Disallowed:
- Explicit sexual content
- Nudity
- Platform policy violations
- Overly corporate language

Tone:
- Creator-to-creator
- Supportive
- Premium but approachable
- Feminine, not aggressive

---

## 5. Technical Stack (Fixed)

Frontend:
- React
- Vite
- JavaScript or TypeScript
- Tailwind CSS or CSS Modules
- Framer Motion for animations

Hosting:
- Vercel (static deployment)

Backend:
- None (v1)

CMS:
- None

---

## 6. Architecture Rules

- Static frontend only
- No dynamic user data
- No authentication
- No admin panel
- All content hardcoded or config-based
- All updates require redeploy

---

## 7. Global UI Rules

- Mobile-first responsive design
- Large headings, short paragraphs
- High contrast CTA buttons
- Rounded cards and containers
- Soft shadows
- Pastel / pink-dominant palette
- Consistent primary CTA color

---

## 8. Navigation Structure

Top Navigation:
- How We Work
- FAQ
- Contact
- Get Started (Primary CTA)

CTA Behavior:
- “Get Started” always routes to /apply
- CTA appears in hero and every major section

---

## 9. Page & Section Blueprint

### Home (/)

Purpose:
- Immediate qualification and conversion

Required Sections (in order):

1. Hero
   - Headline: Clear promise (growth, fans, income)
   - Subheadline: Creator pain point
   - Primary CTA button
   - Supporting visual (stats, dashboards, abstract UI)

2. Trust Signals
   - Logos OR credibility statements OR metrics
   - Must be subtle and non-distracting

3. Core Value Proposition
   - “Done-for-you growth” positioning
   - Emphasize delegation and support
   - Minimal text, visual-first

4. Services Overview
   - Card-based layout
   - 4–6 services max
   - Icons + short descriptions

5. Process / Flow
   - Visual explanation of how creators grow with JustGirls
   - Step-based or diagram-style layout
   - Minimal explanatory text

6. Testimonials
   - Visual-first
   - Faces or silhouettes
   - Minimal copy
   - Optional video-style UI

7. FAQ
   - Objection handling
   - Expand/collapse pattern

8. Final CTA
   - Strong, repeated “Get Started” CTA

---

### Apply (/apply)

Purpose:
- Conversion endpoint

Rules:
- Minimal friction
- Short form
- Reassuring copy
- No multi-step logic (v1)

Form Fields (example):
- Name
- Social handle(s)
- Experience level
- Short message

---

### FAQ (/faq)

Required Topics:
- Costs
- Contracts
- Content ownership
- Expected results timeline
- Privacy and control

---

### Contact (/contact)

Purpose:
- Secondary communication
- Not primary conversion

---

### Legal (/legal)

Must include:
- Privacy Policy
- Terms
- Disclaimer
- 18+ notice
- No affiliation with OnlyFans disclaimer

---

## 10. Animation Guidelines

- Use Framer Motion
- Entry animations only (fade, slide, scale)
- Hover animations for cards and buttons
- No looping animations
- Animation must not block readability

---

## 11. Performance Rules

- Optimize images (WebP)
- Lazy load non-critical visuals
- Avoid heavy JS logic
- Lighthouse performance prioritized

---

## 12. Cost Constraints

- Hosting: Free (Vercel)
- No paid plugins
- No recurring infrastructure costs
- Domain renewal only

---

## 13. Explicit Trade-offs

Accepted Limitations:
- No client-side editing
- No CMS
- No real-time data
- Developer required for changes

---

## 14. Reference Inspiration (Conceptual)

Primary Inspiration:
- Sakura-style OnlyFans agency websites

Usage Rule:
- Copy structure and flow
- Do NOT copy wording, visuals, or branding
- Treat inspiration as behavioral, not visual cloning

---

## 15. AI Agent Instructions

When generating code:
- Favor clarity over abstraction
- Prefer reusable components
- Avoid overengineering
- Optimize for conversion and UX
- Treat this as a marketing funnel, not an application
