'use client'

import { useId, useState } from 'react'
import s from './demo.module.css'

const RULES: [string, (v: string) => boolean][] = [
  ['len', (v) => v.length >= 8],
  ['num', (v) => /\d/.test(v)],
  ['case', (v) => /[a-z]/.test(v) && /[A-Z]/.test(v)],
  ['sym', (v) => /[^\w\s]/.test(v)],
]

export default function PasswordStrength({ labels }: { labels: Record<string, string> }) {
  const [value, setValue] = useState('')
  const [show, setShow] = useState(false)
  const id = useId()
  const met = RULES.map(([, test]) => test(value))
  const score = met.filter(Boolean).length
  const levels = labels.levels.split('|')

  return (
    <div className={s.wrap}>
      <label htmlFor={id} className={s.label}>
        {labels.label}
      </label>
      <div className={s.field}>
        <input
          id={id}
          className={s.input}
          type={show ? 'text' : 'password'}
          value={value}
          autoComplete="new-password"
          spellCheck={false}
          aria-describedby={`${id}-level ${id}-rules`}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="button" className={s.toggle} aria-pressed={show} onClick={() => setShow(!show)}>
          {show ? labels.hide : labels.show}
        </button>
      </div>
      <div className={s.meter} data-score={score}>
        <span className={s.bars} aria-hidden="true">
          {[1, 2, 3, 4].map((n) => (
            <span key={n} className={s.bar} data-on={(value && score >= n) || undefined} />
          ))}
        </span>
        <span id={`${id}-level`} className={s.level} aria-live="polite">
          {value ? levels[score] : labels.empty}
        </span>
      </div>
      <ul id={`${id}-rules`} className={s.rules}>
        {RULES.map(([key], i) => (
          <li key={key} className={s.rule} data-met={met[i] || undefined}>
            <svg className={s.check} viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="8" cy="8" r="7" />
              <path d="M4.8 8.3l2.2 2.2 4.2-4.6" pathLength="1" />
            </svg>
            {labels[key]}
            {met[i] && <span className={s.sr}> {labels.met}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}
