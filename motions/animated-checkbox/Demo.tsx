'use client'

import s from './demo.module.css'

export default function AnimatedCheckbox({ labels }: { labels: Record<string, string> }) {
  return (
    <ul className={s.list}>
      {[labels.a, labels.b, labels.c].map((t, i) => (
        <li key={t}>
          <label className={s.row}>
            <input type="checkbox" className={s.input} defaultChecked={i === 0} />
            <span className={s.box} aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M6 12.5l4 4 8-9" />
              </svg>
            </span>
            <span className={s.text}>{t}</span>
          </label>
        </li>
      ))}
    </ul>
  )
}
