import type { Motion } from '@/lib/motions'

export default {
  slug: 'following-eyes',
  tech: 'js',
  component: 'cursor',
  trigger: 'pointer',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Following Eyes',
      summary: 'A pair of eyes tracks the pointer anywhere on the page and blinks now and then, adding a little personality.',
      labels: { hint: 'They are watching' },
      prompt:
        'Create a pair of eyes that follow the pointer in React, no libraries. Each eye is a white circle with overflow hidden and a dark pupil inside. Listen to pointermove on window; for each eye, compute the angle from the eye centre to the pointer with Math.atan2 and a distance clamped to the eye radius minus the pupil radius, then set the pupil translate to (cos × d, sin × d). Smooth it with a 120ms transform transition. Add a blink: a lid that scales on the y axis from 0 to 1 and back in 160ms, triggered by a CSS animation every 4s at the 94% mark so it feels occasional. Remove the listener on unmount. Under prefers-reduced-motion, keep the pupils tracking but drop the blink and the transition. The hint reads "They are watching".',
    },
    'zh-CN': {
      title: '跟随的眼睛',
      summary: '一双眼睛在页面任何地方都会跟着指针转动，时不时眨一下，增添一点个性。',
      labels: { hint: '它们在看着你' },
      prompt:
        '用 React 制作跟随指针的一双眼睛，不使用第三方库。每只眼睛是一个 overflow hidden 的白色圆，里面有一个深色瞳孔。在 window 上监听 pointermove；对每只眼睛，用 Math.atan2 计算眼睛中心到指针的角度，并把距离限制在“眼睛半径减瞳孔半径”以内，然后把瞳孔的 translate 设为 (cos × d, sin × d)。用 120ms 的 transform 过渡让它平滑。加上眨眼：一个眼皮在 160ms 内沿 y 轴从 0 放大到 1 再缩回，通过每 4s 一次、在 94% 处触发的 CSS 动画实现，让眨眼显得偶尔发生。组件卸载时移除监听。在 prefers-reduced-motion 下保留瞳孔跟随，去掉眨眼和过渡。提示文字为“它们在看着你”。',
    },
  },
} satisfies Motion
