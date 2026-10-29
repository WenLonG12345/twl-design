'use client'

import s from './demo.module.css'

export default function RollingText({ labels }: { labels: Record<string, string> }) {
  return (
    <button type="button" className={s.button} aria-label={labels.cta}>
      <span className={s.label}>
        {Array.from(labels.cta).map((c, i) => (
          <span key={i} className={s.char} style={{ '--i': i } as React.CSSProperties} aria-hidden="true">
            {c === ' ' ? ' ' : c}
          </span>
        ))}
      </span>
    </button>
  )
}
