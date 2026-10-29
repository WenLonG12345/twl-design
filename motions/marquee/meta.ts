import type { Motion } from '@/lib/motions'

export default {
  slug: 'marquee',
  tech: 'css',
  component: 'layout',
  trigger: 'loop',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Infinite Marquee',
      summary: 'Two rows of tags glide in opposite directions without a seam, and pause while you hover them.',
      labels: { row1: 'Branding|Web design|Motion|Next.js|Copywriting|SEO', row2: 'E-commerce|Dashboards|Prototypes|Landing pages|Design systems' },
      prompt:
        'Build a seamless CSS marquee in React with two rows moving in opposite directions. In each row, render the item list twice inside one flex track (the second copy aria-hidden) and animate the track from translateX(0) to translateX(-50%) with a linear infinite animation (30s for row one, 36s reversed for row two), so the loop has no jump. Use gap on the track and padding-right equal to the gap so the halves line up exactly. Fade the edges with mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent). Pause the animation on hover and focus-within with animation-play-state: paused. Items are rounded tags. Under prefers-reduced-motion, stop the animation and let the row scroll horizontally instead.',
    },
    'zh-CN': {
      title: '无限跑马灯',
      summary: '两排标签朝相反方向无缝滑动，悬停时暂停。',
      labels: { row1: '品牌设计|网页设计|动效|Next.js|文案|SEO', row2: '电商|数据看板|原型|落地页|设计系统' },
      prompt:
        '用 CSS 在 React 中制作两排反向移动的无缝跑马灯。每一排在同一个 flex 轨道中把项目列表渲染两遍（第二份加 aria-hidden），并让轨道从 translateX(0) 线性无限动画到 translateX(-50%)（第一排 30 秒，第二排 36 秒反向），这样循环时不会跳动。轨道使用 gap，并设置与 gap 相同的 padding-right，让两半精确对齐。用 mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent) 淡化两侧边缘。悬停和 focus-within 时用 animation-play-state: paused 暂停动画。项目为圆角标签。在 prefers-reduced-motion 下停止动画，改为允许横向滚动。',
    },
  },
} satisfies Motion
