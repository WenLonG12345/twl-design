import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'claymorphism',
  added: '2026-10-31',
  fonts: { display: 'Nunito', body: 'Nunito' },
  palette: [{ role: 'bg', hex: '#E8EEF9' }, { role: 'surface', hex: '#F4F7FD' }, { role: 'ink', hex: '#2C3550' }, { role: 'muted', hex: '#596079' }, { role: 'accent', hex: '#6C8CFF' }, { role: 'extra', hex: '#FFB4A2' }],
  motions: ['press-3d', 'jelly-button', 'toggle-switch'],
  i18n: {
    en: {
      name: 'Claymorphism',
      summary: 'Puffy, soft 3D shapes that look squeezable, with inner highlights and gentle shadows. Friendly and tactile.',
      bestFor: ['Consumer apps', 'Kids learning', 'Games'],
      prompt: 'Restyle my page in a Claymorphism style: friendly and tactile, as if every element were made of soft clay you could squeeze.\n\nPalette: background #E8EEF9 (powder blue), surfaces #F4F7FD, text #2C3550, secondary #596079, accent #6C8CFF (periwinkle) and peach #FFB4A2 as a second accent, plus mint #B8F2D9 for small shapes.\nType: Nunito throughout. Headlines extra-bold 800, rounded, letter-spacing -0.02em, line-height 1.05. Body 16px, weight 500.\nLayout: big rounded blocks with lots of padding, 3D-looking illustrations or icons that look inflated, cards floating at slightly different depths.\nComponents: 32px radius on cards, buttons and images. The clay effect is two shadows plus an inner highlight: 12px 12px 24px rgba(108,124,170,0.35), -8px -8px 20px rgba(255,255,255,0.9), and inset 3px 3px 6px rgba(255,255,255,0.7) with inset -3px -3px 6px rgba(108,124,170,0.18). Primary button periwinkle with white text and the same puffy shadows; on press the outer shadows shrink and the button scales to 0.97.\nMotion: squishy presses, jelly wobble on hover, toggles that stretch, 250–350ms with a slight overshoot.\nAvoid: flat design, hairline borders, dark backgrounds, sharp corners, thin type.',
    },
    'zh-CN': {
      name: '黏土 3D',
      summary: '蓬松柔软、好像可以捏的 3D 形状，带内高光和柔和阴影。友好、有触感。',
      bestFor: ['消费类 App', '儿童学习', '游戏'],
      prompt: '把我的页面改成「黏土 3D」(Claymorphism) 风格：友好、有触感，好像每个元素都是可以捏的软黏土。\n\n配色：背景 #E8EEF9（粉蓝），表面 #F4F7FD，正文 #2C3550，次要文字 #596079；强调色 #6C8CFF（长春花蓝），第二强调色蜜桃 #FFB4A2，小形状用薄荷 #B8F2D9。\n字体：全站 Nunito。标题特粗 800、圆润，字距 -0.02em，行高 1.05。正文 16px、字重 500。\n布局：大圆角色块配充足内边距；插画或图标看起来像充了气的 3D 物件；卡片漂浮在略微不同的深度上。\n组件：卡片、按钮和图片圆角 32px。黏土效果由两层阴影加内高光组成：12px 12px 24px rgba(108,124,170,0.35)、-8px -8px 20px rgba(255,255,255,0.9)，以及 inset 3px 3px 6px rgba(255,255,255,0.7) 和 inset -3px -3px 6px rgba(108,124,170,0.18)。主按钮长春花蓝配白字并带同样的蓬松阴影；按下时外阴影缩小、按钮缩放到 0.97。\n动效：按下会被压扁，悬停时果冻晃动，开关会拉伸，250–350ms，带轻微回弹。\n避免：扁平设计、细线边框、深色背景、直角、纤细字体。',
    },
  },
} satisfies DesignStyle
