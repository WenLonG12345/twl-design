import type { Motion } from '@/lib/motions'

export default {
  slug: 'link-preview',
  tech: 'css',
  component: 'card',
  trigger: 'hover',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Link Preview Popover',
      summary: 'Rest on a link and a small preview card springs up above it with a thumbnail, title and domain, so you know where it goes before you click.',
      labels: {
        before: 'Every motion here is built by ',
        link: 'twlworks',
        after: ', a one-person studio in Malaysia.',
        url: 'https://twlworks.com',
        title: 'twlworks',
        desc: 'Websites and systems that help small businesses go digital.',
        domain: 'twlworks.com',
      },
      prompt:
        'Create a link preview popover in React and CSS. A centred sentence reads "Every motion here is built by twlworks, a one-person studio in Malaysia.", where "twlworks" is a real link with a 2px accent underline. Wrap the link and its card in a relatively positioned span. The card is a 220px panel absolutely positioned above the link (bottom: calc(100% + 10px), centred with translateX(-50%)), with a 64px CSS-gradient thumbnail, the title "twlworks", the line "Websites and systems that help small businesses go digital." and the domain "twlworks.com" in the accent colour, plus a rotated square ::after as a pointer. Closed, it is opacity 0, visibility hidden and translateY(6px) scale(0.92) from a bottom-centre origin; open, it springs to full size over 320ms with cubic-bezier(0.34, 1.56, 0.64, 1) and closes faster with ease-in. Open it 250ms after pointerenter on the wrapper (so the pointer can move onto the card) and immediately on focus; close 120ms after pointerleave or blur, and on Escape. Give the card role="tooltip" and connect it with aria-describedby. Under prefers-reduced-motion, fade only.',
    },
    'zh-CN': {
      title: '链接预览卡片',
      summary: '指针停在链接上，上方就会弹出一张带缩略图、标题和域名的预览卡片，点击之前就知道会去哪里。',
      labels: {
        before: '这里的每个动效都出自 ',
        link: 'twlworks',
        after: '——一家马来西亚的一人工作室。',
        url: 'https://twlworks.com',
        title: 'twlworks',
        desc: '帮中小企业做网站与系统，完成数字化转型。',
        domain: 'twlworks.com',
      },
      prompt:
        '用 React 和 CSS 制作一个链接预览弹出卡片。居中的句子为“这里的每个动效都出自 twlworks——一家马来西亚的一人工作室。”，其中“twlworks”是一个真实的链接，带 2px 强调色下划线。把链接和卡片包进一个相对定位的 span。卡片是一个 220px 的面板，绝对定位在链接上方（bottom: calc(100% + 10px)，用 translateX(-50%) 居中），包含 64px 的 CSS 渐变缩略图、标题“twlworks”、说明“帮中小企业做网站与系统，完成数字化转型。”以及强调色的域名“twlworks.com”，再用旋转的方块 ::after 做指向箭头。关闭时为 opacity 0、visibility hidden、以底部中心为原点的 translateY(6px) scale(0.92)；打开时以 cubic-bezier(0.34, 1.56, 0.64, 1) 在 320ms 内弹到完整大小，关闭时用 ease-in 更快收起。在外层 pointerenter 250ms 后打开（让指针可以移到卡片上），聚焦时立即打开；pointerleave 或失焦 120ms 后关闭，按 Escape 也关闭。卡片设置 role="tooltip"，并用 aria-describedby 关联。在 prefers-reduced-motion 下只做淡入淡出。',
    },
  },
} satisfies Motion
