import type { Motion } from '@/lib/motions'

export default {
  slug: 'dot-grid',
  tech: 'canvas',
  component: 'background',
  trigger: 'pointer',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Reactive Dot Grid',
      summary: 'A grid of dots swells and pushes away from the pointer, like a field of pins under your hand.',
      labels: { caption: 'Move across the grid' },
      prompt:
        'Build a React <canvas> background of a dot grid that reacts to the pointer. Size the canvas to its parent with a ResizeObserver and devicePixelRatio. Lay out dots every 18px. Each animation frame, for every dot compute its distance d to the pointer; within 90px, push it away along that direction by (1 − d/90)² × 10px and grow its radius from 1.2px to 3px, and blend its colour from muted to the accent. Ease each dot toward its target position with a 0.18 lerp so it settles smoothly when the pointer leaves. Read colours from CSS custom properties. Stop the requestAnimationFrame loop when the canvas is off screen (IntersectionObserver). Under prefers-reduced-motion, draw the static grid and highlight only the nearest dots without displacement. Overlay the caption "Move across the grid".',
    },
    'zh-CN': {
      title: '响应式点阵',
      summary: '点阵会在指针附近膨胀并被推开，像手掌下的一片针。',
      labels: { caption: '在点阵上移动指针' },
      prompt:
        '用 React <canvas> 制作一个会响应指针的点阵背景。用 ResizeObserver 和 devicePixelRatio 让画布跟随父元素尺寸。每隔 18px 排一个点。每一帧中，计算每个点到指针的距离 d；在 90px 以内时，沿该方向把点推开 (1 − d/90)² × 10px，半径从 1.2px 增大到 3px，颜色从灰色过渡到强调色。用 0.18 的 lerp 让每个点平滑地靠近目标位置，指针离开时也能自然回位。颜色从 CSS 自定义属性读取。画布离开屏幕时停止 requestAnimationFrame 循环（IntersectionObserver）。在 prefers-reduced-motion 下绘制静态点阵，只高亮最近的点，不做位移。上方叠加文字“在点阵上移动指针”。',
    },
  },
} satisfies Motion
