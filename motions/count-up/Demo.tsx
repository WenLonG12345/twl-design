'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import s from './demo.module.css'

export default function CountUp({ labels }: { labels: Record<string, string> }) {
  const num = useRef<HTMLSpanElement>(null)
  const tween = useRef<gsap.core.Tween | null>(null)
  const target = Number(labels.value)

  useEffect(() => {
    const el = num.current
    if (!el) return
    const show = (n: number) => (el.textContent = Math.round(n).toLocaleString())
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return void show(target)
    const state = { n: 0 }
    show(0)
    const ctx = gsap.context(() => {
      tween.current = gsap.to(state, {
        n: target,
        duration: 1.6,
        ease: 'power3.out',
        paused: true,
        onUpdate: () => show(state.n),
      })
    })
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        tween.current?.play()
        io.disconnect()
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      ctx.revert()
    }
  }, [target])

  return (
    <div className={s.wrap}>
      <span ref={num} className={s.num} aria-label={target.toLocaleString()}>
        {target.toLocaleString()}
      </span>
      <span className={s.caption}>{labels.caption}</span>
      <button type="button" className={s.replay} onClick={() => tween.current?.restart()}>
        {labels.replay}
      </button>
    </div>
  )
}
