'use client'

import gsap from 'gsap'
import { useLayoutEffect, useRef, useState } from 'react'
import s from './demo.module.css'

const THROW = 110

export default function SwipeStack({ labels }: { labels: Record<string, string> }) {
  // the last element renders on top, so reverse to put the first city on top
  const [order, setOrder] = useState(() => labels.cards.split('|').reverse())
  const stack = useRef<HTMLDivElement>(null)
  const drag = useRef({ x0: 0, x: 0, active: false })

  // Lay the stack out after every reorder: each level behind the top shrinks and drops a little.
  useLayoutEffect(() => {
    const cards = Array.from(stack.current?.children ?? []) as HTMLElement[]
    cards.forEach((card, i) => {
      const level = cards.length - 1 - i
      gsap.to(card, { x: 0, rotation: 0, opacity: 1, scale: 1 - level * 0.05, y: level * 10, duration: 0.5, ease: 'power3.out' })
    })
  }, [order])

  const top = () => stack.current?.lastElementChild as HTMLElement | null

  const fling = (dir: 1 | -1) => {
    const card = top()
    if (!card) return
    const done = () => {
      // park the thrown card invisibly at the centre so it fades in at the back instead of flying back
      gsap.set(card, { x: 0, rotation: 0, opacity: 0 })
      setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)])
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.to(card, { opacity: 0, duration: 0.15, onComplete: done })
      return
    }
    gsap.to(card, { x: dir * 400, rotation: dir * 25, opacity: 0, duration: 0.4, ease: 'power2.in', onComplete: done })
  }

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.target !== top() && !top()?.contains(e.target as Node)) return
    e.currentTarget.setPointerCapture(e.pointerId)
    drag.current = { x0: e.clientX, x: 0, active: true }
  }
  const onMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return
    drag.current.x = e.clientX - drag.current.x0
    gsap.set(top(), { x: drag.current.x, rotation: drag.current.x * 0.08 })
  }
  const onUp = () => {
    if (!drag.current.active) return
    drag.current.active = false
    const { x } = drag.current
    if (Math.abs(x) > THROW) fling(x > 0 ? 1 : -1)
    else gsap.to(top(), { x: 0, rotation: 0, duration: 0.5, ease: 'expo.out' })
  }

  return (
    <div className={s.wrap}>
      <div
        ref={stack}
        className={s.stack}
        tabIndex={0}
        role="group"
        aria-label={labels.hint}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') fling(-1)
          if (e.key === 'ArrowRight') fling(1)
        }}
      >
        {order.map((city, i) => (
          <div key={city} className={s.card} aria-hidden={i !== order.length - 1}>
            <span className={s.n}>{String(labels.cards.split('|').indexOf(city) + 1).padStart(2, '0')}</span>
            <strong className={s.city}>{city}</strong>
          </div>
        ))}
      </div>
      <span className={s.hint}>{labels.hint}</span>
    </div>
  )
}
