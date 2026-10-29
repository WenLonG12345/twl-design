'use client'

import { useState } from 'react'
import s from './demo.module.css'

export default function LikeBurst({ labels }: { labels: Record<string, string> }) {
  const [liked, setLiked] = useState(false)
  const [burst, setBurst] = useState(0)

  const toggle = () => {
    if (!liked) setBurst(burst + 1)
    setLiked(!liked)
  }

  return (
    <button type="button" className={s.button} aria-pressed={liked} aria-label={liked ? labels.liked : labels.like} onClick={toggle}>
      <span className={s.icon}>
        <svg key={burst} className={s.heart} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.7c0 5.6-7.5 10.2-7.5 10.2Z" />
        </svg>
        {liked && (
          <span key={`b${burst}`} className={s.burst} aria-hidden="true">
            {Array.from({ length: 8 }, (_, i) => (
              <i key={i} style={{ '--i': i } as React.CSSProperties} />
            ))}
          </span>
        )}
      </span>
      <span className={s.count}>{liked ? 129 : 128}</span>
    </button>
  )
}
