'use client'

import { ThemeSwitchButton } from '@/components/ThemeSwitchButton'
import { UserAvatar } from '@/components/UserAvatar'
import { MobileMenu } from '@/components/MobileMenu'
import { LoginSignupDialog } from '@/components/LoginSignupDialog'
import { DesktopMenu } from '@/components/DesktopMenu'
import LanguageChanger from '@/components/LanguageChanger'
import { Flex } from '@radix-ui/themes'

export function NavBar() {
  return (
    <nav className="flex justify-between w-full pt-4 pb-4 px-2">
      <Flex direction={'row'} gap={'3'} align={'center'}>
        <LanguageChanger />
        <ThemeSwitchButton />
      </Flex>
      <div className="flex gap-6 items-center">
        <div className="flex gap-2">
          {/*<UserAvatar />*/}
          <MobileMenu />
          <DesktopMenu />
        </div>
      </div>

      <LoginSignupDialog />
    </nav>
  )
}
