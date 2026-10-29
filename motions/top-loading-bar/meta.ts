import type { Motion } from '@/lib/motions'

export default {
  slug: 'top-loading-bar',
  tech: 'js',
  component: 'layout',
  trigger: 'click',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Top Loading Bar',
      summary: 'A slim bar creeps across the top while a page loads, slowing as it goes, then races to the end and fades once it is done.',
      labels: { load: 'Load page', loaded: 'Loaded' },
      prompt:
        'Create a top-of-page loading bar in React. On start, show a 3px accent bar at transform: scaleX(0.08) with transform-origin left. Every 300ms, move it a fraction of the remaining distance (progress += (0.9 − progress) × 0.15), so it creeps forward and slows down without ever reaching the end on its own. Give the transform a 300ms ease-out transition. When loading finishes (simulate with a 1.8s timeout), set progress to 1 with a faster 200ms transition, then fade the bar out over 300ms and reset it. Add a soft glow on the leading edge with a box-shadow on a pseudo-element. Clear all timers on unmount. Under prefers-reduced-motion, skip the creeping and show a static bar until done.',
    },
    'zh-CN': {
      title: '顶部加载条',
      summary: '页面加载时一条细条在顶部慢慢爬行，越走越慢，加载完成后冲到尽头再淡出。',
      labels: { load: '加载页面', loaded: '加载完成' },
      prompt:
        '用 React 制作页面顶部的加载条。开始时显示一条 3px 的主色进度条，transform: scaleX(0.08)，transform-origin 为 left。每隔 300ms 让它前进剩余距离的一部分（progress += (0.9 − progress) × 0.15），使它不断前进、逐渐变慢，但永远不会自己走到终点。transform 加 300ms ease-out 过渡。加载完成时（用 1.8s 的 timeout 模拟），用更快的 200ms 过渡把进度设为 1，然后在 300ms 内淡出并重置。用伪元素的 box-shadow 在前端加一点柔和的光晕。组件卸载时清除所有计时器。在 prefers-reduced-motion 下不做爬行，完成前显示一条静止的进度条。',
    },
  },
} satisfies Motion
