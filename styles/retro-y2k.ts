import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'retro-y2k',
  added: '2026-10-31',
  fonts: { display: 'Rubik Mono One + ZCOOL QingKe HuangYou', body: 'Space Grotesk + Noto Sans SC' },
  palette: [{ role: 'bg', hex: '#E9E4FF' }, { role: 'surface', hex: '#FFFFFF' }, { role: 'ink', hex: '#1B0B3A' }, { role: 'muted', hex: '#5B4A80' }, { role: 'accent', hex: '#FF3EA5' }, { role: 'extra', hex: '#3EC6FF' }],
  motions: ['holographic-card', 'gradient-text', 'like-burst'],
  i18n: {
    en: {
      name: 'Retro Y2K',
      summary: 'Chrome gradients, sparkles, pill shapes and bubblegum colour. Nostalgic, loud and very online.',
      bestFor: ['Youth brands', 'Merch & beauty', 'Events & pop-ups'],
      prompt: 'Restyle my page in a Retro Y2K style: nostalgic, playful and very online, like a 2001 music-player skin.\n\nPalette: background #E9E4FF (lavender), surfaces #FFFFFF, text #1B0B3A (deep purple), secondary #5B4A80, hot pink #FF3EA5 and electric blue #3EC6FF as accents, plus chrome gradients (linear-gradient from #FFFFFF via #C9C3FF to #8E86D8) for highlights.\nType: headlines in Rubik Mono One, uppercase, letter-spacing -0.02em, filled with a pink-to-blue gradient using darker stops so it stays readable on lavender (#D4127A → #7A35E8 → #1A6FD6), or a chrome gradient on dark areas. Body in Space Grotesk 15px. For Chinese text pair the headlines with ZCOOL QingKe HuangYou and the body with Noto Sans SC, and never italicise or tighten Chinese.\nLayout: centred hero, floating sparkle stars (✦) scattered around, wavy or pill-shaped section dividers, stickers and badges overlapping cards, an iridescent CD as a hero object, and the nav as a chrome pill bar with a 2px border and a hard 4px drop.\nComponents: pill-shaped buttons (999px radius) with a glossy top highlight and a 2px deep-purple border; primary in hot pink, secondary in white. Cards with 20px radius, a 2px purple border and a holographic sheen. Small star icons as bullets.\nMotion: holographic shimmer that follows the pointer, gradient text slowly flowing, sparkles twinkling, bouncy 300ms springs on buttons.\nAvoid: muted corporate colours, thin serif type, flat grey UI, overly serious copy.',
      sample: {
        brand: 'Glitter Lab',
        links: ['Designs', 'Prices', 'Book'],
        navCta: 'Book now',
        eyebrow: 'Nail studio · Sunway',
        title: 'Nails that sparkle back.',
        lede: 'Chrome, cat-eye and hand-painted art by nail artists who love a little too much glitter.',
        primary: 'Book a set',
        secondary: 'See designs',
        items: [
          { title: 'Chrome set', text: 'Mirror shine in any colour.', tag: 'RM 88' },
          { title: 'Cat-eye gel', text: 'Magnetic shimmer that moves.', tag: 'RM 98' },
          { title: 'Custom art', text: 'Bring a picture, leave with it.', tag: 'From RM 120' },
        ],
        quote: 'Everyone at the party asked about my nails.',
        cite: 'Nina, regular',
        hours: 'Daily · 11am–9pm',
      },
    },
    'zh-CN': {
      name: '千禧 Y2K',
      summary: '镀铬渐变、闪光星星、胶囊形状和泡泡糖色。怀旧、响亮、非常“网络感”。',
      bestFor: ['年轻品牌', '周边与美妆', '活动与快闪店'],
      prompt: '把我的页面改成「千禧 Y2K」风格：怀旧、好玩、非常“网络感”，像 2001 年的音乐播放器皮肤。\n\n配色：背景 #E9E4FF（薰衣草紫），表面 #FFFFFF，正文 #1B0B3A（深紫），次要文字 #5B4A80；强调色用亮粉 #FF3EA5 和电光蓝 #3EC6FF；高光用镀铬渐变（从 #FFFFFF 经 #C9C3FF 到 #8E86D8 的线性渐变）。\n字体：标题用 Rubik Mono One 大写，字距 -0.02em，填充粉到蓝的渐变，在薰衣草紫底上改用较深的色标保证可读（#D4127A → #7A35E8 → #1A6FD6），深色区域可用镀铬渐变。正文用 Space Grotesk 15px。中文标题用站酷庆科黄油体，正文用思源黑体；中文不要用斜体，也不要收紧字距。\n布局：居中首屏，周围散落闪光星星（✦），波浪形或胶囊形区块分隔，贴纸和徽章叠在卡片上，首屏可以放一张镭射光盘当主视觉，导航做成带 2px 描边和 4px 硬投影的镀铬胶囊条。\n组件：胶囊按钮（999px 圆角），顶部有光泽高光，2px 深紫描边；主按钮亮粉，次按钮白色。卡片圆角 20px、2px 紫色描边，带镭射光泽。用小星星当列表符号。\n动效：跟随指针的镭射闪光，渐变文字缓慢流动，星星闪烁，按钮有 300ms 的弹性回弹。\n避免：低调的企业色、纤细的衬线体、扁平的灰色界面、过于严肃的文案。',
      sample: {
        brand: 'Glitter Lab',
        links: ['款式', '价格', '预约'],
        navCta: '马上预约',
        eyebrow: '美甲工作室 · 双威',
        title: '会闪回去的指甲。',
        lede: '镜面、猫眼和手绘款，美甲师都有点太爱亮片。',
        primary: '预约一套',
        secondary: '看款式',
        items: [
          { title: '镜面款', text: '任何颜色都能镜面发亮。', tag: 'RM 88' },
          { title: '猫眼凝胶', text: '会流动的磁性光泽。', tag: 'RM 98' },
          { title: '订制手绘', text: '带张图来，带着它离开。', tag: 'RM 120 起' },
        ],
        quote: '派对上每个人都在问我的指甲。',
        cite: 'Nina，熟客',
        hours: '每天 · 上午 11 点至晚上 9 点',
      },
    },
  },
} satisfies DesignStyle
