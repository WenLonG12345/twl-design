import type { Motion } from '@/lib/motions'

export default {
  slug: 'radar-sweep',
  tech: 'css',
  component: 'svg',
  trigger: 'loop',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Radar Sweep',
      summary: 'A beam sweeps round a radar dish and each blip flashes the moment the beam passes over it, then fades.',
      labels: { caption: 'Scanning' },
      prompt:
        'Create a radar sweep in SVG and CSS. Draw three concentric circle rings and two crosshair lines in a muted stroke. Over them, place a disc with a conic-gradient(from 0deg, accent at 50% opacity, transparent 70deg) that rotates 360deg every 3s linear infinite, so a soft wedge trails behind a bright leading edge. Place three blip dots at known angles. Each blip runs a 3s keyframe (opacity 0 → 1 at 2% → 0 at 40%, scale 1.6 → 1) with animation-delay = (angle / 360) × 3s, so it flashes exactly as the beam passes. Pause all animation when off screen. Under prefers-reduced-motion, hold the beam still and show the blips at half opacity. The caption reads "Scanning".',
    },
    'zh-CN': {
      title: '雷达扫描',
      summary: '一道光束绕着雷达盘扫过，每个目标点在光束经过的瞬间亮起，然后慢慢消失。',
      labels: { caption: '扫描中' },
      prompt:
        '用 SVG 和 CSS 制作雷达扫描效果。用弱化色描边画三个同心圆环和两条十字线。在其上放一个圆盘，背景为 conic-gradient(from 0deg, 50% 不透明度的主色, transparent 70deg)，以 3s linear infinite 旋转 360deg，让一道柔和的扇形拖在明亮的前沿之后。在已知角度上放三个目标点。每个目标点运行一个 3s 的 keyframe（opacity 0 → 2% 时为 1 → 40% 时为 0，scale 1.6 → 1），animation-delay = (角度 / 360) × 3s，使它正好在光束经过时亮起。离开屏幕时暂停所有动画。在 prefers-reduced-motion 下光束保持静止，目标点以半透明显示。说明文字为“扫描中”。',
    },
  },
} satisfies Motion
