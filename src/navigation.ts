import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation'

export const locales = ['en', 'ro'] as const

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',
  '/blog': '/blog',
  '/sign-in': {
    en: '/sign-in',
    ro: '/autentificare',
  },
  '/sign-up': {
    en: '/sign-up',
    ro: '/inregistrare',
  },

  // If locales use different paths, you can
  // specify each external path per locale.
  '/about': {
    en: '/about',
    ro: '/despre-noi',
  },

  // Dynamic params are supported via square brackets
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames })
