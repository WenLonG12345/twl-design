import type { Motion } from '@/lib/motions'

export default {
  slug: 'ken-burns',
  tech: 'css',
  component: 'image',
  trigger: 'loop',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Ken Burns Pan',
      summary: 'A still picture slowly zooms and drifts inside its frame, the documentary trick that makes a photo feel like footage.',
      labels: { caption: 'Langkawi at dusk' },
      prompt:
        'Make a CSS Ken Burns effect for a React hero image. Put the <img> (object-fit: cover) inside a frame with overflow hidden and a fixed aspect ratio. Animate the image with one keyframe that alternates: from scale(1) translate(0, 0) to scale(1.18) translate(-4%, -3%), over 14s, ease-in-out, infinite alternate, so it never jumps when the loop restarts. Set transform-origin near the subject (for example 60% 40%). Overlay a bottom gradient from transparent to 60% black and a caption "Langkawi at dusk" in the corner. Add will-change: transform. Pause the animation with animation-play-state: paused when the frame is off screen (IntersectionObserver) and under prefers-reduced-motion show the still image.',
    },
    'zh-CN': {
      title: '肯·伯恩斯平移',
      summary: '静态图片在画框中缓慢放大并漂移，这是让照片像影片一样流动的纪录片手法。',
      labels: { caption: '黄昏时的兰卡威' },
      prompt:
        '用 CSS 为 React 首屏图片制作肯·伯恩斯效果。把 <img>（object-fit: cover）放进一个 overflow hidden、固定宽高比的画框中。用一个往返播放的 keyframe 为图片做动画：从 scale(1) translate(0, 0) 到 scale(1.18) translate(-4%, -3%)，时长 14 秒，ease-in-out，infinite alternate，这样循环重新开始时不会跳动。把 transform-origin 设在主体附近（例如 60% 40%）。底部叠加一层从透明到 60% 黑色的渐变，并在角落显示说明文字“黄昏时的兰卡威”。添加 will-change: transform。画框离开屏幕时用 animation-play-state: paused 暂停动画（IntersectionObserver），在 prefers-reduced-motion 下显示静态图片。',
    },
  },
} satisfies Motion
