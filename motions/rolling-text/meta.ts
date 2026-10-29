import type { Motion } from '@/lib/motions'

export default {
  slug: 'rolling-text',
  tech: 'css',
  component: 'button',
  trigger: 'hover',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Rolling Text Button',
      summary: 'On hover each letter of the label rolls up and is replaced by a copy from below, in a quick wave from left to right.',
      labels: { cta: 'Get in touch' },
      prompt:
        'Create a button whose label rolls letter by letter on hover, in pure CSS with a React split. Split the label into one span per character (keep spaces as non-breaking spaces) and give each span text-shadow: 0 1.3em 0 currentColor, which draws an identical copy one line below. Wrap the letters in an inline-flex span with height 1.3em and overflow: hidden so only one line shows, and give each letter a line-height of 1.3em. On :hover and :focus-visible, translate every letter to translateY(-1.3em) over 400ms with cubic-bezier(0.16, 1, 0.3, 1), and set transition-delay to index × 25ms via a CSS variable so the roll sweeps left to right. Put the full label in aria-label and mark the letter spans aria-hidden. Under prefers-reduced-motion, keep the label still and change only the background. The label reads "Get in touch".',
    },
    'zh-CN': {
      title: '滚动文字按钮',
      summary: '悬停时按钮文字逐字向上滚走，被下方的副本替换，从左到右形成一道快速的波浪。',
      labels: { cta: '联系我们' },
      prompt:
        '用纯 CSS 配合 React 拆字，制作悬停时文字逐字滚动的按钮。把文字拆成每个字一个 span（空格保留为不换行空格），每个 span 设置 text-shadow: 0 1.3em 0 currentColor，在下方一行画出完全相同的副本。把这些字包在一个 inline-flex、高度 1.3em、overflow: hidden 的 span 中，只露出一行，每个字的行高为 1.3em。在 :hover 和 :focus-visible 时，所有字在 400ms 内移到 translateY(-1.3em)，缓动 cubic-bezier(0.16, 1, 0.3, 1)，并通过 CSS 变量把 transition-delay 设为 序号 × 25ms，让滚动从左到右扫过。完整文字放在 aria-label 中，拆分出的 span 设为 aria-hidden。在 prefers-reduced-motion 下文字保持不动，只改变背景色。按钮文字为“联系我们”。',
    },
  },
} satisfies Motion
