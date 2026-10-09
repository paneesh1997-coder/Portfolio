# Make It Make Sense — Aneesh’s portfolio

A responsive product designer portfolio implemented from the supplied Figma home page. Built with Next.js, React, TypeScript, and reusable CSS design tokens.

## Run locally

Requires Node.js 22.13+ and pnpm.

```sh
pnpm install
pnpm dev
```

```sh
pnpm typecheck
pnpm build
```

## Pages

- `/` — original home composition, personal story, four featured case studies, and life highlight.
- `/works` — listing for Clinsoft, IHNA, Maxworth Minerals, and Metaveo.
- `/works/clinsoft` — Clinsoft product and brand case study.
- `/works/ihna` — IHNA digital ecosystem and design system case study.
- `/works/maxworth` — Maxworth Minerals website redesign case study.
- `/works/metaveo` — Metaveo multi-vertical digital ecosystem case study.
- `/about` — the original story and lessons from sales, hospitality, and music.
- `/life-highlights` — playable 15-second silent interview excerpt and context.
- `/contact` — contact page; email draft form appears when an email is configured.
- A custom not-found page handles unknown routes.

## Add verified contact destinations

Update `lib/portfolio.ts` with the owner's email address, Behance, Instagram and LinkedIn URLs, and full interview URL. Missing links are visibly marked as coming soon. No account URLs or email addresses have been invented.

When email is configured, the contact form validates the fields and opens a draft in the visitor's email application. It does not pretend to submit a message to a server. The visitor sends it from their email app.

## Design and assets

Case study content and screenshot slots are defined in `lib/case-studies.ts`. Both documents are treated as source content; their portfolio drafting instructions are omitted. Outcomes remain qualitative and do not claim measured performance improvements.

The homepage, listing, and individual pages share the same project records. Dummy screenshot panels are explicitly labelled and have stable visual IDs. To replace one, add `src: '/assets/case-studies/filename.png'` and a descriptive `alt` to its visual record, and place the image in `public/assets/case-studies`. Cover replacements automatically appear on the homepage and Works listing. Research placeholders are defined in `components/case-study-page.tsx`. The original PDFs are not published or copied into the website.

Reference: https://www.figma.com/design/bKKAqOU0NoRnCoM2hGymDV/test?node-id=3001-98

The original Figma images, arrows, dotted texture, and ruled line are stored in `public/assets`. The updated Figma Life Highlights GIF is stored as `life-highlights.gif` and loops automatically on the home-page banner, with a pause/resume control. On the Life Highlights detail page, the separate player uses the lossless animated WebP conversion and starts when a visitor presses Play. Only the supplied silent excerpt is included.

The exact NType 82 Regular font was sourced from the supplied environment; IBM Plex Sans Light, Regular, and Medium were obtained from IBM's official font repository, with its license included in `public/fonts`.

Colors, typography, responsive layouts, focus states, reduced-motion behavior, and the original visual language are defined in `app/globals.css`. The home design's spelling errors and repeated unrelated footer copy have been corrected while preserving its tone.

## Deployment

Page links use native anchors. The installed Vinext production client router was throwing during prefetch and navigation, leaving clicks on the current page. Browser document navigation keeps direct links, keyboard navigation, and Back/Forward working without depending on that router.

The Sites identity is saved in `.openai/hosting.json`. No credentials are stored in the repository. Runtime output is generated under `dist`. Local dependency caches and build output are ignored by Git.
