import type { Motion } from '@/lib/motions'

export default {
  slug: 'hamburger-morph',
  tech: 'css',
  component: 'button',
  trigger: 'toggle',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Hamburger to Close',
      summary: 'The three menu lines fold into an X: the outer lines meet in the middle, then rotate, while the centre line slips away.',
      labels: { open: 'Open menu', close: 'Close menu' },
      prompt:
        'Create a hamburger menu button that morphs into a close icon in pure CSS with a React toggle. Draw three 22px × 2px bars with rounded ends inside a 44px button. Use aria-expanded to drive the state. When expanded, run two steps with the same 360ms total: first move the top and bottom bars to the centre (translateY ±7px), then rotate them to 45deg and -45deg. Do this by transitioning translate and rotate as separate properties with different delays, so they move first and rotate second on open, and the order reverses on close. Fade and scale the middle bar to 0 during the first step. Update the aria-label between "Open menu" and "Close menu". Under prefers-reduced-motion, swap the shapes without transitions.',
    },
    'zh-CN': {
      title: '汉堡菜单变关闭',
      summary: '三条菜单线折成一个 X：上下两条先在中间汇合再旋转，中间那条悄悄消失。',
      labels: { open: '打开菜单', close: '关闭菜单' },
      prompt:
        '用纯 CSS 配合 React 状态切换，制作从汉堡菜单变成关闭图标的按钮。在 44px 的按钮内画三条 22px × 2px 的圆头横条。用 aria-expanded 驱动状态。展开时分两步完成，总时长 360ms：先把上下两条移到中间（translateY ±7px），再分别旋转到 45deg 和 -45deg。做法是把 translate 和 rotate 作为两个独立属性过渡，并设置不同的延迟，这样打开时先移动后旋转，关闭时顺序反过来。中间那条在第一步中淡出并缩放到 0。aria-label 在“打开菜单”和“关闭菜单”之间切换。在 prefers-reduced-motion 下直接切换形状，不做过渡。',
    },
  },
} satisfies Motion
