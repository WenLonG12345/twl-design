import type { Motion } from '@/lib/motions'

export default {
  slug: 'filter-grid',
  tech: 'gsap',
  component: 'layout',
  trigger: 'click',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Filterable Grid',
      summary: 'Choosing a filter makes hidden items shrink away and the rest glide into their new places instead of jumping.',
      labels: { all: 'All', a: 'Text', b: 'Card', c: 'Button', filter: 'Filter by type' },
      prompt:
        'Create a filterable grid that animates layout changes with the GSAP Flip plugin. Register Flip. Render filter buttons and a CSS grid of tiles, each tagged with a category. Before changing the filter, capture const state = Flip.getState(tiles). Update the filter so non-matching tiles get display: none (or are removed), then on the next layout call Flip.from(state, { duration: 0.5, ease: "power2.inOut", scale: true, absolute: true, onEnter: els => gsap.fromTo(els, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.4 }), onLeave: els => gsap.to(els, { opacity: 0, scale: 0.6, duration: 0.3 }) }), so remaining tiles glide to their new cells while entering and leaving tiles scale. Mark the active filter with aria-pressed. Under prefers-reduced-motion, change the filter without Flip. The filters are All, Text, Card, and Button.',
    },
    'zh-CN': {
      title: '可筛选网格',
      summary: '选择筛选条件后，被隐藏的项目缩小消失，其余项目平滑滑到新位置，而不是生硬地跳过去。',
      labels: { all: '全部', a: '文字', b: '卡片', c: '按钮', filter: '按类型筛选' },
      prompt:
        '用 GSAP Flip 插件制作带布局动画的可筛选网格。注册 Flip。渲染筛选按钮和一个 CSS grid，每个格子标注所属类别。切换筛选前先记录 const state = Flip.getState(tiles)。更新筛选条件，让不匹配的格子变为 display: none（或被移除），然后在下一次布局时调用 Flip.from(state, { duration: 0.5, ease: "power2.inOut", scale: true, absolute: true, onEnter: els => gsap.fromTo(els, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.4 }), onLeave: els => gsap.to(els, { opacity: 0, scale: 0.6, duration: 0.3 }) })，让留下的格子滑到新的位置，进入和离开的格子缩放显隐。当前筛选按钮设置 aria-pressed。在 prefers-reduced-motion 下切换筛选不使用 Flip。筛选项为全部、文字、卡片、按钮。',
    },
  },
} satisfies Motion
