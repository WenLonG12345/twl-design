import type { Motion } from '@/lib/motions'

export default {
  slug: 'hover-zoom-pan',
  tech: 'css',
  component: 'image',
  trigger: 'pointer',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Hover Zoom & Pan',
      summary: 'Hovering zooms the image in, and moving the pointer pans across it, so shoppers can inspect detail without opening a viewer.',
      labels: { caption: 'Desert dunes, 2× detail' },
      prompt:
        'Create a hover zoom-and-pan image in React and CSS. The frame has overflow hidden and a fixed aspect ratio; the image inside fills it. On pointermove, set transform-origin on the image to the pointer position in percent, and on pointerenter scale the image to 2 with a 300ms cubic-bezier(0.16, 1, 0.3, 1) transform transition. Keep transform-origin untransitioned, or give it only a short 80ms transition, so panning follows the pointer closely. Scale back to 1 on pointerleave. Use cursor: zoom-in. Make the frame focusable and zoom to the centre on :focus-visible for keyboard users. Under prefers-reduced-motion, zoom without the transition. The caption reads "Desert dunes, 2× detail".',
    },
    'zh-CN': {
      title: '悬停放大平移',
      summary: '悬停时图片放大，移动指针就能在图上平移，不用打开查看器也能看清细节。',
      labels: { caption: '沙丘细节，2 倍放大' },
      prompt:
        '用 React 和 CSS 制作悬停放大并平移的图片。外框设置 overflow hidden 和固定宽高比，内部图片填满外框。pointermove 时把图片的 transform-origin 设为指针所在的百分比位置；pointerenter 时用 300ms、cubic-bezier(0.16, 1, 0.3, 1) 的 transform 过渡把图片放大到 2 倍。transform-origin 不做过渡，或只给 80ms 的短过渡，让平移紧跟指针。pointerleave 时缩回 1 倍。使用 cursor: zoom-in。外框可聚焦，键盘用户在 :focus-visible 时以中心放大。在 prefers-reduced-motion 下放大不做过渡。说明文字为“沙丘细节，2 倍放大”。',
    },
  },
} satisfies Motion
