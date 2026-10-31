import type { DesignStyle } from '@/lib/styles'

export default {
  slug: 'terminal-dev',
  added: '2026-10-31',
  fonts: { display: 'JetBrains Mono', body: 'JetBrains Mono' },
  palette: [{ role: 'bg', hex: '#0B0F0C' }, { role: 'surface', hex: '#111812' }, { role: 'ink', hex: '#C8F7C5' }, { role: 'muted', hex: '#6A8F6A' }, { role: 'accent', hex: '#39FF88' }],
  motions: ['typewriter', 'text-scramble', 'matrix-rain'],
  i18n: {
    en: {
      name: 'Terminal',
      summary: 'A phosphor-green command line with brackets, prompts and a blinking cursor. Nerdy, precise and fun.',
      bestFor: ['Dev tools', 'Tech communities', 'Hackathons'],
      prompt: 'Restyle my page in a Terminal style: nerdy, precise and fun, as if the whole site runs in a command line.\n\nPalette: background #0B0F0C, panels #111812, text #C8F7C5 (phosphor green), secondary #6A8F6A, accent #39FF88 for prompts, links and the cursor, borders #1F2E22. Optional amber #FFB000 for warnings only.\nType: JetBrains Mono for everything, 14–15px body, headlines 600 weight at a large size with letter-spacing -0.02em. Use lowercase labels like `~/menu` and comments like `// baked daily`.\nLayout: a window chrome bar with three dots at the top, content as command output: headlines start with a `>` or `$` prompt, lists use `-` or `[x]`, sections separated by dashed lines (`- - -`) or ASCII rules.\nComponents: 0–4px radius, 1px solid #1F2E22 borders. Buttons look like `[ order --now ]`: bracketed text, accent colour, inverted on hover (accent background, dark text). Cards look like log entries with a timestamp. A blinking block cursor after the main headline.\nMotion: text types itself out, scrambles on hover and settles, an optional falling-glyph background at low opacity. Respect prefers-reduced-motion by showing the final text instantly.\nAvoid: serif fonts, rounded friendly shapes, pastel colours, images with no purpose.',
    },
    'zh-CN': {
      name: '终端极客',
      summary: '荧光绿命令行、方括号、提示符和闪烁的光标。极客、精确又好玩。',
      bestFor: ['开发者工具', '技术社群', '黑客松'],
      prompt: '把我的页面改成「终端极客」风格：极客、精确又好玩，好像整个网站都在命令行里运行。\n\n配色：背景 #0B0F0C，面板 #111812，正文 #C8F7C5（荧光绿），次要文字 #6A8F6A；强调色 #39FF88 用在提示符、链接和光标；边框 #1F2E22。琥珀色 #FFB000 只用于警告。\n字体：全站用 JetBrains Mono，正文 14–15px，标题 600 字重、大字号、字距 -0.02em。标签用小写，例如 `~/menu`，注释例如 `// 每天新鲜出炉`。\n布局：顶部有一个带三个圆点的窗口标题栏；内容像命令输出：标题以 `>` 或 `$` 提示符开头，列表用 `-` 或 `[x]`，区块之间用虚线（`- - -`）或 ASCII 分隔线。\n组件：圆角 0–4px，1px 实线 #1F2E22 边框。按钮长这样：`[ order --now ]`，方括号文字、强调色，悬停时反色（强调色底、深色字）。卡片像带时间戳的日志。主标题后有一个闪烁的方块光标。\n动效：文字逐字打出，悬停时乱码再归位，背景可以有低透明度的字符雨。遵循 prefers-reduced-motion：直接显示最终文字。\n避免：衬线字体、圆润友好的形状、马卡龙色、没有作用的图片。',
    },
  },
} satisfies DesignStyle
