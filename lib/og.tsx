import { ImageResponse } from 'next/og'
import { LOGO_PATH } from '@/components/Logo'

export const ogSize = { width: 1200, height: 630 }

// The OG renderer can't read CSS variables, so the brand colours are repeated here from tokens.css.
const C = { cream: '#F2EEE6', paper2: '#E9E3D8', charcoal: '#1C1A18', ink2: '#4A4540', terracotta: '#C4702C', stageInk: '#EDE8DF' }

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

export async function renderOg({ title, subtitle, footer }: { title: string; subtitle: string; footer: string }) {
  const all = `Motion Library${title}${subtitle}${footer}`
  const fonts = (
    await Promise.all([
      googleFont('Outfit', 600, all).then((data) => data && { name: 'Outfit', data, weight: 600 as const }),
      googleFont('Noto Sans SC', 600, all).then((data) => data && { name: 'Noto Sans SC', data, weight: 600 as const }),
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
            <span style={{ fontSize: title.length > 28 ? 64 : 80, lineHeight: 1.05, color: C.charcoal, letterSpacing: -2 }}>{title}</span>
            <span style={{ width: 120, height: 9, borderRadius: 5, background: C.terracotta }} />
            <span style={{ fontSize: 28, lineHeight: 1.4, color: C.ink2, maxWidth: 640 }}>{subtitle}</span>
          </div>
          <span style={{ fontSize: 22, color: C.ink2 }}>{footer}</span>
        </div>
        {/* charcoal stage with a ball leaving motion frames, the same stage every demo plays on */}
        <div style={{ display: 'flex', position: 'relative', width: 380, margin: 40, borderRadius: 32, background: C.charcoal }}>
          {[0.12, 0.22, 0.38, 0.62, 1].map((o, i) => (
            <span
              key={o}
              style={{
                position: 'absolute', left: 40 + i * 58, top: 380 - i * i * 18, width: 72, height: 72,
                borderRadius: 36, background: C.terracotta, opacity: o,
              }}
            />
          ))}
          <span style={{ position: 'absolute', left: 40, right: 40, bottom: 60, height: 2, background: C.stageInk, opacity: 0.25 }} />
        </div>
      </div>
    ),
    { ...ogSize, fonts },
  )
}
