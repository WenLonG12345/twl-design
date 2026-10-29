'use client'

import { useEffect, useId, useRef, useState } from 'react'
import s from './demo.module.css'

export default function BottomSheet({ labels }: { labels: Record<string, string> }) {
  const [open, setOpen] = useState(false)
  const sheet = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const titleId = useId()

  useEffect(() => {
    if (open) sheet.current?.focus()
  }, [open])

  const close = () => {
    setOpen(false)
    trigger.current?.focus()
  }

  return (
    <div className={s.screen} data-open={open || undefined} onKeyDown={(e) => e.key === 'Escape' && open && close()}>
      <button ref={trigger} type="button" className={s.pill} onClick={() => setOpen(true)}>
        {labels.open}
      </button>
      <div className={s.scrim} onClick={close} aria-hidden="true" />
      <div
        ref={sheet}
        className={s.sheet}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        inert={!open}
      >
        <span className={s.handle} aria-hidden="true" />
        <p id={titleId} className={s.title}>
          {labels.title}
        </p>
        {[labels.a, labels.b, labels.c].map((t) => (
          <button key={t} type="button" className={s.action} onClick={close}>
            {t}
          </button>
        ))}
      </div>
    </div>
  )
}
