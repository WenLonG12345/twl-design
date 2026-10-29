'use client'

import gsap from 'gsap'
import s from './demo.module.css'

export default function MagneticButton({ labels }: { labels: Record<string, string> }) {
  const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced()) return
    const button = e.currentTarget.firstElementChild as HTMLElement
    const r = button.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    gsap.to(button, { x: x * 0.35, y: y * 0.35, duration: 0.4, ease: 'power3.out' })
    gsap.to(button.firstElementChild, { x: x * 0.15, y: y * 0.15, duration: 0.4, ease: 'power3.out' })
  }

  const onLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    const button = e.currentTarget.firstElementChild as HTMLElement
    gsap.to([button, button.firstElementChild], { x: 0, y: 0, duration: 0.6, ease: 'expo.out' })
  }

  return (
    <div className={s.zone} onPointerMove={onMove} onPointerLeave={onLeave}>
      <button type="button" className={s.button}>
        <span className={s.label}>{labels.cta}</span>
      </button>
    </div>
  )
}
