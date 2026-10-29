'use client'

import s from './demo.module.css'

export default function ParallaxLayers({ labels }: { labels: Record<string, string> }) {
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    el.style.setProperty('--p', String(el.scrollTop / (el.scrollHeight - el.clientHeight || 1)))
  }

  return (
    <div className={s.frame} tabIndex={0} onScroll={onScroll}>
      <div className={s.section}>
        <div className={s.scene}>
          <span className={s.sun} />
          <span className={s.far} />
          <p className={s.title}>{labels.title}</p>
          <span className={s.near} />
          <span className={s.label}>{labels.hint} ↓</span>
        </div>
      </div>
    </div>
  )
}
