'use client'

import { useEffect, useRef, useState } from 'react'
import s from './demo.module.css'

export default function ToastStack({ labels }: { labels: Record<string, string> }) {
  const [toasts, setToasts] = useState<number[]>([])
  const nextId = useRef(0)
  const timers = useRef(new Map<number, number>())

  useEffect(() => {
    const map = timers.current
    return () => map.forEach(clearTimeout)
  }, [])

  const remove = (id: number) => {
    clearTimeout(timers.current.get(id))
    timers.current.delete(id)
    setToasts((t) => t.filter((x) => x !== id))
  }

  const add = () => {
    const id = nextId.current++
    setToasts((t) => [...t, id])
    timers.current.set(id, window.setTimeout(() => remove(id), 3000))
  }

  const visible = toasts.slice(-3)

  return (
    <div className={s.wrap}>
      <button type="button" className={s.trigger} onClick={add}>
        {labels.trigger}
      </button>
      <div className={s.area} role="status">
        {visible.map((id, n) => (
          <div key={id} className={s.toast} style={{ '--i': visible.length - 1 - n } as React.CSSProperties}>
            <span className={s.dot} aria-hidden="true" />
            <span className={s.msg}>{labels.msg}</span>
            <button type="button" className={s.close} aria-label={labels.close} onClick={() => remove(id)}>
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
