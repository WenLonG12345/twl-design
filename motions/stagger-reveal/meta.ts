import type { Motion } from '@/lib/motions'

export default {
  slug: 'stagger-reveal',
  tech: 'gsap',
  component: 'card',
  trigger: 'scroll',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Staggered Card Reveal',
      summary: 'Cards rise into place one after another when the group scrolls into view, so a grid arrives as a sequence instead of a block.',
      labels: { item: 'Project', replay: 'Replay' },
      prompt:
        'Build a React grid of six cards that reveal with a GSAP stagger when the grid scrolls into view. Use an IntersectionObserver (threshold 0.3) on the grid; when it intersects, run gsap.fromTo on the cards from { opacity: 0, y: 24 } to { opacity: 1, y: 0 } with duration 0.6, ease "power3.out" and stagger 0.08, then disconnect the observer. Create the tween inside gsap.context and revert it on unmount. Add a small "Replay" button that restarts the timeline. Under prefers-reduced-motion, show the cards immediately with no movement. Label the cards "Project 1" to "Project 6".',
    },
    'zh-CN': {
      title: '卡片依次出现',
      summary: '卡片组滚动进入视野时，卡片一张接一张地升起就位，让网格以顺序出现而不是整块弹出。',
      labels: { item: '项目', replay: '重播' },
      prompt:
        '用 React 制作一个包含六张卡片的网格，在网格滚动进入视野时用 GSAP 依次显示。对网格使用 IntersectionObserver（threshold 0.3）；进入视野时，对卡片执行 gsap.fromTo，从 { opacity: 0, y: 24 } 到 { opacity: 1, y: 0 }，duration 0.6，ease "power3.out"，stagger 0.08，然后断开 observer。在 gsap.context 中创建动画，并在组件卸载时 revert。添加一个小的“重播”按钮来重新播放时间轴。在 prefers-reduced-motion 下直接显示卡片，不做位移。卡片文字为“项目 1”到“项目 6”。',
    },
  },
} satisfies Motion
