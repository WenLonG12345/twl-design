'use client'

import { useEffect, useId, useRef, useState } from 'react'
import s from './demo.module.css'

const HOLD = 1200

export default function HoldToConfirm({ labels }: { labels: Record<string, string> }) {
  const ref = useRef<HTMLButtonElement>(null)
  const frame = useRef(0)
  const progress = useRef(0)
  const [done, setDone] = useState(false)
  const hintId = useId()

  useEffect(() => () => cancelAnimationFrame(frame.current), [])

  const set = (p: number) => {
    progress.current = p
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ref.current?.style.setProperty('--p', String(reduced ? Math.floor(p * 4) / 4 : p))
  }

  const start = () => {
    if (done) return
    cancelAnimationFrame(frame.current)
    const from = performance.now() - progress.current * HOLD
    const tick = (now: number) => {
      const p = Math.min((now - from) / HOLD, 1)
      set(p)
      if (p < 1) frame.current = requestAnimationFrame(tick)
      else {
        setDone(true)
        setTimeout(() => {
          setDone(false)
          set(0)
        }, 1600)
      }
    }
    frame.current = requestAnimationFrame(tick)
  }

  const cancel = () => {
    if (done || progress.current >= 1) return
    cancelAnimationFrame(frame.current)
    const from = progress.current
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = from * (1 - Math.min((now - t0) / 250, 1))
      set(p)
      if (p > 0) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
  }

  const isKey = (e: React.KeyboardEvent) => e.key === ' ' || e.key === 'Enter'

  return (
    <div className={s.wrap}>
      <button
        ref={ref}
        type="button"
        className={s.button}
        data-done={done || undefined}
        aria-describedby={hintId}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId)
          start()
        }}
        onPointerUp={cancel}
        onPointerCancel={cancel}
        onKeyDown={(e) => {
          if (isKey(e) && !e.repeat) {
            e.preventDefault()
            start()
          }
        }}
        onKeyUp={(e) => isKey(e) && cancel()}
      >
        <span className={s.label}>{done ? labels.done : labels.idle}</span>
      </button>
      <span id={hintId} className={s.hint}>
        {labels.hint}
      </span>
    </div>
  )
}
