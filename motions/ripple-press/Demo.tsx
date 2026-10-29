'use client'

import s from './demo.module.css'

export default function RipplePress({ labels }: { labels: Record<string, string> }) {
  const onDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const dot = document.createElement('span')
    dot.className = s.ripple
    dot.style.left = `${e.clientX - r.left}px`
    dot.style.top = `${e.clientY - r.top}px`
    dot.addEventListener('animationend', () => dot.remove())
    e.currentTarget.appendChild(dot)
  }

  return (
    <button type="button" className={s.button} onPointerDown={onDown}>
      {labels.cta}
    </button>
  )
}
