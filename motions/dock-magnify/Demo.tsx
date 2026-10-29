'use client'

import { useRef } from 'react'
import s from './demo.module.css'

const REACH = 110

export default function DockMagnify({ labels }: { labels: Record<string, string> }) {
  const dock = useRef<HTMLDivElement>(null)
  const items = labels.items.split('|')

  const onMove = (e: React.PointerEvent) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    for (const el of Array.from(dock.current?.children ?? []) as HTMLElement[]) {
      const r = el.getBoundingClientRect()
      const d = Math.abs(e.clientX - (r.left + r.width / 2))
      el.style.setProperty('--s', String(1 + 0.7 * Math.max(0, 1 - d / REACH)))
    }
  }
  const onLeave = () => {
    for (const el of Array.from(dock.current?.children ?? []) as HTMLElement[]) el.style.setProperty('--s', '1')
  }

  return (
    <div ref={dock} className={s.dock} role="toolbar" aria-label={labels.dock} onPointerMove={onMove} onPointerLeave={onLeave}>
      {items.map((name, i) => (
        <button key={name} type="button" className={s.icon} aria-label={name} style={{ '--h': i * 55 } as React.CSSProperties}>
          <span className={s.tip} aria-hidden="true">
            {name}
          </span>
          {Array.from(name)[0]}
        </button>
      ))}
    </div>
  )
}
