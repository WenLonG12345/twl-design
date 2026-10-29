'use client'

import { useState } from 'react'
import s from './demo.module.css'

export default function BlurInLetters({ labels }: { labels: Record<string, string> }) {
  const [run, setRun] = useState(0)

  return (
    <div className={s.wrap}>
      <p key={run} className={s.text} aria-label={labels.text}>
        {Array.from(labels.text).map((ch, i) => (
          <span key={i} className={s.ch} style={{ '--i': i } as React.CSSProperties} aria-hidden="true">
            {ch === ' ' ? ' ' : ch}
          </span>
        ))}
      </p>
      <button type="button" className={s.button} onClick={() => setRun(run + 1)}>
        {labels.replay}
      </button>
    </div>
  )
}
