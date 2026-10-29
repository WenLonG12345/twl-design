'use client'

import s from './demo.module.css'

export default function FocusDim({ labels }: { labels: Record<string, string> }) {
  const plans = [
    { name: labels.a, price: 0 },
    { name: labels.b, price: 12 },
    { name: labels.c, price: 29 },
  ]

  return (
    <div className={s.group}>
      {plans.map((p) => (
        <a key={p.name} href="#" className={s.card} onClick={(e) => e.preventDefault()}>
          <span className={s.name}>{p.name}</span>
          <span className={s.price}>${p.price}</span>
          <span className={s.per}>{labels.price}</span>
        </a>
      ))}
    </div>
  )
}
