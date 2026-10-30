'use client'

import { useId, useState } from 'react'
import s from './demo.module.css'

const LEN = 6

export default function OtpInput({ labels }: { labels: Record<string, string> }) {
  const [code, setCode] = useState('')
  const [focused, setFocused] = useState(false)
  const id = useId()
  const done = code.length === LEN

  return (
    <div className={s.wrap}>
      <label className={s.label} htmlFor={id}>
        {labels.label}
      </label>
      <div className={s.field} data-done={done || undefined}>
        {/* one real input over the boxes: paste, autofill and screen readers all just work */}
        <input
          id={id}
          className={s.input}
          value={code}
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={LEN}
          aria-describedby={`${id}-status`}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, LEN))}
          onSelect={(e) => {
            const t = e.currentTarget
            if (t.selectionStart !== t.value.length) t.setSelectionRange(t.value.length, t.value.length)
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {Array.from({ length: LEN }, (_, i) => (
          <span
            key={i}
            className={s.box}
            data-active={(focused && !done && i === code.length) || undefined}
            data-filled={i < code.length || undefined}
            style={{ '--i': i } as React.CSSProperties}
            aria-hidden="true"
          >
            {code[i] && (
              <span key={code[i]} className={s.digit}>
                {code[i]}
              </span>
            )}
          </span>
        ))}
      </div>
      <p id={`${id}-status`} className={s.status} aria-live="polite">
        {done ? labels.done : labels.hint}
      </p>
    </div>
  )
}
