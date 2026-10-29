'use client'

import { useEffect, useRef } from 'react'
import s from './demo.module.css'

// Fixed values so server and client render the same markup.
const ORBS = [
  [8, 20, 70, 40, 9], [22, 70, 40, 60, 12], [35, 30, 100, 30, 14], [48, 80, 55, 70, 10], [60, 15, 80, 50, 16],
  [72, 60, 110, 25, 11], [85, 30, 45, 80, 13], [92, 75, 65, 45, 8], [15, 50, 35, 90, 15], [55, 45, 30, 20, 9],
]

export default function Bokeh({ labels }: { labels: Record<string, string> }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => el.toggleAttribute('data-paused', !e.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={s.scene}>
      {ORBS.map(([x, y, size, hue, dur], i) => (
        <span
          key={i}
          className={s.orb}
          aria-hidden="true"
          style={{ '--x': `${x}%`, '--y': `${y}%`, '--size': `${size}px`, '--hue': hue, '--dur': `${dur}s`, '--delay': `${-i * 1.7}s` } as React.CSSProperties}
        />
      ))}
      <p className={s.title}>{labels.title}</p>
    </div>
  )
}
