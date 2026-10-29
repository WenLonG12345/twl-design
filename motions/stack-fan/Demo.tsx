'use client'

import s from './demo.module.css'

export default function StackFan({ labels }: { labels: Record<string, string> }) {
  return (
    <div className={s.stack} tabIndex={0}>
      {[labels.a, labels.b, labels.c].map((t) => (
        <div key={t} className={s.card}>
          {t}
        </div>
      ))}
    </div>
  )
}
