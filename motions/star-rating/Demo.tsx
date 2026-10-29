'use client'

import { useId } from 'react'
import { fmt } from '@/lib/i18n'
import s from './demo.module.css'

export default function StarRating({ labels }: { labels: Record<string, string> }) {
  const name = useId()

  return (
    <fieldset className={s.field}>
      <legend className={s.legend}>{labels.legend}</legend>
      <div className={s.stars}>
        {[5, 4, 3, 2, 1].map((n) => (
          <label key={n} className={s.star}>
            <input type="radio" name={name} value={n} className={s.input} aria-label={fmt(labels.star, n)} />
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" />
            </svg>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
