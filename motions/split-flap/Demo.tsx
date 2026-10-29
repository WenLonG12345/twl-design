'use client'

import { useEffect, useRef, useState } from 'react'
import s from './demo.module.css'

const INTERVAL = 2400

export default function SplitFlap({ labels }: { labels: Record<string, string> }) {
  const words = labels.words.split('|')
  const width = Math.max(...words.map((w) => Array.from(w).length))
  const [i, setI] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let timer = 0
    const io = new IntersectionObserver(([e]) => {
      clearInterval(timer)
      if (e.isIntersecting) timer = window.setInterval(() => setI((n) => (n + 1) % words.length), INTERVAL)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      clearInterval(timer)
    }
  }, [words.length])

  const chars = Array.from(words[i].padEnd(width, ' '))

  return (
    <div ref={ref} className={s.board}>
      <span className={s.sr} aria-live="polite">
        {words[i]}
      </span>
      {chars.map((c, n) => (
        <span key={`${n}-${c}`} className={s.tile} style={{ animationDelay: `${n * 60}ms` }} aria-hidden="true">
          {c}
        </span>
      ))}
    </div>
  )
}
