'use client'

import { useEffect, useRef, useState } from 'react'
import s from './demo.module.css'

export default function ClipReveal({ labels }: { labels: Record<string, string> }) {
  const ref = useRef<HTMLElement>(null)
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
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [run])

  return (
    <div className={s.wrap}>
      <figure key={run} ref={ref} className={s.figure}>
        <div className={s.clip}>
          <div className={s.scene} role="img" aria-label={labels.caption} />
        </div>
        <figcaption className={s.caption}>{labels.caption}</figcaption>
      </figure>
      <button type="button" className={s.button} onClick={() => setRun(run + 1)}>
        {labels.replay}
      </button>
    </div>
  )
}
