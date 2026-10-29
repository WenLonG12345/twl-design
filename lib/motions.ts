import type { Locale } from './i18n'

export const techs = ['css', 'js', 'gsap', 'canvas'] as const
export const components = ['text', 'button', 'form', 'card', 'image', 'svg', 'background', 'layout', 'cursor'] as const
export const triggers = ['entrance', 'loop', 'hover', 'click', 'toggle', 'scroll', 'drag', 'pointer'] as const

export type Tech = (typeof techs)[number]
export type Component = (typeof components)[number]
export type Trigger = (typeof triggers)[number]

export const techLabel: Record<Tech, string> = { css: 'CSS', js: 'JS', gsap: 'GSAP', canvas: 'Canvas' }

/** Text that changes with the locale: card copy, the AI prompt, and words shown inside the demo. */
export type MotionCopy = {
  title: string
  summary: string
  prompt: string
  labels: Record<string, string>
}

export type Motion = {
  slug: string
  tech: Tech
  component: Component
  trigger: Trigger
  /** ISO date, used for sorting, the sitemap and structured data. */
  added: string
  /** Every locale is required, so a missing translation fails the type check. */
  i18n: Record<Locale, MotionCopy>
}
