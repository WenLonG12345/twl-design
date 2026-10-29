'use client'

import { useId } from 'react'
import s from './demo.module.css'

const ICONS = {
  bold: <path d="M7 5h6a3.5 3.5 0 0 1 0 7H7zM7 12h7a3.5 3.5 0 0 1 0 7H7z" />,
  italic: <path d="M14 5h-4M14 19h-4M13.5 5l-3 14" />,
  link: <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />,
}

export default function TooltipPop({ labels }: { labels: Record<string, string> }) {
  const id = useId()

  return (
    <div className={s.bar} role="toolbar" aria-label={labels.toolbar}>
      {(Object.keys(ICONS) as (keyof typeof ICONS)[]).map((k) => (
        <button key={k} type="button" className={s.btn} aria-label={labels[k]} aria-describedby={`${id}-${k}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {ICONS[k]}
          </svg>
          <span id={`${id}-${k}`} role="tooltip" className={s.tip}>
            {labels[k]}
          </span>
        </button>
      ))}
    </div>
  )
}
