import type { Motion } from '@/lib/motions'

export default {
  slug: 'otp-input',
  tech: 'css',
  component: 'form',
  trigger: 'click',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'OTP Input',
      summary: 'Six boxes for a one-time code: each digit pops in, a caret blinks in the next empty box, and the whole row hops in a wave once the code is complete.',
      labels: { label: 'Enter the 6-digit code', hint: 'Sent to +60 12-345 6789', done: 'Code verified' },
      prompt:
        'Create a one-time code input in React and CSS. Use a single real input with inputMode="numeric", autoComplete="one-time-code" and maxLength 6, labelled "Enter the 6-digit code", stretched invisibly (opacity 0, font-size 16px) over a row of six 38×48px boxes, so typing, pasting and SMS autofill all work through one field. Strip non-digits on change, and on select move the caret back to the end so the code is always typed in order. Each box shows its digit in a span keyed by the digit, which plays a 260ms pop from translateY(40%) scale(0.6) and opacity 0. While focused, the next empty box gets an accent border, a soft 3px accent ring and a blinking 2px caret drawn with ::after (steps(1) keyframe). When all six digits are in, mark the row done: every box turns accent and hops 8px up and back over 480ms with a delay of var(--i) * 55ms, so the row ripples. A status line below, linked with aria-describedby and aria-live="polite", reads "Sent to +60 12-345 6789" and changes to "Code verified" in the accent colour. Under prefers-reduced-motion, drop the pop, hop and blink.',
    },
    'zh-CN': {
      title: '验证码输入框',
      summary: '六个格子输入一次性验证码：每个数字弹入，下一个空格里有闪烁的光标，输入完成后整排像波浪一样跳动。',
      labels: { label: '输入 6 位验证码', hint: '已发送至 +60 12-345 6789', done: '验证成功' },
      prompt:
        '用 React 和 CSS 制作一个一次性验证码输入框。只用一个真实的 input，设置 inputMode="numeric"、autoComplete="one-time-code"、maxLength 6，标签为“输入 6 位验证码”，并把它透明地（opacity 0、font-size 16px）铺在一排六个 38×48px 的格子上，这样打字、粘贴和短信自动填充都通过同一个输入框完成。onChange 时去掉非数字字符；onSelect 时把光标移回末尾，确保验证码总是按顺序输入。每个格子把数字放在以该数字为 key 的 span 中，播放 260ms 的弹入动画，从 translateY(40%) scale(0.6)、opacity 0 开始。聚焦时，下一个空格显示强调色边框、3px 的柔和强调色光圈，以及用 ::after 画的 2px 闪烁光标（steps(1) keyframe）。六位数字都输入后标记为完成：每个格子变成强调色，并在 480ms 内向上跳 8px 再落下，延迟 var(--i) * 55ms，让整排形成波浪。下方的状态文字通过 aria-describedby 关联并设置 aria-live="polite"，显示“已发送至 +60 12-345 6789”，完成后变成强调色的“验证成功”。在 prefers-reduced-motion 下去掉弹入、跳动和闪烁。',
    },
  },
} satisfies Motion
