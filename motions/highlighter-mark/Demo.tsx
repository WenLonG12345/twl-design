'use client'

import { useEffect, useRef } from 'react'
import s from './demo.module.css'

export default function HighlighterMark({ labels }: { labels: Record<string, string> }) {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        el.setAttribute('data-on', '')
        io.disconnect()
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const replay = () => {
    const el = ref.current
    if (!el) return
    el.removeAttribute('data-on')
    void el.offsetWidth
    el.setAttribute('data-on', '')
  }

  return (
    <div className={s.wrap}>
      <p ref={ref} className={s.text}>
        {labels.before} <mark className={s.mark}>{labels.mark}</mark>
        {labels.after}
      </p>
      <button type="button" className={s.replay} onClick={replay}>
        {labels.replay}
      </button>
    </div>
  )
}
