'use client'

import s from './demo.module.css'

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className={s.row}>
      <div className={reverse ? `${s.track} ${s.reverse}` : s.track}>
        {[0, 1].map((copy) => (
          <ul key={copy} className={s.list} aria-hidden={copy === 1 || undefined}>
            {items.map((t) => (
              <li key={t} className={s.tag}>
                {t}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default function Marquee({ labels }: { labels: Record<string, string> }) {
  return (
    <div className={s.wrap}>
      <Row items={labels.row1.split('|')} />
      <Row items={labels.row2.split('|')} reverse />
    </div>
  )
}
