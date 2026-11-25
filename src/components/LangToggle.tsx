import { useI18n, type Lang } from '../i18n/I18nProvider'

const OPTIONS: { value: Lang; label: string }[] = [{ value: 'en', label: 'EN' }, { value: 'pt', label: 'PT' }]

// Botão único que alterna entre inglês e português; o idioma ativo aparece destacado.
export function LangToggle() {
  const { lang, setLang, t } = useI18n()
  const next: Lang = lang === 'en' ? 'pt' : 'en'
  return <button className="lang-toggle" type="button" onClick={() => setLang(next)} aria-label={t('lang.switch')} title={t('lang.switch')} lang={next === 'pt' ? 'pt-BR' : 'en'}>
    {OPTIONS.map(option => <span key={option.value} className={option.value === lang ? 'is-active' : ''} aria-hidden="true">{option.label}</span>)}
  </button>
}
