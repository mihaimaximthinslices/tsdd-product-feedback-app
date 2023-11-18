import * as React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import * as Form from '@radix-ui/react-form'

import { Badge, Button, Callout, Flex, Text, TextField } from '@radix-ui/themes'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { InfoCircledIcon } from '@radix-ui/react-icons'

export function SignUpForm() {
  const t = useTranslations('auth')

  const formSchema = z.object({
    email: z.string().email({ message: t('email.errorInvalidFormat') }),
    password: z.string().min(8, t('password.errorInvalidLength')),
    username: z.string().min(8, {
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

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Form.Root
      className="flex flex-col gap-6"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Form.Field name="email">
        <Flex direction={'column'} className={cn(`gap-2`)}>
          <Form.Label>
            <Badge size={'2'}>{t('email.title')}</Badge>
          </Form.Label>
          <Form.Control asChild>
            <TextField.Input
              variant={'soft'}
              {...form.register('email')}
              size={'3'}
              type="email"
              autoComplete="on"
              placeholder={t('email.placeholder')}
              className={cn(
                form.formState.errors.email &&
                  'border-destructive !outline-transparent focus:ring-destructive',
              )}
            />
          </Form.Control>

          {form.formState.errors.email && (
            <Callout.Root variant="surface" size={'1'}>
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>{form.formState.errors.email.message}</Callout.Text>
            </Callout.Root>
          )}
        </Flex>
      </Form.Field>
      <Form.Field name="username">
        <Flex direction={'column'} className={cn(`gap-2`)}>
          <Form.Label>
            <Badge size={'2'}>{t('username.title')}</Badge>
          </Form.Label>
          <Form.Control asChild>
            <TextField.Input
              variant={'soft'}
              {...form.register('username')}
              size={'3'}
              type="text"
              placeholder={t('username.placeholder')}
              autoComplete={'on'}
              className={cn(
                form.formState.errors.username &&
                  'border-destructive !outline-transparent focus:ring-destructive',
              )}
            />
          </Form.Control>

          {form.formState.errors.username && (
            <Callout.Root variant="surface" size={'1'}>
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                {form.formState.errors.username.message}
              </Callout.Text>
            </Callout.Root>
          )}
        </Flex>
      </Form.Field>
      <Form.Field name="password">
        <Flex direction={'column'} className={cn(`gap-2`)}>
          <Form.Label>
            <Badge size={'2'}>{t('password.title')}</Badge>
          </Form.Label>
          <Form.Control asChild>
            <TextField.Input
              variant={'soft'}
              {...form.register('password')}
              size={'3'}
              type="password"
              placeholder={t('password.placeholder')}
              autoComplete={'on'}
              className={cn(
                form.formState.errors.password &&
                  'border-destructive !outline-transparent focus:ring-destructive',
              )}
            />
          </Form.Control>

          {form.formState.errors.password && (
            <Callout.Root variant="surface" size={'1'}>
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                {form.formState.errors.password.message}
              </Callout.Text>
            </Callout.Root>
          )}
        </Flex>
      </Form.Field>
      <Button
        type="submit"
        size={'3'}
        className={cn('w-full mt-4 cursor-pointer disabled:cursor-default')}
      >
        {t('signupAction')}
      </Button>
    </Form.Root>
  )
}
