'use client'

import { useEffect, useRef, useState } from 'react'

type Labels = { idle: string; done: string; failed: string }

export default function CopyButton({
  text,
  labels,
  variant = 'primary',
}: {
  text: string
  labels: Labels
  variant?: 'primary' | 'ghost' | 'dark'
}) {
  const [state, setState] = useState<'idle' | 'done' | 'failed'>('idle')
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setState('done')
    } catch {
      setState('failed')
    }
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setState('idle'), 1800)
  }

  return (
    <button type="button" className={`btn btn--${variant}`} data-state={state} onClick={copy}>
      <span aria-live="polite">{labels[state]}</span>
    </button>
  )
}
