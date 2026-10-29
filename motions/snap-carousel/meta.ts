import type { Motion } from '@/lib/motions'

export default {
  slug: 'snap-carousel',
  tech: 'css',
  component: 'card',
  trigger: 'drag',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Focus Carousel',
      summary: 'Swipe through a row of cards that snap to the centre, where the focused card grows to full size and the rest recede.',
      labels: { hint: 'Swipe or scroll sideways', items: 'Dawn|Noon|Dusk|Night|Storm', carousel: 'Moods' },
      prompt:
        'Create a centre-focus card carousel with native scroll snapping and CSS scroll-driven animations. The track is a horizontal flex row with overflow-x: auto, scroll-snap-type: x mandatory, and inline padding of half the track width minus half a card so the first and last cards can reach the centre. Each card has scroll-snap-align: center. Animate each card with animation-timeline: view(inline) and a keyframe that goes from scale(0.8) and opacity 0.45 at 0%, to scale(1) and opacity 1 at 50%, back to scale(0.8) and opacity 0.45 at 100%, so the card at the centre is largest. Wrap the animation in @supports (animation-timeline: view()) so other browsers get a plain snapping row. Hide the scrollbar visually but keep the track keyboard-focusable. Under prefers-reduced-motion, drop the scaling and keep the snapping. The cards read Dawn, Noon, Dusk, Night, and Storm.',
    },
    'zh-CN': {
      title: '居中聚焦轮播',
      summary: '左右滑动一排会吸附到中心的卡片，位于中间的卡片放大到完整尺寸，其余的向后退。',
      labels: { hint: '左右滑动或横向滚动', items: '黎明|正午|黄昏|深夜|风暴', carousel: '氛围' },
      prompt:
        '用原生滚动吸附和 CSS 滚动驱动动画制作居中聚焦的卡片轮播。轨道是一个横向 flex 行，设置 overflow-x: auto、scroll-snap-type: x mandatory，左右内边距为“轨道宽度的一半减去卡片宽度的一半”，让第一张和最后一张卡片也能到达中心。每张卡片设置 scroll-snap-align: center。用 animation-timeline: view(inline) 为每张卡片驱动 keyframe：0% 时 scale(0.8)、opacity 0.45，50% 时 scale(1)、opacity 1，100% 时回到 scale(0.8)、opacity 0.45，这样位于中心的卡片最大。把动画包在 @supports (animation-timeline: view()) 中，其他浏览器得到普通的吸附滚动行。视觉上隐藏滚动条，但保持轨道可通过键盘聚焦。在 prefers-reduced-motion 下去掉缩放，保留吸附。卡片文字为黎明、正午、黄昏、深夜、风暴。',
    },
  },
} satisfies Motion
