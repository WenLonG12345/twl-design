'use client'

import { useId, useState } from 'react'
import s from './demo.module.css'

export default function SideDrawer({ labels }: { labels: Record<string, string> }) {
  const [open, setOpen] = useState(false)
  const id = useId()

  return (
    <div className={s.shell} data-open={open || undefined} onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}>
      <nav id={id} className={s.drawer} inert={!open}>
        {[labels.a, labels.b, labels.c, labels.d].map((t, i) => (
          <a key={t} href="#" className={s.link} style={{ '--i': i } as React.CSSProperties} onClick={(e) => e.preventDefault()}>
            {t}
          </a>
        ))}
      </nav>
      <div className={s.page} onClick={() => open && setOpen(false)}>
        <div className={s.bar}>
          <button
            type="button"
            className={s.menu}
            aria-expanded={open}
            aria-controls={id}
            onClick={(e) => {
              e.stopPropagation()
              setOpen(!open)
            }}
          >
            ☰ {labels.menu}
          </button>
          <strong className={s.title}>{labels.title}</strong>
        </div>
        <div className={s.grid}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}
