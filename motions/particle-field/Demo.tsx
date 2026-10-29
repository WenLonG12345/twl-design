'use client'

import { useEffect, useRef } from 'react'
import s from './demo.module.css'

const COUNT = 60
const LINK = 120

export default function ParticleField({ labels }: { labels: Record<string, string> }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const css = getComputedStyle(canvas)
    const dot = css.getPropertyValue('--dot').trim()
    const line = css.getPropertyValue('--line').trim()
    let w = 0
    let h = 0
    let raf = 0
    let visible = true
    const pointer = { x: -999, y: -999 }
    const pts = Array.from({ length: COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
    }))

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // positions start as 0–1 fractions; convert once we know the size
      for (const p of pts) if (p.x <= 1 && p.y <= 1) Object.assign(p, { x: p.x * w, y: p.y * h })
      if (reduced) draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const near = pts.filter((p) => Math.hypot(p.x - pointer.x, p.y - pointer.y) < LINK)
      ctx.strokeStyle = line
      for (let i = 0; i < near.length; i++)
        for (let j = i + 1; j < near.length; j++) {
          const d = Math.hypot(near[i].x - near[j].x, near[i].y - near[j].y)
          ctx.globalAlpha = Math.max(0, 1 - d / LINK)
          ctx.beginPath()
          ctx.moveTo(near[i].x, near[i].y)
          ctx.lineTo(near[j].x, near[j].y)
          ctx.stroke()
        }
      ctx.globalAlpha = 1
      ctx.fillStyle = dot
      for (const p of pts) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = () => {
      for (const p of pts) {
        p.x = (p.x + p.vx + w) % w
        p.y = (p.y + p.vy + h) % h
      }
      draw()
      if (visible) raf = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      pointer.x = e.clientX - r.left
      pointer.y = e.clientY - r.top
      if (reduced) draw()
    }
    const onLeave = () => Object.assign(pointer, { x: -999, y: -999 })

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      cancelAnimationFrame(raf)
      if (visible && !reduced) raf = requestAnimationFrame(loop)
    })
    io.observe(canvas)
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div className={s.wrap}>
      <canvas ref={ref} className={s.canvas} aria-hidden="true" />
      <span className={s.caption}>{labels.caption}</span>
    </div>
  )
}
