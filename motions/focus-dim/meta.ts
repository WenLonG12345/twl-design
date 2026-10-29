import type { Motion } from '@/lib/motions'

export default {
  slug: 'focus-dim',
  tech: 'css',
  component: 'card',
  trigger: 'hover',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Focus Dim Siblings',
      summary: 'Hovering one card lifts it slightly while the others fade and soften, so attention lands on a single choice.',
      labels: { a: 'Starter', b: 'Studio', c: 'Team', price: 'per month' },
      prompt:
        'Create a card group where hovering one card dims its siblings, in pure CSS. Lay out three cards in a grid. Use :has() on the group: .group:has(.card:hover) .card:not(:hover) gets opacity 0.4, scale(0.97), and a 1px blur, while the hovered card gets translateY(-4px) and a stronger border. Do the same for :focus-within so keyboard focus behaves identically. Transition opacity, transform, and filter over 260ms with cubic-bezier(0.16, 1, 0.3, 1). Make each card a link or button so it can be focused. Under prefers-reduced-motion, keep the dimming but drop the scale, lift, and blur. The cards read "Starter", "Studio", and "Team".',
    },
    'zh-CN': {
      title: '聚焦淡化其他卡片',
      summary: '悬停在一张卡片上时它会微微抬起，其他卡片变淡变柔，让注意力落在一个选项上。',
      labels: { a: '入门版', b: '工作室版', c: '团队版', price: '每月' },
      prompt:
        '用纯 CSS 制作悬停一张卡片时其他卡片变淡的卡片组。三张卡片用 grid 排列。在组上使用 :has()：.group:has(.card:hover) .card:not(:hover) 设为 opacity 0.4、scale(0.97)、1px 模糊，被悬停的卡片 translateY(-4px) 并加深边框。对 :focus-within 做同样处理，让键盘聚焦表现一致。opacity、transform 和 filter 过渡 260ms，缓动 cubic-bezier(0.16, 1, 0.3, 1)。每张卡片是链接或按钮，可以被聚焦。在 prefers-reduced-motion 下保留变淡，去掉缩放、抬起和模糊。卡片文字为“入门版”“工作室版”“团队版”。',
    },
  },
} satisfies Motion
