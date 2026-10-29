'use client'

import { useEffect, useRef, useState } from 'react'
import s from './demo.module.css'

const DATA = [42, 58, 51, 73, 96, 64, 38]

export default function BarChartGrow({ labels }: { labels: Record<string, string> }) {
  const days = labels.days.split('|')
  const max = Math.max(...DATA)
  const ref = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        el.dataset.in = ''
        io.disconnect()
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [run])

  return (
    <div className={s.wrap}>
      <div className={s.head}>
        <span className={s.title}>{labels.title}</span>
        <button type="button" className={s.button} onClick={() => setRun(run + 1)}>
          {labels.replay}
        </button>
      </div>
      <div key={run} ref={ref} className={s.chart} role="list">
        {DATA.map((v, i) => (
          <div key={days[i]} className={s.col} role="listitem" aria-label={`${days[i]}: ${v}`} style={{ '--i': i } as React.CSSProperties}>
            <span className={s.value} aria-hidden="true">
              {v}
            </span>
            <span className={s.bar} data-max={v === max || undefined} style={{ height: `calc((100% - 34px) * ${v / max})` }} />
            <span className={s.day} aria-hidden="true">
              {days[i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
