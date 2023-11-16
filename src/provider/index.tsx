'use client'
import React, { ReactNode, useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { GlobalContextProvider } from '@/store/GlobalContext'
import { SessionProvider } from 'next-auth/react'
import { NextIntlClientProvider } from 'next-intl'
import { AbstractIntlMessages } from 'use-intl'

function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider attribute={'class'} defaultTheme={'system'} enableSystem>
      {children}
    </NextThemeProvider>
  )
}

function NextSessionProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}

function NextIntlProvider({
  children,
  locale,
  messages,
}: {
  children: ReactNode
  locale: string
  messages: AbstractIntlMessages
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
export default function Provider({
  children,
  locale,
  messages,
}: {
  children: ReactNode
  locale: string
  messages: AbstractIntlMessages
}) {
  const [mounted, setMounted] = useState(false)
  const [queryClient] = useState(() => new QueryClient())

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <></>
  }
  return (
    <NextIntlProvider locale={locale} messages={messages}>
      <NextSessionProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalContextProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </GlobalContextProvider>
        </QueryClientProvider>
      </NextSessionProvider>
    </NextIntlProvider>
  )
}
