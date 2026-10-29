import type { Motion } from '@/lib/motions'

export default {
  slug: 'wave-letters',
  tech: 'css',
  component: 'text',
  trigger: 'loop',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Wave Letters',
      summary: 'Letters hop one after another so a soft wave keeps rolling through the word.',
      labels: { text: 'Hello there' },
      prompt:
        'Make a CSS wave text animation in React. Split the text "Hello there" into one inline-block <span> per character with Array.from, and set a --i custom property on each span to its index. Animate every span with the same keyframe: translateY 0 at 0%, -0.3em at 30%, back to 0 at 60% and hold until 100%, over 1.6s with cubic-bezier(0.65, 0, 0.35, 1), infinite. Offset each letter with animation-delay: calc(var(--i) * 70ms). Replace spaces with a non-breaking space so they keep their width. Put the original text in aria-label on the wrapper and aria-hidden on the spans. Turn the animation off under prefers-reduced-motion.',
    },
    'zh-CN': {
      title: '波浪文字',
      summary: '文字一个接一个地跳起，让一道柔和的波浪不断穿过整句话。',
      labels: { text: '你好，世界' },
      prompt:
        '用 CSS 在 React 中制作波浪文字动画。用 Array.from 把文字“你好，世界”拆成每个字一个 inline-block 的 <span>，并给每个 span 设置等于其序号的 --i 自定义属性。所有 span 使用同一个 keyframe：0% 时 translateY 为 0，30% 时为 -0.3em，60% 时回到 0 并保持到 100%，时长 1.6 秒，缓动为 cubic-bezier(0.65, 0, 0.35, 1)，无限循环。用 animation-delay: calc(var(--i) * 70ms) 让每个字依次错开。把原始文字放在外层元素的 aria-label 中，并给每个 span 加上 aria-hidden。在 prefers-reduced-motion 下关闭动画。',
    },
  },
} satisfies Motion
