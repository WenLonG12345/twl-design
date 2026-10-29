import type { Motion } from '@/lib/motions'

export default {
  slug: 'send-button',
  tech: 'css',
  component: 'button',
  trigger: 'click',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Send Plane Button',
      summary: 'Clicking Send launches the paper plane off the button, the label slides over to Sent with a check, then everything resets.',
      labels: { send: 'Send', sent: 'Sent' },
      prompt:
        'Create a send button with a paper-plane launch in React and CSS. The button holds a plane icon and a label stack with "Send" and "Sent" in the same grid cell. On click, set data-state="sent" for 2.2s and disable the button. In that state, the plane plays a 600ms keyframe: a small pull back (translate(-4px, 4px)), then flies off to translate(60px, -40px) rotate(-12deg) scale(0.6) with opacity 0, using cubic-bezier(0.7, 0, 0.84, 0) so it accelerates away. The "Send" label slides up and out while "Sent" with a check slides in from below over 300ms, delayed 200ms. When the state resets, the plane fades back in at its start. Announce "Sent" with aria-live="polite". Clear the timeout on unmount. Under prefers-reduced-motion, swap labels and hide the plane without the flight.',
    },
    'zh-CN': {
      title: '纸飞机发送按钮',
      summary: '点击发送后，纸飞机从按钮上飞走，文字滑成带对勾的“已发送”，随后一切复位。',
      labels: { send: '发送', sent: '已发送' },
      prompt:
        '用 React 和 CSS 制作带纸飞机起飞效果的发送按钮。按钮包含一个纸飞机图标，以及叠在同一个 grid 单元格里的“发送”和“已发送”两段文字。点击后设置 data-state="sent" 并保持 2.2s，同时禁用按钮。在该状态下纸飞机播放一个 600ms 的 keyframe：先轻微后撤（translate(-4px, 4px)），然后飞到 translate(60px, -40px) rotate(-12deg) scale(0.6) 并 opacity 0，缓动 cubic-bezier(0.7, 0, 0.84, 0)，让它加速飞走。“发送”向上滑出，带对勾的“已发送”在 200ms 延迟后用 300ms 从下方滑入。状态复位时纸飞机在起点淡入。用 aria-live="polite" 播报“已发送”。组件卸载时清除 timeout。在 prefers-reduced-motion 下只切换文字并隐藏纸飞机，不做飞行动画。',
    },
  },
} satisfies Motion
