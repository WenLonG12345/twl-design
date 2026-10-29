import type { Motion } from '@/lib/motions'

export default {
  slug: 'side-drawer',
  tech: 'css',
  component: 'layout',
  trigger: 'toggle',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Push Side Drawer',
      summary: 'The navigation drawer slides in from the left and pushes the page aside, which shrinks and dims a little to show it is in the background.',
      labels: { menu: 'Menu', a: 'Overview', b: 'Projects', c: 'Team', d: 'Settings', title: 'Dashboard' },
      prompt:
        'Create a push-style side drawer in React and CSS. The drawer (180px wide) starts at translateX(-100%) on the left; the page content sits at rest. When open, slide the drawer to translateX(0) and move the page to translateX(140px) scale(0.92) with a rounded corner and reduced brightness, both over 420ms with cubic-bezier(0.16, 1, 0.3, 1), so the page reads as pushed back. Stagger the drawer links in with opacity and translateX(-12px) → 0 using transition-delay of 60ms × index. Clicking the dimmed page closes the drawer, as does Escape. The menu button carries aria-expanded and aria-controls, and the drawer is inert while closed. Under prefers-reduced-motion, show and hide the drawer without moving the page. The links read Overview, Projects, Team, and Settings.',
    },
    'zh-CN': {
      title: '推挤式侧边栏',
      summary: '导航侧边栏从左侧滑入，把页面推到一旁，页面略微缩小变暗，表明它退到了后面。',
      labels: { menu: '菜单', a: '概览', b: '项目', c: '团队', d: '设置', title: '控制台' },
      prompt:
        '用 React 和 CSS 制作推挤式侧边栏。侧边栏（宽 180px）初始位于左侧 translateX(-100%)，页面内容保持静止。打开时侧边栏滑到 translateX(0)，页面移到 translateX(140px) scale(0.92)，加上圆角并降低亮度，两者都在 420ms 内完成，缓动 cubic-bezier(0.16, 1, 0.3, 1)，让页面看起来被推到了后面。侧边栏中的链接用 opacity 和 translateX(-12px) → 0 依次进入，transition-delay 为 60ms × 序号。点击变暗的页面或按 Escape 时关闭。菜单按钮带 aria-expanded 和 aria-controls，侧边栏关闭时设为 inert。在 prefers-reduced-motion 下只显示和隐藏侧边栏，不移动页面。链接为概览、项目、团队、设置。',
    },
  },
} satisfies Motion
