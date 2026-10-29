import type { Motion } from '@/lib/motions'

export default {
  slug: 'matrix-rain',
  tech: 'canvas',
  component: 'background',
  trigger: 'loop',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Glyph Rain',
      summary: 'Columns of characters stream down the screen at different speeds, each leaving a fading tail behind its bright head.',
      labels: { glyphs: 'アイウエオカキクケコ0123456789<>/*+=', caption: 'Live feed' },
      prompt:
        'Create a falling glyph rain on a canvas element with no libraries. Size the canvas to its container with devicePixelRatio and a ResizeObserver. Use a 14px monospace font and one column per 14px; keep a y position and a random speed (0.4 to 1) per column. Each frame, fill the whole canvas with the background colour at 12% opacity so earlier glyphs fade into a tail, then draw a random glyph from the pool "アイウエオカキクケコ0123456789<>/*+=" at each column head in the accent colour (and the leading character in a lighter ink). Advance each column by its speed × font size every few frames, and when it passes the bottom, reset it to the top with a random chance so columns stay out of sync. Read colours from CSS custom properties. Pause the loop with an IntersectionObserver when off screen, and under prefers-reduced-motion draw a single static frame. Clean up observers and the animation frame on unmount.',
    },
    'zh-CN': {
      title: '字符雨',
      summary: '一列列字符以不同速度从屏幕上方流下，每一列明亮的头部后面拖着逐渐消失的尾巴。',
      labels: { glyphs: '动效光影节奏速度弧线弹性渐变层次空间时间', caption: '实时信号' },
      prompt:
        '用 canvas 制作下落的字符雨，不使用第三方库。用 devicePixelRatio 和 ResizeObserver 让 canvas 匹配容器尺寸。使用 14px 等宽字体，每 14px 一列；每列保存一个 y 位置和一个随机速度（0.4 到 1）。每一帧先用 12% 不透明度的背景色填满整个 canvas，让之前的字符淡出成尾巴，然后在每列的头部用主色绘制一个从字符池“动效光影节奏速度弧线弹性渐变层次空间时间”中随机选出的字符（最前面的字符使用更亮的文字色）。每隔几帧让每列前进“速度 × 字号”，越过底部后按随机概率重置到顶部，让各列保持错开。颜色从 CSS 自定义属性读取。离开屏幕时用 IntersectionObserver 暂停循环，在 prefers-reduced-motion 下只绘制一帧静态画面。组件卸载时清理观察器和动画帧。',
    },
  },
} satisfies Motion
