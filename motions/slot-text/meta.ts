import type { Motion } from '@/lib/motions'

export default {
  slug: 'slot-text',
  tech: 'css',
  component: 'text',
  trigger: 'click',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Slot Text',
      summary: 'Every letter is a slot-machine reel that blurs through random glyphs and lands on the next word, the reels stopping one after another from left to right.',
      labels: { words: 'MOTION|DESIGN|LAUNCH|JACKPOT', spin: 'Spin' },
      prompt:
        'Create a slot-machine word in React and CSS. Show one word from "MOTION", "DESIGN", "LAUNCH", "JACKPOT" as a row of reels in a bordered panel: each reel is a 1.2em-tall window with overflow: hidden, a dark background, 2.25rem bold monospace text and a mask that fades the top and bottom edges; the last reel uses the accent colour. Each reel holds a vertical strip of 1.2em cells. When "Spin" is pressed, build a new strip for every column in the click handler (not during render): the glyph it currently shows, then 10 + column × 3 random glyphs drawn from the letters of all the words, then the target letter. Remount each strip with a run counter as its key, rest it at translateY(calc(var(--n) * -1.2em)) where --n is the last index, and play a keyframe from translateY(0) with duration calc(900ms + var(--col) * 160ms), cubic-bezier(0.2, 0.9, 0.3, 1.08) for a small overshoot as it lands, and a brief 1.5px blur at the start. Announce the new word in a visually hidden aria-live="polite" span and hide the reels from assistive tech. Under prefers-reduced-motion, show the new word without spinning.',
    },
    'zh-CN': {
      title: '老虎机文字',
      summary: '每个字都是一个老虎机滚轮，模糊地滚过随机字符后停在下一个词上，从左到右一个接一个停下。',
      labels: { words: '灵感满满|设计上线|动效到位|恭喜中奖', spin: '转动' },
      prompt:
        '用 React 和 CSS 制作一个老虎机文字效果。从“灵感满满”“设计上线”“动效到位”“恭喜中奖”中显示一个词，排成带边框面板里的一行滚轮：每个滚轮是 1.2em 高、overflow: hidden 的窗口，深色背景，2.25rem 粗体等宽字体，并用遮罩淡化上下边缘；最后一个滚轮用强调色。每个滚轮内部是一条由 1.2em 单元格组成的竖向字条。按下“转动”时，在点击处理函数中（而不是渲染时）为每一列生成新的字条：当前显示的字、再接 10 + 列序号 × 3 个从所有词的字中随机抽取的字、最后是目标字。用递增的 run 计数作为 key 重新挂载字条，静止位置设为 translateY(calc(var(--n) * -1.2em))（--n 为最后一个索引），并播放从 translateY(0) 开始的 keyframe，时长 calc(900ms + var(--col) * 160ms)，缓动 cubic-bezier(0.2, 0.9, 0.3, 1.08)，让落定时带一点回弹，开头短暂加 1.5px 模糊。新词放在视觉隐藏、带 aria-live="polite" 的 span 中播报，滚轮对辅助技术隐藏。在 prefers-reduced-motion 下直接显示新词，不滚动。',
    },
  },
} satisfies Motion
