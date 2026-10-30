import type { Motion } from '@/lib/motions'

export default {
  slug: 'word-burst',
  tech: 'js',
  component: 'text',
  trigger: 'click',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Word Burst',
      summary: 'The word blows apart into spinning letters, and the next word pulls itself together from the scattered pieces.',
      labels: { words: 'Spark|Bloom|Burst|Shine', burst: 'Burst it' },
      prompt:
        'Create an exploding word in React with the Web Animations API. Show one word from the list "Spark", "Bloom", "Burst", "Shine" in a 3rem bold display face, split into inline-block letter spans (alternate letters in the accent colour), with the plain word in a visually hidden aria-live="polite" span for screen readers. A "Burst it" button animates every letter out: from none to a random point 50–120px away at a random angle, rotated up to ±100deg and scaled to 0.5, fading to opacity 0, over 460ms with cubic-bezier(0.16, 1, 0.3, 1), a 12ms stagger and fill forwards. Await all the animations\' finished promises, then advance to the next word. Key the word wrapper by its index so React mounts fresh letters, and in a layout effect animate each new letter from its own random scattered point back to none over 620ms with a 30ms stagger and fill backwards, so it gathers into place. Ignore clicks while a burst is running. Under prefers-reduced-motion, just fade the letters out and in.',
    },
    'zh-CN': {
      title: '文字爆散',
      summary: '整个词炸成一颗颗旋转的字，下一个词再从四散的碎片中聚拢成形。',
      labels: { words: '灵感迸发|一触即发|火花四溅|光芒万丈', burst: '点我爆开' },
      prompt:
        '用 React 和 Web Animations API 制作一个会爆开的词。从“灵感迸发”“一触即发”“火花四溅”“光芒万丈”中显示一个词，使用 3rem 粗体展示字体，拆成 inline-block 的单字 span（隔一个字用强调色），另外把完整的词放进一个视觉隐藏、带 aria-live="polite" 的 span 供读屏使用。“点我爆开”按钮让每个字飞出：从原位飞到 50–120px 外的随机角度，随机旋转最多 ±100deg，缩小到 0.5 并淡出到 opacity 0，时长 460ms，缓动 cubic-bezier(0.16, 1, 0.3, 1)，错开 12ms，fill 设为 forwards。等待所有动画的 finished promise 后切换到下一个词。词的外层以索引为 key，让 React 挂载全新的字；在 layout effect 中让每个新字从各自随机的散落位置回到原位，时长 620ms，错开 30ms，fill 设为 backwards，看起来像聚拢成形。爆开进行中时忽略点击。在 prefers-reduced-motion 下只做淡出淡入。',
    },
  },
} satisfies Motion
