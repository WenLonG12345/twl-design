import type { Motion } from '@/lib/motions'

export default {
  slug: 'expanding-search',
  tech: 'css',
  component: 'form',
  trigger: 'click',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Expanding Search',
      summary: 'A round search icon stretches into a full field when tapped and folds back when you leave it empty.',
      labels: { open: 'Open search', placeholder: 'Search motions…' },
      prompt:
        'Create an expanding search field in React and CSS. Collapsed, it is a 44px circle with a search icon button and an input of width 0. Clicking the icon sets an open state: the container width transitions from 44px to 240px over 360ms with cubic-bezier(0.16, 1, 0.3, 1), the input fades in, and focus moves to it once the transition starts. On blur with an empty value, or on Escape, collapse it again and return focus to the icon button. Keep the icon fixed on the left so it does not jump. Give the button aria-expanded and aria-controls. Under prefers-reduced-motion, open and close without the width transition. The placeholder reads "Search motions…".',
    },
    'zh-CN': {
      title: '展开搜索框',
      summary: '圆形的搜索图标点击后伸展成完整的输入框，内容为空时离开又会收回去。',
      labels: { open: '打开搜索', placeholder: '搜索动效…' },
      prompt:
        '用 React 和 CSS 制作可展开的搜索框。收起时是一个 44px 的圆形，内含搜索图标按钮和一个宽度为 0 的 input。点击图标后进入展开状态：容器宽度在 360ms 内从 44px 过渡到 240px，缓动 cubic-bezier(0.16, 1, 0.3, 1)，input 淡入，并在过渡开始时把焦点移到 input 上。input 失焦且内容为空时，或按下 Escape 时，再次收起，并把焦点还给图标按钮。图标固定在左侧，避免跳动。按钮设置 aria-expanded 和 aria-controls。在 prefers-reduced-motion 下展开和收起不做宽度过渡。占位文字为“搜索动效…”。',
    },
  },
} satisfies Motion
