import type { Motion } from '@/lib/motions'

export default {
  slug: 'horizontal-scroll',
  tech: 'js',
  component: 'layout',
  trigger: 'scroll',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Horizontal Scroll Section',
      summary: 'Scrolling down pins the section and slides a row of panels sideways, then lets the page continue once the row ends.',
      labels: { hint: 'Scroll', panels: 'Plan|Design|Build|Launch' },
      prompt:
        'Create a horizontal scroll section driven by vertical scroll, in React and CSS, without a scroll library. Make an outer section several times the viewport height (4 panels → 400vh) and inside it a position: sticky; top: 0 wrapper of exactly one viewport height with overflow hidden. Inside the wrapper, a flex track holds the panels side by side. On scroll, compute progress as the distance scrolled into the section divided by (section height − viewport height), clamped 0 to 1, and set the track transform to translateX(−progress × (track width − viewport width)) via a CSS custom property, so it never re-renders React. Give each panel a large number and a label. Under prefers-reduced-motion, lay the panels out as a normal vertical stack instead. The panels read "Plan", "Design", "Build", and "Launch".',
    },
    'zh-CN': {
      title: '横向滚动区块',
      summary: '向下滚动时区块被固定，一排面板横向滑过，滑到尽头后页面才继续往下。',
      labels: { hint: '向下滚动', panels: '规划|设计|开发|上线' },
      prompt:
        '用 React 和 CSS 制作由纵向滚动驱动的横向滚动区块，不使用滚动库。外层 section 高度为视口高度的若干倍（4 个面板 → 400vh），内部是一个 position: sticky; top: 0、高度正好一个视口、overflow hidden 的容器。容器内用 flex 轨道把面板并排放置。滚动时计算进度：已滚入区块的距离除以（区块高度 − 视口高度），并限制在 0 到 1 之间，通过 CSS 自定义属性把轨道的 transform 设为 translateX(−进度 × (轨道宽度 − 视口宽度))，避免 React 重新渲染。每个面板显示一个大号数字和一个标签。在 prefers-reduced-motion 下改为普通的纵向堆叠布局。面板文字为“规划”“设计”“开发”“上线”。',
    },
  },
} satisfies Motion
