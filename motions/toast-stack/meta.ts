import type { Motion } from '@/lib/motions'

export default {
  slug: 'toast-stack',
  tech: 'css',
  component: 'card',
  trigger: 'click',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Toast Stack',
      summary: 'New notifications slide up from the bottom and push older ones back into a neat, shrinking pile that clears itself.',
      labels: { trigger: 'Save', msg: 'Changes saved', close: 'Dismiss' },
      prompt:
        'Create a stacked toast notification system in React and CSS. Keep an array of toasts with unique ids; the trigger button pushes one and each toast removes itself after 3s. Render at most the newest three, absolutely positioned at the bottom of a container. Give each toast an index from the newest (0, 1, 2) as a CSS variable and set transform: translateY(calc(var(--i) * -10px)) scale(calc(1 - var(--i) * 0.06)) and opacity calc(1 - var(--i) * 0.25), with a 360ms cubic-bezier(0.16, 1, 0.3, 1) transition so older toasts slide back as new ones arrive. New toasts enter with a keyframe from translateY(100%) and opacity 0. Each toast has a dismiss button. Use role="status" on the container so messages are announced. Clear all timers on unmount. Under prefers-reduced-motion, remove the slide and keep a quick fade. The message reads "Changes saved".',
    },
    'zh-CN': {
      title: '堆叠通知',
      summary: '新通知从底部滑入，把旧通知推到后面，叠成一摞逐渐缩小、会自动清空的卡片。',
      labels: { trigger: '保存', msg: '修改已保存', close: '关闭' },
      prompt:
        '用 React 和 CSS 制作堆叠式 toast 通知。用数组保存带唯一 id 的通知；触发按钮会添加一条，每条通知在 3s 后自动移除。最多渲染最新的三条，绝对定位在容器底部。给每条通知一个从最新开始计数的序号（0、1、2）作为 CSS 变量，设置 transform: translateY(calc(var(--i) * -10px)) scale(calc(1 - var(--i) * 0.06))，opacity 为 calc(1 - var(--i) * 0.25)，并加上 360ms、cubic-bezier(0.16, 1, 0.3, 1) 的过渡，让新通知到来时旧通知向后滑。新通知用 keyframe 从 translateY(100%)、opacity 0 进入。每条通知带一个关闭按钮。容器设置 role="status"，让消息被播报。组件卸载时清除所有计时器。在 prefers-reduced-motion 下去掉滑动，只保留快速淡入。消息为“修改已保存”。',
    },
  },
} satisfies Motion
