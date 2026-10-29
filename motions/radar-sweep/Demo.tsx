'use client'

import { useEffect, useRef } from 'react'
import s from './demo.module.css'

const PERIOD = 3
// Angles are measured clockwise from 12 o'clock, matching the conic-gradient's start.
const BLIPS = [
  { angle: 50, r: 0.55 },
  { angle: 160, r: 0.8 },
  { angle: 285, r: 0.35 },
]

export default function RadarSweep({ labels }: { labels: Record<string, string> }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => el.toggleAttribute('data-paused', !e.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={s.wrap}>
      <div className={s.radar}>
        <svg viewBox="0 0 100 100" className={s.grid} aria-hidden="true">
          <circle cx="50" cy="50" r="48" />
          <circle cx="50" cy="50" r="32" />
          <circle cx="50" cy="50" r="16" />
          <path d="M50 2v96M2 50h96" />
        </svg>
        <div className={s.beam} />
        {BLIPS.map(({ angle, r }) => {
          const rad = (angle * Math.PI) / 180
          return (
            <span
              key={angle}
              className={s.blip}
              style={{
                left: `${50 + Math.sin(rad) * r * 48}%`,
                top: `${50 - Math.cos(rad) * r * 48}%`,
                animationDelay: `${(angle / 360) * PERIOD}s`,
              }}
            />
          )
        })}
      </div>
      <span className={s.caption}>{labels.caption}</span>
    </div>
  )
}
