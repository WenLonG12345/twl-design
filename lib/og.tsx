/* Hallmark · component: og-image · genre: modern-minimal · theme: custom (Cream Paper)
 * right panel: the site's --ease-out curve plotted as time → progress, with the same frames on a track below
 */
import { ImageResponse } from 'next/og'
import { LOGO_PATH } from '@/components/Logo'

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
}

// --ease-out from tokens.css: cubic-bezier(0.16, 1, 0.3, 1)
const EASE = [0.16, 1, 0.3, 1] as const
const FRAMES = 11

const bez = (t: number, a: number, b: number) => 3 * (1 - t) ** 2 * t * a + 3 * (1 - t) * t * t * b + t ** 3
/** Progress at time x for the ease curve; x(t) is monotonic, so bisection is enough. */
function easeAt(x: number) {
  let lo = 0
  let hi = 1
  for (let i = 0; i < 30; i++) {
    const mid = (lo + hi) / 2
    if (bez(mid, EASE[0], EASE[2]) < x) lo = mid
    else hi = mid
  }
  return bez((lo + hi) / 2, EASE[1], EASE[3])
}
// One sample per frame, evenly spaced in time: early frames spread out, late frames bunch up.
const frames = Array.from({ length: FRAMES + 1 }, (_, i) => ({ t: i / FRAMES, p: easeAt(i / FRAMES) }))

// Graph geometry inside the stage panel (px).
const G = { w: 320, h: 250, pad: 14 }
const gx = (t: number) => G.pad + t * (G.w - G.pad * 2)
const gy = (p: number) => G.h - G.pad - p * (G.h - G.pad * 2)
const TRACK = { w: 320, h: 56, r: 14 }
const tx = (p: number) => TRACK.r + 2 + p * (TRACK.w - TRACK.r * 2 - 4)

function EaseStage() {
  const curve = `M${gx(0)} ${gy(0)} C${gx(EASE[0])} ${gy(EASE[1])} ${gx(EASE[2])} ${gy(EASE[3])} ${gx(1)} ${gy(1)}`
  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        width: 400, margin: 40, padding: '40px 40px 34px', borderRadius: 32, background: C.charcoal,
      }}
    >
      <svg width={G.w} height={G.h} viewBox={`0 0 ${G.w} ${G.h}`}>
        <path d={`M${gx(0)} ${gy(1)} H${gx(1)}`} stroke={C.stageRule} strokeWidth="2" strokeDasharray="4 6" />
        <path d={`M${gx(0)} ${gy(1)} V${gy(0)} H${gx(1)}`} fill="none" stroke={C.stageRule} strokeWidth="2" />
        {frames.map((f) => (
          <path key={f.t} d={`M${gx(f.t)} ${gy(0)} v-7`} stroke={C.stageRule} strokeWidth="2" />
        ))}
        <path d={curve} fill="none" stroke={C.terracotta} strokeWidth="3" strokeLinecap="round" />
        {frames.map((f, i) => (
          <circle key={f.t} cx={gx(f.t)} cy={gy(f.p)} r={i === FRAMES ? 8 : 5} fill={i === FRAMES ? C.terracotta : C.stageInk} />
        ))}
      </svg>
      <svg width={TRACK.w} height={TRACK.h} viewBox={`0 0 ${TRACK.w} ${TRACK.h}`}>
        <path d={`M0 ${TRACK.h - 2} H${TRACK.w}`} stroke={C.stageRule} strokeWidth="2" />
        {frames.slice(0, -1).map((f) => (
          <circle key={f.t} cx={tx(f.p)} cy={TRACK.h - TRACK.r - 6} r={TRACK.r} fill="none" stroke={C.terracotta} strokeOpacity="0.45" strokeWidth="2" />
        ))}
        <circle cx={tx(1)} cy={TRACK.h - TRACK.r - 6} r={TRACK.r} fill={C.terracotta} />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: '"IBM Plex Mono"' }}>
        <span style={{ fontSize: 20, color: C.stageInk }}>ease-out</span>
        <span style={{ fontSize: 16, color: C.stageMuted }}>cubic-bezier(0.16, 1, 0.3, 1)</span>
      </div>
    </div>
  )
}

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
      googleFont('IBM Plex Mono', 500, 'ease-outcubic-bezier(0.16, 1, 0.3, 1)').then(
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
        <EaseStage />
      </div>
    ),
    { ...ogSize, fonts },
  )
}
