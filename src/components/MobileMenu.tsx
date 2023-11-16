import { Button } from '@/components/ui/button'
import { MoreHorizontal, LogIn } from 'lucide-react'
import { useContext } from 'react'

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { GlobalContext } from '@/store/GlobalContext'
import { useTranslations } from 'next-intl'
export function MobileMenu() {
  const { setGlobalContext } = useContext(GlobalContext)
  const t = useTranslations('common')
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={'icon'} variant={'ghost'}>
            <MoreHorizontal />
          </Button>
        </SheetTrigger>
        <SheetContent side={'bottom'} className={'border-none border-gray-400'}>
          <div className="grid gap-4 py-4 pt-8">
            <SheetClose>
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
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
