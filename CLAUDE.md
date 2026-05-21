# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # Start development server
npm run build   # Build for production (static export)
npm run start   # Start production server
npm run lint    # Run ESLint
```

No test suite is configured in this project.

## Architecture

**Static export** Next.js 14 site with App Router (`src/app/`). `next.config.mjs` sets `output: "export"`, which means no API routes or server-side features — all pages are pre-rendered at build time.

**Content & metadata** live in two files rather than a CMS:
- `src/app/data.ts` — all page content (menu items, cards, block copy, etc.)
- `src/app/metadata.ts` — per-page metadata objects imported by each route's `generateMetadata`

**Routing** follows standard App Router conventions. Each route under `src/app/` has a `page.tsx`. Most page components are `"use client"` because they use Framer Motion animations.

**Styling** is Tailwind-only (no CSS Modules, no styled-components). Custom design tokens are in `tailwind.config.ts`:
- `primaryGreen`: `#66C18C`
- `primaryBlue`: `#25356f`
- `primaryGray`: `#BFC9CA`

**Animations** use Framer Motion. The `usePerformance` hook (`src/app/hooks/usePerformance.ts`) detects reduced-motion preferences and slow network connections — use it to conditionally skip or simplify animations.

**Images** use `next/image` with `unoptimized: true` (required for static export). Source images live in `src/app/assets/img/`.

## Path alias

`@/*` resolves to `./src/*`.

## Environment variables

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_BASE_URL` | `https://audicee.fr` | Canonical URL used in metadata and structured data |
