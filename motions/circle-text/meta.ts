import type { Motion } from '@/lib/motions'

export default {
  slug: 'circle-text',
  tech: 'js',
  component: 'text',
  trigger: 'loop',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Circle Text',
      summary: 'A line of text runs around a round badge and turns slowly, then picks up speed while you hover it, like a wheel being pushed.',
      labels: { text: 'Open for new projects · twlworks · ', action: 'Start a project' },
      prompt:
        'Create a rotating circular text badge in React and SVG. The badge is a 176px round button with an accessible label "Start a project". Inside, an SVG with viewBox 0 0 200 200 draws a circle path of radius 70 built from two arcs, and a text element with a textPath that follows it; set textLength to the circumference (2πr) with lengthAdjust="spacing" so the phrase "Open for new projects · twlworks · " meets itself exactly. Use 15px uppercase monospace text. In the centre, a 64px filled circle holds a diagonal arrow icon; on hover or focus it scales to 1.1 and rotates 45deg so the arrow points right. Spin the SVG with the Web Animations API: rotate from 0turn to 1turn over 24s, infinite. On pointerenter and focus, ease animation.playbackRate toward 5 with a requestAnimationFrame lerp (rate += (target - rate) * 0.08), and back toward 1 on leave and blur, so it speeds up and slows down smoothly. Pause the animation with an IntersectionObserver while it is off screen. Under prefers-reduced-motion, do not spin.',
    },
    'zh-CN': {
      title: '环形文字',
      summary: '一行文字沿着圆形徽章排开并缓缓转动，指针悬停时像被推了一把似的加速。',
      labels: { text: '接受新项目委托 · twlworks · ', action: '开始一个项目' },
      prompt:
        '用 React 和 SVG 制作一个会旋转的环形文字徽章。徽章是一个 176px 的圆形按钮，无障碍标签为“开始一个项目”。内部的 SVG 使用 viewBox 0 0 200 200，用两段圆弧画出半径 70 的圆形路径，再用 text 加 textPath 让文字沿路径排列；把 textLength 设为周长（2πr），并设置 lengthAdjust="spacing"，让“接受新项目委托 · twlworks · ”首尾刚好相接。文字用 15px 大写等宽字体。中心是一个 64px 的实心圆，里面放一个斜向箭头图标；悬停或聚焦时放大到 1.1 并旋转 45deg，让箭头指向右方。用 Web Animations API 让 SVG 在 24s 内从 0turn 转到 1turn，无限循环。pointerenter 和 focus 时，用 requestAnimationFrame 插值（rate += (target - rate) * 0.08）把 animation.playbackRate 平滑推向 5，离开和失焦时再回到 1，让加速与减速都很顺滑。离开屏幕时用 IntersectionObserver 暂停动画。在 prefers-reduced-motion 下不旋转。',
    },
  },
} satisfies Motion
