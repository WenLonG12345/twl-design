import type { Motion } from '@/lib/motions'

export default {
  slug: 'hold-to-confirm',
  tech: 'js',
  component: 'button',
  trigger: 'click',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Hold to Confirm',
      summary: 'A fill grows across the button while you hold it down; let go early and it drains back, hold to the end and it confirms.',
      labels: { idle: 'Hold to delete', done: 'Deleted', hint: 'Press and hold for 1.2 seconds' },
      prompt:
        'Build a React hold-to-confirm button for destructive actions. On pointerdown (and Space or Enter keydown), start a requestAnimationFrame loop that raises a progress value from 0 to 1 over 1200ms and sets it as --p on the button. A ::before fill layer uses transform: scaleX(var(--p)) with transform-origin left. On pointerup, pointerleave or keyup before completion, animate --p back to 0 over 250ms. When progress reaches 1, switch the label to "Deleted", mark it done for 1.6s, then reset. Call setPointerCapture so dragging off still counts. Add aria-describedby pointing at the hint "Press and hold for 1.2 seconds". Under prefers-reduced-motion keep the hold time but update the fill in 4 steps. The idle label reads "Hold to delete".',
    },
    'zh-CN': {
      title: '长按确认',
      summary: '按住按钮时，填充色会逐渐铺满；中途松开会退回，按住到底才会确认。',
      labels: { idle: '长按删除', done: '已删除', hint: '按住 1.2 秒' },
      prompt:
        '为危险操作制作一个 React 长按确认按钮。在 pointerdown（以及按下空格或回车键）时，启动一个 requestAnimationFrame 循环，在 1200ms 内把进度值从 0 增加到 1，并作为 --p 写到按钮上。用 ::before 填充层设置 transform: scaleX(var(--p))，transform-origin 为左侧。如果在完成前触发 pointerup、pointerleave 或 keyup，就在 250ms 内把 --p 退回 0。进度达到 1 时，文字切换为“已删除”，保持完成状态 1.6 秒后重置。调用 setPointerCapture，让指针移出按钮时依然有效。添加 aria-describedby 指向提示文字“按住 1.2 秒”。在 prefers-reduced-motion 下保持相同的按住时间，但填充分 4 段更新。默认文字为“长按删除”。',
    },
  },
} satisfies Motion
