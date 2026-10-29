import type { Motion } from '@/lib/motions'

export default {
  slug: 'toggle-switch',
  tech: 'css',
  component: 'form',
  trigger: 'toggle',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Stretchy Toggle',
      summary: 'The knob stretches into a pill as it travels, then settles round on the other side while the track fills with colour.',
      labels: { label: 'Email notifications' },
      prompt:
        'Make an accessible React toggle switch in CSS. Use a real <button role="switch" aria-checked> with a visible text label "Email notifications" next to it. The track is 48×28px; the 22px knob sits at translateX(3px) when off and translateX(23px) when on, moving over 260ms with cubic-bezier(0.16, 1, 0.3, 1). While pressed (:active) the knob widens by scaling scaleX(1.25) from the side it is leaving, so it looks like it stretches. The track fades from a neutral surface to the accent colour over 200ms. Show a visible focus ring on :focus-visible. Clicking the label also toggles it. Under prefers-reduced-motion, move the knob instantly and skip the stretch.',
    },
    'zh-CN': {
      title: '弹性开关',
      summary: '开关圆钮在移动时会拉长成胶囊形，到另一侧后恢复圆形，轨道同时填满颜色。',
      labels: { label: '邮件通知' },
      prompt:
        '用 CSS 为 React 制作一个符合无障碍规范的开关。使用真正的 <button role="switch" aria-checked>，旁边显示可见文字“邮件通知”。轨道尺寸 48×28px；22px 的圆钮关闭时位于 translateX(3px)，开启时位于 translateX(23px)，移动时长 260ms，缓动为 cubic-bezier(0.16, 1, 0.3, 1)。按下时（:active），圆钮从即将离开的一侧做 scaleX(1.25) 拉伸，看起来像被拉长。轨道在 200ms 内从中性底色渐变为强调色。:focus-visible 时显示清晰的焦点环。点击文字也能切换。在 prefers-reduced-motion 下圆钮直接跳到位，不做拉伸。',
    },
  },
} satisfies Motion
