import type { Motion } from '@/lib/motions'

export default {
  slug: 'gradient-text',
  tech: 'css',
  component: 'text',
  trigger: 'loop',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Flowing Gradient Text',
      summary: 'A warm gradient runs slowly through the letters of a headline, so it keeps a little life without moving at all.',
      labels: { text: 'Made to move' },
      prompt:
        'Create a headline with a gradient that flows through the letters in pure CSS. Set background to a linear-gradient at 90deg with four stops that repeat the first colour at the end (accent, warm yellow, light ink, accent), background-size 300% 100%, and clip it to the text with background-clip: text and color: transparent. Animate background-position from 0% to 300% over 6s linear infinite, so the loop is seamless. Use a bold display font so the gradient has room to show. Under prefers-reduced-motion, keep the gradient still. The text reads "Made to move".',
    },
    'zh-CN': {
      title: '流动渐变文字',
      summary: '一道暖色渐变缓缓流过标题文字，让标题在不移动的情况下保持一点生气。',
      labels: { text: '为动而生' },
      prompt:
        '用纯 CSS 制作渐变在文字中流动的标题。背景设为 90deg 的 linear-gradient，包含四个色标，并在末尾重复第一个颜色（主色、暖黄色、浅色文字色、主色），background-size 设为 300% 100%，用 background-clip: text 和 color: transparent 把渐变裁切到文字上。用 6s linear infinite 把 background-position 从 0% 动到 300%，让循环无缝衔接。使用粗体展示字体，让渐变有足够的面积显现。在 prefers-reduced-motion 下让渐变保持静止。文字为“为动而生”。',
    },
  },
} satisfies Motion
