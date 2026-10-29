'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import s from './demo.module.css'

gsap.registerPlugin(Flip)

const TILES = ['a', 'b', 'c', 'a', 'c', 'b', 'a', 'b'] as const

export default function FilterGrid({ labels }: { labels: Record<string, string> }) {
  const grid = useRef<HTMLDivElement>(null)
  const flipState = useRef<Flip.FlipState | null>(null)
  const [filter, setFilter] = useState<'all' | 'a' | 'b' | 'c'>('all')

  const choose = (f: typeof filter) => {
    if (f === filter) return
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && grid.current)
      flipState.current = Flip.getState(grid.current.children)
    setFilter(f)
  }

  useLayoutEffect(() => {
    const state = flipState.current
    if (!state) return
    flipState.current = null
    const tween = Flip.from(state, {
      duration: 0.5,
      ease: 'power2.inOut',
      scale: true,
      absolute: true,
      onEnter: (els) => gsap.fromTo(els, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.4 }),
      onLeave: (els) => gsap.to(els, { opacity: 0, scale: 0.6, duration: 0.3 }),
    })
    return () => void tween.progress(1).kill()
  }, [filter])

  return (
    <div className={s.wrap}>
      <div className={s.filters} role="group" aria-label={labels.filter}>
        {(['all', 'a', 'b', 'c'] as const).map((f) => (
          <button key={f} type="button" className={s.chip} aria-pressed={filter === f} onClick={() => choose(f)}>
            {labels[f]}
          </button>
        ))}
      </div>
      <div ref={grid} className={s.grid}>
        {TILES.map((t, i) => (
          <div key={i} className={s.tile} data-type={t} hidden={filter !== 'all' && filter !== t}>
            {labels[t]}
          </div>
        ))}
      </div>
    </div>
  )
}
