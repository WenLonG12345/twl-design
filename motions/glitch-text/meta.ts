import type { Motion } from '@/lib/motions'

export default {
  slug: 'glitch-text',
  tech: 'css',
  component: 'text',
  trigger: 'hover',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Glitch Text',
      summary: 'On hover the word tears into offset slices of colour for a moment, like a signal breaking up, then snaps back clean.',
      labels: { text: 'SIGNAL LOST' },
      prompt:
        'Create a glitch text hover effect in pure CSS. Put the word in an element with data-text set to the same string, and add ::before and ::after with content: attr(data-text) stacked exactly on top. Colour one layer with the accent and the other with a cool light tone, and keep them invisible at rest. On :hover and :focus-visible, show both layers and run a 600ms steps(1) keyframe on each that jumps clip-path: inset(top% 0 bottom% 0) between four or five horizontal slices while shifting translate by a few pixels left and right, with the two layers out of phase. Keep the real text readable underneath. Put the word in a visually hidden span for screen readers and mark the glitching element aria-hidden. Under prefers-reduced-motion, show a static two-colour offset instead. The word reads "SIGNAL LOST".',
    },
    'zh-CN': {
      title: '故障文字',
      summary: '悬停时文字瞬间撕裂成错位的彩色切片，像信号中断一样，随后又干净地复原。',
      labels: { text: '信号丢失' },
      prompt:
        '用纯 CSS 制作故障风格的文字悬停效果。把文字放在一个元素中，并把 data-text 设为同样的字符串，再用 ::before 和 ::after 配合 content: attr(data-text) 精确叠在上面。一层使用主色，另一层使用偏冷的浅色，静止时两层都不可见。在 :hover 和 :focus-visible 时显示这两层，并各自运行一个 600ms、steps(1) 的 keyframe，在四五个水平切片之间跳变 clip-path: inset(top% 0 bottom% 0)，同时左右偏移几个像素，两层的节奏错开。底下的真实文字保持可读。给屏幕阅读器放一个视觉隐藏的 span，故障元素本身设为 aria-hidden。在 prefers-reduced-motion 下改为静态的双色错位。文字为“信号丢失”。',
    },
  },
} satisfies Motion
