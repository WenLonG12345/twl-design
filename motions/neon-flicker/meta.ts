import type { Motion } from '@/lib/motions'

export default {
  slug: 'neon-flicker',
  tech: 'css',
  component: 'text',
  trigger: 'loop',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Neon Flicker',
      summary: 'A glowing sign that stutters on, holds, and drops out for a beat now and then, like a tube that is slightly worn.',
      labels: { text: 'Open late' },
      prompt:
        'Create a neon sign text effect in pure CSS. Render the word in a thin display font with a layered text-shadow glow (0 0 4px, 0 0 12px, 0 0 28px, 0 0 56px using the accent colour). Run a 4s infinite keyframe animation with steps that look irregular: mostly fully lit, with two quick dips around 8% and 10%, and a longer dip around 62% to 66% where opacity drops to 0.35 and the glow is removed. Use linear timing so the dips are sharp, not faded. Pause the animation when the element is off screen. Under prefers-reduced-motion, keep the steady glow and remove the flicker. The text reads "Open late".',
    },
    'zh-CN': {
      title: '霓虹闪烁',
      summary: '像一根有点老化的灯管：亮起时会抖几下，平时稳定发光，偶尔又暗掉一拍。',
      labels: { text: '深夜营业' },
      prompt:
        '用纯 CSS 制作霓虹灯文字效果。文字使用细体展示字体，并叠加多层 text-shadow 光晕（0 0 4px、0 0 12px、0 0 28px、0 0 56px，颜色为主色）。运行一个 4s 无限循环的 keyframe 动画，节奏要显得不规则：大部分时间完全点亮，在 8% 和 10% 附近快速暗两下，在 62% 到 66% 之间较长地暗下去，此时 opacity 降到 0.35 并去掉光晕。使用 linear 缓动，让暗下的瞬间干脆而不是渐变。元素离开屏幕时暂停动画。在 prefers-reduced-motion 下保留稳定的光晕，去掉闪烁。文字为“深夜营业”。',
    },
  },
} satisfies Motion
