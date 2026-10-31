import type { Locale } from './i18n'

export const paletteRoles = ['bg', 'surface', 'ink', 'muted', 'accent', 'extra'] as const
export type PaletteRole = (typeof paletteRoles)[number]

/** Text that changes with the locale. `bestFor` is a short list of business types the style suits. */
export type StyleCopy = {
  name: string
  summary: string
  bestFor: string[]
  prompt: string
}

export type DesignStyle = {
  slug: string
  /** ISO date, used for sorting and the sitemap. */
  added: string
  /** Family names as shown to people; the actual fonts load in lib/styleFonts.ts. */
  fonts: { display: string; body: string }
  palette: { role: PaletteRole; hex: string }[]
  /** Slugs of motions that suit the style, linked from its detail page. */
  motions: string[]
  /** Every locale is required, so a missing translation fails the type check. */
  i18n: Record<Locale, StyleCopy>
}
