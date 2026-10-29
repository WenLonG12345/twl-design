import type { Motion } from '@/lib/motions'

export default {
  slug: 'skeleton-shimmer',
  tech: 'css',
  component: 'card',
  trigger: 'loop',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Skeleton Shimmer',
      summary: 'Grey placeholder shapes hold the layout while a soft band of light sweeps across them, then the real content crossfades in.',
      labels: { name: 'Mei Lin', role: 'Motion designer', load: 'Show content', reset: 'Show loading' },
      prompt:
        'Build a React profile row with a CSS skeleton loading state. While loading, render a 40px circle and two bars (60% and 40% wide) in a light grey, each with a ::after band: a linear-gradient from transparent to white at 60% opacity and back, translated from -100% to 100% with a 1.4s linear infinite keyframe. Animate transform only. Set aria-busy="true" on the container while loading. When the data arrives, crossfade to the real content (avatar initials, name "Mei Lin", role "Motion designer") over 200ms. Under prefers-reduced-motion, stop the sweep and keep the static grey shapes. Add a toggle button to switch between the two states.',
    },
    'zh-CN': {
      title: '骨架屏微光',
      summary: '灰色占位形状先撑住布局，一道柔光从上面扫过；数据到达后，真实内容以淡入方式替换。',
      labels: { name: '林美', role: '动效设计师', load: '显示内容', reset: '显示加载中' },
      prompt:
        '用 React 制作一个带 CSS 骨架屏加载状态的个人资料行。加载时，渲染一个 40px 圆形和两条浅灰色长条（宽度分别为 60% 和 40%），每个形状都有一个 ::after 光带：从透明到 60% 不透明度白色再回到透明的 linear-gradient，用 1.4 秒 linear infinite 的 keyframe 从 -100% 平移到 100%。只对 transform 做动画。加载时在容器上设置 aria-busy="true"。数据到达后，在 200ms 内淡入切换到真实内容（头像文字、姓名“林美”、职位“动效设计师”）。在 prefers-reduced-motion 下停止光带扫动，保留静态灰色形状。添加一个按钮在两种状态之间切换。',
    },
  },
} satisfies Motion
