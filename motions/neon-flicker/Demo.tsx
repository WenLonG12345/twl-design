'use client'

import { useEffect, useRef } from 'react'
import s from './demo.module.css'

export default function NeonFlicker({ labels }: { labels: Record<string, string> }) {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => el.toggleAttribute('data-paused', !e.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <p ref={ref} className={s.sign}>
      {labels.text}
    </p>
  )
}
