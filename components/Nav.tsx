'use client'

import { ArrowDown, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import type { Dictionary } from '@/lib/dictionaries'
import { otherLocale, type Locale } from '@/lib/i18n'
import { techLabel } from '@/lib/motions'
import type { LocalizedMotion } from '@/motions'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

type Item = Pick<LocalizedMotion, 'slug' | 'title' | 'tech' | 'component' | 'trigger'>

export default function Nav({
  locale,
  items,
  dict,
}: {
  locale: Locale
  items: Item[]
  dict: Pick<Dictionary, 'brand' | 'nav' | 'palette' | 'component' | 'trigger'>
}) {
  const router = useRouter()
  const pathname = usePathname()
  const dialog = useRef<HTMLDialogElement>(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const other = otherLocale(locale)
  // shortcut: the switch is a plain link; persist the choice in a cookie if "/" should remember it.
  const otherHref = pathname.replace(/^\/(en|zh-CN)(?=\/|$)/, `/${other}`)

  const q = query.trim().toLowerCase()
  const results = items.filter((m) =>
    [m.title, m.slug, techLabel[m.tech], dict.component[m.component], dict.trigger[m.trigger]].some((v) =>
      v.toLowerCase().includes(q),
    ),
  )

  const open = () => {
    setQuery('')
    setActive(0)
    dialog.current?.showModal()
  }
  const go = (slug: string) => {
    dialog.current?.close()
    router.push(`/${locale}/motion/${slug}`)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        if (dialog.current?.open) dialog.current.close()
        else open()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      const step = e.key === 'ArrowDown' ? 1 : -1
      setActive((a) => (results.length ? (a + step + results.length) % results.length : 0))
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault()
      go(results[active].slug)
    }
  }

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link className="nav__brand" href={`/${locale}`}>
          <Logo size={30} />
          {dict.brand}
        </Link>
        <button type="button" className="searchpill" onClick={open} aria-label={`${dict.palette.label} (⌘K)`}>
          <svg className="searchpill__ico" viewBox="0 0 16 16" aria-hidden="true">
            <circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10.5 10.5 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="searchpill__text">{dict.nav.search}</span>
          <span className="searchpill__kbd">
            <kbd>⌘</kbd>
            <kbd>K</kbd>
          </span>
        </button>
        <nav className="nav__right" aria-label="Primary">
          <Link className="nav__link" href={`/${locale}`}>
            {dict.nav.library}
          </Link>
          <Link className="nav__link" href={`/${locale}/themes`}>
            {dict.nav.styles}
          </Link>
          <Link className="nav__lang" href={otherHref} hrefLang={other} lang={other} aria-label={dict.nav.switchLangLabel}>
            {dict.nav.switchLang}
          </Link>
          <ThemeToggle labels={dict.nav} />
        </nav>
      </div>

      <dialog
        ref={dialog}
        className="cmdk"
        aria-label={dict.palette.label}
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
      >
        <div className="cmdk__panel" onKeyDown={onListKey}>
          <div className="cmdk__field">
            <input
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setActive(0)
              }}
              placeholder={dict.palette.placeholder}
              aria-label={dict.palette.label}
              role="combobox"
              aria-expanded="true"
              aria-controls="cmdk-results"
              aria-activedescendant={results[active] ? `cmdk-${results[active].slug}` : undefined}
            />
            <kbd>esc</kbd>
          </div>
          <ul id="cmdk-results" className="cmdk__results" role="listbox">
            {results.map((m, i) => (
              <li
                key={m.slug}
                id={`cmdk-${m.slug}`}
                role="option"
                aria-selected={i === active}
                className="cmdk__item"
                onPointerMove={() => setActive(i)}
                onClick={() => go(m.slug)}
              >
                <span>{m.title}</span>
                <span className="cmdk__meta">
                  {dict.component[m.component]} · {techLabel[m.tech]}
                </span>
              </li>
            ))}
            {results.length === 0 && <li className="cmdk__empty">{dict.palette.empty}</li>}
          </ul>
          <div className="cmdk__foot">
            <span>
              <kbd><ArrowUp className="arrow" /></kbd>
              <kbd><ArrowDown className="arrow" /></kbd> {dict.palette.navigate}
            </span>
            <span>
              <kbd>↵</kbd> {dict.palette.open}
            </span>
            <span>
              <kbd>esc</kbd> {dict.palette.close}
            </span>
          </div>
        </div>
      </dialog>
    </header>
  )
}
