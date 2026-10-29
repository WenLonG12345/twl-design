import type { Motion } from '@/lib/motions'

export default {
  slug: 'scroll-draw',
  tech: 'js',
  component: 'svg',
  trigger: 'scroll',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Scroll Draw Path',
      summary: 'A route line draws itself as you scroll and rewinds when you scroll back, tying progress to the reader’s hand.',
      labels: { hint: 'Scroll', start: 'Start', end: 'Finish' },
      prompt:
        'Create an SVG path that draws in step with scroll, in React. Give the path pathLength="1" so stroke-dasharray: 1 and stroke-dashoffset: 1 hide it fully regardless of its real length. On scroll, compute progress 0 to 1 through the section and write it into a CSS custom property --p; set stroke-dashoffset: calc(1 - var(--p)) on the path so it draws forward on scroll down and rewinds on scroll up. Keep the SVG in a sticky container while the section scrolls. Draw a faint copy of the path underneath as the track, and add a dot that fills when progress reaches 1. Under prefers-reduced-motion, show the full path. The endpoints read "Start" and "Finish".',
    },
    'zh-CN': {
      title: '滚动绘制路径',
      summary: '路线随着滚动一点点画出来，往回滚又会倒退，把进度交到读者手里。',
      labels: { hint: '向下滚动', start: '起点', end: '终点' },
      prompt:
        '用 React 制作随滚动同步绘制的 SVG 路径。给路径设置 pathLength="1"，这样无论实际长度多少，stroke-dasharray: 1 和 stroke-dashoffset: 1 都能把它完全隐藏。滚动时计算区块内 0 到 1 的进度，写入 CSS 自定义属性 --p；在路径上设置 stroke-dashoffset: calc(1 - var(--p))，向下滚动时向前绘制，向上滚动时倒退。区块滚动期间让 SVG 保持在 sticky 容器中。在下方画一条淡色的同样路径作为轨道，进度达到 1 时终点圆点被填满。在 prefers-reduced-motion 下直接显示完整路径。两个端点文字为“起点”和“终点”。',
    },
  },
} satisfies Motion
