'use client'

import { useEffect, useRef } from 'react'
import s from './demo.module.css'

type Piece = { x: number; y: number; vx: number; vy: number; rot: number; vr: number; tilt: number; color: string }

export default function ConfettiBurst({ labels }: { labels: Record<string, string> }) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const button = useRef<HTMLButtonElement>(null)
  const pieces = useRef<Piece[]>([])
  const raf = useRef(0)

  useEffect(() => () => cancelAnimationFrame(raf.current), [])

  const fire = () => {
    const c = canvas.current!
    const b = button.current!
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      b.animate([{ opacity: 0.4 }, { opacity: 1 }], 150)
      return
    }
    const ctx = c.getContext('2d')!
    const dpr = window.devicePixelRatio || 1
    const w = c.clientWidth
    const h = c.clientHeight
    c.width = w * dpr
    c.height = h * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const css = getComputedStyle(c)
    const palette = ['--c1', '--c2', '--c3', '--c4'].map((v) => css.getPropertyValue(v).trim())
    const cr = c.getBoundingClientRect()
    const br = b.getBoundingClientRect()
    const ox = br.left + br.width / 2 - cr.left
    const oy = br.top + br.height / 2 - cr.top

    for (let i = 0; i < 90; i++) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * ((70 * Math.PI) / 180)
      const speed = 6 + Math.random() * 6
      pieces.current.push({
        x: ox,
        y: oy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
        tilt: Math.random() * Math.PI,
        color: palette[i % palette.length],
      })
    }

    cancelAnimationFrame(raf.current)
    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      pieces.current = pieces.current.filter((p) => p.y < h + 20 && p.x > -20 && p.x < w + 20)
      for (const p of pieces.current) {
        p.vy += 0.25
        p.vx *= 0.985
        p.vy *= 0.985
        p.x += p.vx
        p.y += p.vy
        p.rot += p.vr
        p.tilt += 0.12
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.color
        ctx.fillRect(-3 * Math.cos(p.tilt), -5, 6 * Math.cos(p.tilt), 10)
        ctx.restore()
      }
      if (pieces.current.length) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
  }

  return (
    <div className={s.wrap}>
      <canvas ref={canvas} className={s.canvas} aria-hidden="true" />
      <button ref={button} type="button" className={s.button} onClick={fire}>
        {labels.cta}
      </button>
    </div>
  )
}
