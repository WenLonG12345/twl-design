'use client'

import { useId } from 'react'
import s from './demo.module.css'

export default function FloatingLabel({ labels }: { labels: Record<string, string> }) {
  const id = useId()
  return (
    <div className={s.field}>
      <input id={id} className={s.input} type="email" placeholder=" " autoComplete="off" />
      <label htmlFor={id} className={s.label}>
        {labels.label}
      </label>
    </div>
  )
}
