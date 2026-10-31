import type { Locale } from './i18n'

export const paletteRoles = ['bg', 'surface', 'ink', 'muted', 'accent', 'extra'] as const
export type PaletteRole = (typeof paletteRoles)[number]

/** The fictional business a style is shown on. Every style fills the same slots, so StylePreview keeps one structure. */
export type SampleCopy = {
  brand: string
  links: string[]
  navCta: string
  eyebrow: string
  title: string
  lede: string
  primary: string
  secondary: string
  items: { title: string; text: string; tag: string }[]
  quote: string
  cite: string
  hours: string
}

/** Text that changes with the locale. `bestFor` is a short list of business types the style suits. */
export type StyleCopy = {
  name: string
  summary: string
  bestFor: string[]
  prompt: string
  sample: SampleCopy
}

export type DesignStyle = {
  slug: string
  /** ISO date, used for sorting and the sitemap. */
  added: string
  /** Family names as shown to people (Latin + Chinese); the actual fonts load in lib/styleFonts.ts. */
  fonts: { display: string; body: string }
  palette: { role: PaletteRole; hex: string }[]
  /** Slugs of motions that suit the style, linked from its detail page. */
  motions: string[]
  /** Every locale is required, so a missing translation fails the type check. */
  i18n: Record<Locale, StyleCopy>
}
