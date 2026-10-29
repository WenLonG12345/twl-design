'use client'

import { useEffect, useRef, useState } from 'react'
import s from './demo.module.css'

export default function SendButton({ labels }: { labels: Record<string, string> }) {
  const [sent, setSent] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => clearTimeout(timer.current), [])

  const send = () => {
    setSent(true)
    timer.current = window.setTimeout(() => setSent(false), 2200)
  }

  return (
    <button type="button" className={s.button} data-state={sent ? 'sent' : 'idle'} disabled={sent} onClick={send}>
      <svg className={s.plane} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 3L3 10.5l7 2.5 2.5 7L21 3z" />
        <path d="M10 13l4.5-4.5" />
      </svg>
      <span className={s.labels} aria-live="polite">
        <span className={s.send}>{labels.send}</span>
        <span className={s.sent}>✓ {labels.sent}</span>
      </span>
    </button>
  )
}
