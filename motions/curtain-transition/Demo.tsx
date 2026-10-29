'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import s from './demo.module.css'

export default function CurtainTransition({ labels }: { labels: Record<string, string> }) {
  const root = useRef<HTMLDivElement>(null)
  const ctx = useRef<gsap.Context | null>(null)
  const busy = useRef(false)
  const [page, setPage] = useState<'a' | 'b'>('a')
  const next = page === 'a' ? 'b' : 'a'

  useEffect(() => {
    ctx.current = gsap.context(() => {}, root)
    return () => ctx.current?.revert()
  }, [])

  const go = () => {
    if (busy.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setPage(next)
    busy.current = true
    ctx.current?.add(() => {
      const panels = [`.${s.accent}`, `.${s.dark}`]
      gsap
        .timeline({ onComplete: () => void (busy.current = false) })
        .set(panels, { transformOrigin: 'left center' })
        .to(panels, { scaleX: 1, duration: 0.45, ease: 'power3.inOut', stagger: 0.08 })
        .call(() => setPage(next))
        .set(panels, { transformOrigin: 'right center' })
        .to([...panels].reverse(), { scaleX: 0, duration: 0.45, ease: 'power3.inOut', stagger: 0.08 }, '+=0.05')
    })
  }

  return (
    <div ref={root} className={s.view}>
      <div className={s.page} data-page={page}>
        <span className={s.kicker}>{page === 'a' ? '01' : '02'}</span>
        <h3 className={s.heading}>{labels[page]}</h3>
        <button type="button" className={s.go} onClick={go}>
          {labels.go.replace('{page}', labels[next])} →
        </button>
      </div>
      <span className={`${s.panel} ${s.accent}`} aria-hidden="true" />
      <span className={`${s.panel} ${s.dark}`} aria-hidden="true" />
    </div>
  )
}
