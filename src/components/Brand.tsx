import { useI18n } from '../i18n/I18nProvider'

export function Brand({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n()
  return <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#inicio" aria-label={t('brand.home')}>
    <span className="brand__symbol" aria-hidden="true">&lt;</span><span>Livia.Dev</span><span className="brand__symbol" aria-hidden="true">/&gt;</span>
  </a>
}
