# jonathon.dev — Home Page Design

**Date:** 2026-06-05
**Status:** Approved, ready for implementation planning

## Overview

A single-page portfolio home page for a professional software engineer. Dark-only,
warm-toned theme (reduced blue light). A full-height hero shows "jonathon.dev" as a
breathing ember, then the page scrolls into selected work, experience, skills, and
contact.

## Goals

- Distinctive, polished, production-grade landing page that signals senior engineering taste.
- Warm dark aesthetic ("blue-light-reduced" feel) with a slight orange hue throughout.
- Hero centerpiece: "jonathon.dev" as a dim, glowing ember that slowly breathes.
- Easy to fill with real content later — content lives in one typed data module.

## Non-Goals (YAGNI)

- No CMS, blog, or markdown pipeline.
- No light/dark toggle — the site is dark-only.
- No contact form — contact is plain links (email, GitHub, LinkedIn).
- No animation beyond the hero breath and card/link hover states.
- No multi-page routing — everything is one scrolling page.

## Tech Context

- Next.js 16.2.6 (App Router), React 19.2.4, Tailwind CSS v4, shadcn scaffolding present.
- Fonts already wired in `app/layout.tsx`: **Oxanium** (`--font-heading`), **Inter**
  (`--font-sans`), **Geist Mono** (`--font-geist-mono`).
- **Next.js 16 caveat:** before writing code, read the relevant guide in
  `node_modules/next/dist/docs/` — this version may differ from prior conventions
  (per `AGENTS.md`). Heed deprecation notices.

## Visual Direction (decided via mockups)

- **Hero:** Option C "Ember glow" — name sits like a dim warm ember in near-black space,
  soft orange glow radiating out and dissolving into the background.
- **Hero motion:** "Slow breathing pulse" — glow gently brightens and dims forever.
- **Below-fold layout:** Option C "Structured grid + timeline" — projects as a card grid,
  experience as a vertical timeline. Most scannable.

## Theme

Site renders dark-only. Set the `.dark` class on `<html>` in `app/layout.tsx` and use the
warm-dark token set as the live palette. Replace the neutral grayscale values in
`app/globals.css` with warm equivalents (low chroma, hue ~50–70 in OKLCH).

Target token values (tune during implementation):

| Token | Value | Notes |
|-------|-------|-------|
| `--background` | `oklch(0.12 0.012 60)` | near-black warm brown (~#0d0a08) |
| `--foreground` | `oklch(0.92 0.02 70)` | warm off-white |
| `--primary` / accent | `oklch(0.70 0.16 55)` | ember orange (~#e8843a) |
| `--muted-foreground` | `oklch(0.62 0.04 60)` | dim amber-brown for labels |
| `--card` | `oklch(0.15 0.014 55)` | slightly lifted warm panel |
| `--border` | warm low-alpha | never pure gray |

All borders, cards, and muted text carry a faint warm tint — no pure neutral grays.
Light `:root` tokens can remain in the file but are not used by the portfolio (dark forced).

## Layout & Sections

Single scrolling page (`app/page.tsx`) composing, top to bottom:

1. **Hero** — full viewport height. "jonathon.dev" in Oxanium, large, dim warm orange,
   soft radial glow behind it. Glow breathes (see Animation). One-line intro beneath in
   muted text. Subtle scroll cue at the bottom.
2. **Selected work** — responsive card grid (2-col desktop, 1-col mobile). Each card:
   title, one-line description, tech tags, link. Hover lifts and warms the card.
3. **Experience** — vertical timeline. Ember dots; each entry: role · company · dates,
   optional one-liner.
4. **Skills** — compact chip/tag row grouped or flat.
5. **Contact** — email (jdr2045@gmail.com), GitHub (JezzyDeves), LinkedIn (placeholder URL).

Each section uses a shared section wrapper for consistent max-width, padding, and a small
uppercase mono label.

## Animation — Hero Breath

- CSS `@keyframes` loop (~4–6s, `ease-in-out`, `infinite`) animating the name's
  `text-shadow` blur/spread/opacity and a faint opacity shift to read as a breathing glow.
- **Accessibility:** wrap the animation in `@media (prefers-reduced-motion: no-preference)`.
  When reduced motion is requested, the ember renders static (steady glow, no pulse).

## Content Architecture

All editable content lives in `lib/content.ts` as typed exports with realistic
placeholders and `// TODO` markers:

```ts
export interface Project { title: string; description: string; tags: string[]; href: string }
export interface Role { title: string; company: string; period: string; summary?: string }
export interface SocialLink { label: string; href: string }

export const intro: string            // one-line hero subtitle
export const projects: Project[]      // placeholder entries
export const experience: Role[]       // placeholder entries
export const skills: string[]
export const contact: SocialLink[]    // email/github prefilled, linkedin placeholder
```

Section components map over this data. Editing one file makes the site real.

## Components & Files

| File | Responsibility |
|------|----------------|
| `app/page.tsx` | Compose all sections in order |
| `app/layout.tsx` | Force `.dark`, fix `metadata` (title/description), keep font wiring |
| `app/globals.css` | Warm token values + hero breath keyframe |
| `lib/content.ts` | Typed content data + types + placeholders |
| `components/hero.tsx` | Ember name, glow, breathing animation, intro, scroll cue |
| `components/section.tsx` | Shared section wrapper (label, max-width, padding) |
| `components/project-card.tsx` | Single project card + hover |
| `components/project-grid.tsx` | Maps `projects` into the grid |
| `components/experience-timeline.tsx` | Vertical timeline of `experience` |
| `components/contact.tsx` | Contact links row |

Components are small and single-purpose; each takes typed props from `lib/content.ts`.

## Metadata

Update `app/layout.tsx` `metadata`: title `"jonathon.dev"`, a real description. Remove the
"Create Next App" defaults.

## Error / Edge Handling

- Empty content arrays render nothing for that section (no crash).
- Reduced-motion users get a static ember.
- All external links use safe `rel`/`target` where appropriate.
- Mobile-first responsive: grid collapses to one column, hero text scales down.

## Testing / Verification

- `npm run build` and `npm run lint` pass.
- Manual check in browser (Playwright skill available): hero renders, breathes, and
  honors reduced-motion; grid and timeline render placeholder data; layout is responsive
  at mobile and desktop widths.

## Out of Scope / Future

- Real project/experience content (user fills `lib/content.ts`).
- Per-project detail pages, blog, analytics, contact form.
