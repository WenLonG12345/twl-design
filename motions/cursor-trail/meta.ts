import type { Motion } from '@/lib/motions'

export default {
  slug: 'cursor-trail',
  tech: 'canvas',
  component: 'cursor',
  trigger: 'pointer',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Ribbon Cursor Trail',
      summary: 'The pointer leaves a smooth ribbon behind it that thins out and fades within half a second.',
      labels: { caption: 'Draw with your pointer' },
      prompt:
        'Build a React cursor trail on a <canvas> that covers its container. Keep an array of the last pointer points with timestamps (push on pointermove, drop points older than 450ms). Each requestAnimationFrame, clear the canvas and draw the points as connected segments with quadraticCurveTo through midpoints for a smooth line; set each segment’s lineWidth from 1px to 10px and its globalAlpha from 0 to 1 based on its age, so the tail thins and fades. Use lineCap round and the accent colour from a CSS custom property. Only run the loop while points exist. Size the canvas with devicePixelRatio and ResizeObserver, and ignore touch pointers so scrolling on phones is not blocked. Under prefers-reduced-motion, do not draw a trail. Caption: "Draw with your pointer".',
    },
    'zh-CN': {
      title: '丝带光标拖尾',
      summary: '指针身后留下一条平滑的丝带，在半秒内逐渐变细、消失。',
      labels: { caption: '用指针画画看' },
      prompt:
        '用覆盖整个容器的 <canvas> 为 React 制作光标拖尾。保存最近的指针坐标及时间戳（pointermove 时加入，丢弃超过 450ms 的点）。每次 requestAnimationFrame 时清空画布，用经过中点的 quadraticCurveTo 把这些点连成平滑的线段；按每段的时间远近把 lineWidth 设为 1px 到 10px、globalAlpha 设为 0 到 1，让尾部逐渐变细、变淡。使用圆形 lineCap，颜色取自 CSS 自定义属性中的强调色。只在有点存在时运行循环。用 devicePixelRatio 和 ResizeObserver 设置画布尺寸，并忽略触摸指针，避免阻挡手机滚动。在 prefers-reduced-motion 下不绘制拖尾。说明文字为“用指针画画看”。',
    },
  },
} satisfies Motion
