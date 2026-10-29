'use client'

import s from './demo.module.css'

export default function GradientDrift({ labels }: { labels: Record<string, string> }) {
  return (
    <div className={s.field}>
      <span className={`${s.blob} ${s.a}`} aria-hidden="true" />
      <span className={`${s.blob} ${s.b}`} aria-hidden="true" />
      <span className={`${s.blob} ${s.c}`} aria-hidden="true" />
      <p className={s.text}>{labels.text}</p>
    </div>
  )
}
