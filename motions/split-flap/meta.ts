import type { Motion } from '@/lib/motions'

export default {
  slug: 'split-flap',
  tech: 'js',
  component: 'text',
  trigger: 'loop',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Split Flap',
      summary: 'Each tile of a departure board flips over in turn to the next word, with a short stagger so the change ripples across.',
      labels: { words: 'LONDON|TOKYO|LISBON|SEOUL' },
      prompt:
        'Create a split-flap board in React and CSS that cycles through words. Pad every word to the length of the longest with spaces and render one tile per character (monospace, dark surface, a 1px horizontal seam through the middle via a pseudo-element). Every 2.4s, switch to the next word. Give each tile the key `${index}-${char}` so React remounts only tiles whose character changed, and on mount play a CSS keyframe: rotateX(-90deg) with opacity 0.4 to rotateX(0) over 360ms with cubic-bezier(0.16, 1, 0.3, 1), transform-origin center, inside a parent with perspective 400px. Delay each tile by index × 60ms with an inline animation-delay. Expose the current word through aria-live="polite" on a visually hidden span and mark the tiles aria-hidden. Pause the interval when off screen, and under prefers-reduced-motion swap words without the flip. The words are LONDON, TOKYO, LISBON, SEOUL.',
    },
    'zh-CN': {
      title: '翻牌显示',
      summary: '像机场的出发信息牌，每一块翻牌依次翻到下一个词，带一点错开，让变化像波浪一样掠过。',
      labels: { words: '北京|上海|成都|广州' },
      prompt:
        '用 React 和 CSS 制作循环切换词语的翻牌显示板。把每个词用空格补到最长词的长度，每个字符渲染为一块翻牌（等宽字体、深色底、用伪元素在中间画一条 1px 的横向缝）。每 2.4s 切换到下一个词。给每块翻牌设置 key 为 `${index}-${char}`，这样 React 只会重新挂载字符有变化的翻牌；挂载时播放 CSS keyframe：从 rotateX(-90deg)、opacity 0.4 到 rotateX(0)，时长 360ms，缓动 cubic-bezier(0.16, 1, 0.3, 1)，transform-origin 居中，父元素设置 perspective 400px。每块翻牌通过内联 animation-delay 延迟 index × 60ms。用一个视觉隐藏的 span 配合 aria-live="polite" 播报当前词，翻牌本身设为 aria-hidden。离开屏幕时暂停计时器，在 prefers-reduced-motion 下只切换文字不做翻转。词语为北京、上海、成都、广州。',
    },
  },
} satisfies Motion
