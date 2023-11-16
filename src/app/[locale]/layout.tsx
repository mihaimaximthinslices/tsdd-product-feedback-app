import type { Metadata } from 'next'
import Provider from '@/provider'
import './globals.css'
import { Container } from '@/components/ui/container'
import { notFound, redirect } from 'next/navigation'
import React, { ReactNode } from 'react'
import { useTranslations } from 'next-intl'
import { NavBar } from '@/components/NavBar'
import { auth } from '@/app/api/auth/[...nextauth]/options'
import { AbstractIntlMessages } from 'use-intl'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const locales = ['en', 'ro']
export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale as any)) {
    redirect('/en')
  }
  // const session = await auth()
  // if (!session) {
  //   //write the logic to redirect to /auth/signin in nextjs
  //   redirect('/api/auth/signin')
  // }

  let messages: AbstractIntlMessages
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body>
        <Provider locale={locale} messages={messages}>
          <Container>
            <main className="flex flex-col items-center justify-between">
              <NavBar></NavBar>
              {children}
            </main>
          </Container>
        </Provider>
      </body>
    </html>
  )
}