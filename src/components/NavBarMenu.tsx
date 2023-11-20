'use client'
import React from 'react'
import * as Popover from '@radix-ui/react-popover'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
export default function NavBarMenu() {
  const t = useTranslations(`auth`)
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-colors-t-color-1 bg-colors-bg-color-2 hover:bg-colors-bs-color-1 cursor-default outline-none focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-colors-s-color-1"
          aria-label="Update dimensions"
        >
          <DotsHorizontalIcon />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="mt-3 rounded-b-md w-[130px] md:w-[200px] bg-colors-bg-color-2 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-colors-s-color-1"
          sideOffset={5}
        >
          <ul className="w-full flex flex-col rounded-b-md divide-y divide-colors-bs-color-3 border-b border-l border-r border-colors-bs-color-3 ">
            <Link
              className="hover:underline focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-colors-s-color-1"
              href={'/sign-in'}
            >
              <li className="p-2 hover:bg-colors-bg-color-1 text-colors-t-color-2">
                {t('signinSection')}
              </li>
            </Link>
            <Link
              className="hover:underline focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-colors-s-color-1"
              href={'/sign-up'}
            >
              <li className="p-2 hover:bg-colors-bg-color-1 rounded-b-md">
                {t('signupSection')}
              </li>
            </Link>
          </ul>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
