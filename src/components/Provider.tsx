'use client'
import React, { ReactNode, useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { GlobalContextProvider } from '@/store/GlobalContext'

function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider attribute={'class'} defaultTheme={'system'} enableSystem>
      {children}
    </NextThemeProvider>
  )
}
export default function Provider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [queryClient] = useState(() => new QueryClient())

  useEffect(() => {
    setMounted(true)
    console.log('here')
  }, [])

  if (!mounted) {
    return <></>
  }
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </GlobalContextProvider>
    </QueryClientProvider>
  )
}
