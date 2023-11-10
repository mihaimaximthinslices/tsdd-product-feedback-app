'use client'

import { ThemeSwitchButton } from '@/components/ThemeSwitchButton'
import { UserAvatar } from '@/components/UserAvatar'
import { MobileMenu } from '@/components/MobileMenu'
import { LoginSignupDialog } from '@/components/LoginSignupDialog'
import { DesktopMenu } from '@/components/DesktopMenu'

export function NavBar() {
  return (
    <nav className="flex justify-end w-full pt-4 pb-4 px-2">
      <div className="flex gap-6">
        <ThemeSwitchButton />
        <div className="flex gap-2">
          <UserAvatar />
          <MobileMenu />
          <DesktopMenu />
        </div>
      </div>
      <LoginSignupDialog />
    </nav>
  )
}
