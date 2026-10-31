import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'swiss-minimal',
  added: '2026-10-31',
  fonts: { display: 'Inter Tight', body: 'Inter Tight' },
  palette: [{ role: 'bg', hex: '#FFFFFF' }, { role: 'surface', hex: '#F4F4F4' }, { role: 'ink', hex: '#111111' }, { role: 'muted', hex: '#6E6E6E' }, { role: 'accent', hex: '#E2231A' }],
  motions: ['count-up', 'underline-slide', 'marquee'],
  i18n: {
    en: {
      name: 'Swiss Minimal',
      summary: 'Strict grid, huge tight headlines, black on white with one red signal. Confident and rational.',
      bestFor: ['Architects', 'Consultancies', 'Agencies'],
      prompt: 'Restyle my page in a Swiss (International Typographic) style: rational, confident, built on a strict grid.\n\nPalette: pure white #FFFFFF background, #F4F4F4 for quiet panels, text #111111, secondary #6E6E6E, a single signal red #E2231A used for one small square mark, numbers and the main button.\nType: Inter Tight everywhere. Headlines bold 700, very large (up to 96px on desktop), letter-spacing -0.045em, line-height 0.95, left-aligned and never centred. Body 15px regular. Labels and numbers in tabular figures.\nLayout: a visible 12-column grid with flush-left alignment, asymmetric columns (hero text spans 8 columns), large numbered sections (01, 02, 03), thin 1px black rules above every block instead of boxes or cards.\nComponents: zero border radius, no shadows, no gradients. Buttons are solid black rectangles that turn red on hover; secondary actions are text links with an underline. Cards are just a top rule, a number, a title and text.\nMotion: functional only. Numbers count up, underlines slide in, 200ms linear-ish easing.\nAvoid: rounded corners, decorative illustrations, centred text, more than one accent colour.',
    },
    'zh-CN': {
      name: '瑞士极简',
      summary: '严格网格、巨大紧凑的标题、黑白配一个红色信号点。理性、自信。',
      bestFor: ['建筑事务所', '顾问公司', '设计代理商'],
      prompt: '把我的页面改成「瑞士国际主义」风格：理性、自信，建立在严格的网格上。\n\n配色：纯白背景 #FFFFFF，安静的区块用 #F4F4F4，正文 #111111，次要文字 #6E6E6E；只用一个信号红 #E2231A，用在一个小方块标记、数字和主按钮上。\n字体：全站用 Inter Tight。标题粗体 700、非常大（桌面最大 96px），字距 -0.045em，行高 0.95，左对齐，绝不居中。正文 15px 常规字重。标签和数字用等宽数字。\n布局：明显的 12 栏网格，齐左对齐，非对称分栏（首屏文字占 8 栏），大号编号区块（01、02、03），每个区块上方用 1px 黑色细线代替盒子和卡片。\n组件：圆角为 0，无阴影、无渐变。按钮是实心黑色矩形，悬停变红；次要操作用带下划线的文字链接。卡片只有一条顶线、一个编号、标题和正文。\n动效：只做功能性的。数字递增、下划线滑入，200ms、接近线性的缓动。\n避免：圆角、装饰插画、居中文字、超过一个强调色。',
    },
  },
} satisfies DesignStyle
