import { useContext } from 'react'
import { GlobalContext } from '@/store/GlobalContext'
import { cn } from '@/lib/utils'
import { SignUpForm } from '@/components/SignUpForm'
import { Cross2Icon } from '@radix-ui/react-icons'

import { SignInForm } from '@/components/SignInForm'
import { useTranslations } from 'next-intl'
import { Badge, Button, Dialog, Tabs, Text, ThemePanel } from '@radix-ui/themes'
import { useThemeContext, Theme } from '@radix-ui/themes'

const tabsTriggerStyle = ['w-full', 'data-[state="active"]:before:h-[2px]']
export function LoginSignupTabs() {
  const t = useTranslations('auth')
  return (
    <Tabs.Root defaultValue="sign-in" className="mt-12 md:mt-4">
      <Tabs.List
        className={cn(
          'grid',
          'w-full',
          'grid-cols-2',
          'mb-6',
          'min-w-full',
          'shadow-none',
        )}
      >
        <Theme accentColor="plum">
          <Tabs.Trigger
            className={cn('w-full [&>*]:w-full cursor-pointer')}
            value="sign-in"
          >
            <Text color={'plum'} size={'4'}>
              {t('loginSection')}
            </Text>
          </Tabs.Trigger>
        </Theme>
        <Theme accentColor="grass">
          <Tabs.Trigger
            className={cn('w-full [&>*]:w-full cursor-pointer')}
            value="sign-up"
          >
            <Text color={'grass'} size={'4'}>
              {' '}
              {t('signupSection')}
            </Text>
          </Tabs.Trigger>
        </Theme>
      </Tabs.List>
      <Tabs.Content value="sign-in">
        <Theme accentColor="plum">
          <SignInForm />
        </Theme>
      </Tabs.Content>
      <Tabs.Content value="sign-up">
        <SignUpForm />
      </Tabs.Content>
    </Tabs.Root>
  )
}

export function LoginSignupDialog() {
  const { showSignupLoginDialog, setGlobalContext } = useContext(GlobalContext)
  return (
    <Dialog.Root
      open={showSignupLoginDialog}
      onOpenChange={(status) => {
        setGlobalContext((prev) => ({ ...prev, showSignupLoginDialog: status }))
      }}
    >
      <Dialog.Content
        className={cn(
          'h-screen w-full md:h-fit md:max-w-[425px] mt-4 border-none md:mt-0 border-1',
        )}
      >
        <div
          className="flex
        justify-end"
        >
          <Dialog.Close className="cursor-pointer">
            <Cross2Icon />
          </Dialog.Close>
        </div>
        <LoginSignupTabs />
      </Dialog.Content>
    </Dialog.Root>
  )
}
