import { LanguageSelector } from '@/components/LanguageSelector'
import ThemeSelector from '@/components/ThemeSelector'
import NavBarMenu from '@/components/NavBarMenu'

export default function NavBar() {
  return (
    <nav className="w-full flex p-4 items-center bg-colors-bg-color-2 border border-colors-bs-color-2 justify-between">
      <section>
        <div className="flex items-center gap-2 text-colors-t-color-1">
          <LanguageSelector />
          <ThemeSelector />
        </div>
      </section>
      <section>
        <NavBarMenu />
      </section>
    </nav>
  )
}
