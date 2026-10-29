import type { Motion } from '@/lib/motions'

export default {
  slug: 'wavy-lines',
  tech: 'canvas',
  component: 'background',
  trigger: 'pointer',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Wavy Lines',
      summary: 'Fine horizontal lines ripple slowly like a calm sea, and swell into a bump wherever the pointer passes over them.',
      labels: { caption: 'Move your pointer' },
      prompt:
        'Create a field of wavy lines on a canvas with no libraries. Size the canvas to its container with devicePixelRatio and a ResizeObserver. Draw about 14 horizontal lines evenly spaced. For each line, step across x in 6px increments and offset y by sin(x × 0.02 + time + lineIndex × 0.5) × 4 for a slow ripple, plus a bump of amplitude 18 × exp(−distance² / 2400) where distance is from the point to the pointer, pushing the line away from the pointer vertically. Ease the pointer position toward the real one each frame so the bump glides. Stroke the lines in a muted colour, and the line nearest the pointer in the accent colour. Read colours from CSS custom properties. Pause with an IntersectionObserver off screen, draw one still frame under prefers-reduced-motion, and clean up on unmount.',
    },
    'zh-CN': {
      title: '波浪线条',
      summary: '细细的水平线条像平静的海面一样缓缓起伏，指针经过的地方会鼓起一道波峰。',
      labels: { caption: '移动你的指针' },
      prompt:
        '用 canvas 制作波浪线条背景，不使用第三方库。用 devicePixelRatio 和 ResizeObserver 让 canvas 匹配容器尺寸。均匀绘制约 14 条水平线。对每条线以 6px 为步长遍历 x，y 偏移 sin(x × 0.02 + 时间 + 线序号 × 0.5) × 4 形成缓慢的起伏，再加上一个幅度为 18 × exp(−距离² / 2400) 的鼓包（距离为该点到指针的距离），沿纵向把线条推离指针。每帧让指针位置向真实位置缓动，使鼓包平滑滑动。线条用弱化色描边，离指针最近的一条用主色。颜色从 CSS 自定义属性读取。离开屏幕时用 IntersectionObserver 暂停，在 prefers-reduced-motion 下只绘制一帧静态画面，组件卸载时清理。',
    },
  },
} satisfies Motion
