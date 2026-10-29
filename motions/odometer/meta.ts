import type { Motion } from '@/lib/motions'

export default {
  slug: 'odometer',
  tech: 'css',
  component: 'text',
  trigger: 'click',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Odometer Digits',
      summary: 'Each digit is a vertical strip of 0–9 that rolls to its new value, with the digits on the right travelling further.',
      labels: { caption: 'Monthly visitors', shuffle: 'New number' },
      prompt:
        'Create a React odometer number in CSS. Render each digit as a fixed-height window (height 1em, overflow hidden) containing a vertical strip of the numbers 0 to 9. To show digit d, set transform: translateY(calc(-1em * d)) on the strip with a 900ms cubic-bezier(0.16, 1, 0.3, 1) transition, and add a 60ms transition-delay per position so the digits settle from left to right. Use font-variant-numeric: tabular-nums so the width never jumps, and render separators like commas as static characters. Add a "New number" button that picks a random 6-digit value. Put the real value in aria-label on the container and announce changes with aria-live="polite". Under prefers-reduced-motion, change the digits without the roll. Caption: "Monthly visitors".',
    },
    'zh-CN': {
      title: '里程表数字',
      summary: '每一位数字都是一条 0–9 的竖向数字带，滚动到新的数值，右侧的数字滚得更远。',
      labels: { caption: '每月访客', shuffle: '换个数字' },
      prompt:
        '用 CSS 为 React 制作里程表式数字。每一位数字是一个固定高度的窗口（height 1em，overflow hidden），里面放一条 0 到 9 的竖向数字带。要显示数字 d，就给数字带设置 transform: translateY(calc(-1em * d))，过渡时间 900ms，缓动为 cubic-bezier(0.16, 1, 0.3, 1)，并按位置每位增加 60ms 的 transition-delay，让数字从左到右依次停稳。使用 font-variant-numeric: tabular-nums 保证宽度不跳动，逗号等分隔符作为静态字符显示。添加一个“换个数字”按钮，随机生成一个 6 位数。把真实数值放在容器的 aria-label 中，并用 aria-live="polite" 播报变化。在 prefers-reduced-motion 下直接切换数字，不做滚动。说明文字为“每月访客”。',
    },
  },
} satisfies Motion
