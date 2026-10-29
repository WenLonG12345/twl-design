import type { Motion } from '@/lib/motions'

export default {
  slug: 'scroll-zoom',
  tech: 'css',
  component: 'image',
  trigger: 'scroll',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Scroll Zoom to Full',
      summary: 'A framed image opens out to fill the width as it scrolls into the middle of the screen, turning a thumbnail into a scene.',
      labels: { hint: 'Scroll', caption: 'Above the clouds' },
      prompt:
        'Create an image that expands to full width as it scrolls into view, using CSS scroll-driven animations. Give the image wrapper animation: open linear both with animation-timeline: view() and animation-range: entry 10% cover 50%. In the keyframes, go from clip-path: inset(0 22% round 20px) to clip-path: inset(0 0 round 0), and scale the inner image from 1.2 to 1 on the same timeline so it feels like the camera pulls back as the frame opens. Wrap it all in @supports (animation-timeline: view()) so browsers without support simply show the full image. Under prefers-reduced-motion, remove the animation. The caption reads "Above the clouds".',
    },
    'zh-CN': {
      title: '滚动放大至全幅',
      summary: '带框的图片滚到屏幕中间时向两侧展开铺满宽度，把一张缩略图变成一整幅场景。',
      labels: { hint: '向下滚动', caption: '云层之上' },
      prompt:
        '用 CSS 滚动驱动动画制作滚入视野时展开到全宽的图片。给图片外层设置 animation: open linear both，animation-timeline: view()，animation-range: entry 10% cover 50%。keyframes 中从 clip-path: inset(0 22% round 20px) 变为 clip-path: inset(0 0 round 0)，同时在同一时间线上把内部图片从 scale 1.2 缩到 1，让画框打开时像镜头往后拉。全部包在 @supports (animation-timeline: view()) 中，不支持的浏览器直接显示完整图片。在 prefers-reduced-motion 下去掉动画。说明文字为“云层之上”。',
    },
  },
} satisfies Motion
