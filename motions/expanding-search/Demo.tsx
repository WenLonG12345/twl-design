'use client'

import { useId, useRef, useState } from 'react'
import s from './demo.module.css'

export default function ExpandingSearch({ labels }: { labels: Record<string, string> }) {
  const [open, setOpen] = useState(false)
  const input = useRef<HTMLInputElement>(null)
  const button = useRef<HTMLButtonElement>(null)
  const id = useId()

  const close = (refocus: boolean) => {
    setOpen(false)
    if (refocus) button.current?.focus()
  }

  return (
    <div className={s.search} data-open={open || undefined}>
      <button
        ref={button}
        type="button"
        className={s.icon}
        aria-label={labels.open}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => {
          setOpen(true)
          input.current?.focus()
        }}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16l4 4" />
        </svg>
      </button>
      <input
        ref={input}
        id={id}
        type="search"
        className={s.input}
        placeholder={labels.placeholder}
        tabIndex={open ? 0 : -1}
        onBlur={(e) => !e.currentTarget.value && close(false)}
        onKeyDown={(e) => e.key === 'Escape' && close(true)}
      />
    </div>
  )
}
