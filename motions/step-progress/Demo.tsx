'use client'

import { useState } from 'react'
import s from './demo.module.css'

export default function StepProgress({ labels }: { labels: Record<string, string> }) {
  const steps = labels.steps.split('|')
  const [current, setCurrent] = useState(1)

  return (
    <div className={s.wrap}>
      <ol className={s.steps} style={{ '--fill': current / (steps.length - 1) } as React.CSSProperties}>
        {steps.map((t, i) => (
          <li
            key={t}
            className={s.step}
            data-state={i < current ? 'done' : i === current ? 'current' : 'upcoming'}
            aria-current={i === current ? 'step' : undefined}
          >
            <span className={s.dot}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 12.5l4 4 8-9" />
              </svg>
            </span>
            <span className={s.name}>{t}</span>
          </li>
        ))}
      </ol>
      <div className={s.actions}>
        <button type="button" className={s.btn} disabled={current === 0} onClick={() => setCurrent((c) => c - 1)}>
          {labels.back}
        </button>
        <button type="button" className={s.btn} disabled={current === steps.length - 1} onClick={() => setCurrent((c) => c + 1)}>
          {labels.next}
        </button>
      </div>
    </div>
  )
}
