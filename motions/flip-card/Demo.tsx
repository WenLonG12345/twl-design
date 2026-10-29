'use client'

import { useState } from 'react'
import s from './demo.module.css'

export default function FlipCard({ labels }: { labels: Record<string, string> }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button type="button" className={s.card} aria-pressed={flipped} onClick={() => setFlipped(!flipped)}>
      <span className={s.inner}>
        <span className={`${s.face} ${s.front}`} aria-hidden={flipped}>
          <strong className={s.title}>{labels.title}</strong>
          <span className={s.hint}>{labels.front}</span>
        </span>
        <span className={`${s.face} ${s.back}`} aria-hidden={!flipped}>
          <span className={s.text}>{labels.back}</span>
          <span className={s.hint}>{labels.hint}</span>
        </span>
      </span>
    </button>
  )
}
