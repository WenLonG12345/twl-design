import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'dark-luxury',
  added: '2026-10-31',
  fonts: { display: 'Cormorant Garamond', body: 'DM Sans' },
  palette: [{ role: 'bg', hex: '#0E0D0B' }, { role: 'surface', hex: '#17150F' }, { role: 'ink', hex: '#EDE6D6' }, { role: 'muted', hex: '#9C9481' }, { role: 'accent', hex: '#C8A96A' }],
  motions: ['ken-burns', 'split-rise', 'cursor-follower'],
  i18n: {
    en: {
      name: 'Dark Luxury',
      summary: 'Near-black, champagne gold hairlines and a tall elegant serif. Exclusive, slow and expensive-looking.',
      bestFor: ['Real estate', 'Jewellery & watches', 'Fine dining & hotels'],
      prompt: 'Restyle my page in a Dark Luxury style: exclusive, slow and expensive-looking, like a boutique hotel at night.\n\nPalette: background #0E0D0B (warm near-black), panels #17150F, text #EDE6D6 (ivory), secondary #9C9481, accent #C8A96A (champagne gold) used for hairlines, small labels and the primary button outline. Never use pure white or bright colours.\nType: headlines in Cormorant Garamond, medium weight, large and airy, line-height 1.05, italic for one emphasised word. Body in DM Sans 14–15px, light grey. Labels in uppercase with very wide 0.32em letter-spacing and small size.\nLayout: centred, symmetrical compositions, big margins, an arched image frame in the hero, sections divided by thin gold rules with a small diamond or dot in the middle.\nComponents: 0 radius on everything except the arch. Buttons are thin 1px gold outlines with uppercase tracked text; on hover they fill gold with dark text. Cards have no background, only gold hairlines. Prices set in the serif.\nMotion: slow and cinematic: images slowly zoom (Ken Burns), headings reveal line by line, a refined cursor ring, 600–900ms ease-out.\nAvoid: rounded pill buttons, emoji, bright accents, busy layouts, fast bouncy motion.',
    },
    'zh-CN': {
      name: '暗黑奢华',
      summary: '近乎黑色的底、香槟金细线和修长优雅的衬线体。专属、缓慢、看起来很贵。',
      bestFor: ['房地产', '珠宝与名表', '高级餐厅与酒店'],
      prompt: '把我的页面改成「暗黑奢华」风格：专属、缓慢、看起来很贵，像夜晚的精品酒店。\n\n配色：背景 #0E0D0B（暖调近黑），面板 #17150F，正文 #EDE6D6（象牙白），次要文字 #9C9481；强调色 #C8A96A（香槟金）只用在细线、小标签和主按钮描边上。不要用纯白或鲜艳颜色。\n字体：标题用 Cormorant Garamond 中等字重，大而通透，行高 1.05，强调的一个词用斜体。正文用 DM Sans 14–15px、浅灰色。标签用大写英文、字号小、字距非常宽（0.32em）。\n布局：居中、对称的构图，大边距；首屏图片用拱形框；区块之间用金色细线分隔，中间点缀一个小菱形或圆点。\n组件：除了拱形，所有元素圆角为 0。按钮是 1px 金色细描边加大写宽字距文字，悬停时填满金色、文字变深色。卡片没有底色，只有金色细线。价格用衬线体。\n动效：缓慢、有电影感：图片缓慢放大（Ken Burns），标题逐行显现，精致的光标圆环，600–900ms ease-out。\n避免：胶囊圆角按钮、表情符号、鲜艳强调色、拥挤布局、快速弹跳动效。',
    },
  },
} satisfies DesignStyle
