'use client'

import { useEffect, useRef } from 'react'
import s from './demo.module.css'

export default function RetroGrid({ labels }: { labels: Record<string, string> }) {
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
      <p className={s.title}>{labels.title}</p>
      <div className={s.floor} aria-hidden="true" />
    </div>
  )
}
