'use client'

import { useEffect, useRef, useState } from 'react'
import s from './demo.module.css'

const BARS = [0.62, 0.48, 0.81, 0.55, 0.9, 0.45, 0.7]

export default function AudioBars({ labels }: { labels: Record<string, string> }) {
  const [playing, setPlaying] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => el.toggleAttribute('data-offscreen', !e.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={s.player} data-playing={playing || undefined}>
      <svg viewBox="0 0 76 40" className={s.bars} aria-hidden="true">
        {BARS.map((d, i) => (
          <rect
            key={i}
            x={i * 11}
            y="0"
            width="6"
            height="40"
            rx="3"
            className={s.bar}
            style={{ '--dur': `${d}s`, '--delay': `${-i * 0.23}s`, '--rest': 0.3 + (i % 3) * 0.25 } as React.CSSProperties}
          />
        ))}
      </svg>
      <span className={s.track}>{labels.track}</span>
      <button type="button" className={s.btn} aria-pressed={playing} onClick={() => setPlaying(!playing)}>
        {playing ? labels.pause : labels.play}
      </button>
    </div>
  )
}
