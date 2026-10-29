'use client'

import { useId, useState } from 'react'
import s from './demo.module.css'

const ROW = 34

export default function CommandPalette({ labels }: { labels: Record<string, string> }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const id = useId()
  const items = labels.items.split('|').filter((t) => t.toLowerCase().includes(query.toLowerCase()))

  const close = () => {
    setOpen(false)
    setQuery('')
    setActive(0)
  }

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') close()
    if (!items.length) return
    if (e.key === 'ArrowDown') setActive((a) => (a + 1) % items.length)
    if (e.key === 'ArrowUp') setActive((a) => (a - 1 + items.length) % items.length)
    if (e.key === 'Enter') close()
    if (e.key.startsWith('Arrow')) e.preventDefault()
  }

  if (!open)
    return (
      <button type="button" className={s.trigger} onClick={() => setOpen(true)}>
        {labels.open} <kbd className={s.kbd}>⌘K</kbd>
      </button>
    )

  return (
    <div className={s.panel} onKeyDown={onKey}>
      <input
        className={s.input}
        role="combobox"
        aria-expanded="true"
        aria-controls={id}
        aria-activedescendant={items.length ? `${id}-${active}` : undefined}
        placeholder={labels.placeholder}
        value={query}
        autoFocus
        onBlur={(e) => !e.currentTarget.parentElement?.contains(e.relatedTarget) && close()}
        onChange={(e) => {
          setQuery(e.target.value)
          setActive(0)
        }}
      />
      <ul id={id} role="listbox" className={s.list}>
        {items.length > 0 && <li className={s.highlight} style={{ transform: `translateY(${active * ROW}px)` }} aria-hidden="true" />}
        {items.map((t, i) => (
          <li
            key={t}
            id={`${id}-${i}`}
            role="option"
            aria-selected={i === active}
            className={s.option}
            onPointerEnter={() => setActive(i)}
            onPointerDown={(e) => e.preventDefault()}
            onClick={close}
          >
            {t}
          </li>
        ))}
        {!items.length && <li className={s.empty}>{labels.empty}</li>}
      </ul>
    </div>
  )
}
