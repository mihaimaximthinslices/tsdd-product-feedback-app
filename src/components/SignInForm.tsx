import * as React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

export function SignInForm() {
  const t = useTranslations('auth')
  const formSchema = z.object({
    username: z.string().min(2, {
      message: t('username.errorInvalidLength'),
    }),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
        className="space-y-8"
      >
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('username.title')}</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>{t('username.info')}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className={cn('w-full')}>
          {t('loginAction')}
        </Button>
      </form>
    </Form>
  )
}
