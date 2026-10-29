import type { Motion } from '@/lib/motions'

export default {
  slug: 'animated-checkbox',
  tech: 'css',
  component: 'form',
  trigger: 'toggle',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Animated Checkbox',
      summary: 'Ticking a to-do fills the box with a squish, draws the check mark, and strikes the task through from left to right.',
      labels: { a: 'Sketch the storyboard', b: 'Pick the easing', c: 'Ship the demo' },
      prompt:
        'Create an animated to-do checkbox in pure CSS on a native checkbox. Hide the native input visually (keep it focusable) and draw a 22px rounded box next to the label text. When :checked, fill the box with the accent colour and play a 300ms keyframe that squishes it (scale 1 → 0.85 → 1.08 → 1). Draw the check with an SVG path whose stroke-dasharray equals its length; transition stroke-dashoffset from the full length to 0 over 260ms with a 120ms delay. Strike the label text with a ::after line that scales from 0 to 1 on the x axis with transform-origin left over 360ms, and fade the text to the muted colour. Show a focus ring around the box when the input has :focus-visible. Under prefers-reduced-motion, apply the checked state without animation. The tasks read "Sketch the storyboard", "Pick the easing", and "Ship the demo".',
    },
    'zh-CN': {
      title: '动态复选框',
      summary: '勾选待办时方框带着挤压感填满，画出对勾，任务文字也从左到右被划掉。',
      labels: { a: '画好分镜', b: '选好缓动', c: '发布演示' },
      prompt:
        '用纯 CSS 在原生复选框上制作带动画的待办事项。把原生 input 在视觉上隐藏（保持可聚焦），在文字旁画一个 22px 的圆角方框。:checked 时用主色填满方框，并播放一个 300ms 的挤压 keyframe（scale 1 → 0.85 → 1.08 → 1）。对勾用 SVG path 绘制，stroke-dasharray 等于路径长度，stroke-dashoffset 从完整长度过渡到 0，时长 260ms，延迟 120ms。用 ::after 画一条删除线，transform-origin 为 left，在 360ms 内从 scaleX(0) 变为 scaleX(1)，同时文字淡化为弱化色。input 处于 :focus-visible 时在方框外显示焦点框。在 prefers-reduced-motion 下直接应用勾选状态，不做动画。任务为“画好分镜”“选好缓动”“发布演示”。',
    },
  },
} satisfies Motion
