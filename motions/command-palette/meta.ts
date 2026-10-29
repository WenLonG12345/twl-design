import type { Motion } from '@/lib/motions'

export default {
  slug: 'command-palette',
  tech: 'js',
  component: 'layout',
  trigger: 'toggle',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Command Palette',
      summary: 'A search palette pops in with a quick scale, filters as you type, and a highlight glides between results under the arrow keys.',
      labels: {
        open: 'Open commands',
        placeholder: 'Type a command…',
        items: 'New file|Search motions|Toggle theme|Copy link|Open settings',
        empty: 'No matches',
      },
      prompt:
        'Create a command palette in React and CSS. A trigger opens a panel that animates from opacity 0, scale(0.96), and translateY(-6px) to rest over 180ms with cubic-bezier(0.16, 1, 0.3, 1). The panel has a search input (focused on open) and a listbox of commands filtered by a case-insensitive includes match. Keep an active index: ArrowDown and ArrowUp move it with wrap-around, Enter runs the active command and closes, and Escape closes. Instead of recolouring rows, render one absolutely positioned highlight behind the list and move it with transform: translateY(index × row height) and a 160ms transition, so it glides between rows. Mark the input role="combobox" with aria-expanded, aria-controls, and aria-activedescendant pointing at the active option. Show "No matches" when the filter is empty. Under prefers-reduced-motion, skip the scale and the glide. The commands are New file, Search motions, Toggle theme, Copy link, and Open settings.',
    },
    'zh-CN': {
      title: '命令面板',
      summary: '搜索面板以快速缩放弹出，输入即筛选，用方向键切换时高亮块在结果之间滑动。',
      labels: {
        open: '打开命令',
        placeholder: '输入命令…',
        items: '新建文件|搜索动效|切换主题|复制链接|打开设置',
        empty: '没有匹配项',
      },
      prompt:
        '用 React 和 CSS 制作命令面板。触发按钮打开一个面板，在 180ms 内从 opacity 0、scale(0.96)、translateY(-6px) 过渡到静止状态，缓动 cubic-bezier(0.16, 1, 0.3, 1)。面板包含一个搜索框（打开时自动聚焦）和一个命令列表，按不区分大小写的包含匹配进行筛选。维护一个当前项索引：ArrowDown 和 ArrowUp 循环移动，Enter 执行当前命令并关闭，Escape 关闭。不要给每一行改颜色，而是在列表后面放一个绝对定位的高亮块，用 transform: translateY(索引 × 行高) 和 160ms 过渡移动它，让它在行之间滑动。输入框设置 role="combobox"，并带上 aria-expanded、aria-controls 和指向当前选项的 aria-activedescendant。筛选结果为空时显示“没有匹配项”。在 prefers-reduced-motion 下去掉缩放和滑动。命令为新建文件、搜索动效、切换主题、复制链接、打开设置。',
    },
  },
} satisfies Motion
