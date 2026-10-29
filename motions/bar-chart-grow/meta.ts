import type { Motion } from '@/lib/motions'

export default {
  slug: 'bar-chart-grow',
  tech: 'css',
  component: 'svg',
  trigger: 'scroll',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Bar Chart Grow',
      summary: 'Bars rise from the baseline one after another as the chart scrolls into view, with each value appearing on top.',
      labels: { title: 'Orders per day', days: 'Mon|Tue|Wed|Thu|Fri|Sat|Sun', replay: 'Replay' },
      prompt:
        'Create a React bar chart whose bars grow when it scrolls into view. Render 7 bars for Mon to Sun as divs (or SVG rects) with height set from the data as a percentage of the max value, and transform-origin bottom. Start every bar at transform: scaleY(0); when an IntersectionObserver (threshold 0.5, once) fires, set data-in on the chart and transition each bar to scaleY(1) over 700ms with cubic-bezier(0.16, 1, 0.3, 1), delayed by index × 70ms. Fade each value label in 300ms after its bar. Highlight the highest bar with the accent colour. Keep the data readable without the animation: a visually hidden table or aria-label on each bar with the day and value. Title: "Orders per day". Add a "Replay" button. Under prefers-reduced-motion, show the bars at full height immediately.',
    },
    'zh-CN': {
      title: '柱状图生长',
      summary: '图表滚动进入视野时，柱子从基线依次升起，数值显示在柱顶。',
      labels: { title: '每日订单', days: '周一|周二|周三|周四|周五|周六|周日', replay: '重播' },
      prompt:
        '用 React 制作一个滚动进入视野时柱子会生长的柱状图。用 div（或 SVG rect）渲染周一到周日的 7 根柱子，高度按数据占最大值的百分比设置，transform-origin 为底部。所有柱子初始为 transform: scaleY(0)；当 IntersectionObserver（threshold 0.5，只触发一次）触发时，在图表上设置 data-in，让每根柱子在 700ms 内过渡到 scaleY(1)，缓动为 cubic-bezier(0.16, 1, 0.3, 1)，延迟为序号 × 70ms。每个数值标签在对应柱子出现 300ms 后淡入。最高的柱子使用强调色。即使没有动画也要能读懂数据：提供一个视觉隐藏的表格，或在每根柱子上设置包含日期和数值的 aria-label。标题为“每日订单”。添加一个“重播”按钮。在 prefers-reduced-motion 下直接显示完整高度的柱子。',
    },
  },
} satisfies Motion
