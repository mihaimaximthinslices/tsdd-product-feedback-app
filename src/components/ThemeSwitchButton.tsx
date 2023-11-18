import { Button } from '@radix-ui/themes'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

export function ThemeSwitchButton() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant={'ghost'}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <div className="text-accent"></div>
      <Sun className={cn('dark:hidden text-accent')}></Sun>
      <Moon className={cn('hidden dark:block text-accent')}></Moon>
    </Button>
  )
}
