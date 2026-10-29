'use client'

import s from './demo.module.css'

export default function ScrollZoom({ labels }: { labels: Record<string, string> }) {
  return (
    <div className={s.frame} tabIndex={0}>
      <span className={s.hint}>{labels.hint} ↓</span>
      <figure className={s.figure}>
        <div className={s.scene} role="img" aria-label={labels.caption} />
        <figcaption className={s.caption}>{labels.caption}</figcaption>
      </figure>
    </div>
  )
}
