'use client'

import { useEffect, useRef } from 'react'
import s from './demo.module.css'

const GAP = 18
const REACH = 90

export default function DotGrid({ labels }: { labels: Record<string, string> }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    const css = getComputedStyle(canvas)
    const muted = css.getPropertyValue('--dot').trim()
    const hot = css.getPropertyValue('--hot').trim()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: -999, y: -999 }
    let dots: { hx: number; hy: number; x: number; y: number }[] = []
    let w = 0
    let h = 0
    let raf = 0
    let visible = true

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      dots = []
      for (let y = GAP / 2; y < h; y += GAP) for (let x = GAP / 2; x < w; x += GAP) dots.push({ hx: x, hy: y, x, y })
      draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const d of dots) {
        const dx = d.hx - pointer.x
        const dy = d.hy - pointer.y
        const dist = Math.hypot(dx, dy)
        const k = dist < REACH ? (1 - dist / REACH) ** 2 : 0
        const tx = reduced ? d.hx : d.hx + (dx / (dist || 1)) * k * 10
        const ty = reduced ? d.hy : d.hy + (dy / (dist || 1)) * k * 10
        d.x += (tx - d.x) * 0.18
        d.y += (ty - d.y) * 0.18
        ctx.fillStyle = k > 0.15 ? hot : muted
        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.2 + k * 1.8, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = () => {
      draw()
      if (visible) raf = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      pointer.x = e.clientX - r.left
      pointer.y = e.clientY - r.top
    }
    const onLeave = () => Object.assign(pointer, { x: -999, y: -999 })

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      cancelAnimationFrame(raf)
      if (visible) raf = requestAnimationFrame(loop)
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
