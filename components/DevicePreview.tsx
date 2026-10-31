'use client'

import { useState } from 'react'

const DEVICES = { mobile: 390, tablet: 820, desktop: 1440 } as const
type Device = keyof typeof DEVICES

const ICONS: Record<Device, React.ReactNode> = {
  mobile: (
    <>
      <rect x="4.5" y="1.75" width="7" height="12.5" rx="1.5" />
      <path d="M7 11.75h2" />
    </>
  ),
  tablet: (
    <>
      <rect x="2.25" y="2.25" width="11.5" height="11.5" rx="1.5" />
      <path d="M7 11.25h2" />
    </>
  ),
  desktop: (
    <>
      <rect x="1.75" y="2.25" width="12.5" height="8.5" rx="1.25" />
      <path d="M8 10.75v3M5.5 13.75h5" />
    </>
  ),
}

/**
 * The full-screen preview's toolbar and stage. StylePreview reflows on its own container, so picking a device
 * only narrows the frame; desktop fills the stage up to 1440px. The frame eases between widths (see --w in globals.css).
 */
export default function DevicePreview({
  labels,
  head,
  actions,
  children,
}: {
  labels: { label: string; devices: Record<Device, string> }
  head: React.ReactNode
  actions: React.ReactNode
  children: React.ReactNode
}) {
  const [device, setDevice] = useState<Device>('desktop')

  return (
    <>
      <div className="viewer__bar">
        <div className="viewer__head">{head}</div>
        <div className="viewer__devices" role="group" aria-label={labels.label}>
          {(Object.keys(DEVICES) as Device[]).map((d) => (
            <button key={d} type="button" className="viewer__device" aria-pressed={d === device} onClick={() => setDevice(d)}>
              <svg className="ico" viewBox="0 0 16 16" aria-hidden="true">
                {ICONS[d]}
              </svg>
              {labels.devices[d]}
              {d !== 'desktop' && <span className="viewer__px">{DEVICES[d]}</span>}
            </button>
          ))}
        </div>
        <div className="viewer__actions">{actions}</div>
      </div>
      <div className="viewer__stage">
        <div className="viewer__frame" data-device={device} style={{ '--w': device === 'desktop' ? '100%' : `${DEVICES[device]}px` } as React.CSSProperties}>
          {children}
        </div>
      </div>
    </>
  )
}
