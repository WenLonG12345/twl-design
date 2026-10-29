'use client'

import { useEffect, useRef } from 'react'
import s from './demo.module.css'

export default function KenBurns({ labels }: { labels: Record<string, string> }) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => el.toggleAttribute('data-paused', !e.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <figure ref={ref} className={s.frame}>
      <div className={s.scene} role="img" aria-label={labels.caption} />
      <figcaption className={s.caption}>{labels.caption}</figcaption>
    </figure>
  )
}
