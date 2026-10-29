import type { Motion } from '@/lib/motions'

export default {
  slug: 'floating-label',
  tech: 'css',
  component: 'form',
  trigger: 'click',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Floating Label Input',
      summary: 'The label sits inside the empty field like a placeholder and floats up to the border once you focus or type.',
      labels: { label: 'Email address' },
      prompt:
        'Build a React text input with a floating label using only CSS. Put the <input> and its <label> in a relative wrapper; give the input placeholder=" " (a single space) so :placeholder-shown tells you when it is empty. When empty and unfocused, the label sits vertically centred inside the field at full size. On :focus or when not :placeholder-shown, move the label up with transform: translateY(-145%) scale(0.8), transform-origin left, over 200ms with cubic-bezier(0.16, 1, 0.3, 1), and give it a background matching the field so it cuts through the border. Change the border and label colour to the accent on focus. The label stays a real <label for>. Under prefers-reduced-motion, move the label without the transition. Label text: "Email address".',
    },
    'zh-CN': {
      title: '浮动标签输入框',
      summary: '标签在空输入框里像占位文字一样，聚焦或输入后会浮到边框上。',
      labels: { label: '邮箱地址' },
      prompt:
        '只用 CSS 为 React 文本输入框制作浮动标签。把 <input> 和它的 <label> 放在一个相对定位的容器中；给输入框设置 placeholder=" "（一个空格），这样就能用 :placeholder-shown 判断是否为空。为空且未聚焦时，标签以正常大小垂直居中在输入框内。在 :focus 或非 :placeholder-shown 时，用 transform: translateY(-145%) scale(0.8) 把标签上移，transform-origin 为左侧，时长 200ms，缓动为 cubic-bezier(0.16, 1, 0.3, 1)，并给标签加上与输入框相同的背景色，让它切断边框。聚焦时边框和标签变为强调色。标签保持为真正的 <label for>。在 prefers-reduced-motion 下标签直接移动，不做过渡。标签文字为“邮箱地址”。',
    },
  },
} satisfies Motion
