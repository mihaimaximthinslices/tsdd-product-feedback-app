import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

export function ThemeSwitchButton() {
  const { theme, setTheme } = useTheme()

  return (
    <div aria-label="right-nav">
      <Button
        variant={'ghost'}
        size={'icon'}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="rounded-[5px]"
      >
        <Sun className={cn('dark:hidden')}></Sun>
        <Moon className={cn('hidden dark:block')}></Moon>
      </Button>
    </div>
  )
}
