import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'playful-pastel',
  added: '2026-10-31',
  fonts: { display: 'Fredoka', body: 'Nunito' },
  palette: [{ role: 'bg', hex: '#FFF7F0' }, { role: 'surface', hex: '#FFFFFF' }, { role: 'ink', hex: '#3D2C2E' }, { role: 'muted', hex: '#7A6466' }, { role: 'accent', hex: '#FF8FAB' }, { role: 'extra', hex: '#A8E6CF' }],
  motions: ['wave-letters', 'like-burst', 'confetti-burst'],
  i18n: {
    en: {
      name: 'Playful Pastel',
      summary: 'Macaron colours, round friendly type and soft blobby shapes. Sweet, warm and welcoming.',
      bestFor: ['Kids & education', 'Bakeries & desserts', 'Pet shops'],
      prompt: 'Restyle my page in a Playful Pastel style: sweet, warm and welcoming, like a macaron box.\n\nPalette: background #FFF7F0 (cream), cards #FFFFFF, text #3D2C2E (cocoa), secondary #7A6466, primary accent #FF8FAB (strawberry pink), plus mint #A8E6CF, butter #FFE9A8 and lavender #CDB4FF for shapes and card tints. Darken the pink to #C23560 wherever it is used for text so it stays readable.\nType: headlines in Fredoka, semi-bold, rounded, line-height 1.05. Body in Nunito 16px with line-height 1.6.\nLayout: soft blob shapes behind images, cards in alternating pastel tints with scalloped top edges (a CSS mask of half circles), wavy section edges, a simple blob mascot with dot eyes, rosy cheeks and a smile, small doodles (stars, hearts, sprinkles) as accents.\nComponents: large 28px radius on cards, pill buttons, soft coloured shadows (0 12px 24px -12px of the card\'s tint). Primary button pink with cocoa text on a 5px darker-pink base (#E56F8F) that squishes on press, secondary white with a 2px cocoa border. Icons in round pastel circles.\nMotion: bouncy and happy: letters wave once on load, buttons squish on press, a confetti burst on the main action, 300ms springy easing.\nAvoid: black backgrounds, sharp corners, harsh saturated colours, dense text blocks.',
    },
    'zh-CN': {
      name: '糖果马卡龙',
      summary: '马卡龙色、圆润友好的字体和柔软的泡泡形状。甜美、温暖、亲切。',
      bestFor: ['儿童与教育', '烘焙与甜品', '宠物店'],
      prompt: '把我的页面改成「糖果马卡龙」风格：甜美、温暖、亲切，像一盒马卡龙。\n\n配色：背景 #FFF7F0（奶油色），卡片 #FFFFFF，正文 #3D2C2E（可可色），次要文字 #7A6466；主强调色 #FF8FAB（草莓粉），再加薄荷绿 #A8E6CF、奶油黄 #FFE9A8、薰衣草紫 #CDB4FF 用在形状和卡片底色。粉色用作文字时加深到 #C23560，保证可读。\n字体：标题用 Fredoka 半粗、圆润，行高 1.05。正文用 Nunito 16px，行高 1.6。\n布局：图片后方放柔软的泡泡形状，卡片轮流使用不同马卡龙底色、顶边做成扇贝形（用半圆 CSS mask），区块边缘做成波浪形，可以放一个圆点眼睛、粉色腮红加微笑的泡泡吉祥物，用小涂鸦（星星、爱心、糖粒）点缀。\n组件：卡片大圆角 28px，胶囊按钮，柔和的彩色阴影（0 12px 24px -12px，颜色取卡片底色）。主按钮粉色配可可色文字，底部有 5px 深粉色底座（#E56F8F），按下时被压扁，次按钮白底加 2px 可可色描边。图标放在圆形马卡龙色底里。\n动效：弹跳、开心：载入时文字波浪跳动一次，按钮按下会被压扁，主操作触发彩纸爆发，300ms 弹性缓动。\n避免：黑色背景、直角、刺眼的高饱和色、密集的文字块。',
    },
  },
} satisfies DesignStyle
