import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'nanyang-heritage',
  added: '2026-10-31',
  fonts: { display: 'Alfa Slab One + Ma Shan Zheng', body: 'DM Sans + Noto Sans SC' },
  palette: [{ role: 'bg', hex: '#F3E7CF' }, { role: 'surface', hex: '#FBF3E2' }, { role: 'ink', hex: '#2A1E14' }, { role: 'muted', hex: '#6E5A45' }, { role: 'accent', hex: '#B3261E' }, { role: 'extra', hex: '#1F5E4E' }],
  motions: ['neon-flicker', 'flip-card', 'odometer'],
  i18n: {
    en: {
      name: 'Nanyang Heritage',
      summary: 'Old shop signboards, kopitiam teal, lucky red and Peranakan tiles. Local, nostalgic and proud.',
      bestFor: ['Kopitiams & hawkers', 'Heritage F&B', 'Festive campaigns'],
      prompt: 'Restyle my page in a Nanyang Heritage style: local, nostalgic and proud, like an old Malaysian shophouse with a kopitiam downstairs.\n\nPalette: background #F3E7CF (aged paper), surfaces #FBF3E2, text #2A1E14 (dark wood), secondary #6E5A45, lucky red #B3261E for the signboard and main button, kopitiam teal #1F5E4E for secondary blocks, gold #D9A441 for small ornaments, and Peranakan tile colours (teal, red, cream) for patterns.\nType: headlines in Alfa Slab One in kopitiam teal #1F5E4E with a sign-painter\'s gold drop shadow (3px 3px 0 #D9A441), like painted shop signs, letter-spacing 0.01em, line-height 1. Body in DM Sans 15–16px. For Chinese text pair the headlines with Ma Shan Zheng (brush calligraphy) and the body with Noto Sans SC, and never italicise or tighten Chinese.\nLayout: a signboard header (red panel with a double gold inner border and the shop name in gold lettering), a hero with a tiled Peranakan pattern panel (built with CSS conic/radial gradients), menu items as enamel-sign cards (cream with a 2px dark-wood border and an inner red line, one teal card for the featured item), a Peranakan tile skirting band along the bottom of the page, a stamped "since" badge.\nComponents: 6px radius, 2px dark-wood borders with a second inset line, flat colours with no gradients except the tiles. Primary button lucky red with cream text; secondary teal outline. Prices in a slab face on small red tags.\nMotion: a neon-sign flicker on the shop name, menu cards that flip to show details, an odometer for prices or opening years.\nAvoid: glassy blur, neon gradients, generic sans-serif headlines, cold blue palettes.',
      sample: {
        brand: 'Seng Hin Kopitiam',
        links: ['Menu', 'Our story', 'Find us'],
        navCta: 'Order',
        eyebrow: 'Kopitiam · Ipoh Old Town',
        title: 'Same kopi since 1968.',
        lede: 'Charcoal-roasted coffee, kaya toast and half-boiled eggs, served by the third generation of the same family.',
        primary: 'Order for pickup',
        secondary: 'Our story',
        items: [
          { title: 'Kopi O', text: 'Charcoal-roasted, thick and strong.', tag: 'RM 2.20' },
          { title: 'Kaya toast set', text: 'With two half-boiled eggs.', tag: 'RM 6.50' },
          { title: 'Curry mee', text: 'Grandma’s recipe, Wednesdays only.', tag: 'RM 9' },
        ],
        quote: 'Tastes exactly like my childhood.',
        cite: 'A regular for 40 years',
        hours: 'Daily · 6:30am–2pm',
      },
    },
    'zh-CN': {
      name: '南洋老字号',
      summary: '旧招牌、咖啡店绿、喜气红和娘惹花砖。在地、怀旧、自豪。',
      bestFor: ['咖啡店与小贩', '老字号餐饮', '节庆活动'],
      prompt: '把我的页面改成「南洋老字号」风格：在地、怀旧、自豪，像楼下开着咖啡店的马来西亚老店屋。\n\n配色：背景 #F3E7CF（旧纸色），表面 #FBF3E2，正文 #2A1E14（深木色），次要文字 #6E5A45；喜气红 #B3261E 用在招牌和主按钮，咖啡店绿 #1F5E4E 用在次要色块，金色 #D9A441 用在小装饰；图案用娘惹花砖的颜色（青绿、红、米白）。\n字体：标题用 Alfa Slab One、咖啡店绿 #1F5E4E，加一道招牌画师式的金色硬投影（3px 3px 0 #D9A441），像手绘店招，字距 0.01em，行高 1。正文用 DM Sans 15–16px。中文标题用马善政毛笔楷书，正文用思源黑体；中文不要用斜体，也不要收紧字距。\n布局：招牌式页头（红色底板、双层金色内框和金色店名）；首屏有一块娘惹花砖图案（用 CSS conic/radial 渐变做出来）；菜单做成搪瓷招牌式卡片（米白底、2px 深木色边框加一道红色内线，主推项用一张青绿卡片）；页面底部加一条娘惹花砖踢脚线；一个盖章式“创立于”徽章。\n组件：圆角 6px，2px 深木色边框加一道内线，平涂颜色，除了花砖不用渐变。主按钮喜气红配米白字，次按钮咖啡店绿描边。价格用粗衬线字体放在小小的红色标签上。\n动效：店名有霓虹招牌闪烁，菜单卡片翻转显示详情，价格或创立年份用里程表数字滚动。\n避免：毛玻璃模糊、霓虹渐变、普通的无衬线标题、冷色调蓝色系。',
      sample: {
        brand: '成兴茶室',
        links: ['菜单', '我们的故事', '地址'],
        navCta: '下单',
        eyebrow: '茶室 · 怡保旧街场',
        title: '1968 年至今，同一杯咖啡。',
        lede: '炭烤咖啡、咖椰吐司和半生熟蛋，由同一个家族的第三代端上桌。',
        primary: '预订自取',
        secondary: '我们的故事',
        items: [
          { title: '咖啡乌', text: '炭火烘焙，浓而香。', tag: 'RM 2.20' },
          { title: '咖椰吐司套餐', text: '配两颗半生熟蛋。', tag: 'RM 6.50' },
          { title: '咖喱面', text: '阿嬷的配方，只在星期三。', tag: 'RM 9' },
        ],
        quote: '吃起来就是我小时候的味道。',
        cite: '四十年的老顾客',
        hours: '每天 · 早上 6:30 至下午 2 点',
      },
    },
  },
} satisfies DesignStyle
