import type { Motion } from '@/lib/motions'

export default {
  slug: 'sliding-tabs',
  tech: 'css',
  component: 'form',
  trigger: 'click',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Sliding Tab Indicator',
      summary: 'A single highlight slides and resizes between tabs instead of each tab lighting up on its own.',
      labels: { tabs: 'Overview|Usage|API reference' },
      prompt:
        'Build accessible React tabs with one sliding indicator. Render a role="tablist" with buttons (role="tab", aria-selected) for "Overview", "Usage" and "API reference". Keep a single absolutely positioned indicator element behind the tabs. When the active tab changes, measure its offsetLeft and offsetWidth and set the indicator with transform: translateX(...) and a scaleX based on width (or width via a CSS variable), transitioning over 260ms with cubic-bezier(0.16, 1, 0.3, 1). Support Left and Right arrow keys to move between tabs. Re-measure on resize. Under prefers-reduced-motion, move the indicator instantly.',
    },
    'zh-CN': {
      title: '滑动标签指示器',
      summary: '一块高亮在标签之间滑动并改变宽度，而不是每个标签各自亮起。',
      labels: { tabs: '概览|用法|API 参考' },
      prompt:
        '用 React 制作一个带单个滑动指示器、符合无障碍规范的标签组件。渲染一个 role="tablist"，包含“概览”“用法”“API 参考”三个按钮（role="tab"，aria-selected）。在标签后方保留一个绝对定位的指示器元素。当前标签改变时，测量它的 offsetLeft 和 offsetWidth，用 transform: translateX(...) 和基于宽度的 scaleX（或通过 CSS 变量设置宽度）移动指示器，过渡时间 260ms，缓动为 cubic-bezier(0.16, 1, 0.3, 1)。支持用左右方向键切换标签。窗口尺寸变化时重新测量。在 prefers-reduced-motion 下让指示器直接跳到目标位置。',
    },
  },
} satisfies Motion
