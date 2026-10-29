import type { Motion } from '@/lib/motions'

export default {
  slug: 'pulse-rings',
  tech: 'css',
  component: 'background',
  trigger: 'loop',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Pulse Rings',
      summary: 'Rings ripple out from a live indicator at an even pace, like a signal broadcasting from the centre.',
      labels: { label: 'Live' },
      prompt:
        'Create a pulsing rings indicator in pure CSS. Centre a small badge with a dot and a label. Behind it, stack three absolutely positioned rings (1.5px accent border, border-radius 50%) of the same size. Animate each with a 3s infinite keyframe from scale(0.4) and opacity 0.8 to scale(3) and opacity 0, with cubic-bezier(0.16, 1, 0.3, 1) so they burst out then drift. Offset them with animation-delay 0s, 1s, and 2s so a new ring always starts as the last fades. Pause off screen, and under prefers-reduced-motion show one static ring. The label reads "Live".',
    },
    'zh-CN': {
      title: '脉冲光环',
      summary: '光环以均匀的节奏从直播标识向外扩散，像信号从中心向外广播。',
      labels: { label: '直播中' },
      prompt:
        '用纯 CSS 制作脉冲光环指示器。中央放一个带圆点和文字的小徽章。在它后面叠放三个大小相同、绝对定位的圆环（1.5px 主色边框，border-radius 50%）。每个圆环运行 3s 无限循环的 keyframe，从 scale(0.4)、opacity 0.8 到 scale(3)、opacity 0，缓动 cubic-bezier(0.16, 1, 0.3, 1)，让它们先迅速扩开再缓缓飘散。用 animation-delay 0s、1s、2s 错开，让上一个淡出时总有新的开始。离开屏幕时暂停，在 prefers-reduced-motion 下只显示一个静态圆环。文字为“直播中”。',
    },
  },
} satisfies Motion
