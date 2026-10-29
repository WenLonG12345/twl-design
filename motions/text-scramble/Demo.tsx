'use client'

import { useEffect, useRef, useState } from 'react'
import s from './demo.module.css'

const DURATION = 700

export default function TextScramble({ labels }: { labels: Record<string, string> }) {
  const target = labels.text
  const pool = Array.from(labels.glyphs)
  const [shown, setShown] = useState(target)
  const frame = useRef(0)

  useEffect(() => () => cancelAnimationFrame(frame.current), [])

  const run = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    cancelAnimationFrame(frame.current)
    const chars = Array.from(target)
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1)
      const locked = Math.floor(progress * chars.length)
      setShown(
        chars
          .map((c, i) => (i < locked || c === ' ' ? c : pool[Math.floor(Math.random() * pool.length)]))
          .join(''),
      )
      if (progress < 1) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
  }

  return (
    <span className={s.text} tabIndex={0} aria-label={target} onPointerEnter={run} onFocus={run}>
      <span aria-hidden="true">{shown}</span>
    </span>
  )
}
