'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import s from './demo.module.css'

export default function RotatingWords({ labels }: { labels: Record<string, string> }) {
  const words = labels.words.split('|')
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState<number>()
  const measure = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2200)
    return () => clearInterval(id)
  }, [words.length])

  useLayoutEffect(() => {
    if (measure.current) setWidth(measure.current.offsetWidth)
  }, [index, labels.words])

  const prev = (index - 1 + words.length) % words.length

  return (
    <p className={s.line}>
      <span aria-hidden="true">{labels.lead} </span>
      <span className={s.slot} style={{ width }} aria-hidden="true">
        {words.map((w, i) => (
          <span key={w} className={s.word} data-state={i === index ? 'in' : i === prev ? 'out' : 'wait'}>
            {w}
          </span>
        ))}
      </span>
      <span ref={measure} className={s.measure} aria-hidden="true">
        {words[index]}
      </span>
      <span className={s.sr} aria-live="polite">
        {labels.lead} {words[index]}
      </span>
    </p>
  )
}
