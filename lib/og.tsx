/* Hallmark · component: og-image · genre: modern-minimal · theme: custom (Cream Paper)
 * right panel: a bento of charcoal mini-stages, each a still frame of a real motion from the library
 * pre-emit critique: P5 H4 E4 S5 R4 V5
 */
import { ImageResponse } from 'next/og'
import { LOGO_PATH } from '@/components/Logo'
import type { Locale } from '@/lib/i18n'
import { getMotion } from '@/motions'

export const ogSize = { width: 1200, height: 630 }

// The OG renderer can't read CSS variables, so the brand colours are repeated here from tokens.css.
const C = {
  cream: '#F2EEE6',
  charcoal: '#1C1A18',
  ink2: '#4A4540',
  terracotta: '#C4702C',
  stageInk: '#EDE8DF',
  stageRule: '#403B36',
  stageMuted: '#ABA59C',
  stageSurface: '#2A2724',
  flap: '#36322E',
}

const mono = '"IBM Plex Mono", "Noto Sans SC"'

/** Real motions from the library, drawn as one still frame each, so the card previews what is inside. */
const SHOWCASE = ['split-flap', 'stack-fan', 'toggle-switch', 'gradient-border'] as const

function Tile({ w, h, caption, children }: { w: number; h: number; caption: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center',
        width: w, height: h, paddingBottom: 26, borderRadius: 22, background: C.charcoal, overflow: 'hidden',
      }}
    >
      {children}
      <span style={{ position: 'absolute', left: 18, bottom: 14, fontFamily: mono, fontSize: 14, color: C.stageMuted }}>{caption}</span>
    </div>
  )
}

function SplitFlap() {
  return (
    <div style={{ display: 'flex', gap: 7 }}>
      {Array.from('MOTION').map((c, i) => (
        <div
          key={i}
          style={{
            display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
            width: 52, height: 72, borderRadius: 9, background: C.stageSurface, fontFamily: mono, fontSize: 40, color: C.stageInk,
          }}
        >
          {c}
          {/* the last tile is caught mid-flip: its top flap tilts down over the letter */}
          {i === 5 && (
            <span style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 36, background: C.flap, transform: 'scaleY(0.55)', transformOrigin: '50% 100%', borderRadius: '9px 9px 0 0' }} />
          )}
          <span style={{ position: 'absolute', left: 0, right: 0, top: 35, height: 2, background: C.charcoal }} />
        </div>
      ))}
    </div>
  )
}

function StackFan() {
  const card = { position: 'absolute', left: 62, top: 14, width: 58, height: 84, borderRadius: 10, transformOrigin: '50% 100%' } as const
  return (
    <div style={{ display: 'flex', position: 'relative', width: 182, height: 112 }}>
      <span style={{ ...card, background: C.stageSurface, border: `1.5px solid ${C.stageRule}`, transform: 'translateX(-38px) rotate(-16deg)' }} />
      <span style={{ ...card, background: C.stageInk, transform: 'translateY(-6px)' }} />
      <span style={{ ...card, background: C.terracotta, transform: 'translateX(38px) rotate(16deg)' }} />
    </div>
  )
}

function ToggleStars() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
      <div style={{ display: 'flex', position: 'relative', width: 104, height: 52, borderRadius: 26, background: C.terracotta }}>
        {/* ghost knobs trace the slide from off to on */}
        <span style={{ position: 'absolute', left: 6, top: 6, width: 40, height: 40, borderRadius: 20, background: C.stageInk, opacity: 0.18 }} />
        <span style={{ position: 'absolute', left: 26, top: 6, width: 44, height: 40, borderRadius: 20, background: C.stageInk, opacity: 0.32 }} />
        <span style={{ position: 'absolute', left: 58, top: 6, width: 40, height: 40, borderRadius: 20, background: C.stageInk }} />
      </div>
      <svg width="146" height="26" viewBox="0 0 146 26">
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            transform={`translate(${i * 30} 0)`}
            d="M13 1.5l3.5 7.3 8 1-5.9 5.5 1.5 7.9L13 19.4l-7.1 3.8 1.5-7.9L1.5 9.8l8-1z"
            fill={i < 4 ? C.terracotta : C.stageRule}
          />
        ))}
      </svg>
    </div>
  )
}

function GradientButton({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', width: 300, height: 70 }}>
      <svg width="260" height="64" viewBox="0 0 260 64" style={{ position: 'absolute', left: 20, top: 3 }}>
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={C.terracotta} stopOpacity="0.15" />
            <stop offset="0.55" stopColor={C.terracotta} />
            <stop offset="0.8" stopColor={C.stageInk} />
            <stop offset="1" stopColor={C.terracotta} stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect x="1.5" y="1.5" width="257" height="61" rx="30.5" fill={C.stageSurface} stroke="url(#edge)" strokeWidth="3" />
      </svg>
      <span style={{ position: 'relative', fontSize: 24, color: C.stageInk }}>{label}</span>
      {/* cursor mid-click with ripple rings */}
      <svg width="70" height="70" viewBox="0 0 70 70" style={{ position: 'absolute', right: -34, top: 30 }}>
        <circle cx="16" cy="16" r="14" fill="none" stroke={C.terracotta} strokeOpacity="0.55" strokeWidth="2" />
        <circle cx="16" cy="16" r="26" fill="none" stroke={C.terracotta} strokeOpacity="0.25" strokeWidth="2" />
        <path d="M16 16 L16 44 L23 37 L28 48 L33 46 L28 35 L38 35 Z" fill={C.stageInk} stroke={C.charcoal} strokeWidth="2" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function Showcase({ locale }: { locale: Locale }) {
  const [flap, fan, toggle, border] = SHOWCASE.map((slug) => getMotion(slug)!.i18n[locale])
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: 440, margin: '40px 40px 40px 0' }}>
      <Tile w={440} h={176} caption={flap.title}>
        <SplitFlap />
      </Tile>
      <div style={{ display: 'flex', gap: 14 }}>
        <Tile w={213} h={196} caption={fan.title}>
          <StackFan />
        </Tile>
        <Tile w={213} h={196} caption={toggle.title}>
          <ToggleStars />
        </Tile>
      </div>
      <Tile w={440} h={150} caption={border.title}>
        <GradientButton label={border.labels.cta} />
      </Tile>
    </div>
  )
}

/** Every string drawn on the card, so the font requests subset to exactly these glyphs. */
const showcaseText = (locale: Locale) =>
  SHOWCASE.map((slug) => {
    const copy = getMotion(slug)!.i18n[locale]
    return copy.title + (copy.labels.cta ?? '')
  }).join('') + 'MOTION'

/** Loads only the glyphs in `text` from Google Fonts. Returns null offline so the image still renders with the default font. */
async function googleFont(family: string, weight: number, text: string) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:wght@${weight}&text=${encodeURIComponent(text)}`,
    ).then((r) => r.text())
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1]
    return url ? await fetch(url).then((r) => r.arrayBuffer()) : null
  } catch {
    return null
  }
}

export async function renderOg({ title, subtitle, footer, locale }: { title: string; subtitle: string; footer: string; locale: Locale }) {
  const all = `Motion Library${title}${subtitle}${footer}${showcaseText(locale)}`
  const fonts = (
    await Promise.all([
      googleFont('Outfit', 600, all).then((data) => data && { name: 'Outfit', data, weight: 600 as const }),
      googleFont('Noto Sans SC', 600, all).then((data) => data && { name: 'Noto Sans SC', data, weight: 600 as const }),
      googleFont('IBM Plex Mono', 500, all).then(
        (data) => data && { name: 'IBM Plex Mono', data, weight: 500 as const },
      ),
    ])
  ).filter((f) => f !== null)

  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', background: C.cream, fontFamily: 'Outfit, "Noto Sans SC"' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, padding: '64px 56px 56px 72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <svg width="64" height="64" viewBox="0 0 200 200">
              <rect x="8" y="8" width="184" height="184" rx="48" fill={C.charcoal} />
              <path d={LOGO_PATH} fill={C.cream} />
              <rect x="67.7" y="136" width="64.5" height="9" rx="4.5" fill={C.terracotta} />
            </svg>
            <span style={{ fontSize: 34, color: C.charcoal, letterSpacing: -0.5 }}>Motion Library</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <span style={{ fontSize: title.length > 28 ? 60 : 80, lineHeight: 1.05, color: C.charcoal, letterSpacing: -2 }}>{title}</span>
            <span style={{ width: 120, height: 9, borderRadius: 5, background: C.terracotta }} />
            <span style={{ fontSize: 28, lineHeight: 1.4, color: C.ink2, maxWidth: 640 }}>{subtitle}</span>
          </div>
          <span style={{ fontSize: 22, color: C.ink2 }}>{footer}</span>
        </div>
        <Showcase locale={locale} />
      </div>
    ),
    { ...ogSize, fonts },
  )
}
