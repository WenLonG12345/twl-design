import type { Motion } from '@/lib/motions'

export default {
  slug: 'modal-dialog',
  tech: 'css',
  component: 'layout',
  trigger: 'toggle',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Modal Dialog',
      summary: 'The dialog rises and scales in over a fading backdrop, and leaves the same way, all on the native dialog element.',
      labels: {
        open: 'Delete project',
        title: 'Delete this project?',
        body: 'Its motions and settings will be removed. This cannot be undone.',
        cancel: 'Cancel',
        confirm: 'Delete',
      },
      prompt:
        'Create a modal using the native <dialog> element with CSS enter and exit transitions. Open it with showModal() so focus trapping, Escape to close, and the top layer come for free. Style the closed state with opacity 0, translateY(12px), and scale(0.96), and [open] with opacity 1 and no transform. Transition opacity, transform, overlay, and display over 260ms with cubic-bezier(0.16, 1, 0.3, 1) and transition-behavior: allow-discrete so the exit can animate too. Use @starting-style to give the [open] state its starting values so the enter animates. Do the same for ::backdrop, fading a dark scrim with a light backdrop blur. Close on the Cancel button, on Confirm, and on a click on the backdrop. Under prefers-reduced-motion, keep the fade and drop the movement. The dialog title reads "Delete this project?".',
    },
    'zh-CN': {
      title: '模态对话框',
      summary: '对话框在逐渐变暗的背景上浮起放大，离开时原路返回，全部基于原生 dialog 元素。',
      labels: {
        open: '删除项目',
        title: '要删除这个项目吗？',
        body: '项目中的动效和设置都会被移除，此操作无法撤销。',
        cancel: '取消',
        confirm: '删除',
      },
      prompt:
        '用原生 <dialog> 元素制作带 CSS 进出场过渡的模态框。用 showModal() 打开，自动获得焦点锁定、Escape 关闭和顶层显示。关闭状态设为 opacity 0、translateY(12px)、scale(0.96)，[open] 状态为 opacity 1、无 transform。opacity、transform、overlay 和 display 过渡 260ms，缓动 cubic-bezier(0.16, 1, 0.3, 1)，并设置 transition-behavior: allow-discrete，让退场也能动画。用 @starting-style 给 [open] 状态设置起始值，让进场有动画。::backdrop 同样处理，淡入深色遮罩并加一点背景模糊。点击“取消”、“删除”或点击遮罩时关闭。在 prefers-reduced-motion 下保留淡入淡出，去掉位移。对话框标题为“要删除这个项目吗？”。',
    },
  },
} satisfies Motion
