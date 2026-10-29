import type { Motion } from '@/lib/motions'

export default {
  slug: 'path-draw',
  tech: 'css',
  component: 'svg',
  trigger: 'entrance',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Path Draw',
      summary: 'A line illustration draws itself stroke by stroke, then a dot travels along the finished route.',
      labels: { label: 'Route from home to the studio', replay: 'Replay' },
      prompt:
        'Make an SVG line drawing animate itself in React with CSS. For each <path>, read its length with getTotalLength() and set it as --len; start with stroke-dasharray: var(--len) and stroke-dashoffset: var(--len), then animate stroke-dashoffset to 0 over 1.6s with cubic-bezier(0.65, 0, 0.35, 1), staggering each path by 250ms. Use stroke-linecap: round and fill: none. After the drawing finishes, send a small accent-coloured dot along the main route using offset-path with the same path data, animating offset-distance from 0% to 100% over 1.8s. Add a "Replay" button that restarts by changing a key. Give the SVG role="img" and an aria-label "Route from home to the studio". Under prefers-reduced-motion, show the finished drawing and keep the dot at the end.',
    },
    'zh-CN': {
      title: '路径描绘',
      summary: '线条插画一笔一笔地画出来，画完后一个小圆点沿着路线移动。',
      labels: { label: '从家到工作室的路线', replay: '重播' },
      prompt:
        '用 CSS 让 React 中的 SVG 线条图自己画出来。对每个 <path> 用 getTotalLength() 读取长度并设为 --len；初始设置 stroke-dasharray: var(--len) 和 stroke-dashoffset: var(--len)，然后在 1.6 秒内把 stroke-dashoffset 动画到 0，缓动为 cubic-bezier(0.65, 0, 0.35, 1)，每条路径依次错开 250ms。使用 stroke-linecap: round 和 fill: none。画完后，用相同路径数据的 offset-path 让一个强调色的小圆点沿主路线移动，offset-distance 在 1.8 秒内从 0% 动画到 100%。添加一个“重播”按钮，通过改变 key 重新播放。给 SVG 设置 role="img" 和 aria-label“从家到工作室的路线”。在 prefers-reduced-motion 下直接显示完成的图，圆点停在终点。',
    },
  },
} satisfies Motion
