import type { Motion } from '@/lib/motions'

export default {
  slug: 'confetti-burst',
  tech: 'canvas',
  component: 'background',
  trigger: 'click',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Confetti Burst',
      summary: 'Clicking fires a cone of paper confetti that tumbles, slows with air drag and falls out of view.',
      labels: { cta: 'Celebrate' },
      prompt:
        'Create a dependency-free confetti burst in React with a <canvas> overlay. On click, spawn 90 pieces at the button centre, each with a random angle inside a 70-degree cone pointing up, speed 6–12 px/frame, a size of 6×10px, a random rotation speed, and a colour from a palette of 4 brand colours. Each requestAnimationFrame: apply gravity (+0.25 to vy), air drag (multiply vx and vy by 0.985), advance rotation, and draw each piece as a rotated rectangle whose width is scaled by Math.cos(tilt) so it looks like it flips. Remove pieces that leave the canvas and stop the loop when none are left. Size the canvas with devicePixelRatio and set pointer-events: none on it. Under prefers-reduced-motion, skip the confetti and flash the button once with a 150ms opacity change instead. Button label: "Celebrate".',
    },
    'zh-CN': {
      title: '彩纸爆发',
      summary: '点击后喷出一束彩纸，彩纸翻滚着因空气阻力减速，然后落出画面。',
      labels: { cta: '庆祝一下' },
      prompt:
        '用 React 和 <canvas> 覆盖层制作一个不依赖第三方库的彩纸爆发效果。点击时，在按钮中心生成 90 片彩纸，每片的方向在朝上的 70 度锥形内随机，速度为每帧 6–12px，尺寸 6×10px，旋转速度随机，颜色从 4 种品牌色中选取。每次 requestAnimationFrame：施加重力（vy 加 0.25）、空气阻力（vx 和 vy 乘以 0.985），推进旋转，并把每片彩纸画成旋转的矩形，宽度乘以 Math.cos(tilt)，看起来像在翻面。移除离开画布的彩纸，当没有彩纸时停止循环。按 devicePixelRatio 设置画布尺寸，并设置 pointer-events: none。在 prefers-reduced-motion 下不播放彩纸，改为让按钮做一次 150ms 的透明度闪动。按钮文字为“庆祝一下”。',
    },
  },
} satisfies Motion
