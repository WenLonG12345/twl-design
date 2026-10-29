import type { Motion } from '@/lib/motions'

export default {
  slug: 'flip-card',
  tech: 'css',
  component: 'card',
  trigger: 'click',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Flip Card',
      summary: 'The card turns over in 3D to reveal details on its back, and turns back on the next click.',
      labels: { front: 'Tap to reveal', title: 'Kopi O', back: 'Black coffee with sugar. Strong, sweet, no milk.', hint: 'Tap again to flip back' },
      prompt:
        'Build a React flip card in CSS 3D. The card is a <button> with aria-pressed so it works with keyboard and screen readers. Inside, an inner element has transform-style: preserve-3d and a 600ms transition on transform with cubic-bezier(0.65, 0, 0.35, 1); when pressed it rotates rotateY(180deg). The front and back faces are stacked with position absolute, backface-visibility: hidden, and the back face is pre-rotated rotateY(180deg). Add perspective: 900px on the button. Front shows "Kopi O" with "Tap to reveal"; back shows "Black coffee with sugar. Strong, sweet, no milk." and "Tap again to flip back". Hide the face that is turned away from screen readers with aria-hidden. Under prefers-reduced-motion, crossfade the faces over 150ms instead of rotating.',
    },
    'zh-CN': {
      title: '翻转卡片',
      summary: '卡片以 3D 方式翻转，露出背面的详细信息；再次点击翻回正面。',
      labels: { front: '点击翻面', title: '咖啡乌', back: '加糖的黑咖啡，浓郁香甜，不加奶。', hint: '再次点击翻回' },
      prompt:
        '用 CSS 3D 为 React 制作翻转卡片。卡片是一个带 aria-pressed 的 <button>，以支持键盘和屏幕阅读器。内部元素设置 transform-style: preserve-3d，并对 transform 设置 600ms、cubic-bezier(0.65, 0, 0.35, 1) 的过渡；按下时旋转 rotateY(180deg)。正反两面用 position absolute 叠放，设置 backface-visibility: hidden，背面预先旋转 rotateY(180deg)。按钮上设置 perspective: 900px。正面显示“咖啡乌”和“点击翻面”；背面显示“加糖的黑咖啡，浓郁香甜，不加奶。”和“再次点击翻回”。用 aria-hidden 对屏幕阅读器隐藏背对用户的那一面。在 prefers-reduced-motion 下改为 150ms 的两面淡入淡出，不做旋转。',
    },
  },
} satisfies Motion
