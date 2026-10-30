import type { Motion } from '@/lib/motions'

export default {
  slug: 'password-strength',
  tech: 'css',
  component: 'form',
  trigger: 'click',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Password Strength',
      summary: 'As you type, a four-part meter fills and warms from red to the accent colour, and each rule you meet ticks itself off with a drawn check.',
      labels: {
        label: 'Create a password',
        show: 'Show',
        hide: 'Hide',
        empty: 'Use 8+ characters',
        levels: 'Too weak|Weak|Fair|Good|Strong',
        len: '8+ characters',
        num: 'A number',
        case: 'Upper & lower case',
        sym: 'A symbol',
        met: '(done)',
      },
      prompt:
        'Create a password field with a live strength meter in React and CSS. The field, labelled "Create a password", is a password input with autoComplete="new-password" and a small "Show"/"Hide" toggle button with aria-pressed that switches the input type. Check four rules on every keystroke: at least 8 characters, a number, both upper and lower case, and a symbol; the score is how many pass. Below, a meter of four 4px segments: each segment has an ::after fill that scales from scaleX(0) to 1 from the left over 320ms cubic-bezier(0.16, 1, 0.3, 1) when the score reaches it. The fill colour is a --fill custom property set by data-score: the error red for 0–1, a color-mix of red and the accent for 2, and the accent for 3–4. Beside it, an aria-live="polite" label reads "Too weak", "Weak", "Fair", "Good" or "Strong" ("Use 8+ characters" while empty), accent when strong. Under the meter, list the rules in two columns, each with a 14px SVG check: a circle that fills with the accent when met, and a tick path with pathLength="1" that draws in by animating stroke-dashoffset from 1 to 0 with an 80ms delay. Link the meter and rules to the input with aria-describedby and add visually hidden "(done)" text to met rules. Under prefers-reduced-motion, change instantly.',
    },
    'zh-CN': {
      title: '密码强度',
      summary: '输入时，四段式强度条逐段填满，颜色从红色逐渐变为强调色；每满足一条规则，就会画出一个勾号。',
      labels: {
        label: '设置密码',
        show: '显示',
        hide: '隐藏',
        empty: '至少 8 个字符',
        levels: '太弱|弱|一般|良好|很强',
        len: '8 个以上字符',
        num: '包含数字',
        case: '大小写字母',
        sym: '包含符号',
        met: '（已满足）',
      },
      prompt:
        '用 React 和 CSS 制作一个带实时强度条的密码输入框。输入框标签为“设置密码”，是一个 autoComplete="new-password" 的密码输入框，旁边有一个带 aria-pressed 的小按钮“显示”/“隐藏”，用来切换输入框类型。每次输入都检查四条规则：至少 8 个字符、包含数字、同时有大小写字母、包含符号；分数等于通过的规则数。下方是由四段 4px 组成的强度条：每段的 ::after 填充在分数达到时，以 cubic-bezier(0.16, 1, 0.3, 1) 在 320ms 内从左侧由 scaleX(0) 放大到 1。填充颜色是由 data-score 设置的 --fill 自定义属性：0–1 分为错误红色，2 分为红色与强调色的 color-mix，3–4 分为强调色。旁边有一个 aria-live="polite" 的标签显示“太弱”“弱”“一般”“良好”或“很强”（为空时显示“至少 8 个字符”），很强时变为强调色。强度条下方把规则排成两列，每条带一个 14px 的 SVG 勾选图标：满足时圆圈填充为强调色，勾号路径设置 pathLength="1"，把 stroke-dashoffset 从 1 过渡到 0 画出来，延迟 80ms。用 aria-describedby 把强度条和规则关联到输入框，并给已满足的规则加上视觉隐藏的“（已满足）”。在 prefers-reduced-motion 下直接切换。',
    },
  },
} satisfies Motion
