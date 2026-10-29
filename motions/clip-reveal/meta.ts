import type { Motion } from '@/lib/motions'

export default {
  slug: 'clip-reveal',
  tech: 'css',
  component: 'image',
  trigger: 'entrance',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Image Clip Reveal',
      summary: 'A coloured panel sweeps across and pulls the picture in behind it, while the picture itself settles from a slight zoom.',
      labels: { caption: 'Cameron Highlands, 6:40 am', replay: 'Replay' },
      prompt:
        'Create a React image entrance in CSS. Wrap the <img> in a figure with overflow hidden. Play two animations together when it enters the viewport (IntersectionObserver, threshold 0.4, once): the figure goes from clip-path: inset(0 100% 0 0) to inset(0 0 0 0) over 900ms with cubic-bezier(0.65, 0, 0.35, 1), and the image inside scales from 1.15 to 1 over 1400ms with cubic-bezier(0.16, 1, 0.3, 1). Add a solid accent-coloured ::after panel that leads the reveal: it scales from scaleX(0) to scaleX(1) with origin left, then to scaleX(0) with origin right, over the same 900ms. Show the caption "Cameron Highlands, 6:40 am" fading in 300ms after the image. Give the image real alt text. Under prefers-reduced-motion, fade the image in over 150ms instead.',
    },
    'zh-CN': {
      title: '图片裁切揭示',
      summary: '一块彩色面板扫过，把图片拉进画面，图片本身则从轻微放大的状态慢慢回落。',
      labels: { caption: '金马伦高原，早上 6:40', replay: '重播' },
      prompt:
        '用 CSS 为 React 制作图片入场动画。把 <img> 包在一个 overflow hidden 的 figure 中。进入视野时（IntersectionObserver，threshold 0.4，只触发一次）同时播放两个动画：figure 在 900ms 内从 clip-path: inset(0 100% 0 0) 过渡到 inset(0 0 0 0)，缓动为 cubic-bezier(0.65, 0, 0.35, 1)；里面的图片在 1400ms 内从 1.15 缩放到 1，缓动为 cubic-bezier(0.16, 1, 0.3, 1)。再加一个纯强调色的 ::after 面板引领揭示：在同样的 900ms 内先以左侧为原点从 scaleX(0) 变为 scaleX(1)，再以右侧为原点变为 scaleX(0)。图片出现 300ms 后淡入说明文字“金马伦高原，早上 6:40”。为图片提供真实的 alt 文本。在 prefers-reduced-motion 下改为 150ms 的图片淡入。',
    },
  },
} satisfies Motion
