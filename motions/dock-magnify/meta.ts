import type { Motion } from '@/lib/motions'

export default {
  slug: 'dock-magnify',
  tech: 'js',
  component: 'layout',
  trigger: 'pointer',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Dock Magnify',
      summary: 'Icons in a dock swell as the pointer nears them and shrink as it moves away, pushing neighbours aside like a desktop dock.',
      labels: { items: 'Mail|Notes|Music|Photos|Maps|Files', dock: 'App dock' },
      prompt:
        'Create a magnifying app dock in React. Lay out icon buttons in a flex row aligned to the bottom. On pointermove over the dock, for each icon compute the horizontal distance from the pointer to the icon centre and a scale of 1 + 0.7 × max(0, 1 − distance / 110), and write it into a CSS custom property --s on the icon (no React state). Size the icon with width and height calc(40px × var(--s)) rather than transform, so growing icons push their neighbours apart, and transition width and height over 120ms ease-out. On pointerleave, reset every --s to 1. Each button has an aria-label and shows its name as a small label above when hovered or focused. Under prefers-reduced-motion, keep icons at a fixed size. The apps are Mail, Notes, Music, Photos, Maps, and Files.',
    },
    'zh-CN': {
      title: '程序坞放大',
      summary: '指针靠近时程序坞里的图标逐渐变大，离开时又缩回去，像桌面程序坞一样把相邻图标推开。',
      labels: { items: '邮件|备忘录|音乐|照片|地图|文件', dock: '程序坞' },
      prompt:
        '用 React 制作会放大的程序坞。图标按钮在 flex 行中底部对齐排列。指针在程序坞上 pointermove 时，对每个图标计算指针到图标中心的水平距离，缩放比为 1 + 0.7 × max(0, 1 − 距离 / 110)，并写入图标的 CSS 自定义属性 --s（不使用 React state）。用 width 和 height calc(40px × var(--s)) 控制尺寸而不是 transform，这样变大的图标会把相邻图标推开；width 和 height 过渡 120ms ease-out。pointerleave 时把所有 --s 重置为 1。每个按钮带 aria-label，悬停或聚焦时在上方显示名称小标签。在 prefers-reduced-motion 下图标保持固定尺寸。应用为邮件、备忘录、音乐、照片、地图、文件。',
    },
  },
} satisfies Motion
