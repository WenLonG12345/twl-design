import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'claymorphism',
  added: '2026-10-31',
  fonts: { display: 'Nunito + Noto Sans SC', body: 'Nunito + Noto Sans SC' },
  palette: [{ role: 'bg', hex: '#E8EEF9' }, { role: 'surface', hex: '#F4F7FD' }, { role: 'ink', hex: '#2C3550' }, { role: 'muted', hex: '#596079' }, { role: 'accent', hex: '#6C8CFF' }, { role: 'extra', hex: '#FFB4A2' }],
  motions: ['press-3d', 'jelly-button', 'toggle-switch'],
  i18n: {
    en: {
      name: 'Claymorphism',
      summary: 'Puffy, soft 3D shapes that look squeezable, with inner highlights and gentle shadows. Friendly and tactile.',
      bestFor: ['Consumer apps', 'Kids learning', 'Games'],
      prompt: 'Restyle my page in a Claymorphism style: friendly and tactile, as if every element were made of soft clay you could squeeze.\n\nPalette: background #E8EEF9 (powder blue), surfaces #F4F7FD, text #2C3550, secondary #596079, accent #6C8CFF (periwinkle) and peach #FFB4A2 as a second accent, plus mint #B8F2D9 for small shapes.\nType: Nunito throughout. Headlines extra-bold 800, rounded, letter-spacing -0.02em, line-height 1.05, with a soft emboss: text-shadow 2px 2px 0 #FFFFFF plus 6px 8px 16px rgba(108,124,170,0.35). Body 16px, weight 500. For Chinese text pair the headlines with Noto Sans SC (800) and the body with Noto Sans SC (500), and never italicise or tighten Chinese.\nLayout: big rounded blocks with lots of padding, 3D-looking illustrations or icons that look inflated, cards floating at slightly different depths.\nComponents: 32px radius on cards, buttons and images. The clay effect is two shadows plus an inner highlight: 12px 12px 24px rgba(108,124,170,0.35), -8px -8px 20px rgba(255,255,255,0.9), and inset 3px 3px 6px rgba(255,255,255,0.7) with inset -3px -3px 6px rgba(108,124,170,0.18). Primary button periwinkle with white text and the same puffy shadows; on press the outer shadows shrink and the button scales to 0.97.\nMotion: squishy presses, jelly wobble on hover, toggles that stretch, 250–350ms with a slight overshoot.\nAvoid: flat design, hairline borders, dark backgrounds, sharp corners, thin type.',
      sample: {
        brand: 'Hoppa',
        links: ['How it works', 'Courses', 'Pricing'],
        navCta: 'Get started',
        eyebrow: 'Language learning app',
        title: 'A new language, five minutes a day.',
        lede: 'Short, playful lessons with real voices, for Mandarin, Malay and Japanese.',
        primary: 'Start learning free',
        secondary: 'Try a lesson',
        items: [
          { title: 'Daily bites', text: 'One five-minute lesson a day.', tag: 'Beginner' },
          { title: 'Speak & check', text: 'Say it out loud, get instant feedback.', tag: 'Speaking' },
          { title: 'Streaks', text: 'Keep the habit going, earn rewards.', tag: 'Daily' },
        ],
        quote: 'I finally get my grandmother’s jokes.',
        cite: 'Learner, three months in',
        hours: 'iOS · Android · Web',
      },
    },
    'zh-CN': {
      name: '黏土 3D',
      summary: '蓬松柔软、好像可以捏的 3D 形状，带内高光和柔和阴影。友好、有触感。',
      bestFor: ['消费类 App', '儿童学习', '游戏'],
      prompt: '把我的页面改成「黏土 3D」(Claymorphism) 风格：友好、有触感，好像每个元素都是可以捏的软黏土。\n\n配色：背景 #E8EEF9（粉蓝），表面 #F4F7FD，正文 #2C3550，次要文字 #596079；强调色 #6C8CFF（长春花蓝），第二强调色蜜桃 #FFB4A2，小形状用薄荷 #B8F2D9。\n字体：全站 Nunito。标题特粗 800、圆润，字距 -0.02em，行高 1.05，加柔和浮雕：text-shadow 2px 2px 0 #FFFFFF 加 6px 8px 16px rgba(108,124,170,0.35)。正文 16px、字重 500。中文标题用思源黑体（800），正文用思源黑体（500）；中文不要用斜体，也不要收紧字距。\n布局：大圆角色块配充足内边距；插画或图标看起来像充了气的 3D 物件；卡片漂浮在略微不同的深度上。\n组件：卡片、按钮和图片圆角 32px。黏土效果由两层阴影加内高光组成：12px 12px 24px rgba(108,124,170,0.35)、-8px -8px 20px rgba(255,255,255,0.9)，以及 inset 3px 3px 6px rgba(255,255,255,0.7) 和 inset -3px -3px 6px rgba(108,124,170,0.18)。主按钮长春花蓝配白字并带同样的蓬松阴影；按下时外阴影缩小、按钮缩放到 0.97。\n动效：按下会被压扁，悬停时果冻晃动，开关会拉伸，250–350ms，带轻微回弹。\n避免：扁平设计、细线边框、深色背景、直角、纤细字体。',
      sample: {
        brand: 'Hoppa',
        links: ['使用方法', '课程', '价格'],
        navCta: '开始',
        eyebrow: '语言学习 App',
        title: '每天五分钟，学会一门新语言。',
        lede: '短小有趣的课程，真人发音，华语、马来语和日语都有。',
        primary: '免费开始学',
        secondary: '试听一课',
        items: [
          { title: '每日一口', text: '每天一节五分钟的课。', tag: '入门' },
          { title: '开口检查', text: '大声说出来，马上得到反馈。', tag: '口说' },
          { title: '连续打卡', text: '保持习惯，赢取奖励。', tag: '每日' },
        ],
        quote: '我终于听得懂奶奶的笑话了。',
        cite: '学了三个月的学员',
        hours: 'iOS · Android · 网页版',
      },
    },
  },
} satisfies DesignStyle
