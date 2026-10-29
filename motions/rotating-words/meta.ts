import type { Motion } from '@/lib/motions'

export default {
  slug: 'rotating-words',
  tech: 'css',
  component: 'text',
  trigger: 'loop',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Rotating Words',
      summary: 'One word in a headline slides up and out while the next slides in from below, and the slot resizes to fit it.',
      labels: { lead: 'Design that feels', words: 'calm|precise|alive|yours' },
      prompt:
        'Build a React headline where the last word rotates: "Design that feels" followed by calm, precise, alive and yours. Every 2.2s advance an index. Render the words stacked in an inline-grid cell with overflow hidden; the active word sits at translateY(0) and opacity 1, the previous word moves to translateY(-100%) and opacity 0, and the rest wait at translateY(100%). Transition transform and opacity over 500ms with cubic-bezier(0.16, 1, 0.3, 1). Animate the slot width to the active word: measure it with a hidden copy and set width with a 300ms transition. Colour the rotating word with the accent. Keep the full sentence with the current word in an aria-live="polite" visually hidden element. Under prefers-reduced-motion, swap words with a 150ms fade.',
    },
    'zh-CN': {
      title: '轮播词',
      summary: '标题里的一个词向上滑出，下一个词从下方滑入，词槽宽度随之调整。',
      labels: { lead: '让设计感觉', words: '安静|精准|鲜活|属于你' },
      prompt:
        '用 React 制作最后一个词会轮换的标题：“让设计感觉”后面依次显示安静、精准、鲜活、属于你。每 2.2 秒切换一次序号。把所有词叠放在一个 overflow hidden 的 inline-grid 单元格中；当前词位于 translateY(0)、opacity 1，上一个词移动到 translateY(-100%)、opacity 0，其余词在 translateY(100%) 等待。transform 和 opacity 的过渡时间为 500ms，缓动为 cubic-bezier(0.16, 1, 0.3, 1)。让词槽宽度跟随当前词变化：用一个隐藏副本测量宽度，并以 300ms 过渡设置 width。轮换的词使用强调色。用一个视觉隐藏、带 aria-live="polite" 的元素保存包含当前词的完整句子。在 prefers-reduced-motion 下改为 150ms 的淡入淡出切换。',
    },
  },
} satisfies Motion
