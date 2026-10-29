'use client'

import s from './demo.module.css'

export default function SnapCarousel({ labels }: { labels: Record<string, string> }) {
  return (
    <div className={s.wrap}>
      <div className={s.track} tabIndex={0} role="region" aria-label={labels.carousel}>
        {labels.items.split('|').map((t, i) => (
          <div key={t} className={s.card} style={{ '--h': 30 + i * 60 } as React.CSSProperties}>
            <span className={s.n}>{String(i + 1).padStart(2, '0')}</span>
            <strong className={s.name}>{t}</strong>
          </div>
        ))}
      </div>
      <span className={s.hint}>{labels.hint}</span>
    </div>
  )
}
