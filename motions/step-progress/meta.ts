import type { Motion } from '@/lib/motions'

export default {
  slug: 'step-progress',
  tech: 'css',
  component: 'layout',
  trigger: 'click',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Step Progress',
      summary: 'The connecting line fills toward the next step and each completed dot pops into a check, so progress through a flow is obvious.',
      labels: { steps: 'Cart|Address|Payment|Done', back: 'Back', next: 'Next' },
      prompt:
        'Create a multi-step progress indicator in React and CSS. Lay out the step dots with a track line behind them, and an accent fill line on top whose transform is scaleX(current / (steps − 1)) with transform-origin left and a 420ms cubic-bezier(0.16, 1, 0.3, 1) transition. Each dot has three states via data attributes: done (accent fill with a check that draws in via stroke-dashoffset), current (accent ring with a soft pulsing halo), and upcoming (muted ring). When a dot becomes done, play a 300ms pop (scale 1 → 1.2 → 1), delayed so it lands as the line arrives. Back and Next buttons change the step and disable at each end. Mark the list with aria-current="step" on the current item. Under prefers-reduced-motion, change states without the fill transition or pop. The steps are Cart, Address, Payment, and Done.',
    },
    'zh-CN': {
      title: '步骤进度',
      summary: '连接线朝下一步填充，完成的圆点会弹成一个对勾，让流程走到哪一步一目了然。',
      labels: { steps: '购物车|地址|支付|完成', back: '上一步', next: '下一步' },
      prompt:
        '用 React 和 CSS 制作多步骤进度指示器。把步骤圆点排成一行，后面是轨道线，上面叠一条主色填充线，其 transform 为 scaleX(当前步骤 / (步骤数 − 1))，transform-origin 为 left，过渡 420ms，缓动 cubic-bezier(0.16, 1, 0.3, 1)。每个圆点通过 data 属性有三种状态：已完成（主色填充，并用 stroke-dashoffset 画出对勾）、当前（主色圆环加柔和的脉冲光晕）、未开始（弱化色圆环）。圆点变为已完成时播放一个 300ms 的弹跳（scale 1 → 1.2 → 1），并延迟到填充线到达时才落下。“上一步”和“下一步”按钮切换步骤，到两端时禁用。当前项设置 aria-current="step"。在 prefers-reduced-motion 下切换状态时不做填充过渡和弹跳。步骤为购物车、地址、支付、完成。',
    },
  },
} satisfies Motion
