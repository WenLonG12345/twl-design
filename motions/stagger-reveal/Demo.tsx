'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import s from './demo.module.css'

export default function StaggerReveal({ labels }: { labels: Record<string, string> }) {
  const grid = useRef<HTMLDivElement>(null)
  const tween = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const el = grid.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      tween.current = gsap.fromTo(
        `.${s.card}`,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08, paused: true },
      )
    }, el)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        tween.current?.play()
        io.disconnect()
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      ctx.revert()
    }
  }, [])

  return (
    <div className={s.wrap}>
      <div ref={grid} className={s.grid}>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className={s.card}>
            {labels.item} {n}
          </div>
        ))}
      </div>
      <button type="button" className={s.replay} onClick={() => tween.current?.restart()}>
        {labels.replay}
      </button>
    </div>
  )
}
