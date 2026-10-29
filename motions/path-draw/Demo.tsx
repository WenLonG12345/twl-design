'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import s from './demo.module.css'

const ROUTE = 'M20 120 C 60 120, 60 40, 110 40 S 160 110, 200 80 S 240 30, 260 30'

export default function PathDraw({ labels }: { labels: Record<string, string> }) {
  const [run, setRun] = useState(0)
  const svg = useRef<SVGSVGElement>(null)

  useLayoutEffect(() => {
    svg.current?.querySelectorAll('path').forEach((p) => p.style.setProperty('--len', String(Math.ceil(p.getTotalLength()))))
  }, [run])

  return (
    <div className={s.wrap}>
      <svg key={run} ref={svg} className={s.svg} viewBox="0 0 280 150" role="img" aria-label={labels.label}>
        <path className={s.grid} style={{ '--d': 0 } as React.CSSProperties} d="M20 135 H260" />
        <path className={s.house} style={{ '--d': 1 } as React.CSSProperties} d="M8 120 V100 L20 90 L32 100 V120 Z" />
        <path className={s.studio} style={{ '--d': 2 } as React.CSSProperties} d="M248 30 V10 H272 V30 Z M254 18 H266" />
        <path className={s.route} style={{ '--d': 3 } as React.CSSProperties} d={ROUTE} />
        <circle className={s.dot} r="5" style={{ offsetPath: `path("${ROUTE}")` }} />
      </svg>
      <button type="button" className={s.button} onClick={() => setRun(run + 1)}>
        {labels.replay}
      </button>
    </div>
  )
}
