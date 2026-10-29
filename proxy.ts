import { NextResponse, type NextRequest } from 'next/server'
import { defaultLocale, locales } from '@/lib/i18n'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return

  // Any Chinese preference (zh, zh-CN, zh-TW…) gets the Simplified Chinese site; everyone else gets English.
  const accept = request.headers.get('accept-language') ?? ''
  const locale = /\bzh\b/i.test(accept) ? 'zh-CN' : defaultLocale
  request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // Skip Next internals and any path with a file extension (llms.txt, sitemap.xml, robots.txt, favicon.ico…).
  matcher: ['/((?!_next|.*\\..*).*)'],
}
