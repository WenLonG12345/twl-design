import type { Motion } from '@/lib/motions'

export default {
  slug: 'magnifier-lens',
  tech: 'js',
  component: 'cursor',
  trigger: 'pointer',
  added: '2026-10-29',
  i18n: {
    en: {
      title: 'Magnifier Lens',
      summary: 'A round lens follows the pointer and shows the detail underneath at twice the size, for reading fine print or inspecting a map.',
      labels: { hint: 'Hover to magnify', streets: 'Elm St|Harbour Rd|Mill Ln|Park Ave|Quay|Old Bridge' },
      prompt:
        'Create a magnifier lens that follows the pointer over some content, in React. Render the content once normally and once more inside a circular lens element (overflow hidden, 120px, a light ring and shadow); mark the copy aria-hidden. Size the copy exactly like the original and give it transform-origin 0 0. On pointermove, with the pointer at (x, y) relative to the content, place the lens centred on the pointer with translate(x − r, y − r), and transform the copy inside it with translate(r − x × 2, r − y × 2) scale(2), so the point under the cursor appears magnified at the lens centre. Show the lens on pointerenter and hide it on pointerleave with a 150ms scale and opacity transition. Hide the native cursor over the content. Update positions in a requestAnimationFrame. The content is a small street map with labels: Elm St, Harbour Rd, Mill Ln, Park Ave, Quay, and Old Bridge.',
    },
    'zh-CN': {
      title: '放大镜',
      summary: '一个圆形镜片跟随指针，把下方的细节放大两倍，方便阅读小字或查看地图。',
      labels: { hint: '悬停放大', streets: '榆树街|港湾路|磨坊巷|公园大道|码头|旧桥' },
      prompt:
        '用 React 制作跟随指针的放大镜。内容正常渲染一次，再在一个圆形镜片元素中渲染一份副本（overflow hidden，120px，带浅色描边和阴影），副本设为 aria-hidden。副本尺寸与原内容完全一致，transform-origin 为 0 0。pointermove 时，设指针相对内容的位置为 (x, y)，用 translate(x − r, y − r) 让镜片以指针为中心，并把镜片里的副本设为 translate(r − x × 2, r − y × 2) scale(2)，使光标下方的那一点被放大显示在镜片中心。pointerenter 时显示镜片，pointerleave 时隐藏，配合 150ms 的缩放和透明度过渡。内容上方隐藏原生光标。在 requestAnimationFrame 中更新位置。内容是一张带标注的小型街道地图：榆树街、港湾路、磨坊巷、公园大道、码头、旧桥。',
    },
  },
} satisfies Motion
