import type { Motion } from '@/lib/motions'

export default {
  slug: 'underline-slide',
  tech: 'css',
  component: 'text',
  trigger: 'hover',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Sliding Underline',
      summary: 'The underline draws in from the left when you hover a link and leaves through the right, so it reads as passing through.',
      labels: { a: 'Work', b: 'About', c: 'Contact' },
      prompt:
        'Create navigation links with a sliding underline in pure CSS. Each link is position: relative with an ::after line (height 2px, bottom -4px, full width, accent colour) set to transform: scaleX(0) with transform-origin: right. On :hover and :focus-visible, switch to transform-origin: left and scaleX(1). Transition transform over 300ms with cubic-bezier(0.16, 1, 0.3, 1). Because the origin flips, the line enters from the left and exits to the right. Under prefers-reduced-motion, show the line instantly without the slide. The links read "Work", "About", and "Contact".',
    },
    'zh-CN': {
      title: '滑动下划线',
      summary: '悬停链接时下划线从左侧画入，移开时从右侧离开，像一条线从文字下方穿过。',
      labels: { a: '作品', b: '关于', c: '联系' },
      prompt:
        '用纯 CSS 制作带滑动下划线的导航链接。每个链接设为 position: relative，用 ::after 画一条线（高 2px，bottom -4px，满宽，主色），初始为 transform: scaleX(0)，transform-origin: right。在 :hover 和 :focus-visible 时，改为 transform-origin: left 和 scaleX(1)。transform 过渡 300ms，缓动为 cubic-bezier(0.16, 1, 0.3, 1)。由于原点会切换，线条从左侧进入、从右侧离开。在 prefers-reduced-motion 下直接显示线条，不做滑动。链接文字为“作品”“关于”“联系”。',
    },
  },
} satisfies Motion
