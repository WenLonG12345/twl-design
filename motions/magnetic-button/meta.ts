import type { Motion } from '@/lib/motions'

export default {
  slug: 'magnetic-button',
  tech: 'gsap',
  component: 'button',
  trigger: 'pointer',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Magnetic Button',
      summary: 'The button leans toward the cursor and its label drifts a little further, then settles back when the pointer leaves.',
      labels: { cta: 'Get started' },
      prompt:
        'Build a React button with a magnetic hover effect using GSAP. Wrap the button in a larger invisible hit zone with about 40px of padding. On pointermove inside the zone, measure the cursor offset from the button centre and tween the button toward it by 35% of that offset, and the inner label by a further 15%, with gsap.to (duration 0.4, ease "power3.out"). On pointerleave, tween both back to x: 0, y: 0 over 0.6s with "expo.out". Animate transform only. Skip the effect entirely when prefers-reduced-motion is set. The button label reads "Get started".',
    },
    'zh-CN': {
      title: '磁吸按钮',
      summary: '按钮会向指针方向倾斜，文字移动得更多一些；指针离开后再平稳回位。',
      labels: { cta: '立即开始' },
      prompt:
        '使用 GSAP 为 React 按钮制作磁吸悬停效果。用一个约 40px 内边距的透明感应区包住按钮。指针在感应区内移动时，计算指针相对按钮中心的偏移，用 gsap.to 让按钮向指针方向移动偏移量的 35%，内部文字再额外移动 15%（duration 0.4，ease "power3.out"）。指针离开时，用 0.6 秒的 "expo.out" 让两者回到 x: 0、y: 0。只对 transform 做动画。当用户开启 prefers-reduced-motion 时完全不启用此效果。按钮文字为“立即开始”。',
    },
  },
} satisfies Motion
