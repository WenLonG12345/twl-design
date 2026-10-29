import type { Motion } from '@/lib/motions'

export default {
  slug: 'count-up',
  tech: 'gsap',
  component: 'text',
  trigger: 'entrance',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Count Up',
      summary: 'A key number climbs from zero to its value as it scrolls into view, then eases to a stop so the final figure lands with weight.',
      labels: { value: '12480', caption: 'Teams onboard', replay: 'Replay' },
      prompt:
        'Create a count-up statistic with GSAP. Tween a plain object { n: 0 } to the target value 12480 over 1.6s with ease "power3.out", and on each update write Math.round(n) formatted with toLocaleString() into the number element. Start the tween when an IntersectionObserver sees the stat at 50% visibility, and add a Replay button that restarts it. Use tabular-nums on the number so the width does not jitter while it counts. Put the final value in aria-label so screen readers hear one number, not every frame. Under prefers-reduced-motion, show the final value immediately. Revert the GSAP context on unmount. The caption reads "Teams onboard".',
    },
    'zh-CN': {
      title: '数字递增',
      summary: '关键数字进入视野时从零开始增长，最后缓缓停下，让最终的数值落得有分量。',
      labels: { value: '12480', caption: '已入驻团队', replay: '重播' },
      prompt:
        '用 GSAP 制作一个数字递增的统计数据。把一个普通对象 { n: 0 } 在 1.6s 内补间到目标值 12480，缓动为 "power3.out"，每次更新时把 Math.round(n) 用 toLocaleString() 格式化后写入数字元素。当 IntersectionObserver 检测到统计数字可见 50% 时开始补间，并添加一个“重播”按钮重新开始。数字使用 tabular-nums，避免计数时宽度抖动。把最终数值放在 aria-label 中，让屏幕阅读器只读一个数字而不是每一帧。在 prefers-reduced-motion 下直接显示最终数值。组件卸载时 revert GSAP context。说明文字为“已入驻团队”。',
    },
  },
} satisfies Motion
