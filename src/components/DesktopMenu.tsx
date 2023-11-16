import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { LogIn, MoreHorizontal } from 'lucide-react'
import { PopoverClose } from '@radix-ui/react-popover'
import { useContext } from 'react'
import { GlobalContext } from '@/store/GlobalContext'
import { useTranslations } from 'next-intl'

export function DesktopMenu() {
  const t = useTranslations('common')
  const { setGlobalContext } = useContext(GlobalContext)
  return (
    <div className="hidden md:block">
      <Popover>
        <PopoverTrigger asChild>
          <Button size={'icon'} variant={'ghost'}>
            <MoreHorizontal />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 mt-2 mr-2">
          <PopoverClose>
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
          </PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
  )
}
