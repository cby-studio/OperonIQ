import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ro'],
  defaultLocale: 'en',
  // English stays un-prefixed at the root ("/"), Romanian is served under "/ro".
  localePrefix: 'as-needed',
});

export type AppLocale = (typeof routing.locales)[number];
