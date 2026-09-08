# Dr. Maya Reynolds, PsyD — Therapy Website

A redesigned homepage built for the internship assignment. Cloned the section
structure and layout logic of [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home),
then rebuilt it as a new visual identity and rewrote every piece of copy for a
fictional therapist, **Dr. Maya Reynolds**, based entirely on her provided
profile.

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- `next/font` (Fraunces + Inter from Google Fonts)

## What's Included

- `app/` — root layout, global styles, and the homepage
- `components/` — Header, Hero, Intro, Services (3 required services), Expertise,
  Approach, **OurOffice** (new custom section), FAQ, CTASection, Footer
- `public/images/` — Dr. Reynolds' portrait and two office photos, sourced from
  her profile document
- Remaining imagery uses stable, freely-licensed Unsplash photos, easily
  swappable in each component

## Getting Started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

> Note: `next/font` fetches Fraunces and Inter from Google Fonts at build
> time, so an internet connection is required during `npm run dev` / `npm run build`
> (standard for any Next.js project using Google Fonts).

## Build

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables needed.
4. Click **Deploy**.

## Notes on Content

All copy on this site — the hero, about section, three services, FAQ, and the
new "Our Office" section — is derived strictly from Dr. Maya Reynolds' provided
profile (location, specialties, modalities, client focus, and office
description). No credentials, services, or claims were invented beyond what
appears in the source profile.

Dr. Maya Reynolds is a fictional persona used for this assignment only.
