import type { Motion } from '@/lib/motions'

export default {
  slug: 'ripple-press',
  tech: 'css',
  component: 'button',
  trigger: 'click',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Ripple Press',
      summary: 'A soft circle grows from the exact point you press and fades out, so the button answers where it was touched.',
      labels: { cta: 'Save changes' },
      prompt:
        'Create a React button with a press ripple built in CSS. On pointerdown, read the pointer position relative to the button and append a <span> at that point (position absolute, 12px circle, translate -50% -50%, background currentColor at 25% opacity). Animate it with a CSS keyframe from scale(0) opacity 1 to scale(24) opacity 0 over 600ms using cubic-bezier(0.16, 1, 0.3, 1), then remove the span on animationend. The button needs overflow: hidden and position: relative. Under prefers-reduced-motion, replace the ripple with a 120ms background colour change. The button label reads "Save changes".',
    },
    'zh-CN': {
      title: '涟漪按压',
      summary: '从按下的位置扩散出一圈柔和的圆形并逐渐消失，让按钮在被点击的地方给出回应。',
      labels: { cta: '保存修改' },
      prompt:
        '用 CSS 为 React 按钮制作按压涟漪效果。在 pointerdown 时，读取指针相对按钮的位置，并在该位置插入一个 <span>（position absolute，12px 圆形，translate -50% -50%，背景为 25% 不透明度的 currentColor）。用 CSS keyframe 在 600ms 内从 scale(0)、opacity 1 过渡到 scale(24)、opacity 0，缓动为 cubic-bezier(0.16, 1, 0.3, 1)，并在 animationend 时移除该 span。按钮需要 overflow: hidden 和 position: relative。在 prefers-reduced-motion 下，用 120ms 的背景色变化代替涟漪。按钮文字为“保存修改”。',
    },
  },
} satisfies Motion
