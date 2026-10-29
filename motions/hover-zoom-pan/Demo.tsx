'use client'

import s from './demo.module.css'

export default function HoverZoomPan({ labels }: { labels: Record<string, string> }) {
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const scene = e.currentTarget.firstElementChild as HTMLElement
    scene.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`
  }

  return (
    <figure className={s.frame} tabIndex={0} onPointerMove={onMove}>
      <div className={s.scene} role="img" aria-label={labels.caption} />
      <figcaption className={s.caption}>{labels.caption}</figcaption>
    </figure>
  )
}
