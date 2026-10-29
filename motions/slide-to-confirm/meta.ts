import type { Motion } from '@/lib/motions'

export default {
  slug: 'slide-to-confirm',
  tech: 'js',
  component: 'button',
  trigger: 'drag',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Slide to Confirm',
      summary: 'Drag the knob across the track to commit; let go early and it springs back, so a stray tap never confirms anything.',
      labels: { hint: 'Slide to pay', done: 'Paid', reset: 'Reset' },
      prompt:
        'Create a slide-to-confirm control in React with pointer events, no libraries. A pill track holds a round knob on the left and a hint label in the middle. On pointerdown, capture the pointer; on pointermove, clamp the knob offset between 0 and track width minus knob width and set it with transform, and fade the hint by the progress. On pointerup, if progress is over 90% snap to the end and switch to a done state (track fills with accent, label reads "Paid"), otherwise animate back to 0 with a 300ms cubic-bezier(0.34, 1.56, 0.64, 1) transition. Disable the transition while dragging so the knob tracks the finger exactly. Make the knob a button: Enter or Space confirms directly for keyboard users. Show a small Reset button after confirming. Under prefers-reduced-motion, remove the spring-back easing. The hint reads "Slide to pay".',
    },
    'zh-CN': {
      title: '滑动确认',
      summary: '把滑块拖过轨道才算确认；中途松手会弹回原位，误触永远不会触发操作。',
      labels: { hint: '滑动支付', done: '已支付', reset: '重置' },
      prompt:
        '用 React 和指针事件制作滑动确认控件，不使用第三方库。胶囊形轨道左侧放一个圆形滑块，中间是提示文字。pointerdown 时捕获指针；pointermove 时把滑块位移限制在 0 到“轨道宽度减滑块宽度”之间，用 transform 设置，并根据进度淡出提示文字。pointerup 时，如果进度超过 90% 就吸附到终点并切换到完成状态（轨道填充主色，文字变为“已支付”），否则用 300ms、cubic-bezier(0.34, 1.56, 0.64, 1) 的过渡弹回 0。拖动时关闭过渡，让滑块精确跟随手指。滑块本身是一个按钮：键盘用户按 Enter 或 Space 可直接确认。确认后显示一个小的“重置”按钮。在 prefers-reduced-motion 下去掉回弹缓动。提示文字为“滑动支付”。',
    },
  },
} satisfies Motion
