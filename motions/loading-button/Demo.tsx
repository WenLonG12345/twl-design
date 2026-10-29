'use client'

import { useEffect, useRef, useState } from 'react'
import s from './demo.module.css'

type State = 'idle' | 'loading' | 'done'

export default function LoadingButton({ labels }: { labels: Record<string, string> }) {
  const [state, setState] = useState<State>('idle')
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const submit = () => {
    setState('loading')
    timers.current.push(
      setTimeout(() => setState('done'), 1400),
      setTimeout(() => setState('idle'), 3400),
    )
  }

  return (
    <button
      type="button"
      className={s.button}
      data-state={state}
      disabled={state === 'loading'}
      aria-busy={state === 'loading'}
      onClick={() => state === 'idle' && submit()}
    >
      <span className={s.label}>{state === 'done' ? labels.done : labels.idle}</span>
      <span className={s.spinner} aria-hidden="true" />
      <svg className={s.check} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      </svg>
      <span className={s.sr} aria-live="polite">
        {state === 'loading' ? labels.loading : state === 'done' ? labels.done : ''}
      </span>
    </button>
  )
}
