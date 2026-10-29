import type { Motion } from '@/lib/motions'

export default {
  slug: 'highlighter-mark',
  tech: 'css',
  component: 'text',
  trigger: 'entrance',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Highlighter Mark',
      summary: 'A marker stroke sweeps behind the key phrase as the sentence comes into view, pointing the eye at what matters.',
      labels: { before: 'Good motion is', mark: 'felt before it is seen', after: '.', replay: 'Replay' },
      prompt:
        'Create a highlighter sweep behind a phrase in a sentence, triggered when it enters the viewport. Wrap the key phrase in a <mark> with a transparent background colour and a background-image of linear-gradient(accent at 45% opacity) sized 0% 40% and positioned at left 85%, with background-repeat: no-repeat and box-decoration-break: clone so it works across line breaks. When an IntersectionObserver reports the sentence at 50% visibility, set a data attribute that animates background-size to 100% 40% over 800ms with cubic-bezier(0.16, 1, 0.3, 1) after a 200ms delay. Add a Replay button that removes and re-adds the attribute. Under prefers-reduced-motion, show the highlight already filled. The sentence reads "Good motion is felt before it is seen." with "felt before it is seen" highlighted.',
    },
    'zh-CN': {
      title: '荧光笔标记',
      summary: '句子进入视野时，一道荧光笔从关键词后方划过，把视线引到重点上。',
      labels: { before: '好的动效，', mark: '先被感受到，才被看见', after: '。', replay: '重播' },
      prompt:
        '制作一个在进入视口时触发的荧光笔划过效果。把关键短语包在 <mark> 中，背景色设为透明，background-image 为 linear-gradient（45% 不透明度的主色），尺寸为 0% 40%，位置在 left 85%，background-repeat: no-repeat，并使用 box-decoration-break: clone 让它在换行时也能正常显示。当 IntersectionObserver 检测到句子可见 50% 时，设置一个 data 属性，在 200ms 延迟后用 800ms、cubic-bezier(0.16, 1, 0.3, 1) 把 background-size 动到 100% 40%。添加一个“重播”按钮，移除再重新加上该属性。在 prefers-reduced-motion 下直接显示已填满的高亮。句子为“好的动效，先被感受到，才被看见。”，其中“先被感受到，才被看见”被高亮。',
    },
  },
} satisfies Motion
