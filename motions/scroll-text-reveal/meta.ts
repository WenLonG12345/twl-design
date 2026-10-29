import type { Motion } from '@/lib/motions'

export default {
  slug: 'scroll-text-reveal',
  tech: 'gsap',
  component: 'text',
  trigger: 'scroll',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Scroll Text Reveal',
      summary: 'Words light up one after another as you scroll, so a statement is read at the pace the reader moves.',
      labels: { hint: 'Scroll', text: 'Motion should explain what changed, guide the eye, and then get out of the way.' },
      prompt:
        'Create a scroll-scrubbed text reveal with GSAP ScrollTrigger. Split the paragraph into word spans (one span per character for languages without spaces) and set them to opacity 0.15. Register ScrollTrigger and tween the spans to opacity 1 with stagger 0.1 and ease "none", with scrollTrigger { trigger: the paragraph, start: "top 80%", end: "bottom 45%", scrub: true }, so each word brightens in reading order as the user scrolls and dims again when scrolling back. If the text sits inside a scrolling panel rather than the page, pass that element as the scroller. Use a large display font. Put the full sentence in aria-label on the paragraph and hide the spans from screen readers. Under prefers-reduced-motion, show all words at full opacity. Revert the GSAP context on unmount. The text reads "Motion should explain what changed, guide the eye, and then get out of the way."',
    },
    'zh-CN': {
      title: '滚动文字显现',
      summary: '随着滚动，文字一个接一个亮起来，让读者按照自己滚动的节奏读完一句话。',
      labels: { hint: '向下滚动', text: '动效应该说明发生了什么，引导视线，然后安静退场。' },
      prompt:
        '用 GSAP ScrollTrigger 制作随滚动擦洗的文字显现效果。把段落拆成以词为单位的 span（没有空格的语言按字拆分），初始 opacity 为 0.15。注册 ScrollTrigger，把这些 span 补间到 opacity 1，stagger 0.1，ease "none"，scrollTrigger 设置为 { trigger: 段落, start: "top 80%", end: "bottom 45%", scrub: true }，让每个字按阅读顺序随滚动变亮，往回滚动时再变暗。如果文字位于一个可滚动的面板中而不是页面上，把该元素作为 scroller 传入。使用大号展示字体。把完整句子放在段落的 aria-label 中，并对屏幕阅读器隐藏这些 span。在 prefers-reduced-motion 下所有文字直接完全显示。组件卸载时 revert GSAP context。文字为“动效应该说明发生了什么，引导视线，然后安静退场。”',
    },
  },
} satisfies Motion
