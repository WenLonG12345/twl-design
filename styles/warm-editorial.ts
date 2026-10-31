import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'warm-editorial',
  added: '2026-10-31',
  fonts: { display: 'Fraunces', body: 'Hanken Grotesk' },
  palette: [{ role: 'bg', hex: '#F2EEE6' }, { role: 'surface', hex: '#FBF8F2' }, { role: 'ink', hex: '#1C1A18' }, { role: 'muted', hex: '#6B645B' }, { role: 'accent', hex: '#C4702C' }, { role: 'extra', hex: '#E8D9C4' }],
  motions: ['highlighter-mark', 'split-rise', 'clip-reveal'],
  i18n: {
    en: {
      name: 'Warm Editorial',
      summary: 'Cream paper, a soft serif and one terracotta accent. Calm, crafted and quietly premium, like a good independent magazine.',
      bestFor: ['Cafés & bakeries', 'Studios', 'Personal brands'],
      prompt: 'Restyle my page in a Warm Editorial style: calm, crafted and quietly premium, like an independent magazine.\n\nPalette: background #F2EEE6 (cream paper), cards #FBF8F2, text #1C1A18, secondary text #6B645B, one accent #C4702C (terracotta) used only for the main button, prices and small highlights, soft fill #E8D9C4 for decorative shapes. Hairline borders in #D9D1C3.\nType: headlines in Fraunces (semi-bold, slightly soft, tight letter-spacing -0.02em, line-height 1.02), body in Hanken Grotesk 15–16px with line-height 1.6. Small uppercase eyebrow labels with 0.12em letter-spacing in the accent colour.\nLayout: generous whitespace, a two-column hero (text left, a simple organic illustration right), content on a 12-column grid with 1px rules between sections instead of heavy boxes.\nComponents: 14px radius on cards and buttons, flat surfaces with no drop shadows, the primary button solid terracotta with cream text, the secondary button outlined in ink. Testimonials set in the serif italic.\nMotion: slow and quiet. Headlines rise line by line, a marker sweep under one key phrase, 400ms ease-out transitions.\nAvoid: gradients, neon colours, more than one accent, all-caps headlines.',
    },
    'zh-CN': {
      name: '暖色杂志风',
      summary: '米白纸张、柔和衬线体和一抹赤陶橙。安静、有手作感、低调高级，像一本好看的独立杂志。',
      bestFor: ['咖啡店与烘焙坊', '工作室', '个人品牌'],
      prompt: '把我的页面改成「暖色杂志风」：安静、有手作感、低调高级，像一本独立杂志。\n\n配色：背景 #F2EEE6（米白纸张），卡片 #FBF8F2，正文 #1C1A18，次要文字 #6B645B；只用一个强调色 #C4702C（赤陶橙），只用在主按钮、价格和少量重点；装饰形状用柔和底色 #E8D9C4；细分隔线用 #D9D1C3。\n字体：标题用 Fraunces（半粗、略带圆润，字距 -0.02em，行高 1.02），正文用 Hanken Grotesk 15–16px、行高 1.6。小标签用大写英文、字距 0.12em、强调色。\n布局：大量留白；首屏两栏（左边文字，右边简单的有机形状插画）；内容放在 12 栏网格上，区块之间用 1px 细线分隔，不用厚重的盒子。\n组件：卡片和按钮圆角 14px，平面无阴影；主按钮实心赤陶橙配米白字，次按钮用墨色描边。顾客评价用衬线斜体。\n动效：慢而安静。标题逐行上浮，一句关键词下方出现马克笔划过的高亮，过渡 400ms ease-out。\n避免：渐变、霓虹色、超过一个强调色、全大写标题。',
    },
  },
} satisfies DesignStyle
