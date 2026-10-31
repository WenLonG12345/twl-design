import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CopyButton from '@/components/CopyButton'
import MotionDemo from '@/components/MotionDemo'
import { getDictionary } from '@/lib/dictionaries'
import { highlightSource } from '@/lib/highlight'
import { hasLocale, languageAlternates, locales, otherLocale, SITE_URL } from '@/lib/i18n'
import { techLabel } from '@/lib/motions'
import { getMotion, motions } from '@/motions'
import sources from '@/motions/sources.generated.json'

export const generateStaticParams = () =>
  locales.flatMap((locale) => motions.map((m) => ({ locale, slug: m.slug })))

export async function generateMetadata({ params }: PageProps<'/[locale]/motion/[slug]'>): Promise<Metadata> {
  const { locale, slug } = await params
  const motion = getMotion(slug)
  if (!hasLocale(locale) || !motion) return {}
  const copy = motion.i18n[locale]
  const { brand } = getDictionary(locale)
  return {
    title: copy.title,
    description: copy.summary,
    alternates: { canonical: `/${locale}/motion/${slug}`, languages: languageAlternates(`/motion/${slug}`) },
    openGraph: { type: 'article', siteName: brand, title: copy.title, description: copy.summary },
  }
}

export default async function MotionPage({ params }: PageProps<'/[locale]/motion/[slug]'>) {
  const { locale, slug } = await params
  const motion = getMotion(slug)
  if (!hasLocale(locale) || !motion) notFound()
  const dict = getDictionary(locale)
  const copy = motion.i18n[locale]
  const other = otherLocale(locale)
  const source = sources[slug as keyof typeof sources] ?? []

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: copy.title,
    description: copy.summary,
    text: copy.prompt,
    inLanguage: locale,
    dateCreated: motion.added,
    keywords: [techLabel[motion.tech], dict.component[motion.component], dict.trigger[motion.trigger]].join(', '),
    url: `${SITE_URL}/${locale}/motion/${slug}`,
  }

  return (
    <article className="detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link className="link" href={`/${locale}`}>
          <ArrowLeft className="arrow" /> {dict.detail.back}
        </Link>
        <Link className="link" href={`/${other}/motion/${slug}`} hrefLang={other} lang={other}>
          {dict.detail.readOther}
        </Link>
      </nav>

      <header className="detail__head">
        <h1 className="detail__title">{copy.title}</h1>
        <p className="detail__summary">{copy.summary}</p>
        <ul className="tags">
          <li>{techLabel[motion.tech]}</li>
          <li>{dict.component[motion.component]}</li>
          <li>{dict.trigger[motion.trigger]}</li>
          <li>
            {dict.detail.added} <time dateTime={motion.added}>{motion.added}</time>
          </li>
        </ul>
      </header>

      <div className="detail__body">
        <div className="stage stage--lg">
          <MotionDemo slug={slug} labels={copy.labels} />
        </div>
        <section className="prompt" aria-labelledby="prompt-title">
          <div className="prompt__bar">
            <h2 id="prompt-title" className="prompt__title">
              {dict.detail.prompt}
            </h2>
            <CopyButton text={copy.prompt} labels={dict.copy} variant="primary" />
          </div>
          <p className="prompt__text">{copy.prompt}</p>
        </section>
      </div>

      <section className="source" aria-labelledby="source-title">
        <h2 id="source-title" className="source__title">
          {dict.detail.source}
        </h2>
        {source.map((f) => (
          <figure key={f.name} className="code">
            <figcaption className="code__bar">
              <span>{f.name}</span>
              <CopyButton text={f.code} labels={{ ...dict.copy, idle: dict.copy.code }} variant="dark" />
            </figcaption>
            {/* our own source files, escaped by the highlighter */}
            <div dangerouslySetInnerHTML={{ __html: highlightSource(f.name, f.code) }} />
          </figure>
        ))}
      </section>
    </article>
  )
}
