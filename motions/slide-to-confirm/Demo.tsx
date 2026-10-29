'use client'

import { useRef, useState } from 'react'
import s from './demo.module.css'

export default function SlideToConfirm({ labels }: { labels: Record<string, string> }) {
  const track = useRef<HTMLDivElement>(null)
  const knob = useRef<HTMLButtonElement>(null)
  const start = useRef<number | null>(null)
  // pointerup can land before React re-renders, so read the latest offset from a ref
  const pos = useRef(0)
  const [x, setXState] = useState(0)
  const setX = (v: number) => {
    pos.current = v
    setXState(v)
  }
  const [dragging, setDragging] = useState(false)
  const [done, setDone] = useState(false)

  const max = () => (track.current?.clientWidth ?? 0) - (knob.current?.offsetWidth ?? 0) - 8
  const progress = done ? 1 : x / (max() || 1)

  const onDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (done) return
    e.currentTarget.setPointerCapture(e.pointerId)
    start.current = e.clientX - pos.current
    setDragging(true)
  }
  const onMove = (e: React.PointerEvent) => {
    if (start.current === null) return
    setX(Math.min(Math.max(e.clientX - start.current, 0), max()))
  }
  const onUp = () => {
    if (start.current === null) return
    start.current = null
    setDragging(false)
    if (pos.current / max() > 0.9) confirm()
    else setX(0)
  }
  const confirm = () => {
    setX(max())
    setDone(true)
  }
  const reset = () => {
    setDone(false)
    setX(0)
  }

  return (
    <div className={s.wrap}>
      <div ref={track} className={s.track} data-done={done || undefined}>
        <span className={s.hint} style={{ opacity: 1 - progress }} aria-hidden="true">
          {labels.hint}
        </span>
        <span className={s.doneLabel} aria-live="polite">
          {done ? labels.done : ''}
        </span>
        <button
          ref={knob}
          type="button"
          className={s.knob}
          aria-label={labels.hint}
          disabled={done}
          style={{ transform: `translateX(${x}px)`, transition: dragging ? 'none' : undefined }}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), confirm())}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {done ? <path d="M5 12.5l4.5 4.5L19 7.5" /> : <path d="M9 6l6 6-6 6" />}
          </svg>
        </button>
      </div>
      <button type="button" className={s.reset} onClick={reset} hidden={!done}>
        {labels.reset}
      </button>
    </div>
  )
}
