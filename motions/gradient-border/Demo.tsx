'use client'

import s from './demo.module.css'

export default function GradientBorder({ labels }: { labels: Record<string, string> }) {
  return (
    <button type="button" className={s.button}>
      {labels.cta}
    </button>
  )
}
