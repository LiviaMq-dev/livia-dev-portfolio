import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

type Theme = 'dark' | 'light'
const THEME_COLORS: Record<Theme, string> = { dark: '#000000', light: '#ffffff' }

// O tema inicial é aplicado no index.html antes da renderização, para não piscar o tema errado.
function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(currentTheme)
  const next: Theme = theme === 'dark' ? 'light' : 'dark'

  const toggle = () => {
    const root = document.documentElement
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.add('theme-switching')
      window.setTimeout(() => root.classList.remove('theme-switching'), 350)
    }
    root.dataset.theme = next
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[next])
    try { localStorage.setItem('theme', next) } catch { /* sem armazenamento: o tema vale só para esta visita */ }
    setTheme(next)
  }

  return <button className="theme-toggle" type="button" onClick={toggle} aria-label={next === 'light' ? 'Switch to light theme' : 'Switch to dark theme'} title={next === 'light' ? 'Light theme' : 'Dark theme'}>
    {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
  </button>
}
