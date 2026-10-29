'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import s from './demo.module.css'

gsap.registerPlugin(SplitText)

export default function SplitRise({ labels }: { labels: Record<string, string> }) {
  const heading = useRef<HTMLHeadingElement>(null)
  const tween = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const el = heading.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let ctx: gsap.Context | undefined
    let io: IntersectionObserver | undefined
    let cancelled = false
    document.fonts.ready.then(() => {
      if (cancelled) return
      ctx = gsap.context(() => {
        SplitText.create(el, {
          type: 'lines',
          mask: 'lines',
          autoSplit: true,
          onSplit: (self) => {
            tween.current = gsap.from(self.lines, { yPercent: 110, duration: 0.9, ease: 'power4.out', stagger: 0.12, paused: true })
            return tween.current
          },
        })
      })
      io = new IntersectionObserver(
        ([e]) => {
          if (!e.isIntersecting) return
          tween.current?.play()
          io?.disconnect()
        },
        { threshold: 0.5 },
      )
      io.observe(el)
    })
    return () => {
      cancelled = true
      io?.disconnect()
      ctx?.revert()
    }
  }, [labels.text])

  return (
    <div className={s.wrap}>
      <h3 ref={heading} className={s.heading}>
        {labels.text}
      </h3>
      <button type="button" className={s.replay} onClick={() => tween.current?.restart()}>
        {labels.replay}
      </button>
    </div>
  )
}
