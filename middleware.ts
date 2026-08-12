import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Kept as "middleware.ts" (rather than Next 16's newer "proxy.ts" convention)
// on purpose: proxy.ts always runs on the Node.js runtime, which OpenNext for
// Cloudflare Workers does not support. middleware.ts still runs on the Edge
// runtime, which Cloudflare Workers requires.
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for /api, /_next, /_vercel and files with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
