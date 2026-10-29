'use client'

import s from './demo.module.css'

export default function SpotlightCard({ labels }: { labels: Record<string, string> }) {
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <div className={s.card} onPointerMove={onMove}>
      <span className={s.kicker}>{labels.kicker}</span>
      <strong className={s.name}>{labels.name}</strong>
      <span className={s.price}>{labels.price}</span>
      <span className={s.note}>{labels.note}</span>
    </div>
  )
}
