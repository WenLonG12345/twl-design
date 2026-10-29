import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans, Outfit } from 'next/font/google'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import { themeScript } from '@/components/ThemeToggle'
import { getDictionary } from '@/lib/dictionaries'
import { hasLocale, languageAlternates, locales, SITE_URL } from '@/lib/i18n'
import { motionsFor } from '@/motions'
import '@/tokens.css'
import './globals.css'

const display = Outfit({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--ff-display' })
const body = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--ff-body' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--ff-mono' })

export const generateStaticParams = () => locales.map((locale) => ({ locale }))

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F2EEE6' },
    { media: '(prefers-color-scheme: dark)', color: '#1C1A18' },
  ],
}

export async function generateMetadata({ params }: LayoutProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: dict.brand,
    title: { default: dict.meta.title, template: `%s · ${dict.brand}` },
    description: dict.meta.description,
    alternates: { canonical: `/${locale}`, languages: languageAlternates('') },
    openGraph: { type: 'website', siteName: dict.brand, locale: locale === 'en' ? 'en_US' : 'zh_CN' },
    twitter: { card: 'summary_large_image' },
  }
}

export default async function RootLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale } = await params
  if (!hasLocale(locale)) notFound()
  const dict = getDictionary(locale)
  const items = motionsFor(locale).map(({ slug, title, tech, component, trigger }) => ({ slug, title, tech, component, trigger }))

  return (
    // data-theme is set before paint by themeScript, so the server markup can't match it.
    <html lang={locale} className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip" href="#main">
          {dict.skip}
        </a>
        <Nav locale={locale} items={items} dict={dict} />
        <main id="main">{children}</main>
        <footer className="foot">
          <p>
            {dict.footer} · <a href="https://www.twlworks.com">twlworks.com</a> · <a href="/llms.txt">llms.txt</a> ·{' '}
            <a href="/sitemap.xml">sitemap</a>
          </p>
        </footer>
      </body>
    </html>
  )
}
