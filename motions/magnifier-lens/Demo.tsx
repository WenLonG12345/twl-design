'use client'

import { useRef } from 'react'
import s from './demo.module.css'

const R = 60
const ZOOM = 2
const SPOTS = [
  [14, 22], [52, 14], [70, 46], [24, 64], [80, 80], [44, 84],
]

function MapArt({ streets }: { streets: string[] }) {
  return (
    <div className={s.map}>
      <span className={s.river} />
      {streets.map((t, i) => (
        <span key={t} className={s.street} style={{ left: `${SPOTS[i][0]}%`, top: `${SPOTS[i][1]}%` }}>
          {t}
        </span>
      ))}
      <span className={s.pin} />
    </div>
  )
}

export default function MagnifierLens({ labels }: { labels: Record<string, string> }) {
  const area = useRef<HTMLDivElement>(null)
  const lens = useRef<HTMLDivElement>(null)
  const copy = useRef<HTMLDivElement>(null)
  const raf = useRef(0)
  const streets = labels.streets.split('|')

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      // the copy must match the area, not the lens, so the zoomed point lines up
      copy.current!.style.width = `${r.width}px`
      copy.current!.style.height = `${r.height}px`
      lens.current!.style.translate = `${x - R}px ${y - R}px`
      copy.current!.style.transform = `translate(${R - x * ZOOM}px, ${R - y * ZOOM}px) scale(${ZOOM})`
    })
  }

  return (
    <div
      ref={area}
      className={s.area}
      onPointerMove={onMove}
      onPointerEnter={() => area.current?.setAttribute('data-on', '')}
      onPointerLeave={() => area.current?.removeAttribute('data-on')}
    >
      <MapArt streets={streets} />
      <span className={s.hint}>{labels.hint}</span>
      <div ref={lens} className={s.lens} aria-hidden="true">
        <div ref={copy} className={s.copy}>
          <MapArt streets={streets} />
        </div>
      </div>
    </div>
  )
}
