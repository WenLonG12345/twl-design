import type { Motion } from '@/lib/motions'

export default {
  slug: 'cursor-follower',
  tech: 'gsap',
  component: 'cursor',
  trigger: 'pointer',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Lagging Follower Ring',
      summary: 'A small dot sticks to the pointer while a larger ring trails behind it, then wraps around buttons you hover.',
      labels: { a: 'Work', b: 'About', c: 'Contact' },
      prompt:
        'Build a two-part custom cursor in React with GSAP. Render a 6px dot and a 36px ring, both absolutely positioned with pointer-events: none. Create gsap.quickTo setters for x and y on each: the dot with duration 0.08 and the ring with duration 0.45, ease "power3.out", so the ring lags behind. On pointermove call all four setters with the pointer position inside the area. When hovering an element with data-cursor-target, tween the ring to that element’s centre and size (width, height and border-radius matching the element plus 8px) over 0.3s, and fade the dot out; restore on pointerleave of the target. Hide both on touch. Keep native focus rings for keyboard users. Under prefers-reduced-motion, use duration 0 for both so nothing trails. Targets are three nav buttons: Work, About, Contact.',
    },
    'zh-CN': {
      title: '延迟跟随光圈',
      summary: '小圆点紧贴指针，一个较大的光圈在后面跟随，悬停到按钮上时会包住按钮。',
      labels: { a: '作品', b: '关于', c: '联系' },
      prompt:
        '用 GSAP 在 React 中制作由两部分组成的自定义光标。渲染一个 6px 的圆点和一个 36px 的光圈，都使用绝对定位和 pointer-events: none。为两者的 x、y 分别创建 gsap.quickTo：圆点 duration 0.08，光圈 duration 0.45，ease 为 "power3.out"，让光圈落后于指针。pointermove 时用区域内的指针位置调用这四个函数。悬停到带 data-cursor-target 的元素上时，在 0.3 秒内把光圈补间到该元素的中心并匹配其尺寸（宽、高、圆角都等于元素加 8px），同时淡出圆点；离开目标时恢复。触摸时隐藏两者。为键盘用户保留原生焦点环。在 prefers-reduced-motion 下两者都使用 duration 0，不产生拖尾。目标为三个导航按钮：作品、关于、联系。',
    },
  },
} satisfies Motion
