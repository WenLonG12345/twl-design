import type { Motion } from '@/lib/motions'

export default {
  slug: 'bokeh',
  tech: 'css',
  component: 'background',
  trigger: 'loop',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Bokeh Lights',
      summary: 'Soft out-of-focus orbs of light drift and pulse behind the content, like city lights seen through a lens.',
      labels: { title: 'Evening edition' },
      prompt:
        'Create a bokeh light background in pure CSS. Place about ten absolutely positioned circles with random sizes (30–110px), positions, and warm hues set through inline CSS custom properties. Give each a radial-gradient fill that fades to transparent, filter: blur(6px), and mix-blend-mode: screen so overlapping orbs brighten. Animate each with a keyframe that drifts translate by ±20px and scales between 0.85 and 1.1 while opacity breathes between 0.35 and 0.8, using alternate infinite timing with a different duration (8–16s) and negative delay per orb so they never move in sync. Pause the animations when off screen. Under prefers-reduced-motion, keep the orbs still. The headline reads "Evening edition".',
    },
    'zh-CN': {
      title: '散景光斑',
      summary: '柔和的失焦光斑在内容后面飘动、呼吸，像透过镜头看到的城市灯光。',
      labels: { title: '夜间特刊' },
      prompt:
        '用纯 CSS 制作散景光斑背景。放置约十个绝对定位的圆形，通过内联 CSS 自定义属性设置随机的尺寸（30–110px）、位置和暖色调。每个圆用渐变到透明的 radial-gradient 填充，加上 filter: blur(6px) 和 mix-blend-mode: screen，让重叠的光斑更亮。每个光斑运行一个 keyframe：translate 漂移 ±20px，scale 在 0.85 到 1.1 之间变化，opacity 在 0.35 到 0.8 之间呼吸；使用 alternate infinite，每个光斑的时长不同（8–16s）并设置负延迟，确保它们永远不同步。离开屏幕时暂停动画。在 prefers-reduced-motion 下光斑保持静止。标题为“夜间特刊”。',
    },
  },
} satisfies Motion
