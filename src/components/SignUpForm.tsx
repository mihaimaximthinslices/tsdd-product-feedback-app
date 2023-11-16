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

export function SignUpForm() {
  const t = useTranslations('auth')

  const formSchema = z.object({
    email: z.string().email({ message: t('email.errorInvalidFormat') }),
    password: z.string().min(8, t('password.errorInvalidLength')),
    username: z.string().min(2, {
      message: t('username.errorInvalidLength'),
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      email: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('email.title')}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="john.doe@email.com"
                  className={cn(
                    form.formState.errors.email &&
                      'border-destructive !outline-transparent focus:ring-destructive',
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage />
              {!form.formState.errors.email && (
                <FormDescription>{t('email.info')}</FormDescription>
              )}
            </FormItem>
          )}
        />
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('username.title')}</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
              {!form.formState.errors.username && (
                <FormDescription>{t('username.info')}</FormDescription>
              )}
            </FormItem>
          )}
        />
        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('password.title')}</FormLabel>
              <FormControl>
                <Input type="password" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
              {!form.formState.errors.password && (
                <FormDescription>{t('password.info')}</FormDescription>
              )}
            </FormItem>
          )}
        />
        <Button type="submit" className={cn('w-full bg-blue-400')}>
          {t('signupAction')}
        </Button>
      </form>
    </Form>
  )
}
