import type { Motion } from '@/lib/motions'

export default {
  slug: 'press-3d',
  tech: 'css',
  component: 'button',
  trigger: 'click',
  added: '2026-10-29',
  i18n: {
    en: {
      title: '3D Press',
      summary: 'The button sits on a solid edge and sinks into it when pressed, like a physical key that bottoms out.',
      labels: { cta: 'Start game' },
      prompt:
        'Create a 3D press button in pure CSS. Give the button a solid bottom edge with box-shadow: 0 6px 0 a darker shade of the accent, and lift it 2px on hover (translateY(-2px), shadow 0 8px 0). On :active, translateY(6px) and set the shadow to 0 0 0 so the face drops flush with the base. Transition transform and box-shadow over 90ms ease-out so the press feels immediate, and leave a little longer on release. Keep a visible focus ring. Under prefers-reduced-motion, keep the colour change on press but drop the movement. The label reads "Start game".',
    },
    'zh-CN': {
      title: '立体按压',
      summary: '按钮立在一块实心底座上，按下时整块沉下去，像一颗按到底的实体按键。',
      labels: { cta: '开始游戏' },
      prompt:
        '用纯 CSS 制作立体按压按钮。用 box-shadow: 0 6px 0（比主色更深的颜色）给按钮一个实心底边，悬停时上抬 2px（translateY(-2px)，阴影改为 0 8px 0）。:active 时 translateY(6px)，阴影改为 0 0 0，让按钮面沉到与底座齐平。transform 和 box-shadow 过渡 90ms ease-out，让按压感觉即时，松开时稍慢一些。保留清晰的焦点框。在 prefers-reduced-motion 下保留按压时的颜色变化，去掉位移。按钮文字为“开始游戏”。',
    },
  },
} satisfies Motion
