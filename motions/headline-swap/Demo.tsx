'use client'

import { useState } from 'react'
import s from './demo.module.css'

// word segments, so Chinese headlines (no spaces) still animate word by word
const segmenter = new Intl.Segmenter(undefined, { granularity: 'word' })

function Line({ text, state }: { text: string; state: 'idle' | 'in' | 'out' | 'hidden' }) {
  let n = 0
  return (
    <p className={s.line} data-state={state} aria-hidden={state === 'out' || undefined}>
      {Array.from(segmenter.segment(text), ({ segment }, k) =>
        segment.trim() ? (
          <span key={k} className={s.word} style={{ '--i': n++ } as React.CSSProperties}>
            {segment}
          </span>
        ) : (
          segment
        ),
      )}
    </p>
  )
}

export default function HeadlineSwap({ labels }: { labels: Record<string, string> }) {
  const tabs = [labels.tabA, labels.tabB]
  const heads = [labels.headA, labels.headB]
  const [view, setView] = useState({ cur: 0, n: 0 })
  const pick = (i: number) => i !== view.cur && setView({ cur: i, n: view.n + 1 })

  return (
    <div className={s.wrap}>
      <div className={s.tabs} style={{ '--cur': view.cur } as React.CSSProperties}>
        {tabs.map((t, i) => (
          <button key={t} type="button" className={s.tab} aria-pressed={i === view.cur} onClick={() => pick(i)}>
            {t}
          </button>
        ))}
      </div>
      <div className={s.stack} aria-live="polite">
        {heads.map((h, i) => (
          <Line
            key={`${i}-${view.n}`}
            text={h}
            state={i === view.cur ? (view.n ? 'in' : 'idle') : view.n ? 'out' : 'hidden'}
          />
        ))}
      </div>
    </div>
  )
}
