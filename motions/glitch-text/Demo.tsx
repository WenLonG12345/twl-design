'use client'

import s from './demo.module.css'

export default function GlitchText({ labels }: { labels: Record<string, string> }) {
  return (
    <span className={s.wrap} tabIndex={0}>
      <span className={s.sr}>{labels.text}</span>
      <span className={s.glitch} data-text={labels.text} aria-hidden="true">
        {labels.text}
      </span>
    </span>
  )
}
