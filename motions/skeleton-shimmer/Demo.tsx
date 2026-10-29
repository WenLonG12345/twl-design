'use client'

import { useState } from 'react'
import s from './demo.module.css'

export default function SkeletonShimmer({ labels }: { labels: Record<string, string> }) {
  const [loading, setLoading] = useState(true)

  return (
    <div className={s.wrap}>
      <div className={s.row} aria-busy={loading} aria-live="polite">
        {loading ? (
          <>
            <span className={`${s.bone} ${s.avatar}`} />
            <span className={s.lines}>
              <span className={s.bone} style={{ width: '60%' }} />
              <span className={s.bone} style={{ width: '40%' }} />
            </span>
          </>
        ) : (
          <div className={s.loaded}>
            <span className={s.avatar + ' ' + s.initials}>{Array.from(labels.name)[0]}</span>
            <span className={s.lines}>
              <strong className={s.name}>{labels.name}</strong>
              <span className={s.role}>{labels.role}</span>
            </span>
          </div>
        )}
      </div>
      <button type="button" className={s.toggle} onClick={() => setLoading(!loading)}>
        {loading ? labels.load : labels.reset}
      </button>
    </div>
  )
}
