'use client'

import s from './demo.module.css'

export default function WaveLetters({ labels }: { labels: Record<string, string> }) {
  return (
    <p className={s.text} aria-label={labels.text}>
      {Array.from(labels.text).map((ch, i) => (
        <span key={i} className={s.ch} style={{ '--i': i } as React.CSSProperties} aria-hidden="true">
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </p>
  )
}
