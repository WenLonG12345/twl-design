export const locales = ['en', 'zh-CN'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value)

export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'zh-CN' : 'en')

// Set NEXT_PUBLIC_SITE_URL in Vercel so canonical, hreflang, sitemap and llms.txt use the real domain.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '')

export const fmt = (template: string, n: number) => template.replace('{n}', String(n))

/** hreflang map for a path that exists in every locale, e.g. "" or "/motion/tilt-card". */
export const languageAlternates = (path: string) => ({
  en: `${SITE_URL}/en${path}`,
  'zh-CN': `${SITE_URL}/zh-CN${path}`,
  'x-default': `${SITE_URL}/en${path}`,
})
