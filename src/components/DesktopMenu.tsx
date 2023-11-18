import { Popover, Button, IconButton } from '@radix-ui/themes'
import { LogIn, MoreHorizontal } from 'lucide-react'
import { useContext } from 'react'
import { GlobalContext } from '@/store/GlobalContext'
import { useTranslations } from 'next-intl'

export function DesktopMenu() {
  const t = useTranslations('common')
  const { setGlobalContext } = useContext(GlobalContext)
  return (
    <div className="hidden md:block">
      <Popover.Root>
        <Popover.Trigger>
          <IconButton variant="ghost">
            <MoreHorizontal />
          </IconButton>
        </Popover.Trigger>
        <Popover.Content color={'green'} className="w-56 mt-2 mr-2">
          <Popover.Close>
            <div
              onClick={() => {
                setGlobalContext((prev) => ({
                  ...prev,
                  showSignupLoginDialog: true,
                }))
              }}
              className={
                'flex gap-2 w-full justify-start items-center cursor-pointer hover:underline'
              }
            >
              <LogIn className="mr-2 h-4 w-4" />
              <span>{t('openLoginSignupModalButton')}</span>
            </div>
          </Popover.Close>
        </Popover.Content>
      </Popover.Root>
    </div>
  )
}
