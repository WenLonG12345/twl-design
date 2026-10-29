'use client'

import { useEffect, useRef, useState } from 'react'
import s from './demo.module.css'

export default function CopyFeedback({ labels }: { labels: Record<string, string> }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(labels.code)
    } catch {
      // Clipboard can be blocked (iframe, permissions); still show the feedback for the demo.
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className={s.snippet}>
      <code className={s.code}>{labels.code}</code>
      <button type="button" className={s.button} data-copied={copied || undefined} onClick={copy}>
        <span className={s.icons} aria-hidden="true">
          <svg className={s.copyIcon} viewBox="0 0 24 24">
            <rect x="8" y="8" width="12" height="12" rx="2" />
            <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
          </svg>
          <svg className={s.checkIcon} viewBox="0 0 24 24">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </span>
        <span aria-live="polite">{copied ? labels.copied : labels.copy}</span>
      </button>
    </div>
  )
}
