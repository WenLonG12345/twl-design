import type { Motion } from '@/lib/motions'

export default {
  slug: 'shake-error',
  tech: 'css',
  component: 'form',
  trigger: 'click',
  added: '2026-10-30',
  i18n: {
    en: {
      title: 'Shake on Error',
      summary: 'Submitting an invalid code makes the field shake side to side and show the error underneath, like a head saying no.',
      labels: { label: 'Invite code', placeholder: 'TWL-0000', submit: 'Join', error: 'That code is not valid. Check the email we sent you.', ok: 'You are in.' },
      prompt:
        'Create a React form field that shakes when validation fails. On submit, check the value against /^TWL-\\d{4}$/i. If it fails, set aria-invalid="true", show the message "That code is not valid. Check the email we sent you." in an element referenced by aria-describedby with role="alert", and play a CSS keyframe on the field: translateX 0, -8px, 7px, -5px, 3px, 0 over 400ms with cubic-bezier(0.65, 0, 0.35, 1). Restart the shake on every failed submit by toggling a key or removing and re-adding the class on animationend. Keep focus in the field. If it passes, clear the error and show "You are in.". Under prefers-reduced-motion, skip the shake and only change the border colour and show the message.',
    },
    'zh-CN': {
      title: '错误抖动',
      summary: '提交无效的代码时，输入框会左右抖动并在下方显示错误，像在摇头说不。',
      labels: { label: '邀请码', placeholder: 'TWL-0000', submit: '加入', error: '这个邀请码无效，请检查我们发给你的邮件。', ok: '欢迎加入。' },
      prompt:
        '用 React 制作一个校验失败时会抖动的表单字段。提交时用 /^TWL-\\d{4}$/i 校验输入值。如果不通过，设置 aria-invalid="true"，在一个被 aria-describedby 引用且带 role="alert" 的元素中显示“这个邀请码无效，请检查我们发给你的邮件。”，并对输入框播放一个 CSS keyframe：translateX 依次为 0、-8px、7px、-5px、3px、0，时长 400ms，缓动为 cubic-bezier(0.65, 0, 0.35, 1)。每次提交失败都通过切换 key，或在 animationend 时移除再添加 class 来重新播放抖动。焦点保持在输入框内。如果通过，清除错误并显示“欢迎加入。”。在 prefers-reduced-motion 下不抖动，只改变边框颜色并显示提示。',
    },
  },
} satisfies Motion
