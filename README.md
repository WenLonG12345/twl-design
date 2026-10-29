# TWL Motions

A twlworks project. Bilingual (English / Simplified Chinese) library of web animations. Each motion has a live demo, its source, and an AI prompt that recreates it. The prompt and the words inside the demo follow the site language.

## Run

```bash
bun install
bun dev            # http://localhost:3000 → redirects to /en or /zh-CN by Accept-Language
bun run build
```

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://motion.example.com`) in Vercel so canonical URLs, hreflang, the sitemap and llms.txt use the real domain.

## Add a motion

1. Create `motions/<slug>/meta.ts` (tech, component, trigger, and `i18n.en` + `i18n['zh-CN']` with title, summary, prompt, labels). TypeScript fails the build if a language is missing.
2. Create `motions/<slug>/Demo.tsx` (+ optional `demo.module.css`). Read every visible word from `labels`, never hard-code text. Style it with the `--stage-*` tokens: every demo plays on the charcoal stage in both light and dark mode.
3. Run `bun run gen` (it also runs before `dev` and `build`). It registers the motion, its demo and its source automatically.

The library grid, detail page, OG image, sitemap, llms.txt and llms-full.txt pick it up automatically.

Groups: text, button, form, card, image, svg, background, layout, cursor. Triggers: entrance, loop, hover, click, toggle, scroll, drag, pointer (see `lib/motions.ts`).

## SEO and AI discovery

- `/en/...` and `/zh-CN/...` are statically pre-rendered, with `hreflang` alternates, canonical URLs and JSON-LD.
- `/sitemap.xml` lists both languages with alternates; `/robots.txt` allows all crawlers, AI crawlers included.
- Every page has a generated OG image (`opengraph-image.tsx`) with the logo and the page title in its language.
- `/llms.txt` indexes every motion in both languages; `/llms-full.txt` contains every prompt in full.

## Design

Cream Paper theme built on the twlworks logo (cream #F2EEE6, charcoal #1C1A18, terracotta #C4702C), with a dark mode that follows the system and a toggle in the nav that remembers the choice. Tokens live in `tokens.css` (OKLCH colours, spacing, type, easing); page styles are in `app/[locale]/globals.css`; each demo owns its CSS module. The logo is `components/Logo.tsx`; the favicon and Apple icon are `app/icon.png` and `app/apple-icon.png` from twlworks-web. OG images are generated per language and per motion by `lib/og.tsx`.
