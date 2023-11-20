'use client'
import React, {
  ReactNode,
  RefAttributes,
  ForwardRefExoticComponent,
  forwardRef,
} from 'react'
import * as Select from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import { useRouter } from '@/navigation'
import { usePathname } from '@/navigation'
import { useLocale } from 'use-intl'
export const LanguageSelector = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const handleLocaleChange = (locale: string) => {
    router.push(pathname, {
      locale,
    })
  }
  return (
    <Select.Root defaultValue={locale} onValueChange={handleLocaleChange}>
      <Select.Trigger
        className="group bg-colors-bg-color-1 inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px]  text-colors-t-color-1 shadow-[0_2px_10px] shadow-black/10 hover:bg-colors-bg-color-2 focus:shadow-[0_0_0_2px] focus:shadow-colors-s-color-1 data-[placeholder]:text-colors-t-color-1 outline-none border border-colors-bs-color-3"
        aria-label="Food"
      >
        <Select.Value aria-label={locale}></Select.Value>
        <Select.Icon className="text-colors-t-color-1 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position={'popper'}
          className="bg-colors-bg-color-1  overflow-hidden  rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
        >
          <Select.Viewport className="p-[5px]">
            <Select.Group>
              <SelectItem value="en">EN</SelectItem>
              <SelectItem value="ro">RO</SelectItem>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

const SelectItem: ForwardRefExoticComponent<
  {
    children: ReactNode
    className?: string | undefined
    value: string
    disabled?: boolean
  } & RefAttributes<HTMLDivElement>
> = forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={cn(
        'text-[13px] leading-none text-colors-t-color-2 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-colors-s-color-2 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-colors-bg-color-2 data-[highlighted]:text-colors-t-color-1',
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
})
SelectItem.displayName = 'SelectItem'
