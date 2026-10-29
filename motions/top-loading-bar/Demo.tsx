'use client'

import { useEffect, useRef, useState } from 'react'
import s from './demo.module.css'

type Phase = 'idle' | 'loading' | 'done'

export default function TopLoadingBar({ labels }: { labels: Record<string, string> }) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [p, setP] = useState(0)
  const timers = useRef<number[]>([])

  const clear = () => {
    timers.current.forEach((t) => (clearInterval(t), clearTimeout(t)))
    timers.current = []
  }
  useEffect(() => clear, [])

  const start = () => {
    clear()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setPhase('loading')
    setP(reduced ? 0.6 : 0.08)
    if (!reduced) timers.current.push(window.setInterval(() => setP((v) => v + (0.9 - v) * 0.15), 300))
    timers.current.push(
      window.setTimeout(() => {
        clear()
        setPhase('done')
        setP(1)
        timers.current.push(window.setTimeout(() => (setPhase('idle'), setP(0)), 700))
      }, 1800),
    )
  }

  return (
    <div className={s.window}>
      <span className={s.bar} data-phase={phase} style={{ transform: `scaleX(${p})` }} aria-hidden="true" />
      <div className={s.chrome}>
        <span />
        <span />
        <span />
      </div>
      <div className={s.body}>
        <button type="button" className={s.btn} onClick={start} disabled={phase === 'loading'}>
          {labels.load}
        </button>
        <span className={s.status} role="status">
          {phase === 'done' ? labels.loaded : ''}
        </span>
      </div>
    </div>
  )
}
