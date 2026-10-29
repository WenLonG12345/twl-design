'use client'

import { useEffect, useRef, useState } from 'react'
import s from './demo.module.css'

const R = 52
const C = 2 * Math.PI * R

export default function CircularProgress({ labels }: { labels: Record<string, string> }) {
  const [shown, setShown] = useState(0)
  const [goal, setGoal] = useState(0)
  const target = useRef(0)
  const frame = useRef(0)

  const animateTo = (next: number) => {
    cancelAnimationFrame(frame.current)
    const from = target.current
    target.current = next
    setGoal(next)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setShown(next)
    const t0 = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - t0) / 900, 1)
      setShown(from + (next - from) * (1 - (1 - t) ** 3))
      if (t < 1) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    // start on the next frame so the ring animates in from 0 after mount
    frame.current = requestAnimationFrame(() => animateTo(72))
    return () => cancelAnimationFrame(frame.current)
  }, [])

  const pct = Math.round(shown)

  return (
    <div className={s.wrap}>
      <div className={s.ring} role="progressbar" aria-valuenow={goal} aria-valuemin={0} aria-valuemax={100} aria-label={labels.label}>
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle className={s.track} cx="60" cy="60" r={R} />
          <circle className={s.bar} cx="60" cy="60" r={R} strokeDasharray={C} strokeDashoffset={C * (1 - shown / 100)} />
        </svg>
        <span className={s.value}>{pct}%</span>
      </div>
      <span className={s.label}>{labels.label}</span>
      <button type="button" className={s.button} onClick={() => animateTo(10 + Math.floor(Math.random() * 90))}>
        {labels.again}
      </button>
    </div>
  )
}
