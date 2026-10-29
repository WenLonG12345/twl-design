import type { Motion } from '@/lib/motions'

export default {
  slug: 'parallax-layers',
  tech: 'js',
  component: 'background',
  trigger: 'scroll',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Parallax Layers',
      summary: 'Hills, sun and title move at different speeds as you scroll, so a flat scene gains depth.',
      labels: { hint: 'Scroll', title: 'Into the hills' },
      prompt:
        'Create a layered parallax scene in React and CSS. Stack four absolutely positioned layers in a sticky scene: sky with a sun, far hills, near hills, and the headline. On scroll, compute progress 0 to 1 through the section and write it into a CSS custom property --p on the scene (no React state). Each layer moves with its own factor: transform: translateY(calc(var(--p) * <n>px)), where farther layers move less (sun 60px, far hills 30px, near hills -20px) and the headline drifts up and fades (translateY(calc(var(--p) * -80px)), opacity calc(1 - var(--p) * 1.4)). Draw the hills with clip-path polygons or radial gradients. Use will-change: transform on the layers. Under prefers-reduced-motion, keep every layer still. The headline reads "Into the hills".',
    },
    'zh-CN': {
      title: '视差分层',
      summary: '滚动时山丘、太阳和标题以不同速度移动，让一幅平面画面产生纵深。',
      labels: { hint: '向下滚动', title: '走进群山' },
      prompt:
        '用 React 和 CSS 制作分层视差场景。在一个 sticky 场景中叠放四个绝对定位的图层：带太阳的天空、远山、近山和标题。滚动时计算区块内 0 到 1 的进度，写入场景的 CSS 自定义属性 --p（不使用 React state）。每个图层以各自的系数移动：transform: translateY(calc(var(--p) * <n>px))，越远的图层移动越少（太阳 60px、远山 30px、近山 -20px），标题向上漂移并淡出（translateY(calc(var(--p) * -80px))，opacity calc(1 - var(--p) * 1.4)）。山丘用 clip-path 多边形或 radial-gradient 绘制。图层设置 will-change: transform。在 prefers-reduced-motion 下所有图层保持静止。标题为“走进群山”。',
    },
  },
} satisfies Motion
