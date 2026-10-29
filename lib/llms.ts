import { getDictionary } from './dictionaries'
import { locales, SITE_URL } from './i18n'
import { techLabel } from './motions'
import { motions } from '@/motions'

const heading = { en: 'English', 'zh-CN': '简体中文' } as const

/** llms.txt format (llmstxt.org): H1, blockquote summary, then H2 sections of links. */
export function llmsIndex() {
  const en = getDictionary('en')
  const lines = [
    `# ${en.brand}`,
    '',
    `> ${en.meta.description}`,
    '',
    'Each motion page has a live demo, its full source code, and an AI prompt that recreates it. The same motions exist in English (/en) and Simplified Chinese (/zh-CN). The full prompts are in /llms-full.txt.',
    '',
  ]
  for (const locale of locales) {
    const dict = getDictionary(locale)
    lines.push(`## ${dict.brand} (${heading[locale]})`, '')
    for (const m of motions) {
      const c = m.i18n[locale]
      lines.push(
        `- [${c.title}](${SITE_URL}/${locale}/motion/${m.slug}): ${c.summary} (${techLabel[m.tech]} · ${dict.component[m.component]} · ${dict.trigger[m.trigger]})`,
      )
    }
    lines.push('')
  }
  lines.push('## Optional', '', `- [Full prompts](${SITE_URL}/llms-full.txt): every motion with its complete AI prompt in both languages`, '')
  return lines.join('\n')
}

export function llmsFull() {
  const en = getDictionary('en')
  const lines = [`# ${en.brand}: full prompts`, '', `> ${en.meta.description}`, '']
  for (const m of motions) {
    lines.push(`## ${m.i18n.en.title} / ${m.i18n['zh-CN'].title}`, '')
    lines.push(`- Tech: ${techLabel[m.tech]}`, `- Component: ${m.component}`, `- Trigger: ${m.trigger}`, `- Added: ${m.added}`, '')
    for (const locale of locales) {
      const c = m.i18n[locale]
      lines.push(`### ${heading[locale]}`, '', `Page: ${SITE_URL}/${locale}/motion/${m.slug}`, '', c.summary, '', 'Prompt:', '', c.prompt, '')
    }
  }
  return lines.join('\n')
}
