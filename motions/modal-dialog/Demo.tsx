'use client'

import { useId, useRef } from 'react'
import s from './demo.module.css'

export default function ModalDialog({ labels }: { labels: Record<string, string> }) {
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const close = () => ref.current?.close()

  return (
    <>
      <button type="button" className={s.open} onClick={() => ref.current?.showModal()}>
        {labels.open}
      </button>
      <dialog
        ref={ref}
        className={s.dialog}
        aria-labelledby={titleId}
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <div className={s.body}>
          <h2 id={titleId} className={s.title}>
            {labels.title}
          </h2>
          <p className={s.text}>{labels.body}</p>
          <div className={s.actions}>
            <button type="button" className={s.ghost} onClick={close} autoFocus>
              {labels.cancel}
            </button>
            <button type="button" className={s.danger} onClick={close}>
              {labels.confirm}
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}
