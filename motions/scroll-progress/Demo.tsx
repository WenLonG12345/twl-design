'use client'

import { useRef } from 'react'
import s from './demo.module.css'

export default function ScrollProgress({ labels }: { labels: Record<string, string> }) {
  const pct = useRef<HTMLSpanElement>(null)

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const p = el.scrollTop / (el.scrollHeight - el.clientHeight || 1)
    el.style.setProperty('--p', String(p))
    if (pct.current) pct.current.textContent = `${Math.round(p * 100)}% ${labels.read}`
  }

  return (
    <div className={s.frame} tabIndex={0} onScroll={onScroll}>
      <div className={s.top}>
        <span className={s.bar} />
        <span ref={pct} className={s.pct}>
          0% {labels.read}
        </span>
      </div>
      <article className={s.article}>
        <h3 className={s.title}>{labels.title}</h3>
        {Array.from({ length: 14 }, (_, i) => (
          <span key={i} className={s.line} style={{ width: `${[100, 94, 98, 70][i % 4]}%` }} />
        ))}
      </article>
    </div>
  )
}
