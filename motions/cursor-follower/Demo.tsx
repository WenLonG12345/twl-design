'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import s from './demo.module.css'

type QuickTo = ReturnType<typeof gsap.quickTo>

export default function CursorFollower({ labels }: { labels: Record<string, string> }) {
  const area = useRef<HTMLDivElement>(null)
  const dot = useRef<HTMLSpanElement>(null)
  const ring = useRef<HTMLSpanElement>(null)
  const setters = useRef<QuickTo[]>([])
  const locked = useRef(false)

  useEffect(() => {
    const nodes = [dot.current, ring.current]
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const opts = (duration: number) => ({ duration: reduced ? 0 : duration, ease: 'power3.out' })
    gsap.set([dot.current, ring.current], { xPercent: -50, yPercent: -50 })
    setters.current = [
      gsap.quickTo(dot.current, 'x', opts(0.08)),
      gsap.quickTo(dot.current, 'y', opts(0.08)),
      gsap.quickTo(ring.current, 'x', opts(0.45)),
      gsap.quickTo(ring.current, 'y', opts(0.45)),
    ]
    return () => gsap.killTweensOf(nodes)
  }, [])

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch' || !area.current) return
    const r = area.current.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    const [dx, dy, rx, ry] = setters.current
    gsap.to([dot.current, ring.current], { opacity: 1, duration: 0.2 })
    dx?.(x)
    dy?.(y)
    if (!locked.current) {
      rx?.(x)
      ry?.(y)
    }
  }

  const enterTarget = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.pointerType === 'touch' || !area.current) return
    locked.current = true
    const a = area.current.getBoundingClientRect()
    const t = e.currentTarget.getBoundingClientRect()
    gsap.to(ring.current, {
      x: t.left - a.left + t.width / 2,
      y: t.top - a.top + t.height / 2,
      width: t.width + 8,
      height: t.height + 8,
      borderRadius: 12,
      duration: 0.3,
      ease: 'power3.out',
    })
    gsap.to(dot.current, { opacity: 0, duration: 0.15 })
  }

  const leaveTarget = () => {
    locked.current = false
    gsap.to(ring.current, { width: 36, height: 36, borderRadius: 18, duration: 0.3, ease: 'power3.out' })
    gsap.to(dot.current, { opacity: 1, duration: 0.15 })
  }

  return (
    <div
      ref={area}
      className={s.area}
      onPointerMove={onMove}
      onPointerLeave={() => gsap.to([dot.current, ring.current], { opacity: 0, duration: 0.2 })}
    >
      <nav className={s.nav}>
        {[labels.a, labels.b, labels.c].map((t) => (
          <button key={t} type="button" className={s.item} data-cursor-target onPointerEnter={enterTarget} onPointerLeave={leaveTarget}>
            {t}
          </button>
        ))}
      </nav>
      <span ref={ring} className={s.ring} aria-hidden="true" />
      <span ref={dot} className={s.dot} aria-hidden="true" />
    </div>
  )
}
