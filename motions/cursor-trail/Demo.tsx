'use client'

import { useEffect, useRef } from 'react'
import s from './demo.module.css'

const LIFE = 450

export default function CursorTrail({ labels }: { labels: Record<string, string> }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    const color = getComputedStyle(canvas).getPropertyValue('--trail').trim()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let points: { x: number; y: number; t: number }[] = []
    let raf = 0
    let w = 0
    let h = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      const now = performance.now()
      points = points.filter((p) => now - p.t < LIFE)
      ctx.clearRect(0, 0, w, h)
      ctx.strokeStyle = color
      ctx.lineCap = 'round'
      for (let i = 1; i < points.length - 1; i++) {
        const life = 1 - (now - points[i].t) / LIFE
        const a = points[i - 1]
        const b = points[i]
        const c = points[i + 1]
        ctx.globalAlpha = life
        ctx.lineWidth = 1 + life * 9
        ctx.beginPath()
        ctx.moveTo((a.x + b.x) / 2, (a.y + b.y) / 2)
        ctx.quadraticCurveTo(b.x, b.y, (b.x + c.x) / 2, (b.y + c.y) / 2)
        ctx.stroke()
      }
      ctx.globalAlpha = 1
      raf = points.length ? requestAnimationFrame(draw) : 0
    }

    const onMove = (e: PointerEvent) => {
      if (reduced || e.pointerType === 'touch') return
      const r = canvas.getBoundingClientRect()
      points.push({ x: e.clientX - r.left, y: e.clientY - r.top, t: performance.now() })
      if (!raf) raf = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    canvas.addEventListener('pointermove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      canvas.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <div className={s.wrap}>
      <canvas ref={ref} className={s.canvas} aria-hidden="true" />
      <span className={s.caption}>{labels.caption}</span>
    </div>
  )
}
