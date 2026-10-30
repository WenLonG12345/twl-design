import type { Motion } from '@/lib/motions'

export default {
  slug: 'headline-swap',
  tech: 'css',
  component: 'text',
  trigger: 'click',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Headline Swap',
      summary: 'Pick an audience and the headline rewrites itself: the old words lift away and blur out while the new ones rise in, word by word.',
      labels: {
        tabA: 'For designers',
        tabB: 'For developers',
        headA: 'Sketch the motion. Skip the keyframes.',
        headB: 'Paste the prompt. Ship the motion.',
      },
      prompt:
        'Create an audience switch that swaps a headline word by word, in React and CSS. A pill-shaped segmented control has two buttons, "For designers" and "For developers", with aria-pressed; an accent pill behind them slides with transform: translateX(calc(var(--cur) * 100%)) over 360ms cubic-bezier(0.16, 1, 0.3, 1). Below, stack two headlines in the same grid cell: "Sketch the motion. Skip the keyframes." and "Paste the prompt. Ship the motion.", at 1.75rem semibold, centred with text-wrap: balance. Split each headline with Intl.Segmenter (granularity "word") so it also works for languages without spaces, wrapping every non-space segment in an inline-block span with an index --i. Keep a switch counter and use it in each headline\'s key so both remount on every switch. The new headline\'s words play a 620ms keyframe from opacity 0, translateY(0.6em), rotate(4deg) and blur(6px), delayed by var(--i) * 45ms; the old headline\'s words play a 360ms keyframe to opacity 0, translateY(-0.6em), rotate(-4deg) and blur(6px), delayed by var(--i) * 25ms, both with fill both. Before the first switch, the second headline is visibility: hidden so the stack already has its height. Hide the leaving headline from assistive tech and put aria-live="polite" on the stack. Under prefers-reduced-motion, just fade the new words in.',
    },
    'zh-CN': {
      title: '标题替换',
      summary: '选择受众，标题就会改写：旧的词向上飘走并模糊淡出，新的词逐个升起。',
      labels: {
        tabA: '给设计师',
        tabB: '给开发者',
        headA: '画出动效，不必手写关键帧。',
        headB: '贴上提示词，动效直接上线。',
      },
      prompt:
        '用 React 和 CSS 制作一个切换受众时逐词替换标题的效果。一个胶囊形分段控件有两个按钮“给设计师”和“给开发者”，带 aria-pressed；它们后面有一个强调色胶囊，用 transform: translateX(calc(var(--cur) * 100%)) 在 360ms 内以 cubic-bezier(0.16, 1, 0.3, 1) 滑动。下方把两条标题叠放在同一个 grid 单元格中：“画出动效，不必手写关键帧。”和“贴上提示词，动效直接上线。”，字号 1.75rem 半粗体，居中并设置 text-wrap: balance。用 Intl.Segmenter（granularity 为 "word"）切分标题，这样没有空格的中文也能逐词动画；每个非空白片段包进带索引 --i 的 inline-block span。维护一个切换计数，并把它放进每条标题的 key，让两条标题在每次切换时都重新挂载。新标题的词播放 620ms 的 keyframe，从 opacity 0、translateY(0.6em)、rotate(4deg)、blur(6px) 开始，延迟 var(--i) * 45ms；旧标题的词播放 360ms 的 keyframe，变为 opacity 0、translateY(-0.6em)、rotate(-4deg)、blur(6px)，延迟 var(--i) * 25ms，两者的 fill 都是 both。第一次切换之前，第二条标题设为 visibility: hidden，让叠放区域一开始就有正确的高度。离场的标题对辅助技术隐藏，叠放区域设置 aria-live="polite"。在 prefers-reduced-motion 下只让新词淡入。',
    },
  },
} satisfies Motion
