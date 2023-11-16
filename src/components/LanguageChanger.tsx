'use client'

import { useLocale } from 'next-intl'
import { useRouter } from '@/navigation'
import { usePathname } from '@/navigation'
import { ChangeEvent } from 'react'

import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ro">Romana</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
