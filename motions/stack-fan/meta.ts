import type { Motion } from '@/lib/motions'

export default {
  slug: 'stack-fan',
  tech: 'css',
  component: 'card',
  trigger: 'hover',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Stack Fan Out',
      summary: 'A tidy stack of cards fans out like a hand of playing cards on hover, showing what is underneath at a glance.',
      labels: { a: 'Ideas', b: 'Drafts', c: 'Final' },
      prompt:
        'Create a stack of three cards that fans out on hover in pure CSS. Stack the cards in one grid cell with a small resting offset (rotate -2deg, 0deg, 2deg). On :hover or :focus-within of the group, move them to rotate(-14deg) translateX(-56px), rotate(0) translateY(-8px), and rotate(14deg) translateX(56px), with transform-origin at the bottom centre so they pivot like a hand of cards. Transition transform over 420ms with cubic-bezier(0.34, 1.56, 0.64, 1) and stagger with transition-delay 0, 40, and 80ms. Make the group focusable with tabindex 0 so keyboard users can open it. Under prefers-reduced-motion, show the fanned layout without the transition. The cards read "Ideas", "Drafts", and "Final".',
    },
    'zh-CN': {
      title: '卡片扇形展开',
      summary: '一叠整齐的卡片在悬停时像手里的扑克牌一样扇形展开，一眼就能看到下面有什么。',
      labels: { a: '灵感', b: '草稿', c: '定稿' },
      prompt:
        '用纯 CSS 制作悬停时扇形展开的三张卡片。三张卡片叠放在同一个 grid 单元格中，静止时有轻微偏移（rotate -2deg、0deg、2deg）。在整组 :hover 或 :focus-within 时，分别变为 rotate(-14deg) translateX(-56px)、rotate(0) translateY(-8px)、rotate(14deg) translateX(56px)，transform-origin 设在底部中央，让它们像手里的扑克牌一样展开。transform 过渡 420ms，缓动 cubic-bezier(0.34, 1.56, 0.64, 1)，并用 transition-delay 0、40、80ms 错开。整组设置 tabindex 0，键盘用户也能展开。在 prefers-reduced-motion 下直接显示展开后的布局，不做过渡。卡片文字为“灵感”“草稿”“定稿”。',
    },
  },
} satisfies Motion
