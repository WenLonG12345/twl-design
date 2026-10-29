import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/i18n'

// Allows every crawler, including AI crawlers (GPTBot, ClaudeBot, PerplexityBot…), so the library can be cited.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
