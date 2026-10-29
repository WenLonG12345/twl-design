import type { Motion } from '@/lib/motions'

export default {
  slug: 'typewriter',
  tech: 'js',
  component: 'text',
  trigger: 'loop',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Typewriter',
      summary: 'Phrases type out one character at a time behind a blinking caret, pause, erase and move on to the next.',
      labels: { phrases: 'Ship the idea.|Polish the details.|Copy the prompt.' },
      prompt:
        'Build a React typewriter that cycles through the phrases "Ship the idea.", "Polish the details." and "Copy the prompt.". Type one character every 55ms, hold the full phrase for 1.4s, delete one character every 30ms, then start the next phrase. Drive it with a single setTimeout chain that is cleared on unmount. Show a 2px caret after the text that blinks with a CSS steps(1) animation every 1s, and stops blinking while typing. Iterate with Array.from(text) so emoji and CJK characters are never split. Put the full current phrase in aria-label and hide the animated text from screen readers. Under prefers-reduced-motion, show each phrase whole and swap them every 2.5s.',
    },
    'zh-CN': {
      title: '打字机',
      summary: '一句句文字在闪烁的光标后逐字打出，停顿后删除，再继续下一句。',
      labels: { phrases: '把想法做出来。|把细节打磨好。|复制提示词。' },
      prompt:
        '用 React 制作一个打字机效果，循环显示“把想法做出来。”“把细节打磨好。”“复制提示词。”三句话。每 55ms 打出一个字，完整显示后停留 1.4 秒，再每 30ms 删除一个字，然后开始下一句。用一条 setTimeout 链驱动，并在组件卸载时清除。文字后面显示一个 2px 宽的光标，用 CSS steps(1) 动画每 1 秒闪烁一次，打字过程中停止闪烁。用 Array.from(text) 遍历字符，避免拆坏表情符号和汉字。把当前完整句子放在 aria-label 中，并对屏幕阅读器隐藏动画文字。在 prefers-reduced-motion 下直接显示整句，每 2.5 秒切换一次。',
    },
  },
} satisfies Motion
