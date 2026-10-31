import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CopyButton from '@/components/CopyButton'
import StylePreview from '@/components/StylePreview'
import { getDictionary } from '@/lib/dictionaries'
import { hasLocale, languageAlternates, locales, otherLocale, SITE_URL } from '@/lib/i18n'
import { cjkFontsHref, styleFontVars } from '@/lib/styleFonts'
import { getMotion } from '@/motions'
import { designStyles, getStyle } from '@/styles'

export const generateStaticParams = () =>
  locales.flatMap((locale) => designStyles.map((s) => ({ locale, slug: s.slug })))

export async function generateMetadata({ params }: PageProps<'/[locale]/themes/[slug]'>): Promise<Metadata> {
  const { locale, slug } = await params
  const style = getStyle(slug)
  if (!hasLocale(locale) || !style) return {}
  const copy = style.i18n[locale]
  const { brand, styles } = getDictionary(locale)
  return {
    title: `${copy.name} · ${styles.meta.title}`,
    description: copy.summary,
    alternates: { canonical: `/${locale}/themes/${slug}`, languages: languageAlternates(`/themes/${slug}`) },
    openGraph: { type: 'article', siteName: brand, title: copy.name, description: copy.summary },
  }
}

export default async function ThemePage({ params }: PageProps<'/[locale]/themes/[slug]'>) {
  const { locale, slug } = await params
  const style = getStyle(slug)
  if (!hasLocale(locale) || !style) notFound()
  const dict = getDictionary(locale)
  const t = dict.styles
  const copy = style.i18n[locale]
  const other = otherLocale(locale)
  const at = designStyles.indexOf(style)
  const prev = designStyles[(at - 1 + designStyles.length) % designStyles.length]
  const next = designStyles[(at + 1) % designStyles.length]
  const motions = style.motions.flatMap((m) => getMotion(m) ?? [])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: copy.name,
    description: copy.summary,
    text: copy.prompt,
    inLanguage: locale,
    dateCreated: style.added,
    keywords: copy.bestFor.join(', '),
    url: `${SITE_URL}/${locale}/themes/${slug}`,
  }

  return (
    <article className={`detail ${styleFontVars}`}>
      {locale === 'zh-CN' && <link rel="stylesheet" href={cjkFontsHref} precedence="default" />}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link className="link" href={`/${locale}/themes`}>
          ← {t.detail.back}
        </Link>
        <Link className="link" href={`/${other}/themes/${slug}`} hrefLang={other} lang={other}>
          {t.detail.readOther}
        </Link>
      </nav>

      <header className="detail__head">
        <p className="hero__count">
          {String(at + 1).padStart(2, '0')} / {String(designStyles.length).padStart(2, '0')}
        </p>
        <h1 className="detail__title">{copy.name}</h1>
        <p className="detail__summary">{copy.summary}</p>
        <ul className="tags" aria-label={t.detail.bestFor}>
          {copy.bestFor.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <Link className="btn btn--ghost previewbtn" href={`/${locale}/themes/${slug}/preview`} target="_blank">
          <svg className="ico" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M2.5 6V2.5H6M10 2.5h3.5V6M13.5 10v3.5H10M6 13.5H2.5V10" />
          </svg>
          {t.preview.open}
          <span className="sr-only"> ({t.preview.newTab})</span>
          <svg className="ico previewbtn__go" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M5.5 10.5l5-5M6.5 5.5h4v4" />
          </svg>
        </Link>
      </header>

      <div className="stylestage">
        <StylePreview style={style.slug} copy={copy.sample} label={`${t.switcher.previewOf} ${copy.name}`} />
      </div>
      <p className="stylegrid__note">{t.note}</p>

      <div className="detail__body stylebody">
        <section className="prompt" aria-labelledby="prompt-title">
          <div className="prompt__bar">
            <h2 id="prompt-title" className="prompt__title">
              {t.detail.prompt}
            </h2>
            <CopyButton text={copy.prompt} labels={dict.copy} variant="primary" />
          </div>
          <p className="prompt__text">{copy.prompt}</p>
        </section>

        <aside className="spec">
          <section className="spec__block" aria-labelledby="palette-title">
            <h2 id="palette-title" className="prompt__title">
              {t.detail.palette}
            </h2>
            <ul className="swatches">
              {style.palette.map((p) => (
                <li key={p.role} className="swatch">
                  <span className="swatch__chip" style={{ background: p.hex }} />
                  <span className="swatch__role">{t.roles[p.role]}</span>
                  <code className="swatch__hex">{p.hex}</code>
                </li>
              ))}
            </ul>
          </section>

          <section className="spec__block" aria-labelledby="type-title">
            <h2 id="type-title" className="prompt__title">
              {t.detail.type}
            </h2>
            <dl className="typespec">
              <dt>{t.detail.display}</dt>
              <dd>{style.fonts.display}</dd>
              <dt>{t.detail.body}</dt>
              <dd>{style.fonts.body}</dd>
            </dl>
          </section>

          {motions.length > 0 && (
            <section className="spec__block" aria-labelledby="motions-title">
              <h2 id="motions-title" className="prompt__title">
                {t.detail.motions}
              </h2>
              <ul className="speclinks">
                {motions.map((m) => (
                  <li key={m.slug}>
                    <Link className="link" href={`/${locale}/motion/${m.slug}`}>
                      {m.i18n[locale].title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="spec__block spec__hire" aria-labelledby="hire-title">
            <h2 id="hire-title" className="spec__hireTitle">
              {t.cta.title}
            </h2>
            <p>{t.cta.text}</p>
            <a className="btn btn--primary" href="https://www.twlworks.com">
              {t.cta.button} →
            </a>
          </section>
        </aside>
      </div>

      <nav className="pager" aria-label={t.grid.title}>
        <Link className="pager__link" href={`/${locale}/themes/${prev.slug}`} rel="prev">
          <span className="pager__label">← {t.detail.prev}</span>
          <span className="pager__name">{prev.i18n[locale].name}</span>
        </Link>
        <Link className="pager__link pager__link--next" href={`/${locale}/themes/${next.slug}`} rel="next">
          <span className="pager__label">{t.detail.next} →</span>
          <span className="pager__name">{next.i18n[locale].name}</span>
        </Link>
      </nav>
    </article>
  )
}
