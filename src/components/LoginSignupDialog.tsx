import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useContext } from 'react'
import { GlobalContext } from '@/store/GlobalContext'
import { cn } from '@/lib/utils'
import { SignUpForm } from '@/components/SignUpForm'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SignInForm } from '@/components/SignInForm'
import { useTranslations } from 'next-intl'

export function LoginSignupTabs() {
  const t = useTranslations('auth')
  return (
    <Tabs defaultValue="sign-in" className="mt-12 md:mt-4">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="sign-in">{t('loginSection')}</TabsTrigger>
        <TabsTrigger value="sign-up">{t('signupSection')}</TabsTrigger>
      </TabsList>
      <TabsContent value="sign-in">
        <SignInForm />
      </TabsContent>
      <TabsContent value="sign-up">
        <SignUpForm />
      </TabsContent>
    </Tabs>
  )
}

export function LoginSignupDialog() {
  const { showSignupLoginDialog, setGlobalContext } = useContext(GlobalContext)
  return (
    <Dialog
      open={showSignupLoginDialog}
      onOpenChange={(status) => {
        setGlobalContext((prev) => ({ ...prev, showSignupLoginDialog: status }))
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline" className={'hidden'}></Button>
      </DialogTrigger>
      <DialogContent
        className={cn(
          'h-screen w-full md:h-fit md:max-w-[425px] mt-4 border-none md:mt-0 border-1',
        )}
      >
        <LoginSignupTabs />
      </DialogContent>
    </Dialog>
  )
}
