'use client'

import { useState } from 'react'
import s from './demo.module.css'

export default function ExpandingPanels({ labels }: { labels: Record<string, string> }) {
  const titles = labels.panels.split('|')
  const bodies = labels.body.split('|')
  const [active, setActive] = useState(0)

  return (
    <div className={s.row} style={{ gridTemplateColumns: titles.map((_, i) => (i === active ? '3fr' : '1fr')).join(' ') }}>
      {titles.map((t, i) => (
        <button
          key={t}
          type="button"
          className={s.panel}
          aria-expanded={i === active}
          onPointerEnter={() => setActive(i)}
          onFocus={() => setActive(i)}
          onClick={() => setActive(i)}
        >
          <span className={s.n}>{String(i + 1).padStart(2, '0')}</span>
          <span className={s.title}>{t}</span>
          <span className={s.body}>{bodies[i]}</span>
        </button>
      ))}
    </div>
  )
}
