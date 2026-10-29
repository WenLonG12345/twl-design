import type { Motion } from '@/lib/motions'

export default {
  slug: 'curtain-transition',
  tech: 'gsap',
  component: 'layout',
  trigger: 'click',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Curtain Page Transition',
      summary: 'Two coloured panels sweep across to cover the page, the content swaps behind them, and they sweep away to reveal the new page.',
      labels: { a: 'Home', b: 'Work', go: 'Go to {page}' },
      prompt:
        'Create a curtain page transition with a GSAP timeline. Layer two full-size panels over the page, an accent one and a darker one, both scaled to scaleX(0) with transform-origin left. On navigation, build a timeline: animate both to scaleX(1) over 0.45s with ease "power3.inOut", staggered 0.08s so the dark panel follows the accent one. At the midpoint, while the page is fully covered, swap the content (call the router or set state). Then switch transform-origin to right and animate both back to scaleX(0) with the same ease, the accent panel last. Ignore clicks while the timeline is active. Under prefers-reduced-motion, replace the curtain with a 150ms crossfade. Revert the GSAP context on unmount. The pages are "Home" and "Work".',
    },
    'zh-CN': {
      title: '幕布转场',
      summary: '两块彩色面板扫过来盖住页面，内容在后面切换，然后面板扫开露出新页面。',
      labels: { a: '首页', b: '作品', go: '前往{page}' },
      prompt:
        '用 GSAP 时间线制作幕布式页面转场。在页面上叠两块全尺寸面板，一块主色、一块更深的颜色，初始都为 scaleX(0)，transform-origin 为 left。导航时建立时间线：两块面板在 0.45s 内动到 scaleX(1)，ease "power3.inOut"，错开 0.08s，让深色面板跟在主色面板后面。在中点、页面被完全遮住时切换内容（调用路由或修改 state）。然后把 transform-origin 改为 right，用同样的缓动把两块面板动回 scaleX(0)，主色面板最后离开。时间线进行中忽略点击。在 prefers-reduced-motion 下用 150ms 的交叉淡化代替幕布。组件卸载时 revert GSAP context。页面为“首页”和“作品”。',
    },
  },
} satisfies Motion
