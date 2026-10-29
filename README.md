# Motion Library

A twlworks project. Bilingual (English / Simplified Chinese) library of web animations. Each motion has a live demo, its source, and an AI prompt that recreates it. The prompt and the words inside the demo follow the site language.

## Run

```bash
bun install
bun dev            # http://localhost:3000 → redirects to /en or /zh-CN by Accept-Language
bun run build
```

No environment variables are required on Vercel: canonical URLs, hreflang, the sitemap and llms.txt use the project's production domain automatically. Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://motion.example.com`) only to override it, such as for a custom domain.

## Contributing

Ideas and new motions are both welcome.

### Suggest an idea

- On the site, press **Suggest a motion** (the round button, bottom right). It opens a prefilled issue in this repo for you to post.
- Or [open an issue](https://github.com/WenLonG12345/twl-motions/issues/new) yourself. Title it `Idea: <effect name>`, then describe what moves, when it plays (on hover, on scroll, in a loop…) and where you saw it. A link or a screen recording helps a lot.
- Search the existing issues first, in case someone has already suggested it.

### Build a motion

1. Fork the repo, then run `bun install` and `bun dev`.
2. Follow [Add a motion](#add-a-motion) below.
3. Before you open a pull request, check that:
   - The code, text and prompt are your own work. Don't copy them from another library or site.
   - `meta.ts` has both `en` and `zh-CN` copy, and the prompt describes what your demo actually does.
   - It respects `prefers-reduced-motion`, and loops pause when they scroll off screen.
   - It works with a keyboard, and every visible word comes from `labels`.
   - It uses the `--stage-*` colour tokens and fits the 240px-tall card stage.
   - `bun lint` and `bun run build` both pass.
4. Open the pull request. If it builds an idea from an issue, write `Closes #<issue number>` in the description.

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

## License

[MIT](LICENSE). Use, copy, modify and ship any motion, demo or prompt, including in commercial work; keep the copyright notice in copies of the code. By opening a pull request you agree your contribution is released under the same license.
