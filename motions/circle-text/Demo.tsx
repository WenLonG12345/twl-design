'use client'

import { useEffect, useId, useRef } from 'react'
import s from './demo.module.css'

const R = 70

export default function CircleText({ labels }: { labels: Record<string, string> }) {
  const button = useRef<HTMLButtonElement>(null)
  const ring = useRef<SVGSVGElement>(null)
  // useId can contain characters that break an SVG href fragment
  const pathId = `ring${useId().replace(/[^\w-]/g, '')}`

  useEffect(() => {
    const btn = button.current!
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const spin = ring.current!.animate([{ transform: 'rotate(0turn)' }, { transform: 'rotate(1turn)' }], {
      duration: 24000,
      iterations: Infinity,
    })
    let rate = 1
    let target = 1
    let raf = 0

    // ease the playback rate instead of jumping, so the speed-up feels like a push
    const tick = () => {
      rate += (target - rate) * 0.08
      spin.playbackRate = rate
      raf = Math.abs(target - rate) > 0.01 ? requestAnimationFrame(tick) : 0
    }
    const speed = (t: number) => () => {
      target = t
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const fast = speed(5)
    const slow = speed(1)
    btn.addEventListener('pointerenter', fast)
    btn.addEventListener('pointerleave', slow)
    btn.addEventListener('focus', fast)
    btn.addEventListener('blur', slow)
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? spin.play() : spin.pause()))
    io.observe(btn)
    return () => {
      cancelAnimationFrame(raf)
      spin.cancel()
      io.disconnect()
      btn.removeEventListener('pointerenter', fast)
      btn.removeEventListener('pointerleave', slow)
      btn.removeEventListener('focus', fast)
      btn.removeEventListener('blur', slow)
    }
  }, [])

  return (
    <button ref={button} type="button" className={s.badge} aria-label={labels.action}>
      <svg ref={ring} className={s.ring} viewBox="0 0 200 200" aria-hidden="true">
        <path id={pathId} d={`M100,100 m-${R},0 a${R},${R} 0 1,1 ${R * 2},0 a${R},${R} 0 1,1 -${R * 2},0`} fill="none" />
        <text className={s.text}>
          <textPath href={`#${pathId}`} textLength={Math.floor(2 * Math.PI * R)} lengthAdjust="spacing">
            {labels.text}
          </textPath>
        </text>
      </svg>
      <span className={s.core} aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M7 17L17 7M9 7h8v8" />
        </svg>
      </span>
    </button>
  )
}
