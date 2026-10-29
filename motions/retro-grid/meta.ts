import type { Motion } from '@/lib/motions'

export default {
  slug: 'retro-grid',
  tech: 'css',
  component: 'background',
  trigger: 'loop',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Retro Grid Horizon',
      summary: 'A glowing grid floor rolls endlessly toward you under a horizon, giving a hero section a sense of forward travel.',
      labels: { title: 'Next stop' },
      prompt:
        'Create a retro grid horizon background in pure CSS. Inside a container with overflow hidden, add a floor element positioned at the bottom half, wider than the container (200% width, left -50%), with two repeating-linear-gradients forming 40px grid lines in the accent colour at 50% opacity. Tilt it with transform: perspective(300px) rotateX(60deg) and transform-origin at the top. Animate background-position-y from 0 to 40px over 1.2s linear infinite so the lines roll toward the viewer seamlessly. Fade the far edge with a mask-image linear-gradient so the grid melts into the horizon, and add a soft accent glow line at the horizon. Put the headline above the horizon. Pause off screen, and under prefers-reduced-motion keep the grid still. The headline reads "Next stop".',
    },
    'zh-CN': {
      title: '复古网格地平线',
      summary: '发光的网格地面在地平线下源源不断地朝你滚来，给首屏一种向前行进的感觉。',
      labels: { title: '下一站' },
      prompt:
        '用纯 CSS 制作复古网格地平线背景。在 overflow hidden 的容器中，于下半部分放一个比容器更宽的地面元素（宽 200%，left -50%），用两个 repeating-linear-gradient 画出 40px 间距、50% 不透明度主色的网格线。用 transform: perspective(300px) rotateX(60deg) 让它倾斜，transform-origin 设在顶部。用 1.2s linear infinite 把 background-position-y 从 0 动到 40px，让线条无缝地朝观者滚动。用 mask-image linear-gradient 淡化远端，让网格融入地平线，并在地平线处加一条柔和的主色光线。标题放在地平线之上。离开屏幕时暂停，在 prefers-reduced-motion 下让网格保持静止。标题为“下一站”。',
    },
  },
} satisfies Motion
