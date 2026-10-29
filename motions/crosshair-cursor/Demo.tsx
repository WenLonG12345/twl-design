'use client'

import { useRef } from 'react'
import s from './demo.module.css'

export default function CrosshairCursor({ labels }: { labels: Record<string, string> }) {
  const area = useRef<HTMLDivElement>(null)
  const h = useRef<HTMLSpanElement>(null)
  const v = useRef<HTMLSpanElement>(null)
  const tag = useRef<HTMLSpanElement>(null)
  const raf = useRef(0)

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = Math.round(e.clientX - r.left)
    const y = Math.round(e.clientY - r.top)
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      h.current!.style.translate = `0 ${y}px`
      v.current!.style.translate = `${x}px 0`
      const t = tag.current!
      const dx = x > r.width - 80 ? -t.offsetWidth - 8 : 8
      const dy = y > r.height - 30 ? -t.offsetHeight - 8 : 8
      t.style.translate = `${x + dx}px ${y + dy}px`
      t.textContent = `${x}, ${y}`
    })
  }

  return (
    <div
      ref={area}
      className={s.area}
      onPointerMove={onMove}
      onPointerEnter={() => area.current?.setAttribute('data-on', '')}
      onPointerLeave={() => area.current?.removeAttribute('data-on')}
    >
      <span className={s.hint}>{labels.hint}</span>
      <span ref={h} className={s.h} aria-hidden="true" />
      <span ref={v} className={s.v} aria-hidden="true" />
      <span ref={tag} className={s.tag} aria-hidden="true" />
    </div>
  )
}
