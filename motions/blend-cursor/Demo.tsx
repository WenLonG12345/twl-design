'use client'

import { useRef } from 'react'
import s from './demo.module.css'

export default function BlendCursor({ labels }: { labels: Record<string, string> }) {
  const dot = useRef<HTMLSpanElement>(null)

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch' || !dot.current) return
    const r = e.currentTarget.getBoundingClientRect()
    const grow = (e.target as HTMLElement).closest('[data-cursor="grow"]') !== null
    dot.current.style.transform = `translate(${e.clientX - r.left}px, ${e.clientY - r.top}px) translate(-50%, -50%)`
    dot.current.dataset.grow = String(grow)
    dot.current.dataset.on = 'true'
  }

  return (
    <div className={s.area} onPointerMove={onMove} onPointerLeave={() => dot.current && (dot.current.dataset.on = 'false')}>
      <p className={s.text}>{labels.text}</p>
      <a className={s.link} href="#" data-cursor="grow" onClick={(e) => e.preventDefault()}>
        {labels.link} →
      </a>
      <span ref={dot} className={s.cursor} aria-hidden="true">
        <span className={s.lens} />
      </span>
    </div>
  )
}
