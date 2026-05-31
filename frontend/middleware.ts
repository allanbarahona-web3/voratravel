import createMiddleware from 'next-intl/middleware'
import { routing } from './src/i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: [
    // Exclude: API routes, vcard pages, static files, Next.js internals
    '/((?!api|card|_next|_vercel|.*\\..*).*)',
  ],
}
