import type { Motion } from '@/lib/motions'

export default {
  slug: 'shine-sweep',
  tech: 'css',
  component: 'button',
  trigger: 'hover',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Shine Sweep Button',
      summary: 'A narrow band of light glides across the button once when you hover or focus it.',
      labels: { cta: 'Download the kit' },
      prompt:
        'Make a CSS-only shine sweep on a React button. The button has position: relative and overflow: hidden. Add a ::after pseudo-element covering the button with a 100-degree linear-gradient: transparent at 30%, white at 45% opacity at 50%, transparent at 70%. Rest it at transform: translateX(-120%). On :hover and :focus-visible, move it to translateX(120%) over 700ms with cubic-bezier(0.16, 1, 0.3, 1); when the pointer leaves, snap it back with transition: none so the sweep only plays forward. Animate transform only. Under prefers-reduced-motion, hide the sweep and use a slightly lighter background on hover. The label reads "Download the kit".',
    },
    'zh-CN': {
      title: '扫光按钮',
      summary: '悬停或聚焦时，一道窄窄的光带从按钮上滑过一次。',
      labels: { cta: '下载素材包' },
      prompt:
        '为 React 按钮制作纯 CSS 的扫光效果。按钮设置 position: relative 和 overflow: hidden。添加一个覆盖整个按钮的 ::after 伪元素，背景为 100 度的 linear-gradient：30% 处透明，50% 处为 45% 不透明度的白色，70% 处透明。静止时位于 transform: translateX(-120%)。在 :hover 和 :focus-visible 时，用 700ms 的 cubic-bezier(0.16, 1, 0.3, 1) 移动到 translateX(120%)；指针离开时用 transition: none 直接复位，让扫光只向前播放。只对 transform 做动画。在 prefers-reduced-motion 下隐藏扫光，悬停时改为稍亮的背景色。按钮文字为“下载素材包”。',
    },
  },
} satisfies Motion
