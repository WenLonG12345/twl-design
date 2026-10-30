'use client'

import { useEffect, useRef } from 'react'
import s from './demo.module.css'

const ROWS = 16
const CELL = 6
const SPEED = 22 // columns per second

export default function LedText({ labels }: { labels: Record<string, string> }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    const css = getComputedStyle(canvas)
    const on = css.getPropertyValue('--on').trim()
    const off = css.getPropertyValue('--off').trim()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // rasterise the message once at ROWS pixels tall; each pixel becomes one LED
    const src = document.createElement('canvas').getContext('2d', { willReadFrequently: true })!
    const font = `700 ${ROWS - 2}px ui-monospace, Menlo, monospace`
    const text = `${labels.text}   `
    src.font = font
    const tw = Math.ceil(src.measureText(text).width)
    src.canvas.width = tw
    src.canvas.height = ROWS
    src.font = font
    src.textBaseline = 'middle'
    src.fillText(text, 0, ROWS / 2 + 1)
    const alpha = src.getImageData(0, 0, tw, ROWS).data
    const lit = (x: number, y: number) => alpha[(y * tw + x) * 4 + 3] > 110

    let w = 0
    let offset = 0
    let last = 0
    let raf = 0
    let running = !reduced
    let hovered = false

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.clientWidth
      canvas.width = w * dpr
      canvas.height = ROWS * CELL * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw()
    }

    const dot = (x: number, y: number, r: number) => {
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, ROWS * CELL)
      const cols = Math.ceil(w / CELL)
      const start = Math.floor(offset)
      for (let c = 0; c < cols; c++) {
        const sx = (start + c) % tw
        for (let r = 0; r < ROWS; r++) {
          const x = c * CELL + CELL / 2
          const y = r * CELL + CELL / 2
          if (lit(sx, r)) {
            // a faint halo under each lit LED reads as glow without shadowBlur's cost
            ctx.fillStyle = on
            ctx.globalAlpha = 0.25
            dot(x, y, CELL * 0.62)
            ctx.globalAlpha = 1
            dot(x, y, CELL * 0.34)
          } else {
            ctx.fillStyle = off
            dot(x, y, CELL * 0.3)
          }
        }
      }
    }

    const loop = (t: number) => {
      if (last && !hovered) offset = (offset + ((t - last) / 1000) * SPEED) % tw
      last = t
      draw()
      raf = requestAnimationFrame(loop)
    }
    const play = (yes: boolean) => {
      cancelAnimationFrame(raf)
      last = 0
      if (yes && running) raf = requestAnimationFrame(loop)
    }

    const onEnter = () => (hovered = true)
    const onLeave = () => (hovered = false)
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => play(e.isIntersecting))
    io.observe(canvas)
    canvas.addEventListener('pointerenter', onEnter)
    canvas.addEventListener('pointerleave', onLeave)
    return () => {
      running = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      canvas.removeEventListener('pointerenter', onEnter)
      canvas.removeEventListener('pointerleave', onLeave)
    }
  }, [labels.text])

  return (
    <div className={s.panel}>
      <canvas ref={ref} className={s.canvas} role="img" aria-label={labels.text} />
    </div>
  )
}
