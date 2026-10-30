import type { Locale } from './i18n'
import type { Component, Trigger } from './motions'

const en = {
  brand: 'Motion Library',
  meta: {
    title: 'Motion Library',
    description:
      'Live, interactive web animation demos for CSS, JavaScript, GSAP, SVG and Canvas. Every motion comes with its source and a copy-ready AI prompt in English and Simplified Chinese.',
  },
  nav: {
    search: 'Search motions…',
    library: 'Library',
    switchLang: '中文',
    switchLangLabel: 'Switch to Simplified Chinese',
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
  },
  hero: {
    // The middle part gets the terracotta underline.
    title: ['Motion you can ', 'copy', ' into any prompt.'],
    lede: 'Live demos of web animations. Each one comes with its source and a prompt you can paste into an AI coding tool, written in the language you read.',
    count: '{n} motions',
  },
  filters: {
    label: 'Filter motions',
    all: 'All',
    tech: 'Tech',
    anyTech: 'Any tech',
    trigger: 'Trigger',
    anyTrigger: 'Any trigger',
    results: '{n} shown',
    empty: 'No motion matches these filters.',
    clear: 'Clear filters',
  },
  component: {
    text: 'Text',
    button: 'Buttons',
    form: 'Forms & controls',
    card: 'Cards',
    image: 'Images',
    svg: 'SVG & shapes',
    background: 'Backgrounds',
    layout: 'Layout',
    cursor: 'Cursor',
  } satisfies Record<Component, string>,
  trigger: {
    entrance: 'Entrance',
    loop: 'Loop',
    hover: 'Hover',
    click: 'Click',
    toggle: 'Toggle',
    scroll: 'Scroll',
    drag: 'Drag',
    pointer: 'Pointer',
  } satisfies Record<Trigger, string>,
  copy: { idle: 'Copy prompt', done: 'Copied', failed: 'Copy failed, select the text instead', code: 'Copy code' },
  card: { details: 'Details' },
  use: {
    title: 'From demo to your codebase',
    steps: [
      'Try the motion in its preview. Each one reacts to your pointer, clicks, drags or scroll.',
      'Copy its prompt. The prompt follows the site language, so the demo text and the prompt match.',
      'Paste it into Claude, Cursor or any AI coding tool and adjust the numbers to taste.',
    ],
  },
  detail: {
    back: 'All motions',
    prompt: 'AI prompt',
    source: 'Source',
    install: 'Install with shadcn',
    installNote:
      'Installs to components/motions/. It is built for a dark surface: place it on a dark background or set the --stage-* variables. Text defaults to English; pass your own through the labels prop.',
    added: 'Added',
    readOther: '阅读简体中文版',
  },
  palette: {
    label: 'Search motions',
    placeholder: 'Search by name, component or trigger…',
    empty: 'No motion found.',
    navigate: 'navigate',
    open: 'open',
    close: 'close',
  },
  skip: 'Skip to content',
  contribute: {
    fab: 'Suggest a motion',
    title: 'Suggest a motion',
    lede: 'Seen an effect you would like to find here? Describe it, and it opens as a prefilled GitHub issue for you to post.',
    name: 'Effect name',
    namePh: 'e.g. Liquid fill button',
    details: 'What does it do?',
    detailsPh: 'What moves, when it plays, and where you saw it.',
    link: 'Reference link',
    optional: 'optional',
    note: 'Needs a GitHub account. Suggestions are public.',
    cancel: 'Cancel',
    submit: 'Continue on GitHub',
    close: 'Close',
  },
  footer: '© 2026 Motion Library by twlworks · Demos and prompts are original work.',
}

export type Dictionary = typeof en

const zhCN: Dictionary = {
  brand: 'Motion Library',
  meta: {
    title: 'Motion Library',
    description:
      '可交互的网页动效演示，涵盖 CSS、JavaScript、GSAP、SVG 与 Canvas。每个动效都附带源代码和可直接复制的 AI 提示词，支持简体中文与英文。',
  },
  nav: {
    search: '搜索动效…',
    library: '动效列表',
    switchLang: 'EN',
    switchLangLabel: 'Switch to English',
    toDark: '切换到深色模式',
    toLight: '切换到浅色模式',
  },
  hero: {
    title: ['网页动效，', '复制', '即可生成。'],
    lede: '可交互的网页动效演示。每个动效都附带源代码和一段提示词，可直接粘贴到 AI 编程工具中，语言跟随你正在阅读的版本。',
    count: '共 {n} 个动效',
  },
  filters: {
    label: '筛选动效',
    all: '全部',
    tech: '技术',
    anyTech: '全部技术',
    trigger: '触发方式',
    anyTrigger: '全部触发方式',
    results: '显示 {n} 个',
    empty: '没有符合筛选条件的动效。',
    clear: '清除筛选',
  },
  component: {
    text: '文字',
    button: '按钮',
    form: '表单与控件',
    card: '卡片',
    image: '图片',
    svg: 'SVG 与图形',
    background: '背景',
    layout: '布局',
    cursor: '光标',
  },
  trigger: {
    entrance: '进场',
    loop: '循环',
    hover: '悬停',
    click: '点击',
    toggle: '切换',
    scroll: '滚动',
    drag: '拖拽',
    pointer: '跟随指针',
  },
  copy: { idle: '复制提示词', done: '已复制', failed: '复制失败，请手动选择文字', code: '复制代码' },
  card: { details: '查看详情' },
  use: {
    title: '从演示到你的项目',
    steps: [
      '在预览区试用动效。每个动效都会响应指针、点击、拖拽或滚动。',
      '复制提示词。提示词跟随网站语言，演示文字与提示词保持一致。',
      '粘贴到 Claude、Cursor 或任意 AI 编程工具中，再按需调整数值。',
    ],
  },
  detail: {
    back: '全部动效',
    prompt: 'AI 提示词',
    source: '源代码',
    install: '用 shadcn 安装',
    installNote:
      '安装到 components/motions/。动效为深色背景设计：请放在深色背景上，或设置 --stage-* 变量。文字默认为英文，可通过 labels 属性传入你自己的文案。',
    added: '收录于',
    readOther: 'Read in English',
  },
  palette: {
    label: '搜索动效',
    placeholder: '按名称、组件或触发方式搜索…',
    empty: '没有找到动效。',
    navigate: '选择',
    open: '打开',
    close: '关闭',
  },
  skip: '跳到主要内容',
  contribute: {
    fab: '投稿动效创意',
    title: '投稿动效创意',
    lede: '看到想收录的效果？简单描述一下，会打开一个预先填好的 GitHub Issue，确认后即可提交。',
    name: '效果名称',
    namePh: '例如：液体填充按钮',
    details: '它是怎么动的？',
    detailsPh: '哪些元素在动、什么时候播放、在哪里看到的。',
    link: '参考链接',
    optional: '选填',
    note: '需要 GitHub 账号，投稿内容会公开。',
    cancel: '取消',
    submit: '前往 GitHub 提交',
    close: '关闭',
  },
  footer: '© 2026 Motion Library · twlworks 出品 · 演示与提示词均为原创内容。',
}

const dictionaries: Record<Locale, Dictionary> = { en, 'zh-CN': zhCN }

export const getDictionary = (locale: Locale) => dictionaries[locale]
