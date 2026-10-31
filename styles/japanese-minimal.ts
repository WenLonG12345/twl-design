import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'japanese-minimal',
  added: '2026-10-31',
  fonts: { display: 'Shippori Mincho', body: 'Zen Kaku Gothic New' },
  palette: [{ role: 'bg', hex: '#F7F5F0' }, { role: 'surface', hex: '#FFFFFF' }, { role: 'ink', hex: '#2B2B2B' }, { role: 'muted', hex: '#6E6A64' }, { role: 'accent', hex: '#6F8160' }, { role: 'extra', hex: '#E4E0D8' }],
  motions: ['blur-in-letters', 'ken-burns', 'scroll-text-reveal'],
  i18n: {
    en: {
      name: 'Japanese Minimal',
      summary: 'Rice-paper whites, a fine mincho serif and a lot of empty space. Gentle, careful, unhurried.',
      bestFor: ['Clinics & beauty', 'Tea & skincare', 'Wellness'],
      prompt: 'Restyle my page in a Japanese Minimal style: gentle, careful and unhurried, with silence as a design element.\n\nPalette: background #F7F5F0 (rice paper), surfaces #FFFFFF, text #2B2B2B, secondary #6E6A64, one muted matcha accent #6F8160, hairlines #E4E0D8.\nType: headlines in Shippori Mincho at regular or medium weight (never bold), letter-spacing 0.02em, line-height 1.3. Body in Zen Kaku Gothic New 14–15px with line-height 1.9. Tiny labels in widely tracked uppercase (0.25em) or short Japanese-style phrases.\nLayout: at least 40% empty space. Narrow text columns, content aligned to one side, a single thin circle or line drawing as the hero image (like an ensō brush stroke). Sections separated by space rather than rules.\nComponents: 2px radius at most, 1px hairline borders, no shadows. Buttons are thin outlined rectangles; the primary one is filled with the matcha accent. Prices and details set small and quiet.\nMotion: slow fades and gentle blur-in of text (600–800ms), images drifting very slightly.\nAvoid: bright colours, heavy bold type, crowded grids, icons everywhere, bouncy animation.',
    },
    'zh-CN': {
      name: '日系留白',
      summary: '宣纸般的白、纤细的明朝体和大量留白。温柔、细致、从容。',
      bestFor: ['诊所与美容', '茶饮与护肤', '身心健康'],
      prompt: '把我的页面改成「日系留白」风格：温柔、细致、从容，把留白当作设计的一部分。\n\n配色：背景 #F7F5F0（宣纸色），表面 #FFFFFF，正文 #2B2B2B，次要文字 #6E6A64；一个低饱和抹茶绿强调色 #6F8160；细线 #E4E0D8。\n字体：标题用 Shippori Mincho，常规或中等字重（不要粗体），字距 0.02em，行高 1.3。正文用 Zen Kaku Gothic New 14–15px，行高 1.9。小标签用字距很宽（0.25em）的大写英文或简短短语。\n布局：至少 40% 留白。文字栏窄，内容靠一侧对齐；首屏只用一个细线圆圈或线描（像一笔画成的圆相）。区块之间用空白分隔，而不是线条。\n组件：圆角最多 2px，1px 细边框，无阴影。按钮是细线描边矩形，主按钮填抹茶绿。价格和细节字号小而安静。\n动效：慢速淡入，文字轻微从模糊变清晰（600–800ms），图片极轻微地漂移。\n避免：鲜艳颜色、粗重字体、拥挤的网格、到处都是图标、弹跳动画。',
    },
  },
} satisfies DesignStyle
