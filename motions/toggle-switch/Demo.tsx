'use client'

import { useId, useState } from 'react'
import s from './demo.module.css'

export default function ToggleSwitch({ labels }: { labels: Record<string, string> }) {
  const [on, setOn] = useState(true)
  const id = useId()

  return (
    <div className={s.row}>
      <label htmlFor={id} className={s.label}>
        {labels.label}
      </label>
      <button id={id} type="button" role="switch" aria-checked={on} className={s.track} onClick={() => setOn(!on)}>
        <span className={s.knob} />
      </button>
    </div>
  )
}
