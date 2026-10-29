import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale, fmt, hasLocale } from '@/lib/i18n'
import { ogSize, renderOg } from '@/lib/og'
import { motions } from '@/motions'

export const size = ogSize
export const contentType = 'image/png'
export const alt = 'Motion Library'

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale = hasLocale(raw) ? raw : defaultLocale
  const dict = getDictionary(locale)
  return renderOg({
    locale,
    title: dict.hero.title.join(''),
    subtitle: fmt(dict.hero.count, motions.length) + ' · CSS · GSAP · SVG · Canvas',
    footer: 'twlworks.com · EN / 中文',
  })
}
