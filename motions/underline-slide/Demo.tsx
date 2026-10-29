'use client'

import s from './demo.module.css'

export default function UnderlineSlide({ labels }: { labels: Record<string, string> }) {
  return (
    <nav className={s.nav}>
      {[labels.a, labels.b, labels.c].map((t) => (
        <a key={t} href="#" className={s.link} onClick={(e) => e.preventDefault()}>
          {t}
        </a>
      ))}
    </nav>
  )
}
