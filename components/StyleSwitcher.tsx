'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import type { Dictionary } from '@/lib/dictionaries'
import type { Locale } from '@/lib/i18n'
import type { StyleCopy } from '@/lib/styles'
import type { SampleCopy } from '@/styles/sample'
import CopyButton from './CopyButton'
import StylePreview from './StylePreview'

type Item = StyleCopy & { slug: string }

const AUTOPLAY_MS = 2600

/** One sample page, many styles: pick a chip and the same page re-dresses itself. Built for comparing (and screen recording). */
export default function StyleSwitcher({
  locale,
  items,
  sample,
  dict,
}: {
  locale: Locale
  items: Item[]
  sample: SampleCopy
  dict: Pick<Dictionary, 'copy'> & { styles: Pick<Dictionary['styles'], 'switcher'> }
}) {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const chips = useRef<HTMLDivElement>(null)
  const current = items[index]
  const t = dict.styles.switcher

  // Cross-fade between styles with the View Transitions API where it exists and motion is welcome.
  const select = (next: number) => {
    const go = () => flushSync(() => setIndex(next))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduce && 'startViewTransition' in document) document.startViewTransition(go)
    else go()
  }

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => select((index + 1) % items.length), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [playing, index, items.length])

  // Keep the active chip in view while auto-play moves through the row. Only the row scrolls, never the page.
  useEffect(() => {
    const row = chips.current
    const chip = row?.querySelector<HTMLElement>('[aria-pressed="true"]')
    if (!row || !chip) return
    const offset = chip.getBoundingClientRect().left - row.getBoundingClientRect().left
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    row.scrollTo({ left: row.scrollLeft + offset - (row.clientWidth - chip.offsetWidth) / 2, behavior: reduce ? 'auto' : 'smooth' })
  }, [index])

  return (
    <section className="switcher" aria-label={t.label}>
      <div className="switcher__bar">
        <div ref={chips} className="chips" role="group" aria-label={t.label}>
          {items.map((s, i) => (
            <button
              key={s.slug}
              type="button"
              className="chip"
              aria-pressed={i === index}
              onClick={() => {
                setPlaying(false)
                select(i)
              }}
            >
              <span className="chip__n">{String(i + 1).padStart(2, '0')}</span>
              {s.name}
            </button>
          ))}
        </div>
        <button type="button" className="btn btn--ghost switcher__play" aria-pressed={playing} onClick={() => setPlaying(!playing)}>
          {playing ? t.pause : t.play}
        </button>
      </div>

      <div className="switcher__body">
        <div className="switcher__stage">
          <StylePreview style={current.slug} copy={sample} label={`${t.previewOf} ${current.name}`} />
        </div>
        <aside className="switcher__info" aria-live={playing ? 'off' : 'polite'}>
          <p className="switcher__index">
            {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </p>
          <h2 className="switcher__name">{current.name}</h2>
          <p className="switcher__summary">{current.summary}</p>
          <p className="switcher__label">{t.bestFor}</p>
          <ul className="tags">
            {current.bestFor.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="switcher__actions">
            <CopyButton text={current.prompt} labels={dict.copy} variant="primary" />
            <Link className="link" href={`/${locale}/styles/${current.slug}`}>
              {t.details} →
            </Link>
          </div>
        </aside>
      </div>
    </section>
  )
}
