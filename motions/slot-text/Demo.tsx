'use client'

import { useState } from 'react'
import s from './demo.module.css'

const SPINS = 10

export default function SlotText({ labels }: { labels: Record<string, string> }) {
  const words = labels.words.split('|')
  const [state, setState] = useState(() => ({ i: 0, run: 0, strips: Array.from(words[0], (c) => [c]) }))

  // each reel gets: the glyph it shows now, random glyphs, then the target; later reels spin longer
  const spin = () =>
    setState(({ i, run, strips }) => {
      const next = (i + 1) % words.length
      const pool = Array.from(new Set(Array.from(words.join(''))))
      const pick = () => pool[Math.floor(Math.random() * pool.length)]
      return {
        i: next,
        run: run + 1,
        strips: Array.from(words[next], (c, col) => [
          strips[col]?.at(-1) ?? pick(),
          ...Array.from({ length: SPINS + col * 3 }, pick),
          c,
        ]),
      }
    })

  return (
    <div className={s.wrap}>
      <span className={s.sr} aria-live="polite">
        {words[state.i]}
      </span>
      <div className={s.machine} aria-hidden="true">
        {state.strips.map((strip, col) => (
          <span key={col} className={s.reel}>
            <span
              key={state.run}
              className={s.strip}
              data-spin={state.run > 0 || undefined}
              style={{ '--n': strip.length - 1, '--col': col } as React.CSSProperties}
            >
              {strip.map((ch, n) => (
                <span key={n} className={s.cell}>
                  {ch}
                </span>
              ))}
            </span>
          </span>
        ))}
      </div>
      <button type="button" className={s.button} onClick={spin}>
        {labels.spin}
      </button>
    </div>
  )
}
