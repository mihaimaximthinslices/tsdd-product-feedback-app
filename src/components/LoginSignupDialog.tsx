import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useContext, useEffect, useRef } from 'react'
import { GlobalContext } from '@/store/GlobalContext'
import { cn } from '@/lib/utils'
import { SignUpForm } from '@/components/SignUpForm'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SignInForm } from '@/components/SignInForm'

export function LoginSignupTabs() {
  return (
    <Tabs defaultValue="sign-in" className="mt-8 md: mt-4">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="sign-in">Sign In</TabsTrigger>
        <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
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
        <Button variant="outline" className={'hidden'}>
          Open
        </Button>
      </DialogTrigger>
      <DialogContent
        className={cn('h-screen w-full md:h-fit md:max-w-[425px]')}
      >
        <LoginSignupTabs />
      </DialogContent>
    </Dialog>
  )
}
