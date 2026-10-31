import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'warm-editorial',
  added: '2026-10-31',
  fonts: { display: 'Fraunces + Noto Serif SC', body: 'Hanken Grotesk + Noto Sans SC' },
  palette: [{ role: 'bg', hex: '#F2EEE6' }, { role: 'surface', hex: '#FBF8F2' }, { role: 'ink', hex: '#1C1A18' }, { role: 'muted', hex: '#6B645B' }, { role: 'accent', hex: '#C4702C' }, { role: 'extra', hex: '#E8D9C4' }],
  motions: ['highlighter-mark', 'split-rise', 'clip-reveal'],
  i18n: {
    en: {
      name: 'Warm Editorial',
      summary: 'Cream paper, a soft serif and one terracotta accent. Calm, crafted and quietly premium, like a good independent magazine.',
      bestFor: ['Cafés & bakeries', 'Studios', 'Personal brands'],
      prompt: 'Restyle my page in a Warm Editorial style: calm, crafted and quietly premium, like an independent magazine.\n\nPalette: background #F2EEE6 (cream paper), cards #FBF8F2, text #1C1A18, secondary text #6B645B, one accent #C4702C (terracotta) used only for the main button, prices and small highlights, soft fill #E8D9C4 for decorative shapes. Hairline borders in #D9D1C3.\nType: headlines in Fraunces (semi-bold, slightly soft, tight letter-spacing -0.02em, line-height 1.02), body in Hanken Grotesk 15–16px with line-height 1.6. Small uppercase eyebrow labels with 0.12em letter-spacing in the accent colour. For Chinese text pair the headlines with Noto Serif SC and the body with Noto Sans SC, and never italicise or tighten Chinese.\nLayout: generous whitespace, a masthead-style nav sitting on a thin ink rule, a two-column hero (text left, a tall cropped photo on the right with a small italic "Fig. 1" caption under a hairline), content on a 12-column grid with 1px rules between sections instead of heavy boxes.\nComponents: 14px radius on cards and buttons, flat surfaces with no drop shadows, the primary button solid terracotta with cream text, the secondary button outlined in ink. Card numbers set large in the serif, with hairline column rules between cards. Testimonials as a large serif italic pull-quote with a 3px terracotta rule on its left.\nMotion: slow and quiet. Headlines rise line by line, a marker sweep under one key phrase, 400ms ease-out transitions.\nAvoid: gradients, neon colours, more than one accent, all-caps headlines.',
      sample: {
        brand: 'Tanah Ceramics',
        links: ['Shop', 'Workshops', 'Journal'],
        navCta: 'Visit',
        eyebrow: 'Pottery studio · Melaka',
        title: 'Handmade for the everyday table.',
        lede: 'Plates, cups and bowls thrown by hand from Malaysian clay, plus weekend wheel classes for beginners.',
        primary: 'Shop the collection',
        secondary: 'Book a class',
        items: [
          { title: 'Everyday plates', text: 'Speckled stoneware, food-safe glaze.', tag: 'From RM 45' },
          { title: 'Wheel workshop', text: 'Three hours, no experience needed.', tag: 'Saturdays' },
          { title: 'Custom sets', text: 'Made to order for cafés and homes.', tag: '6–8 weeks' },
        ],
        quote: 'Our morning coffee tastes better in these cups.',
        cite: 'Aisyah, customer since 2023',
        hours: 'Studio open Thu–Sun · 10am–6pm',
      },
    },
    'zh-CN': {
      name: '暖色杂志风',
      summary: '米白纸张、柔和衬线体和一抹赤陶橙。安静、有手作感、低调高级，像一本好看的独立杂志。',
      bestFor: ['咖啡店与烘焙坊', '工作室', '个人品牌'],
      prompt: '把我的页面改成「暖色杂志风」：安静、有手作感、低调高级，像一本独立杂志。\n\n配色：背景 #F2EEE6（米白纸张），卡片 #FBF8F2，正文 #1C1A18，次要文字 #6B645B；只用一个强调色 #C4702C（赤陶橙），只用在主按钮、价格和少量重点；装饰形状用柔和底色 #E8D9C4；细分隔线用 #D9D1C3。\n字体：标题用 Fraunces（半粗、略带圆润，字距 -0.02em，行高 1.02），正文用 Hanken Grotesk 15–16px、行高 1.6。小标签用大写英文、字距 0.12em、强调色。中文标题用思源宋体，正文用思源黑体；中文不要用斜体，也不要收紧字距。\n布局：大量留白；导航像杂志刊头，下方一条墨色细线；首屏两栏（左边文字，右边一张竖幅裁切照片，下方细线配一行小号斜体图注「Fig. 1」）；内容放在 12 栏网格上，区块之间用 1px 细线分隔，不用厚重的盒子。\n组件：卡片和按钮圆角 14px，平面无阴影；主按钮实心赤陶橙配米白字，次按钮用墨色描边。卡片编号用大号衬线数字，卡片之间用细竖线分栏。顾客评价做成大号衬线斜体引言，左侧一道 3px 赤陶橙竖线。\n动效：慢而安静。标题逐行上浮，一句关键词下方出现马克笔划过的高亮，过渡 400ms ease-out。\n避免：渐变、霓虹色、超过一个强调色、全大写标题。',
      sample: {
        brand: 'Tanah Ceramics',
        links: ['商店', '工作坊', '手记'],
        navCta: '来访',
        eyebrow: '陶艺工作室 · 马六甲',
        title: '为日常餐桌手作的器物。',
        lede: '用马来西亚陶土手工拉坯的盘、杯和碗，周末还有给新手的拉坯课。',
        primary: '逛逛作品',
        secondary: '预约课程',
        items: [
          { title: '日常餐盘', text: '斑点粗陶，食品级釉。', tag: 'RM 45 起' },
          { title: '拉坯工作坊', text: '三小时，零基础也能来。', tag: '每周六' },
          { title: '订制套组', text: '为咖啡馆和家庭量身制作。', tag: '6–8 周' },
        ],
        quote: '用这些杯子喝早上的咖啡，味道都不一样了。',
        cite: 'Aisyah，2023 年起的客人',
        hours: '工作室周四至周日开放 · 上午 10 点至傍晚 6 点',
      },
    },
  },
} satisfies DesignStyle
