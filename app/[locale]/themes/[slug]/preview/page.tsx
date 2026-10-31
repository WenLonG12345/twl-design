import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CopyButton from '@/components/CopyButton'
import DevicePreview from '@/components/DevicePreview'
import StylePreview from '@/components/StylePreview'
import { getDictionary } from '@/lib/dictionaries'
import { hasLocale, locales } from '@/lib/i18n'
import { cjkFontsHref, styleFontVars } from '@/lib/styleFonts'
import { designStyles, getStyle } from '@/styles'

export const generateStaticParams = () =>
  locales.flatMap((locale) => designStyles.map((s) => ({ locale, slug: s.slug })))

export async function generateMetadata({ params }: PageProps<'/[locale]/themes/[slug]/preview'>): Promise<Metadata> {
  const { locale, slug } = await params
  const style = getStyle(slug)
  if (!hasLocale(locale) || !style) return {}
  const { styles } = getDictionary(locale)
  // The detail page is the canonical home of a theme; this is the same sample page, bigger.
  return {
    title: `${style.i18n[locale].name} · ${styles.preview.title}`,
    robots: { index: false },
    alternates: { canonical: `/${locale}/themes/${slug}` },
  }
}

export default async function ThemePreviewPage({ params }: PageProps<'/[locale]/themes/[slug]/preview'>) {
  const { locale, slug } = await params
  const style = getStyle(slug)
  if (!hasLocale(locale) || !style) notFound()
  const dict = getDictionary(locale)
  const t = dict.styles
  const copy = style.i18n[locale]

  return (
    <div className={`viewer ${styleFontVars}`}>
      {locale === 'zh-CN' && <link rel="stylesheet" href={cjkFontsHref} precedence="default" />}
      <DevicePreview
        labels={t.preview}
        head={
          <>
            <Link className="viewer__back" href={`/${locale}/themes/${slug}`}>
              <ArrowLeft className="arrow" /> {t.preview.back}
            </Link>
            <h1 className="viewer__name">{copy.name}</h1>
          </>
        }
        actions={<CopyButton text={copy.prompt} labels={dict.copy} variant="dark" />}
      >
        <StylePreview style={style.slug} copy={copy.sample} label={`${t.switcher.previewOf} ${copy.name}`} />
      </DevicePreview>
    </div>
  )
}
