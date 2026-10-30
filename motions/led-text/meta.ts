import type { Motion } from '@/lib/motions'

export default {
  slug: 'led-text',
  tech: 'canvas',
  component: 'text',
  trigger: 'loop',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'LED Text',
      summary: 'A dot-matrix sign scrolls its message across glowing amber LEDs, like the board above a shop counter, and holds still while you hover it.',
      labels: { text: 'NOW SERVING 042 · OPEN TILL 10PM · WELCOME IN' },
      prompt:
        'Create a scrolling LED dot-matrix sign on a canvas in React. Draw the message "NOW SERVING 042 · OPEN TILL 10PM · WELCOME IN" once into an offscreen canvas exactly 16px tall in a bold 14px monospace font, followed by a few spaces, and read its pixels with getImageData; a pixel whose alpha is above 110 is a lit LED. The visible canvas is 96px tall (16 rows of 6px cells) and as wide as its container, scaled for devicePixelRatio. Every frame, for each visible column take the source column (offset + column) modulo the text width and draw each row as a dot: unlit dots are small circles in a dim surface colour; lit dots are an accent-coloured core of radius 0.34 × cell over a halo of radius 0.62 × cell at 25% alpha, which reads as glow without shadowBlur. Advance the offset by 22 columns per second using the frame timestamp. Read both colours from CSS custom properties on the canvas. Frame it in a dark recessed panel with an inset shadow. Freeze the scroll while the pointer is over it, stop the loop with an IntersectionObserver when off screen, redraw on resize with a ResizeObserver, and give the canvas role="img" with the message as its aria-label. Under prefers-reduced-motion, draw the start of the message without scrolling.',
    },
    'zh-CN': {
      title: 'LED 跑马灯',
      summary: '点阵招牌把讯息在发光的琥珀色 LED 上滚动播出，像店铺柜台上方的叫号牌，指针悬停时会停住。',
      labels: { text: '现在叫号 042 · 营业至晚上十点 · 欢迎光临' },
      prompt:
        '用 React 在 canvas 上制作一个滚动的 LED 点阵招牌。先把讯息“现在叫号 042 · 营业至晚上十点 · 欢迎光临”加上几个空格，用 14px 粗体等宽字体画进一个刚好 16px 高的离屏 canvas，再用 getImageData 读取像素；alpha 大于 110 的像素就是一颗亮着的 LED。可见的 canvas 高 96px（16 行、每格 6px），宽度跟随容器，并按 devicePixelRatio 缩放。每一帧，对每个可见列取原图的 (offset + 列号) 对文字宽度取模的那一列，把每一行画成一个圆点：不亮的点是暗色表面色的小圆；亮的点是半径 0.34 × 格宽的强调色圆心，下面垫一个半径 0.62 × 格宽、25% 透明度的光晕，不用 shadowBlur 也有发光感。根据帧时间戳让 offset 每秒前进 22 列。两种颜色都从 canvas 上的 CSS 自定义属性读取。外框是带内阴影的深色凹陷面板。指针在上面时停止滚动，离开屏幕时用 IntersectionObserver 停止循环，尺寸变化时用 ResizeObserver 重绘，canvas 设置 role="img" 并以讯息作为 aria-label。在 prefers-reduced-motion 下只画出讯息开头，不滚动。',
    },
  },
} satisfies Motion
