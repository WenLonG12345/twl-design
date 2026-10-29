'use client'

import { useEffect, useRef } from 'react'
import s from './demo.module.css'

const EYE = 28
const PUPIL = 11

export default function FollowingEyes({ labels }: { labels: Record<string, string> }) {
  const eyes = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      for (const eye of eyes.current) {
        if (!eye) continue
        const r = eye.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        const a = Math.atan2(dy, dx)
        const d = Math.min(Math.hypot(dx, dy) / 8, EYE - PUPIL - 4)
        ;(eye.firstElementChild as HTMLElement).style.translate = `${Math.cos(a) * d}px ${Math.sin(a) * d}px`
      }
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div className={s.wrap}>
      <div className={s.face} aria-hidden="true">
        {[0, 1].map((i) => (
          <span key={i} ref={(el) => void (eyes.current[i] = el)} className={s.eye}>
            <span className={s.pupil} />
            <span className={s.lid} />
          </span>
        ))}
      </div>
      <span className={s.hint}>{labels.hint}</span>
    </div>
  )
}
