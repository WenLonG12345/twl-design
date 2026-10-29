'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import s from './demo.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollTextReveal({ labels }: { labels: Record<string, string> }) {
  const frame = useRef<HTMLDivElement>(null)
  const text = useRef<HTMLParagraphElement>(null)
  const spaced = labels.text.includes(' ')
  const words = spaced ? labels.text.split(' ') : Array.from(labels.text)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${s.word}`,
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: { trigger: text.current, scroller: frame.current, start: 'top 80%', end: 'bottom 45%', scrub: true },
        },
      )
    }, frame)
    return () => ctx.revert()
  }, [labels.text])

  return (
    <div ref={frame} className={s.frame} tabIndex={0}>
      <span className={s.hint}>{labels.hint} ↓</span>
      <p ref={text} className={s.text} aria-label={labels.text}>
        {words.map((w, i) => (
          <span key={i} className={s.word} aria-hidden="true">
            {w}
            {spaced && i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </p>
    </div>
  )
}
