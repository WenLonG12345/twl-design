'use client'

import s from './demo.module.css'

export default function OutlineFill({ labels }: { labels: Record<string, string> }) {
  return (
    <a href="#" className={s.link} onClick={(e) => e.preventDefault()}>
      <span className={s.sr}>{labels.text}</span>
      <span className={s.word} data-text={labels.text} aria-hidden="true">
        {labels.text}
      </span>
    </a>
  )
}
