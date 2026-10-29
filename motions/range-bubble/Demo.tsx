'use client'

import { useId, useRef, useState } from 'react'
import s from './demo.module.css'

export default function RangeBubble({ labels }: { labels: Record<string, string> }) {
  const [value, setValue] = useState(64)
  const [dragging, setDragging] = useState(false)
  const [tilt, setTilt] = useState(0)
  const settle = useRef<ReturnType<typeof setTimeout>>(undefined)
  const id = useId()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Number(e.target.value)
    if (dragging) setTilt(Math.max(-12, Math.min(12, (next - value) * 4)))
    clearTimeout(settle.current)
    settle.current = setTimeout(() => setTilt(0), 120)
    setValue(next)
  }

  return (
    <div className={s.wrap} style={{ '--pct': value } as React.CSSProperties}>
      <label htmlFor={id} className={s.label}>
        {labels.label}
      </label>
      <div className={s.track}>
        <output
          htmlFor={id}
          className={s.bubble}
          data-dragging={dragging || undefined}
          style={{ '--tilt': `${tilt}deg` } as React.CSSProperties}
        >
          {value}
          {labels.unit}
        </output>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={value}
          className={s.input}
          onChange={onChange}
          onPointerDown={() => setDragging(true)}
          onPointerUp={() => setDragging(false)}
          onBlur={() => setDragging(false)}
        />
      </div>
    </div>
  )
}
