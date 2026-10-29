import type { Motion } from '@/lib/motions'

export default {
  slug: 'swipe-stack',
  tech: 'gsap',
  component: 'card',
  trigger: 'drag',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Swipe Card Stack',
      summary: 'Drag the top card sideways and it tilts with your hand; throw it far enough and it flies off while the next card steps forward.',
      labels: { cards: 'Kuala Lumpur|Penang|Melaka|Ipoh', hint: 'Drag the top card left or right' },
      prompt:
        'Build a React swipeable card stack with GSAP. Render 4 cards absolutely positioned on top of each other; cards behind the top one are scaled down by 0.05 and moved down 10px per level. On pointerdown on the top card, capture the pointer and follow it: x = drag distance, rotation = x * 0.08 degrees. On release, if |x| > 110px, tween it off screen to x = ±400, rotation ±25, opacity 0 over 0.4s with "power2.in", then move it to the bottom of the stack and animate the remaining cards up one level with "power3.out". Otherwise spring it back to x 0, rotation 0 over 0.5s with "expo.out". Also support Left and Right arrow keys on the focused stack. Cards show Malaysian city names: Kuala Lumpur, Penang, Melaka, Ipoh. Under prefers-reduced-motion, skip the throw and just cycle cards with a 150ms fade.',
    },
    'zh-CN': {
      title: '滑动卡片堆',
      summary: '把最上面的卡片向两侧拖动，它会随手势倾斜；甩得够远就会飞出，下一张卡片随即上前。',
      labels: { cards: '吉隆坡|槟城|马六甲|怡保', hint: '向左或向右拖动最上面的卡片' },
      prompt:
        '用 GSAP 为 React 制作可滑动的卡片堆。渲染 4 张绝对定位、互相叠放的卡片；顶部卡片之后的每一层缩小 0.05 并下移 10px。在顶部卡片上 pointerdown 时捕获指针并跟随：x 为拖动距离，rotation 为 x * 0.08 度。松开时，如果 |x| > 110px，就在 0.4 秒内用 "power2.in" 把卡片补间到屏幕外 x = ±400、rotation ±25、opacity 0，然后把它移到卡片堆底部，并用 "power3.out" 让其余卡片上移一层。否则在 0.5 秒内用 "expo.out" 把它弹回 x 0、rotation 0。卡片堆获得焦点时也支持左右方向键。卡片显示马来西亚城市名：吉隆坡、槟城、马六甲、怡保。在 prefers-reduced-motion 下不做甩出动画，只用 150ms 的淡入淡出轮换卡片。',
    },
  },
} satisfies Motion
