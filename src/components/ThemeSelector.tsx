'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ThemeSelector() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const displaySun = theme || resolvedTheme === 'dark' ? <Moon></Moon> : null
  const displayMoon = theme || resolvedTheme === 'light' ? <Sun></Sun> : null

  return (
    <button
      className="bg-colors-bg-color-1 rounded-md p-1 border border-colors-bs-color-3 hover:bg-colors-bg-color-2 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-colors-s-color-1"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {displaySun || displayMoon}
    </button>
  )
}
