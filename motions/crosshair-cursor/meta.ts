import type { Motion } from '@/lib/motions'

export default {
  slug: 'crosshair-cursor',
  tech: 'js',
  component: 'cursor',
  trigger: 'pointer',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Crosshair Cursor',
      summary: 'Two hairlines span the whole area and meet at the pointer, with a live coordinate readout, like a design tool ruler.',
      labels: { hint: 'Move inside' },
      prompt:
        'Create a crosshair cursor inside a bounded area in React, no libraries. Hide the native cursor in the area with cursor: none. Render a full-width horizontal hairline and a full-height vertical hairline (1px, accent colour at 60% opacity) and a small mono readout label. On pointermove, read the pointer position relative to the area and set translate on the lines and the label directly through refs in a requestAnimationFrame, writing "x, y" in whole pixels into the label. Show everything on pointerenter and fade it out on pointerleave with a 150ms opacity transition. Keep the label from overflowing the right and bottom edges by flipping its offset. Mark the lines aria-hidden. Show a centred hint while the pointer is outside. The hint reads "Move inside".',
    },
    'zh-CN': {
      title: '十字准星光标',
      summary: '两条细线横跨整个区域并在指针处交汇，同时实时显示坐标，像设计工具里的标尺。',
      labels: { hint: '移入区域' },
      prompt:
        '用 React 在限定区域内制作十字准星光标，不使用第三方库。区域内用 cursor: none 隐藏原生光标。渲染一条满宽的水平细线和一条满高的垂直细线（1px，60% 不透明度的主色），以及一个小的等宽字体坐标标签。pointermove 时读取指针相对区域的位置，在 requestAnimationFrame 中通过 ref 直接设置细线和标签的 translate，并把整数像素的“x, y”写入标签。pointerenter 时显示，pointerleave 时以 150ms 的 opacity 过渡淡出。标签靠近右侧和底部边缘时翻转偏移方向，避免溢出。细线设为 aria-hidden。指针在区域外时显示居中的提示文字。提示文字为“移入区域”。',
    },
  },
} satisfies Motion
