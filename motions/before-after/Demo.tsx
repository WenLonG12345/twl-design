'use client'

import { useState } from 'react'
import s from './demo.module.css'

export default function BeforeAfter({ labels }: { labels: Record<string, string> }) {
  const [pos, setPos] = useState(50)

  return (
    <div className={s.frame} style={{ '--pos': pos } as React.CSSProperties}>
      <div className={`${s.scene} ${s.before}`} aria-hidden="true" />
      <div className={`${s.scene} ${s.after}`} aria-hidden="true" />
      <span className={`${s.tag} ${s.tagBefore}`} data-hidden={pos < 22 || undefined}>
        {labels.before}
      </span>
      <span className={`${s.tag} ${s.tagAfter}`} data-hidden={pos > 78 || undefined}>
        {labels.after}
      </span>
      <span className={s.divider} aria-hidden="true">
        <span className={s.handle}>‹ ›</span>
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        aria-label={labels.label}
        className={s.input}
        onChange={(e) => setPos(Number(e.target.value))}
      />
    </div>
  )
}
