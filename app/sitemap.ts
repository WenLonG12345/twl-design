import type { MetadataRoute } from 'next'
import { languageAlternates, locales, SITE_URL } from '@/lib/i18n'
import { motions } from '@/motions'
import { designStyles } from '@/styles'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: '', lastModified: motions.map((m) => m.added).sort().at(-1) },
    ...motions.map((m) => ({ path: `/motion/${m.slug}`, lastModified: m.added })),
    { path: '/themes', lastModified: designStyles.map((s) => s.added).sort().at(-1) },
    ...designStyles.map((s) => ({ path: `/themes/${s.slug}`, lastModified: s.added })),
  ]
  return paths.flatMap(({ path, lastModified }) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      alternates: { languages: languageAlternates(path) },
    })),
  )
}
