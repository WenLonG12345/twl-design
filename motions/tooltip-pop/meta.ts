import type { Motion } from '@/lib/motions'

export default {
  slug: 'tooltip-pop',
  tech: 'css',
  component: 'button',
  trigger: 'hover',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Tooltip Pop',
      summary: 'Tooltips pop up above icon buttons with a slight springy overshoot after a short pause, so they help without getting in the way.',
      labels: { bold: 'Bold', italic: 'Italic', link: 'Add link', toolbar: 'Formatting' },
      prompt:
        'Create icon-button tooltips that pop in with CSS. Each button is position: relative and holds a tooltip element with role="tooltip", referenced by aria-describedby on the button, positioned above it and centred with a small arrow from a rotated pseudo-element. At rest the tooltip has opacity 0, transform: translate(-50%, 4px) scale(0.85), transform-origin bottom centre, and pointer-events none. On :hover and :focus-visible, transition to opacity 1 and translate(-50%, 0) scale(1) over 220ms with cubic-bezier(0.34, 1.56, 0.64, 1) for a slight overshoot, after a 250ms delay so passing the pointer over the toolbar does not flash every tip. On the way out, use no delay and a 120ms fade. Under prefers-reduced-motion, fade without scaling. The tooltips read "Bold", "Italic", and "Add link".',
    },
    'zh-CN': {
      title: '弹出提示',
      summary: '短暂停顿后，提示气泡带着一点弹性从图标按钮上方弹出，帮得上忙又不碍事。',
      labels: { bold: '加粗', italic: '斜体', link: '添加链接', toolbar: '格式' },
      prompt:
        '用 CSS 制作弹出式的图标按钮提示。每个按钮设为 position: relative，内含一个 role="tooltip" 的提示元素，并通过按钮上的 aria-describedby 关联；提示位于按钮上方居中，用旋转的伪元素画一个小箭头。静止时提示为 opacity 0、transform: translate(-50%, 4px) scale(0.85)，transform-origin 为底部中央，pointer-events none。在 :hover 和 :focus-visible 时，用 220ms、cubic-bezier(0.34, 1.56, 0.64, 1) 过渡到 opacity 1、translate(-50%, 0) scale(1)，带一点回弹；并延迟 250ms 出现，避免指针划过工具栏时每个提示都闪一下。消失时不延迟，用 120ms 淡出。在 prefers-reduced-motion 下只淡入淡出，不缩放。提示文字为“加粗”“斜体”“添加链接”。',
    },
  },
} satisfies Motion
