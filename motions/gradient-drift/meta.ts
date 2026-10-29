import type { Motion } from '@/lib/motions'

export default {
  slug: 'gradient-drift',
  tech: 'css',
  component: 'background',
  trigger: 'loop',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Drifting Gradient',
      summary: 'Three soft colour fields slide past each other behind a headline, so the background feels alive without pulling focus.',
      labels: { text: 'Quietly moving' },
      prompt:
        'Make a calm animated gradient background in CSS for a React hero. Inside a container with overflow hidden, place three absolutely positioned blurred circles (filter: blur(40px), 60–70% of the container size) in three brand colours at about 70% opacity. Give each its own keyframe that moves it with translate() between three positions over 12s, 15s and 18s, ease-in-out, infinite alternate, so the combination never visibly repeats. Animate transform only. Lay a fine noise or a 4% dark overlay on top to keep text contrast, and put the headline "Quietly moving" above everything. Under prefers-reduced-motion, stop the animation and keep the circles where they are.',
    },
    'zh-CN': {
      title: '流动渐变',
      summary: '三团柔和的色块在标题后方彼此滑过，让背景有生气又不会抢走注意力。',
      labels: { text: '安静地流动' },
      prompt:
        '用 CSS 为 React 首屏制作一个安静的流动渐变背景。在一个 overflow hidden 的容器内放置三个绝对定位的模糊圆形（filter: blur(40px)，尺寸约为容器的 60–70%），分别使用三种品牌色，不透明度约 70%。给每个圆设置各自的 keyframe，用 translate() 在三个位置之间移动，时长分别为 12 秒、15 秒和 18 秒，ease-in-out，infinite alternate，让组合效果看不出重复。只对 transform 做动画。在上方叠加细微噪点或 4% 的深色遮罩以保证文字对比度，并把标题“安静地流动”放在最上层。在 prefers-reduced-motion 下停止动画，色块保持在原位。',
    },
  },
} satisfies Motion
