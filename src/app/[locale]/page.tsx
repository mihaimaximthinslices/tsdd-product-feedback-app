import React from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'

export default function Home() {
  const t = useTranslations('common')

  console.log(t)
  return (
    <section>
      <h1>{t('welcome')}</h1>

      <div className="flex justify-center w-full">
        <Link className="text-blue-800" href="/about">
          {t('about')}
        </Link>
      </div>
    </section>
  )
}
