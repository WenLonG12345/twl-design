'use client'

import { useState } from 'react'
import s from './demo.module.css'

export default function NumberStepper({ labels }: { labels: Record<string, string> }) {
  const [state, setState] = useState({ n: 2, dir: 'up' })
  const step = (d: 1 | -1) => setState(({ n }) => ({ n: n + d, dir: d > 0 ? 'up' : 'down' }))

  return (
    <div className={s.wrap}>
      <span className={s.label}>{labels.label}</span>
      <div className={s.stepper}>
        <button type="button" className={s.btn} aria-label={labels.minus} disabled={state.n <= 1} onClick={() => step(-1)}>
          −
        </button>
        <span className={s.value} aria-live="polite">
          <span key={state.n} className={s.num} data-dir={state.dir}>
            {state.n}
          </span>
        </span>
        <button type="button" className={s.btn} aria-label={labels.plus} disabled={state.n >= 9} onClick={() => step(1)}>
          +
        </button>
      </div>
    </div>
  )
}
