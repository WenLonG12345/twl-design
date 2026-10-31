import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'neo-brutalism',
  added: '2026-10-31',
  fonts: { display: 'Archivo Black', body: 'Space Grotesk' },
  palette: [{ role: 'bg', hex: '#FFF4D6' }, { role: 'surface', hex: '#FFFFFF' }, { role: 'ink', hex: '#000000' }, { role: 'muted', hex: '#3A3A3A' }, { role: 'accent', hex: '#FF5C39' }, { role: 'extra', hex: '#7BDCB5' }],
  motions: ['press-3d', 'jelly-button', 'marquee'],
  i18n: {
    en: {
      name: 'Neo-Brutalism',
      summary: 'Thick black outlines, hard offset shadows and loud flat colour. Bold, funny and impossible to ignore.',
      bestFor: ['Startups', 'Events', 'Youth F&B'],
      prompt: 'Restyle my page in a Neo-Brutalism style: bold, playful and loud, with an honest hand-made feel.\n\nPalette: background #FFF4D6 (butter), cards #FFFFFF, ink #000000 for all text and outlines, one hot accent #FF5C39 and one mint #7BDCB5 for stickers and secondary blocks.\nType: headlines in Archivo Black, very large, uppercase allowed, letter-spacing -0.01em, line-height 0.95. Body in Space Grotesk 15–16px, medium weight.\nLayout: chunky blocks on a simple grid, slightly rotated sticker labels (-2° to 3°), a marquee strip of keywords, elements that overlap their containers a little.\nComponents: every card, button and image has a 3px solid black border, 10px radius and a hard offset shadow of 6px 6px 0 #000 with no blur. Buttons press down on click: the shadow shrinks to 0 and the button moves 6px. Primary button in #FF5C39, secondary in white. Tags look like stickers.\nMotion: snappy and physical. Press effects, wobbles and a looping marquee, 120–180ms.\nAvoid: soft shadows, gradients, thin hairlines, subtle greys, glassy blur.',
    },
    'zh-CN': {
      name: '新野兽派',
      summary: '粗黑描边、硬投影和响亮的平涂色块。大胆、有趣、让人无法忽视。',
      bestFor: ['初创公司', '活动', '年轻餐饮品牌'],
      prompt: '把我的页面改成「新野兽派」(Neo-Brutalism) 风格：大胆、好玩、响亮，带一种真诚的手作感。\n\n配色：背景 #FFF4D6（奶油黄），卡片 #FFFFFF，所有文字和描边都用 #000000；一个热烈的强调色 #FF5C39，一个薄荷绿 #7BDCB5 用在贴纸和次要色块。\n字体：标题用 Archivo Black，超大，可用全大写，字距 -0.01em，行高 0.95。正文用 Space Grotesk 15–16px、中等字重。\n布局：在简单网格上放粗壮的色块；贴纸式标签略微旋转（-2° 到 3°）；加一条关键词跑马灯；元素可以稍微超出容器。\n组件：所有卡片、按钮和图片都有 3px 黑色实线描边、10px 圆角，加上 6px 6px 0 #000 的无模糊硬投影。按钮点击时下压：投影缩到 0，按钮移动 6px。主按钮用 #FF5C39，次按钮白色。标签做成贴纸样式。\n动效：干脆、有物理感。按压、晃动和循环跑马灯，120–180ms。\n避免：柔和阴影、渐变、细线、低调的灰色、毛玻璃模糊。',
    },
  },
} satisfies DesignStyle
