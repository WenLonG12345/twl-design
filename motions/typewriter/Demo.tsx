'use client'

import { useEffect, useState } from 'react'
import s from './demo.module.css'

export default function Typewriter({ labels }: { labels: Record<string, string> }) {
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(false)
  const [full, setFull] = useState(labels.phrases.split('|')[0])

  useEffect(() => {
    const phrases = labels.phrases.split('|')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let timer: ReturnType<typeof setTimeout>
    let p = 0
    let i = 0
    let deleting = false

    const tick = () => {
      const chars = Array.from(phrases[p])
      setFull(phrases[p])
      if (reduced) {
        setText(phrases[p])
        p = (p + 1) % phrases.length
        timer = setTimeout(tick, 2500)
        return
      }
      if (!deleting && i < chars.length) {
        i++
        setTyping(true)
        timer = setTimeout(tick, 55)
      } else if (!deleting) {
        deleting = true
        setTyping(false)
        timer = setTimeout(tick, 1400)
        return
      } else if (i > 0) {
        i--
        setTyping(true)
        timer = setTimeout(tick, 30)
      } else {
        deleting = false
        p = (p + 1) % phrases.length
        timer = setTimeout(tick, 250)
        return
      }
      setText(chars.slice(0, i).join(''))
    }
    tick()
    return () => clearTimeout(timer)
  }, [labels.phrases])

  return (
    <p className={s.line} aria-label={full}>
      <span aria-hidden="true">{text}</span>
      <span className={typing ? s.caret : `${s.caret} ${s.blink}`} aria-hidden="true" />
    </p>
  )
}
