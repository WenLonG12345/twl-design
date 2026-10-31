import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'organic-natural',
  added: '2026-10-31',
  fonts: { display: 'Lora', body: 'DM Sans' },
  palette: [{ role: 'bg', hex: '#EEF0E5' }, { role: 'surface', hex: '#F8F8F1' }, { role: 'ink', hex: '#2F3A2B' }, { role: 'muted', hex: '#5F6857' }, { role: 'accent', hex: '#A65E3A' }, { role: 'extra', hex: '#9DB08A' }],
  motions: ['path-draw', 'parallax-layers', 'gradient-drift'],
  i18n: {
    en: {
      name: 'Organic Natural',
      summary: 'Sage, clay and oat tones with soft pebble shapes. Earthy, calm and honest.',
      bestFor: ['Wellness & yoga', 'Organic food', 'Plant shops'],
      prompt: 'Restyle my page in an Organic Natural style: earthy, calm and honest, like a farmers\' market on a cool morning.\n\nPalette: background #EEF0E5 (pale sage), surfaces #F8F8F1 (oat), text #2F3A2B (forest), secondary #5F6857, accent #A65E3A (clay) for buttons and prices (darken it to #934F2E for small text), leaf green #9DB08A and sand #E3D5BC for shapes.\nType: headlines in Lora, medium weight, with one italic word, line-height 1.1. Body in DM Sans 16px with line-height 1.7.\nLayout: pebble and leaf shaped image masks (asymmetric border-radius like 58% 42% 46% 54% / 52% 48% 52% 48%), overlapping organic shapes in the hero, wide margins, a hand-drawn line or botanical sketch as a divider.\nComponents: 22px radius on cards with a 1px #D8DCCB border, no hard shadows, a faint paper grain texture on the background. Primary button clay with oat text, pill-shaped; secondary outlined in forest green. Small ingredient or benefit icons in thin line style.\nMotion: gentle: lines draw themselves, layers drift with slow parallax, colours breathe slowly, 500–700ms ease-in-out.\nAvoid: neon or electric colours, glossy effects, sharp geometric grids, heavy black.',
    },
    'zh-CN': {
      name: '自然有机',
      summary: '鼠尾草绿、陶土色和燕麦色，配上柔和的鹅卵石形状。质朴、平静、真诚。',
      bestFor: ['瑜伽与身心健康', '有机食品', '植物店'],
      prompt: '把我的页面改成「自然有机」风格：质朴、平静、真诚，像清晨的农夫市集。\n\n配色：背景 #EEF0E5（浅鼠尾草绿），表面 #F8F8F1（燕麦色），正文 #2F3A2B（森林绿），次要文字 #5F6857；强调色 #A65E3A（陶土色）用在按钮和价格（用作小字时加深到 #934F2E）；形状用叶绿 #9DB08A 和沙色 #E3D5BC。\n字体：标题用 Lora 中等字重，其中一个词用斜体，行高 1.1。正文用 DM Sans 16px，行高 1.7。\n布局：图片用鹅卵石和叶子形状的遮罩（不对称圆角，例如 58% 42% 46% 54% / 52% 48% 52% 48%）；首屏有互相重叠的有机形状；宽边距；用手绘线条或植物素描做分隔。\n组件：卡片圆角 22px，1px #D8DCCB 边框，不用硬阴影；背景加一层淡淡的纸张颗粒质感。主按钮陶土色配燕麦色文字、胶囊形；次按钮用森林绿描边。成分或功效图标用细线风格。\n动效：温和：线条自己画出来，图层缓慢视差漂移，颜色缓慢“呼吸”，500–700ms ease-in-out。\n避免：霓虹或电光色、亮面效果、锐利的几何网格、大面积纯黑。',
    },
  },
} satisfies DesignStyle
