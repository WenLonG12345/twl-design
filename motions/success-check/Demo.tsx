'use client'

import { useState } from 'react'
import s from './demo.module.css'

export default function SuccessCheck({ labels }: { labels: Record<string, string> }) {
  const [run, setRun] = useState(0)

  return (
    <div className={s.wrap}>
      <svg key={run} className={s.badge} viewBox="0 0 64 64" aria-hidden="true">
        <circle className={s.disc} cx="32" cy="32" r="26" />
        <circle className={s.ring} cx="32" cy="32" r="26" />
        <path className={s.check} d="M21 33l7.5 7.5L44 25" />
      </svg>
      <p className={s.caption}>{labels.caption}</p>
      <button type="button" className={s.replay} onClick={() => setRun((n) => n + 1)}>
        {labels.replay}
      </button>
    </div>
  )
}
