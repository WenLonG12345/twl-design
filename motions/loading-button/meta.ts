import type { Motion } from '@/lib/motions'

export default {
  slug: 'loading-button',
  tech: 'css',
  component: 'button',
  trigger: 'click',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Loading to Success',
      summary: 'The label slides away for a spinner while the request runs, then a check mark draws itself when it succeeds.',
      labels: { idle: 'Place order', loading: 'Placing order', done: 'Order placed' },
      prompt:
        'Build a React submit button with three states: idle, loading and done, stored in data-state. Keep the button width fixed so it never jumps. On click, switch to loading: the label slides up and fades out (translateY(-100%), 200ms) while a 18px spinner (a circle with a 3/4 border, rotating 360deg every 700ms linear) fades in. Simulate a 1.4s request, then switch to done: the spinner fades out and an SVG check mark draws itself by animating stroke-dashoffset from its path length to 0 over 400ms with cubic-bezier(0.16, 1, 0.3, 1), with the label "Order placed". Return to idle after 2s. Disable the button and set aria-busy while loading, and announce the state text with aria-live="polite". Under prefers-reduced-motion, replace the slide and draw with 150ms fades and keep the spinner static. The idle label reads "Place order".',
    },
    'zh-CN': {
      title: '加载到成功',
      summary: '请求进行时文字滑走、换成加载圈；成功后对勾会自己画出来。',
      labels: { idle: '提交订单', loading: '正在提交', done: '订单已提交' },
      prompt:
        '用 React 制作一个有三种状态的提交按钮：idle、loading、done，保存在 data-state 中。按钮宽度保持固定，避免跳动。点击后切换到 loading：文字向上滑出并淡出（translateY(-100%)，200ms），同时淡入一个 18px 的加载圈（3/4 边框的圆，每 700ms 线性旋转 360 度）。模拟 1.4 秒的请求后切换到 done：加载圈淡出，一个 SVG 对勾通过把 stroke-dashoffset 从路径长度动画到 0 自己画出来，时长 400ms，缓动为 cubic-bezier(0.16, 1, 0.3, 1)，文字为“订单已提交”。2 秒后回到 idle。loading 时禁用按钮并设置 aria-busy，并用 aria-live="polite" 播报状态文字。在 prefers-reduced-motion 下用 150ms 的淡入淡出代替滑动和描绘，加载圈保持静止。默认文字为“提交订单”。',
    },
  },
} satisfies Motion
