'use client'

import { useEffect, useRef } from 'react'
import s from './demo.module.css'

const SIZE = 14

export default function MatrixRain({ labels }: { labels: Record<string, string> }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    const css = getComputedStyle(canvas)
    const bg = css.getPropertyValue('--bg').trim()
    const accent = css.getPropertyValue('--accent').trim()
    const head = css.getPropertyValue('--head').trim()
    const glyphs = Array.from(labels.glyphs)
    const pick = () => glyphs[Math.floor(Math.random() * glyphs.length)]
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let cols: { y: number; speed: number }[] = []
    let w = 0
    let h = 0
    let raf = 0
    let frame = 0
    let visible = true

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.font = `${SIZE}px ui-monospace, monospace`
      ctx.textBaseline = 'top'
      cols = Array.from({ length: Math.ceil(w / SIZE) }, () => ({
        y: Math.random() * (h / SIZE),
        speed: 0.4 + Math.random() * 0.6,
      }))
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)
      if (reduced) staticFrame()
    }

    const step = () => {
      ctx.globalAlpha = 0.12
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)
      ctx.globalAlpha = 1
      cols.forEach((c, i) => {
        const y = Math.floor(c.y) * SIZE
        ctx.fillStyle = accent
        ctx.fillText(pick(), i * SIZE, y - SIZE)
        ctx.fillStyle = head
        ctx.fillText(pick(), i * SIZE, y)
        c.y += c.speed
        if (y > h && Math.random() > 0.96) c.y = 0
      })
    }

    const staticFrame = () => {
      for (let n = 0; n < 40; n++) step()
    }

    const loop = () => {
      if (frame++ % 3 === 0) step()
      if (visible) raf = requestAnimationFrame(loop)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting && !reduced
      cancelAnimationFrame(raf)
      if (visible) raf = requestAnimationFrame(loop)
    })
    io.observe(canvas)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [labels.glyphs])

  return (
    <div className={s.wrap}>
      <canvas ref={ref} className={s.canvas} aria-hidden="true" />
      <span className={s.caption}>{labels.caption}</span>
    </div>
  )
}
