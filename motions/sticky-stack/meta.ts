import type { Motion } from '@/lib/motions'

export default {
  slug: 'sticky-stack',
  tech: 'css',
  component: 'layout',
  trigger: 'scroll',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Sticky Stacking Cards',
      summary: 'As you scroll, each card sticks a little lower than the one before and the earlier cards shrink back into a neat pile.',
      labels: { steps: 'Brief|Sketch|Build|Launch', hint: 'Scroll inside the frame' },
      prompt:
        'Create stacking cards on scroll with CSS in React. Give each card position: sticky with top: calc(16px + var(--i) * 14px), so later cards stop a little lower and overlap the earlier ones like a deck. Use a scroll-driven animation so cards shrink as they get covered: animation: shrink linear both; animation-timeline: view(); animation-range: exit-crossing 0% exit-crossing 60%; with a keyframe to transform: scale(0.9) and filter: brightness(0.7). Add a fallback for browsers without animation-timeline (they simply stack without shrinking). Cards are numbered steps "Brief", "Sketch", "Build", "Launch". Under prefers-reduced-motion, keep the sticky stacking and drop the scale.',
    },
    'zh-CN': {
      title: '粘性堆叠卡片',
      summary: '滚动时，每张卡片都停在比上一张略低的位置，前面的卡片缩小，整齐地叠成一摞。',
      labels: { steps: '需求|草图|开发|上线', hint: '在框内滚动' },
      prompt:
        '用 CSS 在 React 中制作滚动时堆叠的卡片。给每张卡片设置 position: sticky 和 top: calc(16px + var(--i) * 14px)，让后面的卡片停在略低的位置，像一副牌一样压住前面的卡片。用滚动驱动动画让被覆盖的卡片缩小：animation: shrink linear both; animation-timeline: view(); animation-range: exit-crossing 0% exit-crossing 60%;，keyframe 终点为 transform: scale(0.9) 和 filter: brightness(0.7)。为不支持 animation-timeline 的浏览器保留降级效果（只堆叠不缩小）。卡片是编号步骤“需求”“草图”“开发”“上线”。在 prefers-reduced-motion 下保留粘性堆叠，去掉缩放。',
    },
  },
} satisfies Motion
