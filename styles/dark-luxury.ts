import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'dark-luxury',
  added: '2026-10-31',
  fonts: { display: 'Cormorant Garamond + Noto Serif SC', body: 'DM Sans + Noto Sans SC' },
  palette: [{ role: 'bg', hex: '#0E0D0B' }, { role: 'surface', hex: '#17150F' }, { role: 'ink', hex: '#EDE6D6' }, { role: 'muted', hex: '#9C9481' }, { role: 'accent', hex: '#C8A96A' }],
  motions: ['ken-burns', 'split-rise', 'cursor-follower'],
  i18n: {
    en: {
      name: 'Dark Luxury',
      summary: 'Near-black, champagne gold hairlines and a tall elegant serif. Exclusive, slow and expensive-looking.',
      bestFor: ['Real estate', 'Jewellery & watches', 'Fine dining & hotels'],
      prompt: 'Restyle my page in a Dark Luxury style: exclusive, slow and expensive-looking, like a boutique hotel at night.\n\nPalette: background #0E0D0B (warm near-black), panels #17150F, text #EDE6D6 (ivory), secondary #9C9481, accent #C8A96A (champagne gold) used for hairlines, small labels and the primary button, often as a brushed gold-foil gradient (#8A6D3B → #E8CF96 → #B8955A → #F3E2B3). Never use pure white or bright colours.\nType: headlines in Cormorant Garamond, medium weight, large and airy, line-height 1.05, italic for one emphasised word. Body in DM Sans 14–15px, light grey. Labels in uppercase with very wide 0.32em letter-spacing and small size. For Chinese text pair the headlines with Noto Serif SC (500, upright) and the body with Noto Sans SC (300), and never italicise or tighten Chinese.\nLayout: centred, symmetrical compositions, big margins, an arched niche in the hero lit softly from above (one polished gold object resting on a plinth works well), a warm spotlight glow on the background, sections divided by thin gold rules with a small diamond or dot in the middle.\nComponents: 0 radius on everything except the arch. The primary button is filled with the gold foil with dark uppercase tracked text; secondary actions are ivory text links with a gold arrow. Cards have no background, only gold hairlines, numbered with roman numerals (I, II, III) set inside small rotated gold diamonds. A thin gold frame runs around the whole page, inset 10px from the edge, and a second hairline sits inside the arch. Prices set in the serif.\nMotion: slow and cinematic: images slowly zoom (Ken Burns), headings reveal line by line, a refined cursor ring, 600–900ms ease-out.\nAvoid: rounded pill buttons, emoji, bright accents, busy layouts, fast bouncy motion.',
      sample: {
        brand: 'Tunku Residences',
        links: ['Residences', 'Amenities', 'Location'],
        navCta: 'Viewing',
        eyebrow: 'Freehold residences · Kuala Lumpur',
        title: 'Live above the city.',
        lede: 'Forty-two residences on a quiet hillside, with private lift lobbies and views across the skyline.',
        primary: 'Book a viewing',
        secondary: 'Floor plans',
        items: [
          { title: 'Sky Suites', text: 'Two bedrooms, wraparound balcony.', tag: 'From 1,650 sq ft' },
          { title: 'Garden Villas', text: 'Private gardens on the lower floors.', tag: 'From 2,400 sq ft' },
          { title: 'The Penthouse', text: 'One residence, the whole top floor.', tag: 'By invitation' },
        ],
        quote: 'The quietest view of the city we have found.',
        cite: 'Early resident',
        hours: 'Gallery open daily · by appointment',
      },
    },
    'zh-CN': {
      name: '暗黑奢华',
      summary: '近乎黑色的底、香槟金细线和修长优雅的衬线体。专属、缓慢、看起来很贵。',
      bestFor: ['房地产', '珠宝与名表', '高级餐厅与酒店'],
      prompt: '把我的页面改成「暗黑奢华」风格：专属、缓慢、看起来很贵，像夜晚的精品酒店。\n\n配色：背景 #0E0D0B（暖调近黑），面板 #17150F，正文 #EDE6D6（象牙白），次要文字 #9C9481；强调色 #C8A96A（香槟金）只用在细线、小标签和主按钮上，常做成拉丝金箔渐变（#8A6D3B → #E8CF96 → #B8955A → #F3E2B3）。不要用纯白或鲜艳颜色。\n字体：标题用 Cormorant Garamond 中等字重，大而通透，行高 1.05，强调的一个词用斜体。正文用 DM Sans 14–15px、浅灰色。标签用大写英文、字号小、字距非常宽（0.32em）。中文标题用思源宋体（500，正体），正文用思源黑体（300）；中文不要用斜体，也不要收紧字距。\n布局：居中、对称的构图，大边距；首屏用一个从上方柔光照亮的拱形壁龛（放一件抛光金色物件在底座上效果很好），背景带一束暖色聚光；区块之间用金色细线分隔，中间点缀一个小菱形或圆点。\n组件：除了拱形，所有元素圆角为 0。主按钮用金箔填充，配深色大写宽字距文字；次要操作是象牙白文字链接加一个金色箭头。卡片没有底色，只有金色细线，用罗马数字（I、II、III）编号，数字放在旋转 45° 的金色小菱形里。整页内缩 10px 加一圈金色细边框，拱形框内再加一道细线。价格用衬线体。\n动效：缓慢、有电影感：图片缓慢放大（Ken Burns），标题逐行显现，精致的光标圆环，600–900ms ease-out。\n避免：胶囊圆角按钮、表情符号、鲜艳强调色、拥挤布局、快速弹跳动效。',
      sample: {
        brand: 'Tunku Residences',
        links: ['住宅', '配套', '位置'],
        navCta: '预约参观',
        eyebrow: '永久地契住宅 · 吉隆坡',
        title: '住在城市之上。',
        lede: '静谧山坡上的四十二个单位，私人电梯厅，俯瞰整片天际线。',
        primary: '预约参观',
        secondary: '查看户型',
        items: [
          { title: '云端套房', text: '两房，环绕式阳台。', tag: '1,650 平方尺起' },
          { title: '花园别墅', text: '低楼层独享私人花园。', tag: '2,400 平方尺起' },
          { title: '顶层公寓', text: '整个顶层，只有一户。', tag: '仅限邀请' },
        ],
        quote: '我们找到的，看城市最安静的角度。',
        cite: '首批住户',
        hours: '展示厅每日开放 · 需预约',
      },
    },
  },
} satisfies DesignStyle
