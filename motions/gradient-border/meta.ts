import type { Motion } from '@/lib/motions'

export default {
  slug: 'gradient-border',
  tech: 'css',
  component: 'button',
  trigger: 'loop',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Rotating Gradient Border',
      summary: 'A bright arc travels around the edge of the button, drawing attention to it without moving the button itself.',
      labels: { cta: 'Join the beta' },
      prompt:
        'Create a button with a gradient border that rotates around it in pure CSS. Register a custom property with @property --angle { syntax: "<angle>"; initial-value: 0deg; inherits: false }. Give the button a 2px transparent border and two backgrounds: the surface colour clipped to padding-box, and a conic-gradient(from var(--angle), transparent 0 60%, accent 80%, light ink 90%, transparent) clipped to border-box. Animate --angle from 0deg to 360deg over 3s linear infinite so the bright arc circles the edge. Speed it up to 1.2s on hover. Under prefers-reduced-motion, stop the rotation and show a static accent border. The label reads "Join the beta".',
    },
    'zh-CN': {
      title: '旋转渐变边框',
      summary: '一段亮色弧线沿着按钮边缘绕圈，在按钮本身不动的情况下吸引注意。',
      labels: { cta: '加入内测' },
      prompt:
        '用纯 CSS 制作边框渐变绕圈旋转的按钮。用 @property --angle { syntax: "<angle>"; initial-value: 0deg; inherits: false } 注册自定义属性。按钮设置 2px 透明边框和两层背景：裁切到 padding-box 的底色，以及裁切到 border-box 的 conic-gradient(from var(--angle), transparent 0 60%, 主色 80%, 浅色文字色 90%, transparent)。用 3s linear infinite 把 --angle 从 0deg 动到 360deg，让亮色弧线沿边缘绕圈。悬停时加速到 1.2s 一圈。在 prefers-reduced-motion 下停止旋转，显示静态的主色边框。按钮文字为“加入内测”。',
    },
  },
} satisfies Motion
