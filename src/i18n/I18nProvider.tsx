import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { ui, type UiKey } from './ui'

export type Lang = 'en' | 'pt'
// Texto traduzível: string fixa (nomes, siglas) ou uma versão por idioma.
export type Text = string | Record<Lang, string>

const HTML_LANG: Record<Lang, string> = { en: 'en', pt: 'pt-BR' }

type I18n = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: UiKey, vars?: Record<string, string | number>) => string
  l: (text: Text) => string
}

const I18nContext = createContext<I18n | null>(null)

// O idioma inicial é aplicado no index.html antes da renderização (data-lang).
function initialLang(): Lang {
  return document.documentElement.dataset.lang === 'pt' ? 'pt' : 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    const root = document.documentElement
    root.dataset.lang = lang
    root.lang = HTML_LANG[lang]
    document.title = ui[lang]['meta.title']
    document.querySelector('meta[name="description"]')?.setAttribute('content', ui[lang]['meta.description'])
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    try { localStorage.setItem('lang', next) } catch { /* sem armazenamento: vale só para esta visita */ }
    setLangState(next)
  }, [])

  const t = useCallback((key: UiKey, vars?: Record<string, string | number>) => {
    let text: string = ui[lang][key]
    if (vars) for (const [name, value] of Object.entries(vars)) text = text.replaceAll(`{${name}}`, String(value))
    return text
  }, [lang])

  const l = useCallback((text: Text) => (typeof text === 'string' ? text : text[lang]), [lang])

  return <I18nContext.Provider value={{ lang, setLang, t, l }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used inside I18nProvider')
  return context
}
