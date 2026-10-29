'use client'

import { useId, useState } from 'react'
import s from './demo.module.css'

export default function Accordion({ labels }: { labels: Record<string, string> }) {
  const [open, setOpen] = useState(0)
  const id = useId()
  const items = [1, 2, 3].map((n) => ({ q: labels[`q${n}`], a: labels[`a${n}`] }))

  return (
    <div className={s.list}>
      {items.map(({ q, a }, i) => (
        <div key={q} className={s.item} data-open={open === i || undefined}>
          <h3 className={s.heading}>
            <button
              type="button"
              className={s.trigger}
              aria-expanded={open === i}
              aria-controls={`${id}-${i}`}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              {q}
              <svg className={s.chevron} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </h3>
          <div id={`${id}-${i}`} role="region" className={s.panel}>
            <div className={s.inner}>
              <p className={s.answer}>{a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
