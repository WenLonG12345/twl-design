import type { Motion } from '@/lib/motions'

export default {
  slug: 'before-after',
  tech: 'js',
  component: 'image',
  trigger: 'drag',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Before / After Slider',
      summary: 'Drag the divider across the picture to compare the edited version with the original underneath.',
      labels: { before: 'Before', after: 'After', label: 'Compare before and after' },
      prompt:
        'Build an accessible before/after image comparison in React. Stack two images of the same size; the "after" image is on top and clipped with clip-path: inset(0 calc(100% - var(--pos) * 1%) 0 0). Put a native <input type="range"> (0–100, aria-label "Compare before and after") over the whole picture with opacity 0 so it handles dragging, touch and arrow keys, and write its value into --pos. Draw a 2px divider line and a round 40px handle at left: calc(var(--pos) * 1%), with two small chevrons inside. Show "Before" and "After" tags in the corners that fade out when the divider covers them. When the range is focused with the keyboard, show a focus ring on the handle. Start at 50%. No transitions on the clip itself, so it tracks the pointer exactly.',
    },
    'zh-CN': {
      title: '前后对比滑块',
      summary: '在图片上拖动分隔线，对比修改后的版本和下面的原图。',
      labels: { before: '修改前', after: '修改后', label: '对比修改前后' },
      prompt:
        '用 React 制作一个无障碍的前后对比图片组件。叠放两张同尺寸的图片；“修改后”的图片在上层，并用 clip-path: inset(0 calc(100% - var(--pos) * 1%) 0 0) 裁切。在整张图片上覆盖一个 opacity 0 的原生 <input type="range">（0–100，aria-label 为“对比修改前后”），由它处理拖动、触摸和方向键，并把数值写入 --pos。在 left: calc(var(--pos) * 1%) 处画一条 2px 的分隔线和一个 40px 的圆形手柄，手柄内放两个小箭头。在两个角落显示“修改前”和“修改后”标签，被分隔线遮住时淡出。用键盘聚焦滑块时，在手柄上显示焦点环。初始位置为 50%。裁切本身不加过渡，让它精确跟随指针。',
    },
  },
} satisfies Motion
