import type { Motion } from '@/lib/motions'

export default {
  slug: 'range-bubble',
  tech: 'js',
  component: 'form',
  trigger: 'drag',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Range Slider Bubble',
      summary: 'A value bubble rides above the slider thumb, grows while you drag and leans in the direction you are moving.',
      labels: { label: 'Budget', unit: 'k' },
      prompt:
        'Build a React range slider with a value bubble on top of a native <input type="range"> (0–100) so keyboard and screen reader support come for free. Write the value as a percentage into --pct on the wrapper and use it to fill the track with a linear-gradient and to position a bubble above the thumb with left: calc(var(--pct) * 1% + offset) so it stays centred over the thumb. While dragging (pointerdown until pointerup), scale the bubble from 0.85 to 1 and tilt it by up to 12 degrees in the direction of movement, easing back to 0 degrees 120ms after movement stops. Transitions use 180ms cubic-bezier(0.16, 1, 0.3, 1). Show the value with tabular-nums, for example "64k", and label the input "Budget". Under prefers-reduced-motion, keep the bubble upright and skip the scale.',
    },
    'zh-CN': {
      title: '滑块气泡',
      summary: '数值气泡跟随滑块圆钮移动，拖动时放大并朝移动方向倾斜。',
      labels: { label: '预算', unit: 'k' },
      prompt:
        '在原生 <input type="range">（0–100）上方为 React 滑块添加数值气泡，这样键盘和屏幕阅读器支持都无需额外实现。把数值按百分比写入外层容器的 --pct，用它通过 linear-gradient 填充轨道，并用 left: calc(var(--pct) * 1% + 偏移量) 把气泡定位在圆钮正上方。拖动期间（从 pointerdown 到 pointerup），气泡从 0.85 放大到 1，并朝移动方向最多倾斜 12 度，停止移动 120ms 后缓回 0 度。过渡使用 180ms 的 cubic-bezier(0.16, 1, 0.3, 1)。数值用 tabular-nums 显示，例如“64k”，输入框的标签为“预算”。在 prefers-reduced-motion 下气泡保持竖直，不做缩放。',
    },
  },
} satisfies Motion
