import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'newspaper',
  added: '2026-10-31',
  fonts: { display: 'Playfair Display', body: 'Libre Caslon Text' },
  palette: [{ role: 'bg', hex: '#F4EFE4' }, { role: 'surface', hex: '#FBF8F1' }, { role: 'ink', hex: '#1A1A1A' }, { role: 'muted', hex: '#555049' }, { role: 'accent', hex: '#9E1B1B' }],
  motions: ['split-flap', 'highlighter-mark', 'scroll-progress'],
  i18n: {
    en: {
      name: 'Newspaper',
      summary: 'A broadsheet front page: big masthead, columns, rules and a drop cap. Storied, trustworthy and timeless.',
      bestFor: ['Media & blogs', 'Heritage brands', 'Restaurants with a story'],
      prompt: 'Restyle my page as a Newspaper front page: storied, trustworthy and timeless, like a broadsheet.\n\nPalette: background #F4EFE4 (newsprint), panels #FBF8F1, text #1A1A1A, secondary #555049, one accent #9E1B1B (deep red) for small labels, the main button and price tags.\nType: masthead and headlines in Playfair Display, black weight 900, tight line-height 0.95; secondary headlines in italic. Body in Libre Caslon Text 15–16px with line-height 1.65, justified with hyphenation on wide screens. A large drop cap on the first paragraph.\nLayout: a centred masthead with the date and edition line between double rules (3px + 1px), content in 2–3 newspaper columns separated by 1px vertical rules, a lead story with a big headline, smaller "articles" for each product or service, photos printed as halftone dots (a dot screen multiplied over a greyscale image, then thresholded with filter: contrast()) with captions under them, the section links as a dateline band between rules.\nComponents: 0 radius everywhere, borders as rules not boxes. Buttons are rectangular with a 1px ink border and small caps text; primary is filled ink. Labels like "EXCLUSIVE" or "TODAY" as small caps in a solid red box.\nMotion: minimal: a split-flap for the date or headline, a highlighter on one phrase, a reading progress bar.\nAvoid: rounded corners, gradients, sans-serif headlines, bright colours, card shadows.',
    },
    'zh-CN': {
      name: '报刊排版',
      summary: '报纸头版：大报头、分栏、细线和首字下沉。有故事感、可信、经典耐看。',
      bestFor: ['媒体与博客', '老字号品牌', '有故事的餐厅'],
      prompt: '把我的页面改成「报刊头版」风格：有故事感、可信、经典耐看，像一份大开本报纸。\n\n配色：背景 #F4EFE4（新闻纸），面板 #FBF8F1，正文 #1A1A1A，次要文字 #555049；一个强调色 #9E1B1B（深红）用在小标签、主按钮和价格。\n字体：报头和标题用 Playfair Display 特粗 900，行高 0.95；副标题用斜体。正文用 Libre Caslon Text 15–16px、行高 1.65，宽屏时两端对齐并开启断字。第一段用大号首字下沉。\n布局：居中报头，日期和期号放在双线之间（3px + 1px）；内容分成 2–3 栏，栏之间用 1px 竖线；一篇头条配大标题，每个产品或服务是一篇较小的“文章”，图片用半色调网点印刷效果（网点图层与灰度图片相乘，再用 filter: contrast() 做阈值），下方有图说；栏目链接做成两道线之间的日期栏。\n组件：所有圆角为 0，用线条分隔而不是盒子。按钮是 1px 墨色描边的矩形，文字用小型大写；主按钮填满墨色。“独家”“今日”这类标签做成实心红底的小字。\n动效：极少：日期或标题用翻页牌效果，一句话加马克笔高亮，顶部阅读进度条。\n避免：圆角、渐变、无衬线标题、鲜艳颜色、卡片阴影。',
    },
  },
} satisfies DesignStyle
