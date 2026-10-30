'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import s from './demo.module.css'

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

// a random point on a ring around the letter, with a spin
const scatter = () => {
  const a = Math.random() * Math.PI * 2
  const d = 50 + Math.random() * 70
  return `translate(${Math.cos(a) * d}px, ${Math.sin(a) * d}px) rotate(${Math.random() * 200 - 100}deg) scale(0.5)`
}

export default function WordBurst({ labels }: { labels: Record<string, string> }) {
  const words = labels.words.split('|')
  const [i, setI] = useState(0)
  const word = useRef<HTMLSpanElement>(null)
  const busy = useRef(false)
  const mounted = useRef(false)

  const letters = () => Array.from(word.current!.children) as HTMLElement[]
  const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // the new word's letters fly in from scattered points
  useLayoutEffect(() => {
    if (!mounted.current) return void (mounted.current = true)
    const still = reduced()
    letters().forEach((el, n) =>
      el.animate(still ? [{ opacity: 0 }, { opacity: 1 }] : [{ transform: scatter(), opacity: 0 }, { transform: 'none', opacity: 1 }], {
        duration: still ? 200 : 620,
        delay: n * 30,
        easing: EASE,
        fill: 'backwards',
      }),
    )
  }, [i])

  const burst = async () => {
    if (busy.current) return
    busy.current = true
    const still = reduced()
    await Promise.all(
      letters().map(
        (el, n) =>
          el.animate(still ? [{ opacity: 1 }, { opacity: 0 }] : [{ transform: 'none', opacity: 1 }, { transform: scatter(), opacity: 0 }], {
            duration: still ? 150 : 460,
            delay: n * 12,
            easing: EASE,
            fill: 'forwards',
          }).finished,
      ),
    )
    setI((n) => (n + 1) % words.length)
    busy.current = false
  }

  return (
    <div className={s.wrap}>
      <p className={s.line}>
        <span className={s.sr} aria-live="polite">
          {words[i]}
        </span>
        {/* keyed by index so every word gets fresh letters without the old exit fill */}
        <span key={i} ref={word} className={s.word} aria-hidden="true">
          {Array.from(words[i], (ch, n) => (
            <span key={n} className={s.ch}>
              {ch}
            </span>
          ))}
        </span>
      </p>
      <button type="button" className={s.button} onClick={burst}>
        {labels.burst}
      </button>
    </div>
  )
}
