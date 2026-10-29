import type { Motion } from '@/lib/motions'

export default {
  slug: 'outline-fill',
  tech: 'css',
  component: 'text',
  trigger: 'hover',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Outline Text Fill',
      summary: 'Hollow outlined letters fill with colour from the bottom up when you hover, like liquid rising inside the type.',
      labels: { text: 'Explore' },
      prompt:
        'Create outlined text that fills on hover in pure CSS. Render the word with color: transparent and -webkit-text-stroke: 1.5px in the light ink colour. Stack an ::after layer on top with content: attr(data-text), the accent colour as a solid fill, and clip-path: inset(100% 0 0 0) so it is hidden. On :hover and :focus-visible, transition the clip-path to inset(0 0 0 0) over 500ms with cubic-bezier(0.16, 1, 0.3, 1), so the fill rises from the baseline. Use a heavy display font so the outline reads well. Keep the real text in a visually hidden span and mark the visual element aria-hidden. Under prefers-reduced-motion, swap to the filled state instantly. The word reads "Explore".',
    },
    'zh-CN': {
      title: '描边文字填充',
      summary: '悬停时镂空的描边文字从下往上被填满颜色，像液体在字里慢慢上升。',
      labels: { text: '探索更多' },
      prompt:
        '用纯 CSS 制作悬停时被填满的描边文字。文字设为 color: transparent，并用 -webkit-text-stroke: 1.5px（浅色文字色）描边。上面叠一层 ::after，content: attr(data-text)，以主色实心填充，并设为 clip-path: inset(100% 0 0 0) 隐藏。在 :hover 和 :focus-visible 时，把 clip-path 在 500ms 内过渡到 inset(0 0 0 0)，缓动 cubic-bezier(0.16, 1, 0.3, 1)，让颜色从基线升起。使用粗体展示字体，让描边清晰可读。真实文字放在视觉隐藏的 span 中，视觉元素设为 aria-hidden。在 prefers-reduced-motion 下直接切换到填满状态。文字为“探索更多”。',
    },
  },
} satisfies Motion
