import type { Motion } from '@/lib/motions'

export default {
  slug: 'success-check',
  tech: 'css',
  component: 'svg',
  trigger: 'entrance',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Success Check',
      summary: 'A ring draws itself closed, the check mark strokes in, and the badge gives one small pop to say the job is done.',
      labels: { caption: 'Payment complete', replay: 'Replay' },
      prompt:
        'Create an animated success badge in SVG and CSS. Draw a circle (r 26) and a check path inside a 64px viewBox, both with stroke only. Set each stroke-dasharray to its path length and stroke-dashoffset to the same value. Animate the circle offset to 0 over 600ms with cubic-bezier(0.65, 0, 0.35, 1), then the check offset to 0 over 300ms starting at 550ms, then fill the circle by scaling a filled disc from 0 to 1 over 260ms at 450ms so the check strokes in on top of it, and finally pop the whole badge with scale 1 → 1.1 → 1 over 300ms at 850ms. Use animation-fill-mode both so it rests in the finished state. Add a Replay button that remounts the SVG with a new key. Under prefers-reduced-motion, show the finished badge. The caption reads "Payment complete".',
    },
    'zh-CN': {
      title: '成功对勾',
      summary: '圆环自己画合，对勾随之描出，徽章再轻轻弹一下，告诉你事情办妥了。',
      labels: { caption: '支付完成', replay: '重播' },
      prompt:
        '用 SVG 和 CSS 制作成功徽章动画。在 64px 的 viewBox 中画一个圆（r 26）和一条对勾路径，都只有描边。每条路径的 stroke-dasharray 设为路径长度，stroke-dashoffset 设为同样的值。先用 600ms、cubic-bezier(0.65, 0, 0.35, 1) 把圆的 offset 动到 0，在 550ms 时开始用 300ms 把对勾的 offset 动到 0，在 450ms 时用 260ms 把一个实心圆盘从 scale 0 放大到 1 作为底色，让对勾画在它上面，最后在 850ms 时让整个徽章用 300ms 做 scale 1 → 1.1 → 1 的弹跳。使用 animation-fill-mode both，让它停在完成状态。添加一个“重播”按钮，用新的 key 重新挂载 SVG。在 prefers-reduced-motion 下直接显示完成后的徽章。说明文字为“支付完成”。',
    },
  },
} satisfies Motion
