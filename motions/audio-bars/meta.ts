import type { Motion } from '@/lib/motions'

export default {
  slug: 'audio-bars',
  tech: 'css',
  component: 'svg',
  trigger: 'loop',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Audio Bars',
      summary: 'A row of equaliser bars bounces at uneven rhythms to show that something is playing, and freezes when paused.',
      labels: { play: 'Play', pause: 'Pause', track: 'Now playing · Low Tide' },
      prompt:
        'Create an animated equaliser in SVG and CSS with a play/pause toggle. Draw seven rounded rect bars of equal height in an SVG, with transform-box: fill-box and transform-origin bottom so they scale from the baseline. Animate each with scaleY between 0.2 and 1 using an alternate infinite keyframe with ease-in-out, giving every bar its own duration (between 0.45s and 0.9s) and a negative delay so the rhythm never lines up. A toggle button sets data-playing on the wrapper; when not playing, set animation-play-state: paused and ease the bars down to scaleY(0.2). The button uses aria-pressed and swaps its label between "Play" and "Pause". Pause off screen too. Under prefers-reduced-motion, show static bars at varied heights. The caption reads "Now playing · Low Tide".',
    },
    'zh-CN': {
      title: '音频跳动条',
      summary: '一排均衡器条以不规则的节奏跳动，表示正在播放，暂停时随之定住。',
      labels: { play: '播放', pause: '暂停', track: '正在播放 · 退潮' },
      prompt:
        '用 SVG 和 CSS 制作带播放/暂停切换的均衡器动画。在 SVG 中画七个等高的圆角矩形，设置 transform-box: fill-box 和 transform-origin bottom，让它们从底线开始缩放。每根条用 alternate infinite、ease-in-out 的 keyframe 在 scaleY 0.2 到 1 之间变化，每根有自己的时长（0.45s 到 0.9s 之间）和负延迟，让节奏永远对不齐。切换按钮在外层设置 data-playing；不播放时设置 animation-play-state: paused，并让条缓缓回落到 scaleY(0.2)。按钮使用 aria-pressed，文字在“播放”和“暂停”之间切换。离开屏幕时也暂停。在 prefers-reduced-motion 下显示高度各异的静态条。说明文字为“正在播放 · 退潮”。',
    },
  },
} satisfies Motion
