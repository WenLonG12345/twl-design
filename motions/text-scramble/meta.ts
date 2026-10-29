import type { Motion } from '@/lib/motions'

export default {
  slug: 'text-scramble',
  tech: 'js',
  component: 'text',
  trigger: 'hover',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Text Scramble',
      summary: 'On hover, each character flickers through random glyphs and locks into place from left to right, like a display decoding.',
      labels: { text: 'Decode the signal', glyphs: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=/<>' },
      prompt:
        'Write a dependency-free React text scramble that plays on hover and keyboard focus. Keep the target string, and on start run a requestAnimationFrame loop for about 700ms. Each frame, characters before the progress index show their final letter, and the rest show a random glyph from the pool "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=/<>". Keep spaces as spaces. Cancel the loop on unmount and when a new run starts. Use a monospace font so the width does not jump, and put the real text in aria-label so screen readers never hear the noise. Under prefers-reduced-motion, show the final text without scrambling. The text reads "Decode the signal".',
    },
    'zh-CN': {
      title: '文字解码',
      summary: '悬停时，每个字会快速闪过随机字符，再从左到右依次定格，像屏幕在解码。',
      labels: { text: '信号正在解码', glyphs: '动效光影节奏速度弧线弹性渐变层次空间时间' },
      prompt:
        '用 React 写一个不依赖第三方库的文字解码效果，在悬停和键盘聚焦时播放。保存目标文字，开始时运行约 700ms 的 requestAnimationFrame 循环。每一帧中，进度位置之前的字显示最终文字，之后的字显示从字符池“动效光影节奏速度弧线弹性渐变层次空间时间”中随机选出的汉字。空格保持为空格。组件卸载或开始新一轮时取消循环。中文字宽一致，因此宽度不会跳动；把真实文字放在 aria-label 中，避免屏幕阅读器读出乱码。在 prefers-reduced-motion 下直接显示最终文字，不做解码。文字为“信号正在解码”。',
    },
  },
} satisfies Motion
