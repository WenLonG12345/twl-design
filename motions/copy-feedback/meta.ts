import type { Motion } from '@/lib/motions'

export default {
  slug: 'copy-feedback',
  tech: 'css',
  component: 'button',
  trigger: 'click',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Copy Feedback',
      summary: 'The copy icon pops into a check mark and the label confirms, then both settle back, so you know the clipboard worked.',
      labels: { code: 'bun add gsap', copy: 'Copy', copied: 'Copied' },
      prompt:
        'Create a copy-to-clipboard button for a code snippet in React and CSS. On click, call navigator.clipboard.writeText inside a try/catch, then set a "copied" state for 1.6s. Stack a copy icon and a check icon in the same grid cell. In the copied state, the copy icon scales to 0.4 and fades out while the check scales from 0.4 with a slight overshoot (cubic-bezier(0.34, 1.56, 0.64, 1), 260ms) and draws its stroke with stroke-dashoffset. Swap the label from "Copy" to "Copied" and announce it with aria-live="polite". Clear the timeout on unmount. Under prefers-reduced-motion, swap the icons instantly. The snippet reads "bun add gsap".',
    },
    'zh-CN': {
      title: '复制反馈',
      summary: '复制图标弹成一个对勾，文字随之确认，然后两者恢复原样，让你知道剪贴板已经生效。',
      labels: { code: 'bun add gsap', copy: '复制', copied: '已复制' },
      prompt:
        '用 React 和 CSS 为代码片段制作复制到剪贴板的按钮。点击时在 try/catch 中调用 navigator.clipboard.writeText，然后把“已复制”状态保持 1.6s。复制图标和对勾图标叠放在同一个 grid 单元格中。已复制状态下，复制图标缩放到 0.4 并淡出，对勾从 0.4 带一点回弹地放大（cubic-bezier(0.34, 1.56, 0.64, 1)，260ms），同时用 stroke-dashoffset 画出描边。按钮文字从“复制”换成“已复制”，并用 aria-live="polite" 播报。组件卸载时清除 timeout。在 prefers-reduced-motion 下直接切换图标。代码片段为“bun add gsap”。',
    },
  },
} satisfies Motion
