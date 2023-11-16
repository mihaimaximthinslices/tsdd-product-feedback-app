import { useTranslations } from 'next-intl'

export function Container({ children }: { children: React.ReactNode }) {
  const t = useTranslations('common')

  console.log(t('welcome'), 'container')
  return <div className="mx-auto w-full max-w-7xl">{children}</div>
}
