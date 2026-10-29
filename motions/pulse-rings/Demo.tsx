'use client'

import { useEffect, useRef } from 'react'
import s from './demo.module.css'

export default function PulseRings({ labels }: { labels: Record<string, string> }) {
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
      {[0, 1, 2].map((n) => (
        <span key={n} className={s.ring} style={{ animationDelay: `${n}s` }} aria-hidden="true" />
      ))}
      <span className={s.badge}>
        <span className={s.dot} aria-hidden="true" />
        {labels.label}
      </span>
    </div>
  )
}
