import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'nanyang-heritage',
  added: '2026-10-31',
  fonts: { display: 'Alfa Slab One', body: 'DM Sans' },
  palette: [{ role: 'bg', hex: '#F3E7CF' }, { role: 'surface', hex: '#FBF3E2' }, { role: 'ink', hex: '#2A1E14' }, { role: 'muted', hex: '#6E5A45' }, { role: 'accent', hex: '#B3261E' }, { role: 'extra', hex: '#1F5E4E' }],
  motions: ['neon-flicker', 'flip-card', 'odometer'],
  i18n: {
    en: {
      name: 'Nanyang Heritage',
      summary: 'Old shop signboards, kopitiam teal, lucky red and Peranakan tiles. Local, nostalgic and proud.',
      bestFor: ['Kopitiams & hawkers', 'Heritage F&B', 'Festive campaigns'],
      prompt: 'Restyle my page in a Nanyang Heritage style: local, nostalgic and proud, like an old Malaysian shophouse with a kopitiam downstairs.\n\nPalette: background #F3E7CF (aged paper), surfaces #FBF3E2, text #2A1E14 (dark wood), secondary #6E5A45, lucky red #B3261E for the signboard and main button, kopitiam teal #1F5E4E for secondary blocks, gold #D9A441 for small ornaments, and Peranakan tile colours (teal, red, cream) for patterns.\nType: headlines in Alfa Slab One, like painted shop signs, letter-spacing 0.01em, line-height 1. Body in DM Sans 15–16px. Chinese text in a bold heavy face that echoes signboard calligraphy.\nLayout: a signboard header (red panel with a double gold inner border and the shop name), a hero with a tiled Peranakan pattern panel (built with CSS conic/radial gradients), menu items like a kopitiam price board, a stamped "since" badge.\nComponents: 6px radius, 2px dark-wood borders with a second inset line, flat colours with no gradients except the tiles. Primary button lucky red with cream text; secondary teal outline. Prices in a slab face on small chalkboard-style tags.\nMotion: a neon-sign flicker on the shop name, menu cards that flip to show details, an odometer for prices or opening years.\nAvoid: glassy blur, neon gradients, generic sans-serif headlines, cold blue palettes.',
    },
    'zh-CN': {
      name: '南洋老字号',
      summary: '旧招牌、咖啡店绿、喜气红和娘惹花砖。在地、怀旧、自豪。',
      bestFor: ['咖啡店与小贩', '老字号餐饮', '节庆活动'],
      prompt: '把我的页面改成「南洋老字号」风格：在地、怀旧、自豪，像楼下开着咖啡店的马来西亚老店屋。\n\n配色：背景 #F3E7CF（旧纸色），表面 #FBF3E2，正文 #2A1E14（深木色），次要文字 #6E5A45；喜气红 #B3261E 用在招牌和主按钮，咖啡店绿 #1F5E4E 用在次要色块，金色 #D9A441 用在小装饰；图案用娘惹花砖的颜色（青绿、红、米白）。\n字体：标题用 Alfa Slab One，像手绘店招，字距 0.01em，行高 1。正文用 DM Sans 15–16px。中文用厚重的粗体，呼应招牌书法的感觉。\n布局：招牌式页头（红色底板、双层金色内框和店名）；首屏有一块娘惹花砖图案（用 CSS conic/radial 渐变做出来）；菜单像咖啡店的价目板；一个盖章式“创立于”徽章。\n组件：圆角 6px，2px 深木色边框加一道内线，平涂颜色，除了花砖不用渐变。主按钮喜气红配米白字，次按钮咖啡店绿描边。价格用粗衬线字体放在小黑板样式的标签上。\n动效：店名有霓虹招牌闪烁，菜单卡片翻转显示详情，价格或创立年份用里程表数字滚动。\n避免：毛玻璃模糊、霓虹渐变、普通的无衬线标题、冷色调蓝色系。',
    },
  },
} satisfies DesignStyle
