import type { Motion } from '@/lib/motions'

export default {
  slug: 'bottom-sheet',
  tech: 'css',
  component: 'layout',
  trigger: 'toggle',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Bottom Sheet',
      summary: 'A sheet rises from the bottom edge over a dimmed screen, the way mobile apps present quick choices.',
      labels: { open: 'Share', title: 'Share to', a: 'Copy link', b: 'Message', c: 'Email', close: 'Close' },
      prompt:
        'Create a mobile-style bottom sheet in React and CSS. A scrim covers the screen with opacity 0 and pointer-events none, and the sheet sits below the bottom edge with transform: translateY(100%). When open, fade the scrim to opacity 1 over 240ms and slide the sheet to translateY(0) over 380ms with cubic-bezier(0.32, 0.72, 0, 1), which starts fast and settles gently like native sheets. Give the sheet rounded top corners, a small grab handle, a title, and a list of actions. Close it on a scrim click, on Escape, and on any action. Move focus into the sheet when it opens and back to the trigger when it closes, and set aria-modal and role="dialog". Under prefers-reduced-motion, fade without the slide. The sheet title reads "Share to".',
    },
    'zh-CN': {
      title: '底部弹出面板',
      summary: '面板从底部边缘升起，盖在变暗的屏幕上，就像手机 App 呈现快捷选项的方式。',
      labels: { open: '分享', title: '分享到', a: '复制链接', b: '短信', c: '邮件', close: '关闭' },
      prompt:
        '用 React 和 CSS 制作移动端风格的底部面板。遮罩覆盖整个屏幕，初始 opacity 0、pointer-events none；面板位于底部边缘之下，transform: translateY(100%)。打开时遮罩在 240ms 内淡入到 opacity 1，面板在 380ms 内滑到 translateY(0)，缓动为 cubic-bezier(0.32, 0.72, 0, 1)，起步快、收尾柔和，接近原生面板。面板顶部为圆角，带一个小拖动条、标题和一组操作。点击遮罩、按 Escape 或点击任一操作时关闭。打开时把焦点移入面板，关闭时把焦点还给触发按钮，并设置 aria-modal 和 role="dialog"。在 prefers-reduced-motion 下只淡入淡出，不做滑动。面板标题为“分享到”。',
    },
  },
} satisfies Motion
