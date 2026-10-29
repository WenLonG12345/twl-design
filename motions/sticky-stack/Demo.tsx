'use client'

import s from './demo.module.css'

export default function StickyStack({ labels }: { labels: Record<string, string> }) {
  const steps = labels.steps.split('|')
  return (
    <div className={s.frame} tabIndex={0} aria-label={labels.hint}>
      <span className={s.hint}>{labels.hint} ↓</span>
      {steps.map((step, i) => (
        <article key={step} className={s.card} style={{ '--i': i } as React.CSSProperties}>
          <span className={s.n}>{String(i + 1).padStart(2, '0')}</span>
          <strong className={s.step}>{step}</strong>
        </article>
      ))}
      <div className={s.end} />
    </div>
  )
}
