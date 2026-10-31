import type { SampleCopy } from '@/styles/sample'
import s from './StylePreview.module.css'

/**
 * The sample page (the twlworks homepage), dressed in one style. No hooks, so it renders on the server or inside client components.
 * It is a picture of a page, not a working one: links and buttons are plain spans so they never steal focus.
 */
export default function StylePreview({ style, copy, label }: { style: string; copy: SampleCopy; label?: string }) {
  return (
    <div className={s.frame}>
      <div className={s.page} data-style={style} role={label ? 'img' : undefined} aria-label={label}>
        <header className={s.bar}>
          <span className={s.logo}>
            <span className={s.mark} aria-hidden="true" />
            {copy.brand}
          </span>
          <span className={s.links}>
            {copy.links.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </span>
          <span className={s.navCta}>{copy.navCta}</span>
        </header>

        <section className={s.hero}>
          <div className={s.heroText}>
            <p className={s.eyebrow}>{copy.eyebrow}</p>
            <h3 className={s.title}>{copy.title}</h3>
            <p className={s.lede}>{copy.lede}</p>
            <div className={s.actions}>
              <span className={s.primary}>{copy.primary}</span>
              <span className={s.secondary}>{copy.secondary}</span>
            </div>
          </div>
          <div className={s.art} aria-hidden="true">
            <span className={s.a1} />
            <span className={s.a2} />
            <span className={s.a3} />
          </div>
        </section>

        <ul className={s.cards}>
          {copy.items.map((item, i) => (
            <li key={item.title} className={s.card}>
              <span className={s.k}>{String(i + 1).padStart(2, '0')}</span>
              <h4 className={s.cardTitle}>{item.title}</h4>
              <p className={s.cardText}>{item.text}</p>
              <span className={s.tag}>{item.tag}</span>
            </li>
          ))}
        </ul>

        <footer className={s.foot}>
          <blockquote className={s.quote}>
            <p>“{copy.quote}”</p>
            <cite className={s.cite}>{copy.cite}</cite>
          </blockquote>
          <p className={s.hours}>{copy.hours}</p>
        </footer>
      </div>
    </div>
  )
}
