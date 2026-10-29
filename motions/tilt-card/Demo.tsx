'use client'

import s from './demo.module.css'

export default function TiltCard({ labels }: { labels: Record<string, string> }) {
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    el.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }

  const onLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty('--px', '0')
    e.currentTarget.style.setProperty('--py', '0')
  }

  return (
    <div className={s.card} onPointerMove={onMove} onPointerLeave={onLeave}>
      <span className={s.kicker}>{labels.kicker}</span>
      <strong className={s.name}>{labels.name}</strong>
      <span className={s.meta}>{labels.meta}</span>
    </div>
  )
}
