import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'corporate-trust',
  added: '2026-10-31',
  fonts: { display: 'Manrope', body: 'Manrope' },
  palette: [{ role: 'bg', hex: '#FFFFFF' }, { role: 'surface', hex: '#F5F8FC' }, { role: 'ink', hex: '#0B1F3A' }, { role: 'muted', hex: '#5B6B82' }, { role: 'accent', hex: '#1D4ED8' }, { role: 'extra', hex: '#DCE3EE' }],
  motions: ['count-up', 'step-progress', 'accordion'],
  i18n: {
    en: {
      name: 'Corporate Trust',
      summary: 'Clean whites, deep navy and a confident blue. Structured, credible and reassuring.',
      bestFor: ['Clinics', 'Law & finance', 'B2B services'],
      prompt: 'Restyle my page in a Corporate Trust style: clean, structured and reassuring, so visitors feel safe handing over their business.\n\nPalette: background #FFFFFF, light panels #F5F8FC, text #0B1F3A (deep navy), secondary #5B6B82, accent #1D4ED8 (confident blue), borders #DCE3EE. A small success green #16A34A for checkmarks only.\nType: Manrope throughout. Headlines bold 700, letter-spacing -0.025em, line-height 1.1. Body 16px with line-height 1.65. Clear hierarchy: eyebrow, headline, one-sentence lede, proof.\nLayout: two-column hero with a clear value proposition on the left and a product or service visual on the right, a trust strip (client logos, years in business, certifications), feature cards in a 3-column grid, FAQ and a clear contact section.\nComponents: 8px radius, 1px #DCE3EE borders, subtle shadows (0 1px 2px plus 0 8px 24px -16px of navy). Primary button solid blue with white text, secondary outlined. Icons in rounded-square blue tints. Forms with visible labels and helpful error states.\nMotion: restrained: numbers count up, steps fill in, accordions open smoothly, 200–250ms ease-out.\nAvoid: playful fonts, neon colours, unclear CTAs, stock-photo clichés, decorative animation.',
    },
    'zh-CN': {
      name: '专业可信',
      summary: '干净的白、深海军蓝和一个自信的蓝色。结构清晰、可信、让人安心。',
      bestFor: ['诊所', '法律与金融', 'B2B 服务'],
      prompt: '把我的页面改成「专业可信」风格：干净、结构清晰、让人安心，让访客愿意把生意交给你。\n\n配色：背景 #FFFFFF，浅色区块 #F5F8FC，正文 #0B1F3A（深海军蓝），次要文字 #5B6B82，强调色 #1D4ED8（自信的蓝），边框 #DCE3EE。一个小面积的成功绿 #16A34A，只用于勾选标记。\n字体：全站 Manrope。标题粗体 700，字距 -0.025em，行高 1.1。正文 16px，行高 1.65。层级清楚：小标签、标题、一句话简介、证明。\n布局：两栏首屏，左边是清楚的价值主张，右边是产品或服务图；一条信任条（客户 logo、经营年数、认证）；三栏功能卡片；常见问题和清楚的联系区块。\n组件：圆角 8px，1px #DCE3EE 边框，细微阴影（0 1px 2px 加上 0 8px 24px -16px 的海军蓝）。主按钮实心蓝配白字，次按钮描边。图标放在圆角方形的浅蓝底里。表单有可见的标签和有帮助的错误提示。\n动效：克制：数字递增、步骤依次完成、折叠面板平滑展开，200–250ms ease-out。\n避免：俏皮字体、霓虹色、不清楚的行动按钮、俗套的图库照片、装饰性动画。',
    },
  },
} satisfies DesignStyle
