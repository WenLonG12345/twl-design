'use client'

import { useState } from 'react'
import s from './demo.module.css'

export default function HamburgerMorph({ labels }: { labels: Record<string, string> }) {
  const [open, setOpen] = useState(false)

  return (
    <button
      type="button"
      className={s.button}
      aria-expanded={open}
      aria-label={open ? labels.close : labels.open}
      onClick={() => setOpen(!open)}
    >
      <span className={s.bar} />
      <span className={s.bar} />
      <span className={s.bar} />
    </button>
  )
}
