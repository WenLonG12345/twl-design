import type { Motion } from '@/lib/motions'

export default {
  slug: 'expanding-panels',
  tech: 'css',
  component: 'layout',
  trigger: 'hover',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Expanding Panels',
      summary: 'A row of narrow panels where the one you hover or focus widens to show its story while the others make room.',
      labels: { panels: 'Strategy|Design|Build|Grow', body: 'Find the one problem worth solving.|Shape it until it feels obvious.|Ship it fast and keep it fast.|Measure, learn and repeat.' },
      prompt:
        'Build an expanding panel row in React with CSS grid. The container has display: grid and grid-template-columns set from a list, for example 3fr 1fr 1fr 1fr, with transition: grid-template-columns 500ms cubic-bezier(0.16, 1, 0.3, 1) (grid tracks are animatable in modern browsers). Track the active index on pointerenter and focus, and rebuild the column list so the active panel gets 3fr. Collapsed panels show only a vertical title (writing-mode: vertical-rl); the active panel shows its title and a one-line description that fades in 150ms after the width change. Each panel is a <button> with aria-expanded. Panels: Strategy, Design, Build, Grow. On narrow screens, stack the panels vertically and expand height instead. Under prefers-reduced-motion, change widths instantly.',
    },
    'zh-CN': {
      title: '展开式面板',
      summary: '一排窄面板中，被悬停或聚焦的那块会变宽并展示内容，其余面板让出空间。',
      labels: { panels: '策略|设计|开发|增长', body: '找到真正值得解决的问题。|打磨到让人觉得理所当然。|快速上线，并保持快速。|衡量、学习、再重复。' },
      prompt:
        '用 CSS grid 在 React 中制作一排展开式面板。容器设置 display: grid，grid-template-columns 由列表生成，例如 3fr 1fr 1fr 1fr，并设置 transition: grid-template-columns 500ms cubic-bezier(0.16, 1, 0.3, 1)（现代浏览器支持对网格轨道做过渡）。在 pointerenter 和 focus 时记录当前序号，并重建列宽列表，让当前面板占 3fr。收起的面板只显示竖排标题（writing-mode: vertical-rl）；展开的面板显示标题和一行说明，说明在宽度变化后 150ms 淡入。每个面板都是带 aria-expanded 的 <button>。面板为：策略、设计、开发、增长。在窄屏上把面板改为纵向排列，改为展开高度。在 prefers-reduced-motion 下宽度直接切换。',
    },
  },
} satisfies Motion
