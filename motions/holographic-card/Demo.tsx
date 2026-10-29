'use client'

import s from './demo.module.css'

export default function HolographicCard({ labels }: { labels: Record<string, string> }) {
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', String((e.clientX - r.left) / r.width))
    el.style.setProperty('--y', String((e.clientY - r.top) / r.height))
    el.style.setProperty('--on', '1')
  }
  const onLeave = (e: React.PointerEvent<HTMLDivElement>) => e.currentTarget.style.setProperty('--on', '0')

  return (
    <div className={s.card} onPointerMove={onMove} onPointerLeave={onLeave}>
      <span className={s.badge}>★</span>
      <div>
        <p className={s.title}>{labels.title}</p>
        <p className={s.sub}>{labels.sub}</p>
      </div>
    </div>
  )
}
