'use client'
import { Select } from '@radix-ui/themes'
import { useLocale } from 'next-intl'
import { useRouter } from '@/navigation'
import { usePathname } from '@/navigation'
import { ChangeEvent } from 'react'

import * as React from 'react'

export default function LanguageChanger() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const handleChange = (locale: string) => {
    router.push(pathname, {
      locale,
    })
  }

  return (
    <Select.Root defaultValue={locale} onValueChange={handleChange}>
      <Select.Trigger className={'min-w-[130px]'}></Select.Trigger>
      <Select.Content position={'popper'}>
        <Select.Group className={'min-w-[100px]'}>
          <Select.Item value="en">English</Select.Item>
          <Select.Item value="ro">Romanian</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}
