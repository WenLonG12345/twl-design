import type { Motion } from '@/lib/motions'

export default {
  slug: 'star-rating',
  tech: 'css',
  component: 'form',
  trigger: 'hover',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Star Rating',
      summary: 'Stars fill up to the one you hover, and the one you pick pops with a small bounce, all on native radio buttons.',
      labels: { legend: 'Rate this motion', star: '{n} stars' },
      prompt:
        'Create a five-star rating in pure CSS on native radio inputs. Wrap each input and an SVG star in a label, and lay the labels out with display: flex and flex-direction: row-reverse, ordered 5 to 1 in the DOM, so the sibling selector ~ reaches the stars visually to the left. Stars start with a muted fill. Fill the checked star and every star after it in the DOM with the accent colour using label:has(input:checked) and label:has(input:checked) ~ label. While the row is hovered, reset them and fill label:hover and label:hover ~ label instead. When a star is checked, play a 360ms keyframe on it: scale 1 to 1.35 to 1 with cubic-bezier(0.34, 1.56, 0.64, 1). Hide the inputs visually but keep them focusable, and show a focus ring on the label of the focused input. Give each input an aria-label like "4 stars". Under prefers-reduced-motion, skip the pop. The legend reads "Rate this motion".',
    },
    'zh-CN': {
      title: '星级评分',
      summary: '星星会填充到你悬停的那一颗，选中的那颗轻轻弹一下，全部基于原生单选按钮。',
      labels: { legend: '给这个动效打分', star: '{n} 星' },
      prompt:
        '用纯 CSS 在原生单选按钮上制作五星评分。把每个 input 和一个 SVG 星星包在 label 中，label 用 display: flex 和 flex-direction: row-reverse 排列，并在 DOM 中按 5 到 1 的顺序排列，这样兄弟选择器 ~ 就能作用于视觉上位于左侧的星星。星星初始为弱化色。用 label:has(input:checked) 和 label:has(input:checked) ~ label 把选中的星星及其在 DOM 中之后的星星填充为主色；整行处于悬停时先重置，再用 label:hover 和 label:hover ~ label 填充。星星被选中时播放一个 360ms 的 keyframe：scale 从 1 到 1.35 再回到 1，缓动为 cubic-bezier(0.34, 1.56, 0.64, 1)。input 在视觉上隐藏但保持可聚焦，聚焦时在对应的 label 上显示焦点框。每个 input 设置类似“4 星”的 aria-label。在 prefers-reduced-motion 下去掉弹跳。标题为“给这个动效打分”。',
    },
  },
} satisfies Motion
