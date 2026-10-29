'use client'

import { useEffect, useId, useRef, useState } from 'react'
import s from './demo.module.css'

export default function ShakeError({ labels }: { labels: Record<string, string> }) {
  const [status, setStatus] = useState<'idle' | 'error' | 'ok'>('idle')
  const [attempt, setAttempt] = useState(0)
  const [value, setValue] = useState('TWL-12')
  const input = useRef<HTMLInputElement>(null)
  const id = useId()

  // the input remounts (key) to restart the shake, so focus the new element afterwards
  useEffect(() => {
    if (attempt) input.current?.focus()
  }, [attempt])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const ok = /^TWL-\d{4}$/i.test(value.trim())
    setStatus(ok ? 'ok' : 'error')
    if (!ok) setAttempt(attempt + 1)
  }

  return (
    <form className={s.form} onSubmit={submit} noValidate>
      <label htmlFor={id} className={s.label}>
        {labels.label}
      </label>
      <div className={s.row}>
        <input
          key={attempt}
          ref={input}
          id={id}
          className={s.input}
          placeholder={labels.placeholder}
          aria-invalid={status === 'error'}
          aria-describedby={`${id}-msg`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
        />
        <button type="submit" className={s.button}>
          {labels.submit}
        </button>
      </div>
      <p id={`${id}-msg`} className={s.msg} data-status={status} role="alert">
        {status === 'error' ? labels.error : status === 'ok' ? labels.ok : ''}
      </p>
    </form>
  )
}
