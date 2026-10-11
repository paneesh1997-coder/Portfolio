# Make It Make Sense

Aneesh's design portfolio, built with Next.js, React, and TypeScript.

## Run locally

Requires Node.js 22.13 or newer and pnpm.

```sh
pnpm install
pnpm dev
```

Run `pnpm build` to check the production build.

## Deployment paths

Internal links always use Next.js `Link` with an application path:

```tsx
import Link from 'next/link';

<Link href="/works">Works</Link>
```

`PillLink` and `FlowLink` also handle internal paths automatically. Do not add
`/Portfolio` to page links. External URLs and links such as `#main-content`,
`mailto:`, and `tel:` can use normal anchors.

`NEXT_PUBLIC_BASE_PATH` controls the deployment prefix at build time. It defaults
to an empty string, so local development runs at `http://localhost:3000/`.
The GitHub Pages workflow sets it from the Pages configuration (for example,
`/Portfolio` for a repository site, or empty for a root/custom-domain site).
Changing the prefix requires rebuilding.

To build manually for the repository path in PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/Portfolio'
pnpm build
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
```

For files in `public/`, use `publicAssetPath('/assets/example.webp')` from
`lib/paths.ts` in image sources or other raw file URLs. CSS references use
`../public/...` so Next.js bundles them with the correct deployment path.
The static export is generated in `out/`.

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
