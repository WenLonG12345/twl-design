import type { Motion } from '@/lib/motions'

export default {
  slug: 'holographic-card',
  tech: 'css',
  component: 'card',
  trigger: 'pointer',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Holographic Card',
      summary: 'A foil sheen of shifting colour follows the pointer across the card, like tilting a collectible under a lamp.',
      labels: { title: 'Rare edition', sub: 'No. 042 / 300' },
      prompt:
        'Create a holographic foil card in React and CSS. On pointermove, write the pointer position as 0–1 fractions into CSS custom properties --x and --y on the card, and set --on to 1; on pointerleave, set --on back to 0. Add an ::before overlay with a repeating-linear-gradient of soft rainbow hues at 115deg, background-size 200% 200%, and background-position calc(var(--x) * 100%) calc(var(--y) * 100%), blended with mix-blend-mode: color-dodge at opacity calc(var(--on) * 0.3). Add an ::after with a radial-gradient white glare centred at the same position. Tilt the card at most 6deg with rotateY(calc((var(--x) - 0.5) * 12deg * var(--on))) and the matching rotateX, with a 120ms transition so it follows smoothly. Under prefers-reduced-motion, keep the sheen but drop the tilt. The card reads "Rare edition" and "No. 042 / 300".',
    },
    'zh-CN': {
      title: '镭射卡片',
      summary: '一层变幻色彩的镭射光泽跟着指针在卡面上流动，像在灯下转动一张收藏卡。',
      labels: { title: '限量版', sub: '编号 042 / 300' },
      prompt:
        '用 React 和 CSS 制作镭射卡片。pointermove 时把指针位置以 0–1 的比例写入卡片的 CSS 自定义属性 --x 和 --y，并把 --on 设为 1；pointerleave 时把 --on 设回 0。添加一个 ::before 覆盖层，使用 115deg 的柔和彩虹色 repeating-linear-gradient，background-size 200% 200%，background-position 为 calc(var(--x) * 100%) calc(var(--y) * 100%)，用 mix-blend-mode: color-dodge 混合，opacity 为 calc(var(--on) * 0.3)。再添加一个 ::after，用中心位于同一位置的白色 radial-gradient 做高光。用 rotateY(calc((var(--x) - 0.5) * 12deg * var(--on))) 及对应的 rotateX 让卡片最多倾斜 6deg，并加 120ms 过渡让它平滑跟随。在 prefers-reduced-motion 下保留光泽，去掉倾斜。卡片文字为“限量版”和“编号 042 / 300”。',
    },
  },
} satisfies Motion
