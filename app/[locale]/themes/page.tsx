import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CopyButton from '@/components/CopyButton'
import ScaledPreview from '@/components/ScaledPreview'
import StylePreview from '@/components/StylePreview'
import StyleSwitcher from '@/components/StyleSwitcher'
import { getDictionary } from '@/lib/dictionaries'
import { fmt, hasLocale, languageAlternates, SITE_URL } from '@/lib/i18n'
import { cjkFontsHref, styleFontVars } from '@/lib/styleFonts'
import { designStyles } from '@/styles'

export async function generateMetadata({ params }: PageProps<'/[locale]/themes'>): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(locale)) return {}
  const { brand, styles } = getDictionary(locale)
  return {
    title: styles.meta.title,
    description: styles.meta.description,
    alternates: { canonical: `/${locale}/themes`, languages: languageAlternates('/themes') },
    openGraph: { siteName: brand, title: styles.meta.title, description: styles.meta.description },
  }
}

export default async function ThemesPage({ params }: PageProps<'/[locale]/themes'>) {
  const { locale } = await params
  if (!hasLocale(locale)) notFound()
  const dict = getDictionary(locale)
  const t = dict.styles
  const n = designStyles.length
  const items = designStyles.map((s) => ({ slug: s.slug, ...s.i18n[locale] }))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t.meta.title,
    description: t.meta.description,
    publisher: { '@type': 'Organization', name: 'twlworks', url: 'https://www.twlworks.com' },
    inLanguage: locale,
    url: `${SITE_URL}/${locale}/themes`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.name,
        url: `${SITE_URL}/${locale}/themes/${s.slug}`,
      })),
    },
  }

  return (
    <div className={styleFontVars}>
      {locale === 'zh-CN' && <link rel="stylesheet" href={cjkFontsHref} precedence="default" />}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <section className="hero">
        <h1 className="hero__title">
          {t.hero.title[0]}
          <span className="hero__mark">{fmt(t.hero.title[1], n)}</span>
          {t.hero.title[2]}
        </h1>
        <div className="hero__side">
          <p className="hero__lede">{fmt(t.hero.lede, n)}</p>
          <p className="hero__count">{fmt(t.hero.count, n)}</p>
        </div>
      </section>

      <StyleSwitcher locale={locale} items={items} dict={{ copy: dict.copy, styles: { switcher: t.switcher, preview: t.preview } }} />

      <section className="band" aria-labelledby="all-styles">
        <h2 id="all-styles" className="band__title">
          {t.grid.title} <span className="band__count">{n}</span>
        </h2>
        <ul className="grid stylegrid">
          {items.map((s) => (
            <li key={s.slug} className="card">
              <Link href={`/${locale}/themes/${s.slug}`} className="stylecard__thumb" tabIndex={-1} aria-hidden="true">
                <ScaledPreview>
                  <StylePreview style={s.slug} copy={s.sample} />
                </ScaledPreview>
              </Link>
              <div className="card__body">
                <h3 className="card__title">
                  <Link href={`/${locale}/themes/${s.slug}`}>{s.name}</Link>
                </h3>
                <p className="card__summary">{s.summary}</p>
                <ul className="tags">
                  {s.bestFor.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="card__actions">
                <CopyButton text={s.prompt} labels={dict.copy} variant="ghost" />
                <span className="card__links">
                  <Link className="link" href={`/${locale}/themes/${s.slug}/preview`} target="_blank">
                    {t.preview.open} <ArrowUpRight className="arrow" /><span className="sr-only"> ({t.preview.newTab})</span>
                  </Link>
                  <Link className="link" href={`/${locale}/themes/${s.slug}`}>
                    {dict.card.details}
                  </Link>
                </span>
              </div>
            </li>
          ))}
        </ul>
        <p className="stylegrid__note">{t.note}</p>
      </section>

      <section className="dark" aria-labelledby="use-title">
        <div className="dark__inner">
          <h2 id="use-title" className="dark__title">
            {t.use.title}
          </h2>
          <ol className="steps">
            {t.use.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="hire" aria-labelledby="hire-title">
        <h2 id="hire-title" className="hire__title">
          {t.cta.title}
        </h2>
        <p className="hire__text">{t.cta.text}</p>
        <a className="btn btn--primary hire__btn" href="https://www.twlworks.com">
          {t.cta.button} <ArrowRight className="arrow" />
        </a>
      </section>
    </div>
  )
}
