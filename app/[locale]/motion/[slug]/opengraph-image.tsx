import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale, hasLocale } from '@/lib/i18n'
import { techLabel } from '@/lib/motions'
import { ogSize, renderOg } from '@/lib/og'
import { getMotion } from '@/motions'

export const size = ogSize
export const contentType = 'image/png'
export const alt = 'TWL Motions'

export default async function Image({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params
  const locale = hasLocale(raw) ? raw : defaultLocale
  const dict = getDictionary(locale)
  const motion = getMotion(slug)
  if (!motion) return renderOg({ title: dict.brand, subtitle: dict.meta.description, footer: 'twlworks.com' })
  return renderOg({
    title: motion.i18n[locale].title,
    subtitle: [techLabel[motion.tech], dict.component[motion.component], dict.trigger[motion.trigger]].join(' · '),
    footer: `${dict.copy.idle} · twlworks.com`,
  })
}
