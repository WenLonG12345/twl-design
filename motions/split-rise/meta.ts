import type { Motion } from '@/lib/motions'

export default {
  slug: 'split-rise',
  tech: 'gsap',
  component: 'text',
  trigger: 'entrance',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Masked Line Rise',
      summary: 'Each line of a headline slides up from behind an invisible edge, one after another, like type set into place.',
      labels: { text: 'Every frame is a decision', replay: 'Replay' },
      prompt:
        'Create a masked line-by-line headline reveal with GSAP SplitText. Register SplitText and, after document.fonts.ready resolves, split the heading with SplitText.create(el, { type: "lines", mask: "lines", autoSplit: true, onSplit: self => gsap.from(self.lines, { yPercent: 110, duration: 0.9, ease: "power4.out", stagger: 0.12 }) }). The mask option wraps each line in an overflow-clipped parent, so lines rise from behind an invisible edge, and autoSplit re-splits on resize so line breaks stay correct. Trigger it when an IntersectionObserver sees the heading, and add a Replay button that restarts the tween. SplitText adds aria-label to the element so screen readers read it once. Under prefers-reduced-motion, show the text without splitting. Revert the GSAP context, and with it the split, on unmount. The heading reads "Every frame is a decision".',
    },
    'zh-CN': {
      title: '遮罩逐行升起',
      summary: '标题的每一行依次从一条看不见的边缘后面升起，像排好的字一行行落位。',
      labels: { text: '每一帧都是一次取舍', replay: '重播' },
      prompt:
        '用 GSAP SplitText 制作带遮罩的逐行标题显现。注册 SplitText，在 document.fonts.ready 之后用 SplitText.create(el, { type: "lines", mask: "lines", autoSplit: true, onSplit: self => gsap.from(self.lines, { yPercent: 110, duration: 0.9, ease: "power4.out", stagger: 0.12 }) }) 拆分标题。mask 选项会把每一行包进一个裁切溢出的父元素，让每行从看不见的边缘后面升起；autoSplit 会在尺寸变化时重新拆分，保证换行正确。当 IntersectionObserver 检测到标题进入视口时触发，并添加一个“重播”按钮重新开始补间。SplitText 会给元素加上 aria-label，让屏幕阅读器只读一遍。在 prefers-reduced-motion 下不拆分，直接显示文字。组件卸载时 revert GSAP context，拆分也随之还原。标题为“每一帧都是一次取舍”。',
    },
  },
} satisfies Motion
