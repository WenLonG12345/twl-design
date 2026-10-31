import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'bento-grid',
  added: '2026-10-31',
  fonts: { display: 'Bricolage Grotesque', body: 'DM Sans' },
  palette: [{ role: 'bg', hex: '#F4F4F5' }, { role: 'surface', hex: '#FFFFFF' }, { role: 'ink', hex: '#18181B' }, { role: 'muted', hex: '#71717A' }, { role: 'accent', hex: '#4F46E5' }, { role: 'extra', hex: '#FEF3C7' }],
  motions: ['stagger-reveal', 'spotlight-card', 'count-up'],
  i18n: {
    en: {
      name: 'Bento Grid',
      summary: 'Everything lives in rounded tiles of different sizes, like a bento box. Organised, product-y and easy to scan.',
      bestFor: ['SaaS & products', 'Launch pages', 'Portfolios'],
      prompt: 'Restyle my page in a Bento Grid style: organised, product-focused and easy to scan, with every piece of content in its own rounded tile.\n\nPalette: background #F4F4F5, tiles #FFFFFF, text #18181B, secondary #71717A, accent #4F46E5 (indigo). A few tiles use soft tints for variety: #E0E7FF, #FEF3C7, #DCFCE7.\nType: headlines in Bricolage Grotesque, bold, letter-spacing -0.035em, line-height 1. Body in DM Sans 15px. Small labels in a muted grey pill.\nLayout: a CSS grid of tiles with different spans (some 2×2, some 1×1, some 2×1) and a consistent 16px gap. The hero itself is a large tile; product shots, stats, features and testimonials each get their own tile. On mobile the tiles stack in one column.\nComponents: 24px radius on tiles, 1px #E4E4E7 border or no border, very soft shadows. Buttons are rounded-full; primary indigo with white text, secondary white with a border. Big numbers inside stat tiles.\nMotion: tiles rise in with a stagger when scrolled into view, a soft spotlight follows the pointer inside tiles, numbers count up.\nAvoid: full-width text sections with no structure, sharp corners, heavy borders, more than three tile tints.',
    },
    'zh-CN': {
      name: '便当格 Bento',
      summary: '所有内容都放在大小不一的圆角格子里，像一个便当盒。整齐、有产品感、一眼看懂。',
      bestFor: ['SaaS 与产品', '发布页', '作品集'],
      prompt: '把我的页面改成「便当格」(Bento Grid) 风格：整齐、聚焦产品、容易扫读，每块内容都放在自己的圆角格子里。\n\n配色：背景 #F4F4F5，格子 #FFFFFF，正文 #18181B，次要文字 #71717A，强调色 #4F46E5（靛蓝）。少数格子用柔和色调做变化：#E0E7FF、#FEF3C7、#DCFCE7。\n字体：标题用 Bricolage Grotesque 粗体，字距 -0.035em，行高 1。正文用 DM Sans 15px。小标签放在灰色胶囊里。\n布局：用 CSS grid 排列不同跨度的格子（有的 2×2，有的 1×1，有的 2×1），统一 16px 间距。首屏本身就是一个大格子；产品图、数据、功能和评价各占一个格子。手机上格子单栏堆叠。\n组件：格子圆角 24px，1px #E4E4E7 边框或无边框，非常柔和的阴影。按钮全圆角；主按钮靛蓝配白字，次按钮白底加边框。数据格子里放大号数字。\n动效：滚动进入视口时格子依次上浮，指针在格子内有柔和聚光，数字递增。\n避免：没有结构的整屏文字段落、直角、粗边框、超过三种格子底色。',
    },
  },
} satisfies DesignStyle
