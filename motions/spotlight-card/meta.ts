import type { Motion } from '@/lib/motions'

export default {
  slug: 'spotlight-card',
  tech: 'css',
  component: 'card',
  trigger: 'pointer',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Spotlight Card',
      summary: 'A soft glow follows the pointer inside the card and lights up the border right where the pointer is.',
      labels: { kicker: 'Plan', name: 'Studio', price: 'RM 49 / month', note: 'Unlimited projects and exports' },
      prompt:
        'Make a React card with a pointer-following spotlight. On pointermove, write the pointer position relative to the card into --x and --y (in px). Add a ::before layer with a 320px radial-gradient circle at var(--x) var(--y), from the accent at 18% opacity to transparent, and fade it from opacity 0 to 1 on hover over 200ms. Light up the border at the same spot: use a 1px padding-box/border-box background trick (background: linear-gradient(surface, surface) padding-box, radial-gradient(160px circle at var(--x) var(--y), accent, border colour) border-box with a transparent border). The card shows the label "Plan", the title "Studio", the price "RM 49 / month" and the note "Unlimited projects and exports". Under prefers-reduced-motion, keep the glow centred and static.',
    },
    'zh-CN': {
      title: '聚光卡片',
      summary: '一团柔光跟着指针在卡片内移动，并点亮指针所在位置的边框。',
      labels: { kicker: '方案', name: '工作室版', price: 'RM 49 / 月', note: '项目与导出数量不限' },
      prompt:
        '用 React 制作一个跟随指针的聚光卡片。在 pointermove 时，把指针相对卡片的位置（px）写入 --x 和 --y。添加一个 ::before 层，使用以 var(--x) var(--y) 为圆心、直径 320px 的 radial-gradient，从 18% 不透明度的强调色过渡到透明，悬停时在 200ms 内从 opacity 0 淡入到 1。在同一位置点亮边框：使用 1px 的 padding-box/border-box 背景技巧（background: linear-gradient(卡片底色, 卡片底色) padding-box, radial-gradient(160px circle at var(--x) var(--y), 强调色, 边框色) border-box，边框设为透明）。卡片显示标签“方案”、标题“工作室版”、价格“RM 49 / 月”和说明“项目与导出数量不限”。在 prefers-reduced-motion 下光晕固定在中央，不跟随。',
    },
  },
} satisfies Motion
