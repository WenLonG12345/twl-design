'use client'

import s from './demo.module.css'

const D = 'M20 150 C 70 150, 60 60, 120 70 S 170 150, 220 110 S 270 30, 300 40'

export default function ScrollDraw({ labels }: { labels: Record<string, string> }) {
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const p = el.scrollTop / (el.scrollHeight - el.clientHeight || 1)
    el.style.setProperty('--p', String(p))
    el.toggleAttribute('data-done', p > 0.99)
  }

  return (
    <div className={s.frame} tabIndex={0} onScroll={onScroll}>
      <div className={s.section}>
        <div className={s.sticky}>
          <svg viewBox="0 0 320 180" className={s.svg} aria-hidden="true">
            <path d={D} className={s.track} />
            <path d={D} className={s.path} pathLength={1} />
            <circle cx="20" cy="150" r="5" className={s.startDot} />
            <circle cx="300" cy="40" r="6" className={s.endDot} />
            <text x="20" y="172" className={s.text}>
              {labels.start}
            </text>
            <text x="300" y="22" className={s.text} textAnchor="end">
              {labels.end}
            </text>
          </svg>
          <span className={s.label}>{labels.hint} ↓</span>
        </div>
      </div>
    </div>
  )
}
