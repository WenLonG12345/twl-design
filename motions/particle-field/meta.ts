import type { Motion } from '@/lib/motions'

export default {
  slug: 'particle-field',
  tech: 'canvas',
  component: 'background',
  trigger: 'pointer',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Constellation Field',
      summary: 'Points drift slowly across a canvas and draw thin lines to each other when the pointer passes near them.',
      labels: { caption: 'Move your pointer here' },
      prompt:
        'Create a React <canvas> background of about 60 drifting points that link up near the pointer. Size the canvas to its parent with a ResizeObserver and scale by devicePixelRatio. Give each point a random position and a velocity under 0.3px per frame, and wrap them at the edges. Each requestAnimationFrame, draw the points as 1.5px dots, and for every pair where both points are within 120px of the pointer, draw a line whose opacity fades with distance. Read the dot and line colours from CSS custom properties so the effect follows the theme. Pause the loop when the canvas is off screen (IntersectionObserver), and draw a single static frame under prefers-reduced-motion. Overlay the caption "Move your pointer here".',
    },
    'zh-CN': {
      title: '星座粒子场',
      summary: '粒子在画布上缓慢漂移，当指针经过附近时，粒子之间会连出细线。',
      labels: { caption: '把指针移到这里' },
      prompt:
        '用 React <canvas> 制作一个约 60 个漂移粒子的背景，粒子在指针附近互相连线。用 ResizeObserver 让画布跟随父元素尺寸，并按 devicePixelRatio 缩放。每个粒子有随机位置和每帧不超过 0.3px 的速度，碰到边缘时从另一侧出现。每次 requestAnimationFrame 时，把粒子画成 1.5px 的圆点；对于两个粒子都在指针 120px 范围内的每一对，画一条随距离变淡的线。点和线的颜色从 CSS 自定义属性读取，以跟随主题。画布离开屏幕时暂停循环（IntersectionObserver），在 prefers-reduced-motion 下只绘制一帧静态画面。在上方叠加文字“把指针移到这里”。',
    },
  },
} satisfies Motion
