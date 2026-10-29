'use client'

import { useRef } from 'react'
import s from './demo.module.css'

export default function HorizontalScroll({ labels }: { labels: Record<string, string> }) {
  const track = useRef<HTMLDivElement>(null)
  const panels = labels.panels.split('|')

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const t = track.current
    if (!t) return
    const p = Math.min(Math.max(el.scrollTop / (el.scrollHeight - el.clientHeight || 1), 0), 1)
    t.style.setProperty('--x', `${-p * (t.scrollWidth - el.clientWidth)}px`)
  }

  return (
    <div className={s.frame} tabIndex={0} onScroll={onScroll} style={{ '--n': panels.length } as React.CSSProperties}>
      <div className={s.section}>
        <div className={s.sticky}>
          <span className={s.label}>{labels.hint} ↓</span>
          <div ref={track} className={s.track}>
            {panels.map((p, i) => (
              <div key={p} className={s.panel}>
                <span className={s.n}>{String(i + 1).padStart(2, '0')}</span>
                <strong className={s.name}>{p}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
