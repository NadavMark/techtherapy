# Tech-Therapy — Claude Context

## Stack
- Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 (`@tailwindcss/postcss`)
- Framer Motion — scroll-triggered animations via `AnimatedWrapper`
- Full RTL Hebrew layout (`dir="rtl"`, `lang="he"`, Heebo font)
- Accessibility system: provider + floating widget (font size, high contrast, animation toggle, localStorage persistence)

## Color tokens (Tailwind `@theme`)
- `dark-teal` `#084C61` — headings, hero bg, footer bg
- `pacific-blue` `#489FB5` — secondary actions, icons
- `magenta-bloom` `#E34A6F` — CTA buttons
- `white-base` `#FFFEFF`

## Project layout conventions
- Each page imports `Header` + `Footer` directly; wraps content in `<main id="main-content">`
- `components/shared/section-wrapper.tsx` — consistent horizontal padding + vertical rhythm (`py-16 md:py-24`)
- `components/shared/animated-wrapper.tsx` — fade-in on scroll; props: `delay`, `className`. Renders a plain `<div>` when animations are disabled
- RTL: use logical properties only (`ms-`/`me-`/`ps-`/`pe-`), never `ml-`/`mr-`/`pl-`/`pr-`
- `'use client'` only on components that use state or events

## Deployment
- **Host:** Vercel · project linked locally (`.vercel/project.json`)
- **CLI:** `vercel` is installed globally
- **Deploy to production:** `vercel deploy --prod`
- **Production URL:** `https://techtherapy-gamma.vercel.app`
- **Auto-deploy:** Git integration connected in Vercel dashboard — pushes to `main` should auto-deploy. If not, fall back to `vercel deploy --prod`

## Git
- Single branch: `main`
- Do not stage or commit `.claude/settings.local.json`
- Commit style: imperative title, bullet-point body, end with `Co-Authored-By` line

## Dev server
- `npm run dev` — port 3000 (or 3001 if occupied)
- `npm run build` — production build check before committing
