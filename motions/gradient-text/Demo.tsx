'use client'

import s from './demo.module.css'

export default function GradientText({ labels }: { labels: Record<string, string> }) {
  return <p className={s.text}>{labels.text}</p>
}
