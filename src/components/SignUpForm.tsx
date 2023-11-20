'use client'
import * as React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import * as Form from '@radix-ui/react-form'

import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

export function SignUpForm() {
  const t = useTranslations('auth')
  const formSchema = z.object({
    email: z
      .string()
      .min(1, t('email.cantBeEmpty'))
      .email({ message: t('email.errorInvalidFormat') }),
    password: z.string().min(8, t('password.errorInvalidLength')),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      email: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form.Root
      className="flex flex-col gap-6"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className={'flex flex-col gap-2'}>
        <h1 className="text-heading1">{t('signupFormTitle')}</h1>
        <span className="text-heading4 text-colors-t-color-1 max-w-[280px] balance">
          {t('signupFormSubtitle')}
        </span>
      </div>

      <Form.Field name="email">
        <fieldset className="flex flex-col gap-2">
          <Form.Label>
            <span
              className={cn(
                'text-body1 text-colors-t-color-2',
                form.formState.errors.email && 'text-colors-t-color-red',
              )}
            >
              {t('email.title')}
            </span>
          </Form.Label>
          <Form.Control asChild>
            <input
              {...form.register('email')}
              type="email"
              placeholder={t('email.placeholder')}
              autoComplete="on"
              className={cn(
                'px-2 rounded-md py-1 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-colors-s-color-1',
                form.formState.errors.email &&
                  'border-2 border-colors-t-color-red !outline-transparent focus:shadow-none',
              )}
            />
          </Form.Control>
          {form.formState.errors.email && (
            <span className="text-colors-t-color-red text-body3">
              {form.formState.errors.email.message}
            </span>
          )}
        </fieldset>
      </Form.Field>
      <Form.Field name="password">
        <fieldset className="flex flex-col gap-2">
          <Form.Label>
            <span
              className={cn(
                'text-body1 text-colors-t-color-2',
                form.formState.errors.password && 'text-colors-t-color-red',
              )}
            >
              {t('password.title')}
            </span>
          </Form.Label>
          <Form.Control asChild>
            <input
              {...form.register('password')}
              type="password"
              placeholder={t('password.placeholder')}
              autoComplete="on"
              className={cn(
                'px-2 rounded-md py-1 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-colors-s-color-1',
                form.formState.errors.password &&
                  'border-2 border-colors-t-color-red !outline-transparent focus:shadow-none',
              )}
            />
          </Form.Control>

          {form.formState.errors.password && (
            <span className="text-colors-t-color-red text-body3">
              {form.formState.errors.password.message}
            </span>
          )}
        </fieldset>
      </Form.Field>
      <button
        type="submit"
        className="bg-colors-ic-color-3 p-2 rounded-md hover:bg-colors-ic-color-2 text-colors-t-color-2 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-colors-s-color-1"
      >
        {t('signupAction')}
      </button>
    </Form.Root>
  )
}
