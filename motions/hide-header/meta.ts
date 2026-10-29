import type { Motion } from '@/lib/motions'

export default {
  slug: 'hide-header',
  tech: 'js',
  component: 'layout',
  trigger: 'scroll',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Hide Header on Scroll',
      summary: 'The header slides away while you scroll down to read and slides back the moment you scroll up to look for it.',
      labels: { brand: 'Field notes', hint: 'Scroll down, then up' },
      prompt:
        'Create a header that hides on scroll down and reappears on scroll up, in React. Keep the last scroll position in a ref. On each scroll event, compare the new scrollTop: if it moved down by more than 4px and is past the header height, set a data-hidden attribute on the header; if it moved up by more than 4px, remove it. The header is position: sticky at the top and uses transform: translateY(-100%) when hidden, with a 280ms cubic-bezier(0.16, 1, 0.3, 1) transform transition. Use a small threshold so tiny trackpad jitters do not make it flicker. Always show the header when focus moves inside it. Under prefers-reduced-motion, hide and show without the slide. The brand reads "Field notes".',
    },
    'zh-CN': {
      title: '滚动隐藏顶栏',
      summary: '向下滚动阅读时顶栏滑走，一往上滚想找它，它就立刻滑回来。',
      labels: { brand: '田野笔记', hint: '先往下滚，再往上滚' },
      prompt:
        '用 React 制作向下滚动时隐藏、向上滚动时重新出现的顶栏。用 ref 保存上一次的滚动位置。每次 scroll 事件比较新的 scrollTop：如果向下移动超过 4px 且已超过顶栏高度，就给顶栏设置 data-hidden 属性；如果向上移动超过 4px，就移除它。顶栏使用 position: sticky 固定在顶部，隐藏时为 transform: translateY(-100%)，transform 过渡 280ms，缓动 cubic-bezier(0.16, 1, 0.3, 1)。设置一个小阈值，避免触控板的细微抖动让它闪烁。焦点进入顶栏内部时始终显示。在 prefers-reduced-motion 下隐藏和显示不做滑动。品牌名为“田野笔记”。',
    },
  },
} satisfies Motion
