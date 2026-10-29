'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Dictionary } from '@/lib/dictionaries'
import { fmt, type Locale } from '@/lib/i18n'
import { components, techLabel, techs, triggers, type Component, type Tech, type Trigger } from '@/lib/motions'
import type { LocalizedMotion } from '@/motions'
import CopyButton from './CopyButton'
import MotionDemo from './MotionDemo'

export default function Library({
  locale,
  items,
  dict,
}: {
  locale: Locale
  items: LocalizedMotion[]
  dict: Pick<Dictionary, 'filters' | 'component' | 'trigger' | 'copy' | 'card'>
}) {
  const [component, setComponent] = useState<Component | ''>('')
  const [tech, setTech] = useState<Tech | ''>('')
  const [trigger, setTrigger] = useState<Trigger | ''>('')

  const shown = items.filter(
    (m) => (!component || m.component === component) && (!tech || m.tech === tech) && (!trigger || m.trigger === trigger),
  )
  const groups = components.map((c) => ({ c, list: shown.filter((m) => m.component === c) })).filter((g) => g.list.length)
  const count = (c: Component) => items.filter((m) => m.component === c).length
  const clear = () => {
    setComponent('')
    setTech('')
    setTrigger('')
  }

  return (
    <>
      <div className="filters" role="group" aria-label={dict.filters.label}>
        <div className="filters__inner">
          <div className="chips">
            {(['', ...components] as const).map((c) => (
              <button key={c || 'all'} type="button" className="chip" aria-pressed={component === c} onClick={() => setComponent(c)}>
                {c ? dict.component[c] : dict.filters.all}
                <span className="chip__n">{c ? count(c) : items.length}</span>
              </button>
            ))}
          </div>
          <div className="filters__row">
            <label className="select">
              <span className="sr-only">{dict.filters.tech}</span>
              <select value={tech} onChange={(e) => setTech(e.target.value as Tech | '')}>
                <option value="">{dict.filters.anyTech}</option>
                {techs.map((t) => (
                  <option key={t} value={t}>
                    {techLabel[t]}
                  </option>
                ))}
              </select>
            </label>
            <label className="select">
              <span className="sr-only">{dict.filters.trigger}</span>
              <select value={trigger} onChange={(e) => setTrigger(e.target.value as Trigger | '')}>
                <option value="">{dict.filters.anyTrigger}</option>
                {triggers.map((t) => (
                  <option key={t} value={t}>
                    {dict.trigger[t]}
                  </option>
                ))}
              </select>
            </label>
            <p className="filters__count" aria-live="polite">
              {fmt(dict.filters.results, shown.length)}
            </p>
          </div>
        </div>
      </div>

      {groups.length === 0 && (
        <div className="empty">
          <p>{dict.filters.empty}</p>
          <button type="button" className="btn btn--ghost" onClick={clear}>
            {dict.filters.clear}
          </button>
        </div>
      )}

      {groups.map(({ c, list }) => (
        <section key={c} className="band" aria-labelledby={`band-${c}`}>
          <h2 id={`band-${c}`} className="band__title">
            {dict.component[c]} <span className="band__count">{list.length}</span>
          </h2>
          <div className="grid">
            {list.map((m) => (
              <article key={m.slug} className="card">
                <div className="stage">
                  <MotionDemo slug={m.slug} labels={m.labels} />
                </div>
                <div className="card__body">
                  <h3 className="card__title">
                    <Link href={`/${locale}/motion/${m.slug}`}>{m.title}</Link>
                  </h3>
                  <p className="card__summary">{m.summary}</p>
                  <ul className="tags">
                    <li>{techLabel[m.tech]}</li>
                    <li>{dict.trigger[m.trigger]}</li>
                  </ul>
                </div>
                <div className="card__actions">
                  <CopyButton text={m.prompt} labels={dict.copy} variant="primary" />
                  <Link className="link" href={`/${locale}/motion/${m.slug}`}>
                    {dict.card.details}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
