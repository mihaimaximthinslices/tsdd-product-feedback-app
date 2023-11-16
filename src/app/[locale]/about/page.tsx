import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('common')
  return (
    <div className="flex flex-col items-center justify-center py-2 h-full">
      <h1>{t('about')}</h1>
    </div>
  )
}
