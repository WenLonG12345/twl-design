import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'neo-brutalism',
  added: '2026-10-31',
  fonts: { display: 'Archivo Black + ZCOOL QingKe HuangYou', body: 'Space Grotesk + Noto Sans SC' },
  palette: [{ role: 'bg', hex: '#FFF4D6' }, { role: 'surface', hex: '#FFFFFF' }, { role: 'ink', hex: '#000000' }, { role: 'muted', hex: '#3A3A3A' }, { role: 'accent', hex: '#FF5C39' }, { role: 'extra', hex: '#7BDCB5' }],
  motions: ['press-3d', 'jelly-button', 'marquee'],
  i18n: {
    en: {
      name: 'Neo-Brutalism',
      summary: 'Thick black outlines, hard offset shadows and loud flat colour. Bold, funny and impossible to ignore.',
      bestFor: ['Startups', 'Events', 'Youth F&B'],
      prompt: 'Restyle my page in a Neo-Brutalism style: bold, playful and loud, with an honest hand-made feel.\n\nPalette: background #FFF4D6 (butter), cards #FFFFFF, ink #000000 for all text and outlines, one hot accent #FF5C39 and one mint #7BDCB5 for stickers and secondary blocks.\nType: headlines in Archivo Black, very large, uppercase allowed, letter-spacing -0.01em, line-height 0.95. Body in Space Grotesk 15–16px, medium weight. For Chinese text pair the headlines with ZCOOL QingKe HuangYou and the body with Noto Sans SC (500), and never italicise or tighten Chinese.\nLayout: chunky blocks on a simple grid, slightly rotated sticker labels (-2° to 3°), a marquee strip of keywords, elements that overlap their containers a little.\nComponents: every card, button and image has a 3px solid black border, 10px radius and a hard offset shadow of 6px 6px 0 #000 with no blur. Buttons press down on click: the shadow shrinks to 0 and the button moves 6px. Primary button in #FF5C39, secondary in white. Tags look like stickers.\nMotion: snappy and physical. Press effects, wobbles and a looping marquee, 120–180ms.\nAvoid: soft shadows, gradients, thin hairlines, subtle greys, glassy blur.',
      sample: {
        brand: 'SAUCE CLUB',
        links: ['Menu', 'Locations', 'Merch'],
        navCta: 'Order',
        eyebrow: 'Smash burgers · SS15',
        title: 'Burgers with zero chill.',
        lede: 'Smashed beef, house sauces and fries that crunch. Open late, always loud.',
        primary: 'Order now',
        secondary: 'See the menu',
        items: [
          { title: 'The Classic', text: 'Double smash, cheese, club sauce.', tag: 'RM 19' },
          { title: 'Fire Starter', text: 'Sambal mayo and pickled chilli.', tag: 'RM 22' },
          { title: 'Loaded Fries', text: 'Cheese, beef bits, more sauce.', tag: 'RM 14' },
        ],
        quote: 'Messy, loud and worth the queue.',
        cite: 'A regular',
        hours: 'Daily · 5pm–2am',
      },
    },
    'zh-CN': {
      name: '新野兽派',
      summary: '粗黑描边、硬投影和响亮的平涂色块。大胆、有趣、让人无法忽视。',
      bestFor: ['初创公司', '活动', '年轻餐饮品牌'],
      prompt: '把我的页面改成「新野兽派」(Neo-Brutalism) 风格：大胆、好玩、响亮，带一种真诚的手作感。\n\n配色：背景 #FFF4D6（奶油黄），卡片 #FFFFFF，所有文字和描边都用 #000000；一个热烈的强调色 #FF5C39，一个薄荷绿 #7BDCB5 用在贴纸和次要色块。\n字体：标题用 Archivo Black，超大，可用全大写，字距 -0.01em，行高 0.95。正文用 Space Grotesk 15–16px、中等字重。中文标题用站酷庆科黄油体，正文用思源黑体（500）；中文不要用斜体，也不要收紧字距。\n布局：在简单网格上放粗壮的色块；贴纸式标签略微旋转（-2° 到 3°）；加一条关键词跑马灯；元素可以稍微超出容器。\n组件：所有卡片、按钮和图片都有 3px 黑色实线描边、10px 圆角，加上 6px 6px 0 #000 的无模糊硬投影。按钮点击时下压：投影缩到 0，按钮移动 6px。主按钮用 #FF5C39，次按钮白色。标签做成贴纸样式。\n动效：干脆、有物理感。按压、晃动和循环跑马灯，120–180ms。\n避免：柔和阴影、渐变、细线、低调的灰色、毛玻璃模糊。',
      sample: {
        brand: 'SAUCE CLUB',
        links: ['菜单', '分店', '周边'],
        navCta: '下单',
        eyebrow: '压扁汉堡 · SS15',
        title: '一点都不佛系的汉堡。',
        lede: '压扁牛肉饼、自家酱料、咔滋薯条。营业到深夜，永远热闹。',
        primary: '马上下单',
        secondary: '看菜单',
        items: [
          { title: '经典款', text: '双层牛肉、芝士、招牌酱。', tag: 'RM 19' },
          { title: '点火款', text: '参巴美乃滋加腌辣椒。', tag: 'RM 22' },
          { title: '满料薯条', text: '芝士、碎牛肉、加倍酱料。', tag: 'RM 14' },
        ],
        quote: '吃得一团糟，但值得排队。',
        cite: '一位常客',
        hours: '每天 · 下午 5 点至凌晨 2 点',
      },
    },
  },
} satisfies DesignStyle
