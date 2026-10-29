'use client'

import { useState } from 'react'
import s from './demo.module.css'

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Odometer({ labels }: { labels: Record<string, string> }) {
  const [value, setValue] = useState(128406)
  const text = value.toLocaleString('en-US')
  let pos = 0

  return (
    <div className={s.wrap}>
      <span className={s.caption}>{labels.caption}</span>
      <span className={s.number} aria-label={text} aria-live="polite">
        {Array.from(text).map((ch, i) =>
          /\d/.test(ch) ? (
            <span key={i} className={s.window} aria-hidden="true">
              <span className={s.strip} style={{ transform: `translateY(${-Number(ch)}em)`, transitionDelay: `${pos++ * 60}ms` }}>
                {DIGITS.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </span>
            </span>
          ) : (
            <span key={i} aria-hidden="true">
              {ch}
            </span>
          ),
        )}
      </span>
      <button type="button" className={s.button} onClick={() => setValue(100000 + Math.floor(Math.random() * 900000))}>
        {labels.shuffle}
      </button>
    </div>
  )
}
