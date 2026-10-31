import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'glassmorphism',
  added: '2026-10-31',
  fonts: { display: 'Plus Jakarta Sans + Noto Sans SC', body: 'Plus Jakarta Sans + Noto Sans SC' },
  palette: [{ role: 'bg', hex: '#0F172A' }, { role: 'surface', hex: '#FFFFFF1F' }, { role: 'ink', hex: '#F8FAFC' }, { role: 'muted', hex: '#CBD5E1' }, { role: 'accent', hex: '#A5F3FC' }, { role: 'extra', hex: '#7C3AED' }],
  motions: ['spotlight-card', 'gradient-drift', 'tilt-card'],
  i18n: {
    en: {
      name: 'Glassmorphism',
      summary: 'Frosted glass panels floating over glowing colour blobs. Modern, techy and a little dreamy.',
      bestFor: ['Fintech & apps', 'Tech products', 'Crypto & AI'],
      prompt: 'Restyle my page in a Glassmorphism style: modern, techy and a little dreamy, with frosted panels floating over light.\n\nPalette: deep navy background #0F172A with 3–4 large blurred colour blobs behind the content (violet #7C3AED, cyan #06B6D4, pink #F472B6). Glass surfaces rgba(255,255,255,0.12) with a 1px border rgba(255,255,255,0.25). Text #F8FAFC, secondary #CBD5E1, accent #A5F3FC.\nType: Plus Jakarta Sans throughout. Headlines semi-bold 600, letter-spacing -0.03em, line-height 1.05. Body 15px with line-height 1.6. For Chinese text pair the headlines with Noto Sans SC (600) and the body with Noto Sans SC, and never italicise or tighten Chinese.\nLayout: centred or two-column hero, content grouped into floating glass cards, plenty of depth between layers. The hero visual is a glass dashboard card (a few bar-chart bars and text lines) with a smaller glass chip floating over its corner. Keep headlines solid #F8FAFC rather than gradient text over the blobs.\nComponents: cards and the nav use backdrop-filter: blur(18px) saturate(140%), 22px radius, a subtle inner top highlight (inset 0 1px 0 rgba(255,255,255,0.3)) and a soft outer shadow. Primary button is solid #A5F3FC with dark navy text and a glow; secondary is glass. Provide a solid fallback background when backdrop-filter is unsupported and keep text contrast at least 4.5:1.\nMotion: blobs drift slowly in the background, a spotlight follows the pointer on cards, 3D tilt on hover.\nAvoid: pure white backgrounds, flat design, glass on glass on glass, low-contrast text over blobs.',
      sample: {
        brand: 'Pocketly',
        links: ['Features', 'Pricing', 'Security'],
        navCta: 'Get the app',
        eyebrow: 'Budgeting app · Malaysia',
        title: 'Every ringgit, sorted.',
        lede: 'Link your accounts, set goals and see where your money goes, all in one calm dashboard.',
        primary: 'Download free',
        secondary: 'How it works',
        items: [
          { title: 'Smart budgets', text: 'Spending sorted into categories for you.', tag: 'Auto' },
          { title: 'Savings goals', text: 'Set a target and watch it fill up.', tag: 'Goals' },
          { title: 'Bill reminders', text: 'Never miss a due date again.', tag: 'Alerts' },
        ],
        quote: 'I finally know where my salary goes.',
        cite: 'Early user',
        hours: 'iOS · Android',
      },
    },
    'zh-CN': {
      name: '玻璃拟态',
      summary: '磨砂玻璃面板漂浮在发光的彩色光斑上。现代、科技感、带一点梦幻。',
      bestFor: ['金融科技与 App', '科技产品', '加密货币与 AI'],
      prompt: '把我的页面改成「玻璃拟态」(Glassmorphism) 风格：现代、有科技感、带一点梦幻，磨砂面板漂浮在光上。\n\n配色：深海军蓝背景 #0F172A，内容后方放 3–4 个大而模糊的彩色光斑（紫 #7C3AED、青 #06B6D4、粉 #F472B6）。玻璃表面 rgba(255,255,255,0.12)，1px 边框 rgba(255,255,255,0.25)。正文 #F8FAFC，次要文字 #CBD5E1，强调色 #A5F3FC。\n字体：全站 Plus Jakarta Sans。标题半粗 600，字距 -0.03em，行高 1.05。正文 15px，行高 1.6。中文标题用思源黑体（600），正文用思源黑体；中文不要用斜体，也不要收紧字距。\n布局：居中或两栏首屏，内容分组放在漂浮的玻璃卡片里，层次之间有明显的景深。首屏视觉是一张玻璃质感的数据卡片（几根柱状条和几行文字），角上再漂浮一个较小的玻璃标签。标题用实色 #F8FAFC，不要在光斑上做渐变文字。\n组件：卡片和导航栏用 backdrop-filter: blur(18px) saturate(140%)，圆角 22px，顶部加一道细微内高光（inset 0 1px 0 rgba(255,255,255,0.3)）和柔和外阴影。主按钮实心 #A5F3FC 配深蓝文字并带光晕；次按钮是玻璃质感。不支持 backdrop-filter 时提供实色背景后备，文字对比度至少 4.5:1。\n动效：背景光斑缓慢漂移，卡片上有跟随指针的聚光效果，悬停时 3D 倾斜。\n避免：纯白背景、扁平设计、玻璃叠玻璃叠玻璃、光斑上的低对比度文字。',
      sample: {
        brand: 'Pocketly',
        links: ['功能', '价格', '安全'],
        navCta: '下载 App',
        eyebrow: '记账理财 App · 马来西亚',
        title: '每一令吉，都清清楚楚。',
        lede: '连接账户、设定目标，看清钱都花去哪儿，全在一个清爽的面板里。',
        primary: '免费下载',
        secondary: '看看怎么用',
        items: [
          { title: '智能预算', text: '自动把开销分好类。', tag: '自动' },
          { title: '储蓄目标', text: '定个目标，看它慢慢填满。', tag: '目标' },
          { title: '账单提醒', text: '再也不会错过缴费日。', tag: '提醒' },
        ],
        quote: '我终于知道薪水都去哪儿了。',
        cite: '早期用户',
        hours: 'iOS · Android',
      },
    },
  },
} satisfies DesignStyle
