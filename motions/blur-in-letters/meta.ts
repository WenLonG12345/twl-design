import type { Motion } from '@/lib/motions'

export default {
  slug: 'blur-in-letters',
  tech: 'css',
  component: 'text',
  trigger: 'entrance',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Blur-in Letters',
      summary: 'A headline comes into focus letter by letter, each one sharpening and rising slightly as it lands.',
      labels: { text: 'Into focus', replay: 'Replay' },
      prompt:
        'Create a React headline entrance where each letter goes from blurred to sharp. Split "Into focus" into inline-block spans with Array.from and set --i to each index. Each span animates from opacity 0, filter blur(12px) and translateY(0.25em) to opacity 1, blur(0) and translateY(0) over 700ms with cubic-bezier(0.16, 1, 0.3, 1), fill-mode both, delayed by calc(var(--i) * 45ms). Add a "Replay" button that restarts the animation by changing the wrapper key. Keep the readable text in aria-label. Under prefers-reduced-motion, use a single 150ms opacity fade on the whole word instead.',
    },
    'zh-CN': {
      title: '模糊入场文字',
      summary: '标题逐字从模糊变得清晰，每个字落定时微微上升。',
      labels: { text: '逐渐清晰', replay: '重播' },
      prompt:
        '用 React 制作一个逐字从模糊变清晰的标题入场效果。用 Array.from 把“逐渐清晰”拆成 inline-block 的 span，并把 --i 设为每个字的序号。每个 span 从 opacity 0、filter blur(12px)、translateY(0.25em) 动画到 opacity 1、blur(0)、translateY(0)，时长 700ms，缓动为 cubic-bezier(0.16, 1, 0.3, 1)，fill-mode 为 both，延迟为 calc(var(--i) * 45ms)。添加一个“重播”按钮，通过改变外层元素的 key 重新播放动画。可读文字放在 aria-label 中。在 prefers-reduced-motion 下改为整句 150ms 的透明度淡入。',
    },
  },
} satisfies Motion
