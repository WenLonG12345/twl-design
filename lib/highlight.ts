import { createHighlighter } from '@tanstack/highlight/core'
import { css } from '@tanstack/highlight/languages/css'
import { tsx } from '@tanstack/highlight/languages/tsx'

// Only the languages motion sources use, so the all-language build stays out of the bundle.
const highlighter = createHighlighter({ languages: [css, tsx] })

/** Highlighted, escaped <pre><code> markup for a motion source file. Runs on the server. */
export const highlightSource = (file: string, code: string) =>
  highlighter.highlightToHtml(code, { lang: file.endsWith('.css') ? 'css' : 'tsx' })
