import { notFound } from 'next/navigation'
import Library from '@/components/Library'
import { getDictionary } from '@/lib/dictionaries'
import { fmt, hasLocale, SITE_URL } from '@/lib/i18n'
import { motionsFor } from '@/motions'

export default async function Home({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params
  if (!hasLocale(locale)) notFound()
  const dict = getDictionary(locale)
  const items = motionsFor(locale)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: dict.meta.title,
    publisher: { '@type': 'Organization', name: 'twlworks', url: 'https://www.twlworks.com' },
    description: dict.meta.description,
    inLanguage: locale,
    url: `${SITE_URL}/${locale}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((m, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: m.title,
        url: `${SITE_URL}/${locale}/motion/${m.slug}`,
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <section className="hero">
        <h1 className="hero__title">
          {dict.hero.title[0]}
          <span className="hero__mark">{dict.hero.title[1]}</span>
          {dict.hero.title[2]}
        </h1>
        <div className="hero__side">
          <p className="hero__lede">{dict.hero.lede}</p>
          <p className="hero__count">{fmt(dict.hero.count, items.length)}</p>
        </div>
      </section>

      <Library locale={locale} items={items} dict={dict} />

      <section className="dark" aria-labelledby="use-title">
        <div className="dark__inner">
          <h2 id="use-title" className="dark__title">
            {dict.use.title}
          </h2>
          <ol className="steps">
            {dict.use.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
