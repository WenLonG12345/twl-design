'use client'

import { useEffect, useRef } from 'react'
import s from './demo.module.css'

const LINES = 14

export default function WavyLines({ labels }: { labels: Record<string, string> }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    const css = getComputedStyle(canvas)
    const muted = css.getPropertyValue('--line').trim()
    const hot = css.getPropertyValue('--hot').trim()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const target = { x: -999, y: -999 }
    const pointer = { x: -999, y: -999 }
    let w = 0
    let h = 0
    let raf = 0
    let t = 0
    let visible = true

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      pointer.x += (target.x - pointer.x) * 0.12
      pointer.y += (target.y - pointer.y) * 0.12
      const gap = h / (LINES + 1)
      const nearest = Math.round(pointer.y / gap) - 1
      for (let i = 0; i < LINES; i++) {
        const base = gap * (i + 1)
        ctx.beginPath()
        for (let x = 0; x <= w; x += 6) {
          const dx = x - pointer.x
          const dy = base - pointer.y
          const bump = 18 * Math.exp(-(dx * dx + dy * dy) / 2400) * Math.sign(dy || 1)
          const y = base + Math.sin(x * 0.02 + t + i * 0.5) * 4 + bump
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = i === nearest ? hot : muted
        ctx.lineWidth = i === nearest ? 1.6 : 1
        ctx.stroke()
      }
    }

    const loop = () => {
      t += 0.02
      draw()
      if (visible) raf = requestAnimationFrame(loop)
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw()
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      target.x = e.clientX - r.left
      target.y = e.clientY - r.top
      if (reduced) Object.assign(pointer, target) && draw()
    }
    const onLeave = () => Object.assign(target, { x: -999, y: -999 })

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting && !reduced
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
