'use client'

import { usePathname } from 'next/navigation'
import { useId, useRef, useState } from 'react'
import type { Dictionary } from '@/lib/dictionaries'

const NEW_ISSUE = 'https://github.com/WenLonG12345/twl-motions/issues/new'

/** Floating "suggest an idea" button for motions or themes. Submissions open a prefilled GitHub issue, so no backend is needed. */
export default function ContributeFab({ labels, locale }: { labels: Dictionary['contribute']; locale: string }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const id = useId()
  const pathname = usePathname()
  const [kind, setKind] = useState<'motion' | 'theme'>('motion')
  const t = labels[kind]
  const close = () => dialog.current?.close()
  // Start on whatever the visitor is looking at.
  const open = () => {
    setKind(pathname.includes('/themes') ? 'theme' : 'motion')
    dialog.current?.showModal()
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const field = (k: string) => String(data.get(k) ?? '').trim()
    // Issue text stays in English so the tracker reads the same whatever language the visitor used.
    const body = [
      kind === 'theme' ? '**What it looks like**' : '**What it does**',
      field('details'),
      field('link') && `**Reference**\n${field('link')}`,
      `---\n_Submitted from Design Library (${locale})_`,
    ]
      .filter(Boolean)
      .join('\n\n')
    window.open(`${NEW_ISSUE}?${new URLSearchParams({ title: `${kind === 'theme' ? 'Theme' : 'Motion'} idea: ${field('name')}`, body })}`, '_blank', 'noopener')
    form.reset()
    close()
  }

  return (
    <>
      <button type="button" className="fab" aria-haspopup="dialog" onClick={open}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="fab__label">{labels.fab}</span>
      </button>
      <dialog
        ref={dialog}
        className="contrib"
        aria-labelledby={`${id}-title`}
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <form className="contrib__form" onSubmit={submit}>
          <div className="contrib__head">
            <h2 id={`${id}-title`}>{labels.title}</h2>
            <button type="button" className="contrib__close" aria-label={labels.close} onClick={close}>
              ×
            </button>
          </div>
          <p className="contrib__lede">{labels.lede}</p>
          <fieldset className="contrib__kind">
            <legend>{labels.kind}</legend>
            {(['motion', 'theme'] as const).map((k) => (
              <label key={k} className="chip">
                <input type="radio" name="kind" className="sr-only" checked={kind === k} onChange={() => setKind(k)} />
                {labels[k].label}
              </label>
            ))}
          </fieldset>
          <label className="field">
            {t.name}
            <input name="name" required maxLength={80} placeholder={t.namePh} autoComplete="off" />
          </label>
          <label className="field">
            {t.details}
            <textarea name="details" required maxLength={1500} rows={4} placeholder={t.detailsPh} />
          </label>
          <label className="field">
            <span>
              {labels.link} <em>({labels.optional})</em>
            </span>
            <input name="link" type="url" placeholder="https://" />
          </label>
          <p className="contrib__note">{labels.note}</p>
          <div className="contrib__actions">
            <button type="button" className="btn btn--ghost" onClick={close}>
              {labels.cancel}
            </button>
            <button type="submit" className="btn btn--primary">
              {labels.submit} ↗
            </button>
          </div>
        </form>
      </dialog>
    </>
  )
}
