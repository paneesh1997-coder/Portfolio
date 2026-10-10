# Make It Make Sense

Aneesh's design portfolio, built with Next.js, React, and TypeScript.

## Run locally

Requires Node.js 22.13 or newer and pnpm.

```sh
pnpm install
pnpm dev
```

Run `pnpm build` to check the production build.

## Pages

- `/` — introduction, story, case studies, and interview highlight.
- `/works` — Clinsoft, IHNA, and Metaveo case studies.
- `/works/clinsoft`, `/works/ihna`, `/works/metaveo` — project details.
- `/about` — approach and experience.
- `/contact` — email, phone, and social links.
- `/life-highlights` — redirects to the full interview on YouTube.

The Resume link opens the current Google Drive document in a new tab. The Playground is not part of this version.

## Assets and GitHub

Current images, the animated interview banner, fonts, and other site assets are in `public/`. Case study image references are in `lib/case-studies.ts`. Unused and superseded exports have been removed; large WebP images were recompressed for a smaller repository upload.

Upload the project source, including `app/`, `components/`, `lib/`, `public/`, `package.json`, and `pnpm-lock.yaml`. The generated `.next/` folder and installed `node_modules/` are ignored by Git and are recreated during installation and build.
