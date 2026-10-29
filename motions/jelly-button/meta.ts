import type { Motion } from '@/lib/motions'

export default {
  slug: 'jelly-button',
  tech: 'css',
  component: 'button',
  trigger: 'hover',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Jelly Button',
      summary: 'On hover the button squashes and stretches like a jelly being poked, wobbling a few times before it settles.',
      labels: { cta: 'Play now' },
      prompt:
        'Create a jelly wobble button in pure CSS. On :hover and :focus-visible, run a 700ms keyframe animation once that alternates non-uniform scale: 0% scale(1,1), 30% scale(1.2,0.8), 40% scale(0.8,1.2), 50% scale(1.1,0.9), 65% scale(0.95,1.05), 75% scale(1.03,0.97), 100% scale(1,1). Use ease timing so each wobble is smaller than the one before, which reads as elastic. Keep the label centred and avoid overflow clipping. Under prefers-reduced-motion, replace the wobble with a background colour change. The label reads "Play now".',
    },
    'zh-CN': {
      title: '果冻按钮',
      summary: '悬停时按钮像被戳了一下的果冻，挤压、拉伸，晃几下再停稳。',
      labels: { cta: '立即开玩' },
      prompt:
        '用纯 CSS 制作果冻晃动按钮。在 :hover 和 :focus-visible 时播放一次 700ms 的 keyframe 动画，交替使用非等比缩放：0% scale(1,1)、30% scale(1.2,0.8)、40% scale(0.8,1.2)、50% scale(1.1,0.9)、65% scale(0.95,1.05)、75% scale(1.03,0.97)、100% scale(1,1)。使用 ease 缓动，每次晃动都比上一次小，呈现弹性感。文字保持居中，避免被裁切。在 prefers-reduced-motion 下用背景色变化代替晃动。按钮文字为“立即开玩”。',
    },
  },
} satisfies Motion
