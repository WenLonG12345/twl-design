'use client'

import { useEffect, useRef } from 'react'

/**
 * Shows a desktop-width preview as a thumbnail: the child renders at `width` px and is scaled to fit the box,
 * which crops to the top of the page. Purely visual, so it is inert and hidden from assistive tech.
 */
export default function ScaledPreview({ width = 1120, children }: { width?: number; children: React.ReactNode }) {
  const box = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = box.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => el.style.setProperty('--k', String(entry.contentRect.width / width)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [width])

  return (
    <div ref={box} className="scaled" aria-hidden="true" inert>
      <div className="scaled__inner" style={{ width }}>
        {children}
      </div>
    </div>
  )
}
