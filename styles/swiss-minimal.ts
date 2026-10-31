import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'swiss-minimal',
  added: '2026-10-31',
  fonts: { display: 'Inter Tight + Noto Sans SC', body: 'Inter Tight + Noto Sans SC' },
  palette: [{ role: 'bg', hex: '#FFFFFF' }, { role: 'surface', hex: '#F4F4F4' }, { role: 'ink', hex: '#111111' }, { role: 'muted', hex: '#6E6E6E' }, { role: 'accent', hex: '#E2231A' }],
  motions: ['count-up', 'underline-slide', 'marquee'],
  i18n: {
    en: {
      name: 'Swiss Minimal',
      summary: 'Strict grid, huge tight headlines, black on white with one red signal. Confident and rational.',
      bestFor: ['Architects', 'Consultancies', 'Agencies'],
      prompt: 'Restyle my page in a Swiss (International Typographic) style: rational, confident, built on a strict grid.\n\nPalette: pure white #FFFFFF background, #F4F4F4 for quiet panels, text #111111, secondary #6E6E6E, a single signal red #E2231A used for one small square mark, numbers and the main button.\nType: Inter Tight everywhere. Headlines bold 700, very large (up to 96px on desktop), letter-spacing -0.045em, line-height 0.95, left-aligned and never centred. Body 15px regular. Labels and numbers in tabular figures. For Chinese text pair the headlines with Noto Sans SC (700) and the body with Noto Sans SC, and never italicise or tighten Chinese.\nLayout: a visible 12-column grid with flush-left alignment, asymmetric columns (hero text spans 8 columns), large numbered sections (01, 02, 03), 1–2px black rules above every block instead of boxes or cards. The hero image is a geometric poster in the Müller-Brockmann tradition: one large red circle overlapping a black vertical bar, cut by a heavy horizontal rule. Card numbers are huge and red (56px).\nComponents: zero border radius, no shadows, no gradients. Buttons are solid black rectangles that turn red on hover; secondary actions are text links with an underline. Cards are just a top rule, a number, a title and text.\nMotion: functional only. Numbers count up, underlines slide in, 200ms linear-ish easing.\nAvoid: rounded corners, decorative illustrations, centred text, more than one accent colour.',
      sample: {
        brand: 'Grid Architects',
        links: ['Projects', 'Practice', 'Contact'],
        navCta: 'Enquire',
        eyebrow: 'Architecture · Kuala Lumpur',
        title: 'Buildings that age well.',
        lede: 'Homes, shophouse conversions and small workplaces, designed for the tropics and built to last.',
        primary: 'View projects',
        secondary: 'Our approach',
        items: [
          { title: 'Courtyard House', text: 'A terrace home opened up to light and air.', tag: 'Selangor · 2025' },
          { title: 'Shophouse 1926', text: 'A heritage shophouse turned design office.', tag: 'Penang · 2024' },
          { title: 'Studio Annex', text: 'A small workplace built from timber.', tag: 'Bangsar · 2026' },
        ],
        quote: 'They designed around how we actually live.',
        cite: 'Client, Courtyard House',
        hours: 'Visits by appointment · Mon–Fri',
      },
    },
    'zh-CN': {
      name: '瑞士极简',
      summary: '严格网格、巨大紧凑的标题、黑白配一个红色信号点。理性、自信。',
      bestFor: ['建筑事务所', '顾问公司', '设计代理商'],
      prompt: '把我的页面改成「瑞士国际主义」风格：理性、自信，建立在严格的网格上。\n\n配色：纯白背景 #FFFFFF，安静的区块用 #F4F4F4，正文 #111111，次要文字 #6E6E6E；只用一个信号红 #E2231A，用在一个小方块标记、数字和主按钮上。\n字体：全站用 Inter Tight。标题粗体 700、非常大（桌面最大 96px），字距 -0.045em，行高 0.95，左对齐，绝不居中。正文 15px 常规字重。标签和数字用等宽数字。中文标题用思源黑体（700），正文用思源黑体；中文不要用斜体，也不要收紧字距。\n布局：明显的 12 栏网格，齐左对齐，非对称分栏（首屏文字占 8 栏），大号编号区块（01、02、03），每个区块上方用 1–2px 黑色线条代替盒子和卡片。首屏图像做成 Müller-Brockmann 式的几何海报：一个大红圆压在一条黑色竖条上，再被一道粗横线切过。卡片编号超大、红色（56px）。\n组件：圆角为 0，无阴影、无渐变。按钮是实心黑色矩形，悬停变红；次要操作用带下划线的文字链接。卡片只有一条顶线、一个编号、标题和正文。\n动效：只做功能性的。数字递增、下划线滑入，200ms、接近线性的缓动。\n避免：圆角、装饰插画、居中文字、超过一个强调色。',
      sample: {
        brand: 'Grid Architects',
        links: ['项目', '事务所', '联系'],
        navCta: '咨询',
        eyebrow: '建筑设计 · 吉隆坡',
        title: '越老越好看的建筑。',
        lede: '住宅、店屋改造和小型办公空间，为热带而设计，经得起时间。',
        primary: '看项目',
        secondary: '我们的做法',
        items: [
          { title: '庭院之家', text: '把光和风引进来的排屋。', tag: '雪兰莪 · 2025' },
          { title: '店屋 1926', text: '百年店屋改成设计办公室。', tag: '槟城 · 2024' },
          { title: '工作室附楼', text: '以木构建造的小型办公空间。', tag: '孟沙 · 2026' },
        ],
        quote: '他们是照着我们真正的生活方式来设计的。',
        cite: '庭院之家业主',
        hours: '需预约参观 · 周一至周五',
      },
    },
  },
} satisfies DesignStyle
