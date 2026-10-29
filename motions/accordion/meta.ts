import type { Motion } from '@/lib/motions'

export default {
  slug: 'accordion',
  tech: 'css',
  component: 'layout',
  trigger: 'toggle',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Smooth Accordion',
      summary: 'Panels open to their natural height and close again with no fixed max-height, while the chevron turns to match.',
      labels: {
        q1: 'Do I need GSAP?',
        a1: 'No. Most of these motions are plain CSS; GSAP only helps with timelines.',
        q2: 'Will it respect reduced motion?',
        a2: 'Yes. Every demo turns off or softens its movement under that setting.',
        q3: 'Can I copy the prompt?',
        a3: 'Yes. Paste it into any AI coding tool to rebuild the effect.',
      },
      prompt:
        'Create an FAQ accordion in React and CSS that animates to the natural height of its content. Each item has a heading button with aria-expanded and aria-controls, and a panel region. Make the panel a grid with grid-template-rows: 0fr and an inner div with overflow: hidden and min-height: 0; when open, switch to grid-template-rows: 1fr. Transition grid-template-rows over 320ms with cubic-bezier(0.16, 1, 0.3, 1), and fade the inner content in. Rotate a chevron 180deg on open with the same timing. Allow only one item open at a time. Under prefers-reduced-motion, open and close instantly. The questions read "Do I need GSAP?", "Will it respect reduced motion?", and "Can I copy the prompt?".',
    },
    'zh-CN': {
      title: '平滑手风琴',
      summary: '面板展开到内容的自然高度后又能收回，无需固定 max-height，箭头也随之转动。',
      labels: {
        q1: '一定要用 GSAP 吗？',
        a1: '不用。大多数动效都是纯 CSS，GSAP 只在编排时间线时有帮助。',
        q2: '会照顾减少动态效果的设置吗？',
        a2: '会。每个演示在该设置下都会关闭或减弱动作。',
        q3: '可以复制提示词吗？',
        a3: '可以。粘贴到任意 AI 编程工具里即可重建这个效果。',
      },
      prompt:
        '用 React 和 CSS 制作一个能动画到内容自然高度的 FAQ 手风琴。每一项有一个带 aria-expanded 和 aria-controls 的标题按钮，以及一个面板区域。面板设为 grid，grid-template-rows: 0fr，内部 div 设置 overflow: hidden 和 min-height: 0；展开时改为 grid-template-rows: 1fr。grid-template-rows 过渡 320ms，缓动 cubic-bezier(0.16, 1, 0.3, 1)，内部内容随之淡入。展开时箭头以同样的节奏旋转 180deg。同一时间只允许展开一项。在 prefers-reduced-motion 下直接展开和收起。问题为“一定要用 GSAP 吗？”“会照顾减少动态效果的设置吗？”“可以复制提示词吗？”。',
    },
  },
} satisfies Motion
