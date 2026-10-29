import type { Motion } from '@/lib/motions'

export default {
  slug: 'number-stepper',
  tech: 'css',
  component: 'form',
  trigger: 'click',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Number Stepper',
      summary: 'The number slides up when you add and down when you subtract, so the direction of the change is felt as well as read.',
      labels: { label: 'Guests', minus: 'Remove one', plus: 'Add one' },
      prompt:
        'Create a quantity stepper in React and CSS with minus and plus buttons around a number. Keep the value and the direction of the last change in state. Render the number in a span keyed by the value so React remounts it on every change, and set data-dir="up" or "down". On mount, play a 280ms keyframe with cubic-bezier(0.16, 1, 0.3, 1): from translateY(60%) and opacity 0 for up, from translateY(-60%) for down, to translateY(0) and opacity 1. The number box has overflow: hidden and tabular-nums. Clamp the value between 1 and 9 and disable the button at each limit. Wrap the number in aria-live="polite" so the new value is announced. Under prefers-reduced-motion, skip the slide. The label reads "Guests".',
    },
    'zh-CN': {
      title: '数字步进器',
      summary: '加一时数字向上滑入，减一时向下滑入，让变化的方向既能看到也能感受到。',
      labels: { label: '人数', minus: '减少一位', plus: '增加一位' },
      prompt:
        '用 React 和 CSS 制作一个两侧带减号和加号按钮的数量步进器。在 state 中保存数值和最近一次变化的方向。数字放在一个以数值为 key 的 span 中，让 React 在每次变化时重新挂载它，并设置 data-dir="up" 或 "down"。挂载时播放一个 280ms 的 keyframe，缓动 cubic-bezier(0.16, 1, 0.3, 1)：向上时从 translateY(60%)、opacity 0 开始，向下时从 translateY(-60%) 开始，结束于 translateY(0)、opacity 1。数字框设置 overflow: hidden 和 tabular-nums。数值限制在 1 到 9 之间，到达上下限时禁用对应按钮。数字外层设置 aria-live="polite"，播报新的数值。在 prefers-reduced-motion 下去掉滑动。标签为“人数”。',
    },
  },
} satisfies Motion
