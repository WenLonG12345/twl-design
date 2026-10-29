import type { Motion } from '@/lib/motions'

export default {
  slug: 'blend-cursor',
  tech: 'js',
  component: 'cursor',
  trigger: 'pointer',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Inverting Blend Cursor',
      summary: 'A round cursor inverts whatever it passes over and grows into a lens when it reaches a link.',
      labels: { text: 'Look closer', link: 'View case study' },
      prompt:
        'Create a custom React cursor that inverts the content under it. Inside the area, hide the native cursor (cursor: none, only when (pointer: fine)) and render a 20px white circle with position: absolute, pointer-events: none and mix-blend-mode: difference, so it inverts text and backgrounds beneath it. On pointermove, set its transform to translate(x, y) translate(-50%, -50%) directly (no lag). When the pointer is over an element with data-cursor="grow", scale the circle to 4 over 250ms with cubic-bezier(0.16, 1, 0.3, 1). Hide it on pointerleave. Keep keyboard focus styles visible because the custom cursor does nothing for keyboard users. Under prefers-reduced-motion, keep the inversion but skip the scale transition. Content: the headline "Look closer" and a link "View case study".',
    },
    'zh-CN': {
      title: '反色混合光标',
      summary: '圆形光标会反转经过的内容颜色，移到链接上时放大成一面透镜。',
      labels: { text: '靠近一点看', link: '查看案例' },
      prompt:
        '用 React 制作一个会反转下方内容颜色的自定义光标。在区域内隐藏原生光标（cursor: none，仅在 (pointer: fine) 时生效），并渲染一个 20px 的白色圆形，设置 position: absolute、pointer-events: none 和 mix-blend-mode: difference，让它反转下方的文字和背景。pointermove 时直接把 transform 设为 translate(x, y) translate(-50%, -50%)（无延迟）。当指针位于带 data-cursor="grow" 的元素上时，在 250ms 内用 cubic-bezier(0.16, 1, 0.3, 1) 把圆形放大到 4 倍。pointerleave 时隐藏。保留可见的键盘焦点样式，因为自定义光标对键盘用户没有作用。在 prefers-reduced-motion 下保留反色效果，但跳过缩放过渡。内容为标题“靠近一点看”和链接“查看案例”。',
    },
  },
} satisfies Motion
