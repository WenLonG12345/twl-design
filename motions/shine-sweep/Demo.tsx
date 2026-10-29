'use client'

import s from './demo.module.css'

export default function ShineSweep({ labels }: { labels: Record<string, string> }) {
  return (
    <button type="button" className={s.button}>
      {labels.cta}
    </button>
  )
}
