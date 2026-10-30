'use client'

import { useEffect, useId, useRef, useState } from 'react'
import s from './demo.module.css'

export default function LinkPreview({ labels }: { labels: Record<string, string> }) {
  const [open, setOpen] = useState(false)
  const timer = useRef(0)
  const id = useId()

  // a short delay before showing, so passing over the link doesn't flash the card
  const show = (delay: number) => {
    clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setOpen(true), delay)
  }
  const hide = () => {
    clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setOpen(false), 120)
  }
  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <p className={s.text}>
      {labels.before}
      <span className={s.anchor} onPointerEnter={() => show(250)} onPointerLeave={hide}>
        <a
          href={labels.url}
          className={s.link}
          target="_blank"
          rel="noreferrer"
          aria-describedby={id}
          onFocus={() => show(0)}
          onBlur={hide}
          onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
        >
          {labels.link}
        </a>
        <span id={id} role="tooltip" className={s.card} data-open={open || undefined}>
          <span className={s.thumb} aria-hidden="true" />
          <span className={s.title}>{labels.title}</span>
          <span className={s.desc}>{labels.desc}</span>
          <span className={s.domain}>{labels.domain}</span>
        </span>
      </span>
      {labels.after}
    </p>
  )
}
