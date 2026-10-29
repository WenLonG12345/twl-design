import type { Locale } from '@/lib/i18n'
import type { Motion } from '@/lib/motions'
import { registry } from './registry.generated'

// To add a motion: create motions/<slug>/meta.ts and Demo.tsx (+ optional demo.module.css).
// `npm run gen` (runs before dev and build) registers it everywhere.
export const motions: Motion[] = [...registry].sort((a, b) => b.added.localeCompare(a.added) || a.slug.localeCompare(b.slug))

export const getMotion = (slug: string) => motions.find((m) => m.slug === slug)

/** The flat, serialisable shape client components receive for one locale. */
export const motionsFor = (locale: Locale) =>
  motions.map(({ i18n, ...rest }) => ({ ...rest, ...i18n[locale] }))

export type LocalizedMotion = ReturnType<typeof motionsFor>[number]
