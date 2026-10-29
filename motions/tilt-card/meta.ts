import type { Motion } from '@/lib/motions'

export default {
  slug: 'tilt-card',
  tech: 'css',
  component: 'card',
  trigger: 'pointer',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Tilt Card with Glare',
      summary: 'The card tips in 3D toward the pointer while a light spot slides across its surface like a reflection.',
      labels: { kicker: 'Membership', name: 'Studio Pass', meta: 'Valid until Dec 2027' },
      prompt:
        'Make a React card that tilts in 3D toward the pointer, driven by CSS custom properties. On pointermove, convert the pointer position to values from -0.5 to 0.5 on each axis and write them to --px and --py on the card. In CSS, apply transform: perspective(800px) rotateX(calc(var(--py) * -12deg)) rotateY(calc(var(--px) * 12deg)) with a 150ms ease-out transition. Add a ::after glare layer with a radial-gradient of white at 35% opacity, positioned at the pointer using the same variables, and mix-blend-mode: soft-light. Reset both variables to 0 on pointerleave. Disable the tilt under prefers-reduced-motion. The card shows the label "Membership", the title "Studio Pass" and the line "Valid until Dec 2027".',
    },
    'zh-CN': {
      title: '光泽倾斜卡片',
      summary: '卡片会朝指针方向做 3D 倾斜，同时一块光斑在表面滑动，像真实的反光。',
      labels: { kicker: '会员', name: '工作室通行证', meta: '有效期至 2027 年 12 月' },
      prompt:
        '制作一个会朝指针做 3D 倾斜的 React 卡片，用 CSS 自定义属性驱动。在 pointermove 时，把指针位置换算成每个轴上 -0.5 到 0.5 的数值，并写入卡片的 --px 和 --py。在 CSS 中设置 transform: perspective(800px) rotateX(calc(var(--py) * -12deg)) rotateY(calc(var(--px) * 12deg))，并加上 150ms 的 ease-out 过渡。用 ::after 添加一层光泽：35% 不透明度的白色 radial-gradient，用相同的变量定位到指针处，并设置 mix-blend-mode: soft-light。pointerleave 时把两个变量重置为 0。在 prefers-reduced-motion 下禁用倾斜。卡片显示标签“会员”、标题“工作室通行证”和一行文字“有效期至 2027 年 12 月”。',
    },
  },
} satisfies Motion
