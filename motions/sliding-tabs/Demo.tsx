'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import s from './demo.module.css'

export default function SlidingTabs({ labels }: { labels: Record<string, string> }) {
  const tabs = labels.tabs.split('|')
  const [active, setActive] = useState(0)
  const list = useRef<HTMLDivElement>(null)
  const indicator = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const place = () => {
      const tab = list.current?.children[active + 1] as HTMLElement | undefined
      if (!tab || !indicator.current) return
      indicator.current.style.width = `${tab.offsetWidth}px`
      indicator.current.style.transform = `translateX(${tab.offsetLeft}px)`
    }
    place()
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [active, labels.tabs])

  const onKey = (e: React.KeyboardEvent) => {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!step) return
    const next = (active + step + tabs.length) % tabs.length
    setActive(next)
    ;(list.current?.children[next + 1] as HTMLElement | undefined)?.focus()
  }

  return (
    <div ref={list} className={s.list} role="tablist" onKeyDown={onKey}>
      <span ref={indicator} className={s.indicator} aria-hidden="true" />
      {tabs.map((t, i) => (
        <button
          key={t}
          type="button"
          role="tab"
          aria-selected={i === active}
          tabIndex={i === active ? 0 : -1}
          className={s.tab}
          onClick={() => setActive(i)}
        >
          {t}
        </button>
      ))}
    </div>
  )
}
