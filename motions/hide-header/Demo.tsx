'use client'

import { useRef } from 'react'
import s from './demo.module.css'

export default function HideHeader({ labels }: { labels: Record<string, string> }) {
  const header = useRef<HTMLElement>(null)
  const last = useRef(0)

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const y = e.currentTarget.scrollTop
    const dy = y - last.current
    if (Math.abs(dy) < 4) return
    header.current?.toggleAttribute('data-hidden', dy > 0 && y > 48)
    last.current = y
  }

  return (
    <div className={s.frame} tabIndex={0} onScroll={onScroll}>
      <header ref={header} className={s.header}>
        <span className={s.logo} aria-hidden="true" />
        <strong className={s.brand}>{labels.brand}</strong>
        <span className={s.menu} aria-hidden="true" />
      </header>
      <span className={s.hint}>{labels.hint}</span>
      <div className={s.feed}>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className={s.post}>
            <span className={s.thumb} />
            <span className={s.lines}>
              <span />
              <span />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
