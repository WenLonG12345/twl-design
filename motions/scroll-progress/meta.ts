import type { Motion } from '@/lib/motions'

export default {
  slug: 'scroll-progress',
  tech: 'js',
  component: 'layout',
  trigger: 'scroll',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Reading Progress',
      summary: 'A thin bar across the top fills as you read down the article, so readers always know how much is left.',
      labels: { title: 'Designing calm interfaces', read: 'read' },
      prompt:
        'Create a reading progress bar for an article in React. Listen to the scroll event of the scrolling element (window for a full page) with a passive listener, compute progress as scrollTop / (scrollHeight - clientHeight), and write it into a CSS custom property --p on the container instead of React state, so scrolling never re-renders. A sticky bar at the top uses transform: scaleX(var(--p)) with transform-origin left and an accent background; next to it, a small mono label shows the rounded percentage. Do not transition the bar, so it tracks the scroll exactly. On browsers that support animation-timeline: scroll(), this can be done in pure CSS instead. Under prefers-reduced-motion it stays as is, since it only moves when the user scrolls. The article title reads "Designing calm interfaces".',
    },
    'zh-CN': {
      title: '阅读进度条',
      summary: '顶部的细条随着你往下读不断填满，让读者随时知道还剩多少。',
      labels: { title: '设计平静的界面', read: '已读' },
      prompt:
        '用 React 为文章制作阅读进度条。用被动监听器监听滚动元素（整页时为 window）的 scroll 事件，按 scrollTop / (scrollHeight - clientHeight) 计算进度，并把它写入容器的 CSS 自定义属性 --p，而不是 React state，这样滚动时不会触发重新渲染。顶部的 sticky 进度条使用 transform: scaleX(var(--p))，transform-origin 为 left，背景为主色；旁边用一个小号等宽字体标签显示四舍五入后的百分比。进度条不加过渡，确保精确跟随滚动。在支持 animation-timeline: scroll() 的浏览器中，也可以改用纯 CSS 实现。在 prefers-reduced-motion 下保持不变，因为它只会随用户滚动而移动。文章标题为“设计平静的界面”。',
    },
  },
} satisfies Motion
