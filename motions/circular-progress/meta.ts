import type { Motion } from '@/lib/motions'

export default {
  slug: 'circular-progress',
  tech: 'js',
  component: 'svg',
  trigger: 'click',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Circular Progress',
      summary: 'A ring fills to the new value while the number in the middle counts up with it.',
      labels: { label: 'Profile complete', again: 'New value' },
      prompt:
        'Build a React circular progress ring in SVG. Draw two circles with r = 52 in a 120×120 viewBox: a track in a muted colour and a progress circle with stroke-dasharray equal to the circumference (2πr) and stroke-dashoffset = circumference × (1 − value). Rotate the progress circle −90° so it starts at 12 o’clock and use stroke-linecap: round. Animate from the old to the new value with requestAnimationFrame over 900ms using an ease-out cubic curve, updating both the dashoffset and the percentage text in the centre on each frame (tabular-nums). Expose it as role="progressbar" with aria-valuenow, aria-valuemin 0, aria-valuemax 100 and aria-label "Profile complete". Add a button that sets a new random value. Under prefers-reduced-motion, jump straight to the new value.',
    },
    'zh-CN': {
      title: '环形进度',
      summary: '圆环填充到新的数值，中间的数字同步向上计数。',
      labels: { label: '资料完成度', again: '换个数值' },
      prompt:
        '用 SVG 为 React 制作环形进度条。在 120×120 的 viewBox 中画两个 r = 52 的圆：一个灰色调的轨道，以及一个 stroke-dasharray 等于周长（2πr）、stroke-dashoffset = 周长 × (1 − 数值) 的进度圆。把进度圆旋转 −90°，让它从 12 点钟方向开始，并使用 stroke-linecap: round。用 requestAnimationFrame 在 900ms 内以 ease-out 三次曲线从旧值动画到新值，每一帧同时更新 dashoffset 和中间的百分比文字（tabular-nums）。以 role="progressbar" 暴露组件，设置 aria-valuenow、aria-valuemin 0、aria-valuemax 100，以及 aria-label“资料完成度”。添加一个按钮随机设置新数值。在 prefers-reduced-motion 下直接跳到新数值。',
    },
  },
} satisfies Motion
