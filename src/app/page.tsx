'use client'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { cn } from '@/lib/utils'

import React from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area'

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
)

const ScrollAreaDemo = () => (
  <ScrollArea.Root className="w-full h-[225px] rounded overflow-hidden bg-white">
    <ScrollArea.Viewport className="w-full h-full rounded">
      <div className="px-5">
        {TAGS.map((tag) => (
          <div
            className="text-mauve12 text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6"
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar
      className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
      orientation="vertical"
    >
      <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar
      className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
      orientation="horizontal"
    >
      <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner className="bg-blackA5" />
  </ScrollArea.Root>
)

const RadioGroupDemo = () => (
  <RadioGroup.Root
    onValueChange={(e: string) => {
      console.log('change', e)
    }}
    className="flex flex-col gap-4 p-4 bg-blue-400 rounded-md"
  >
    <div className="flex items-center">
      <RadioGroup.Item
        className="bg-white w-[15px] h-[15px] rounded-full hover:bg-violet3 outline-none cursor-default"
        value="default"
        id="r1"
      >
        <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[7px] after:h-[7px] after:rounded-[50%] after:bg-violet11" />
      </RadioGroup.Item>
      <label
        className="text-black text-[15px] leading-none pl-[15px]"
        htmlFor="r1"
      >
        Hello
      </label>
    </div>
    <div className="flex items-center">
      <RadioGroup.Item
        value="comfortable"
        className="bg-white w-[25px] h-[25px] rounded-full hover:bg-violet3 outline-none cursor-default"
        id="r2"
      >
        <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
      </RadioGroup.Item>
      <label
        className="text-black text-[15px] leading-none pl-[15px]"
        htmlFor="r2"
      >
        Comfortable
      </label>
    </div>
    <div className="flex items-center">
      <RadioGroup.Item
        className="bg-white w-[25px] h-[25px] rounded-full hover:bg-violet3 outline-none cursor-default"
        value="wadap"
        id="r3"
      >
        <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
      </RadioGroup.Item>
      <label
        className="text-black text-[15px] leading-none pl-[15px]"
        htmlFor="r3"
      >
        Wadap
      </label>
    </div>
  </RadioGroup.Root>
)

import * as Popover from '@radix-ui/react-popover'
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons'

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button
        className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-violet3 hover:bg-green-200  cursor-defaul"
        aria-label="Update dimensions"
      >
        <MixerHorizontalIcon />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className="rounded w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
        sideOffset={5}
      >
        <div className={cn('w-full flex justify-between p-2 pl-4 pb-1')}>
          <div className="text-violet11 text-[15px] leading-[18px] font-medium pt-1">
            Tags
          </div>
          <Popover.Close
            className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 hover:bg-violet4 outline-none cursor-pointer
            "
            aria-label="Close"
          >
            <Cross2Icon />
          </Popover.Close>
        </div>
        <ScrollAreaDemo />

        <Popover.Arrow className="fill-white" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-red-500 text-red-500 p-4">Hello</div>
      <RadioGroupDemo />
      <PopoverDemo />
    </main>
  )
}
