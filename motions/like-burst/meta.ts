import type { Motion } from '@/lib/motions'

export default {
  slug: 'like-burst',
  tech: 'css',
  component: 'button',
  trigger: 'click',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Like Burst',
      summary: 'Tapping the heart squashes it, refills it in colour and throws a ring of small sparks outward.',
      labels: { like: 'Like', liked: 'Liked' },
      prompt:
        'Create a React like button with a CSS burst. The button holds a heart SVG and toggles aria-pressed. When it turns on: scale the heart 1 → 0.8 → 1.15 → 1 over 450ms with cubic-bezier(0.16, 1, 0.3, 1) and switch its fill from transparent to the accent; at the same time play a ring of 8 small dots positioned around the heart (rotate(calc(var(--i) * 45deg)) translateY(-10px)) that move out to translateY(-30px) and fade from opacity 1 to 0 over 500ms. Restart the burst on every like by changing a key. Turning it off just empties the heart, with no burst. Show the count next to it with tabular-nums. Use aria-label "Like" and update it to "Liked". Under prefers-reduced-motion, skip the scale and the sparks and only change the fill.',
    },
    'zh-CN': {
      title: '点赞爆发',
      summary: '点击爱心时，它会先压扁再弹回并填满颜色，同时向外迸出一圈小火花。',
      labels: { like: '点赞', liked: '已点赞' },
      prompt:
        '用 CSS 为 React 制作带爆发效果的点赞按钮。按钮内放一个爱心 SVG，并切换 aria-pressed。开启时：爱心在 450ms 内按 1 → 0.8 → 1.15 → 1 缩放，缓动为 cubic-bezier(0.16, 1, 0.3, 1)，填充色从透明变为强调色；同时播放一圈环绕爱心的 8 个小圆点（rotate(calc(var(--i) * 45deg)) translateY(-10px)），在 500ms 内向外移动到 translateY(-30px)，透明度从 1 变为 0。每次点赞都通过改变 key 重新播放爆发。取消点赞时只清空爱心，不播放爆发。旁边用 tabular-nums 显示点赞数。aria-label 为“点赞”，点赞后更新为“已点赞”。在 prefers-reduced-motion 下跳过缩放和火花，只改变填充色。',
    },
  },
} satisfies Motion
