import { Eye } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { useI18n } from '../i18n/I18nProvider'

export function CertificatesGallery() {
  const { t, l, lang } = useI18n()
  const locale = lang === 'pt' ? 'pt-BR' : 'en-US'
  // Datas em ISO (AAAA-MM-DD) formatadas no idioma escolhido; meio-dia evita mudar de dia pelo fuso.
  const formatDate = (iso: string) => new Date(`${iso}T12:00:00`).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
  return <div className="certificates-gallery">
    {portfolio.certifications.map(certificate => <article className="certificate-card" key={certificate.title}>
      <div className="certificate-card__heading">
        <h3>{certificate.title}</h3>
        <span className="certificate-card__year" aria-label={t('courses.completed', { date: formatDate(certificate.completed) })}>{certificate.completed.slice(0, 4)}</span>
      </div>
      <p className="certificate-card__issuer">{certificate.issuer} <span>{t('courses.hours', { hours: certificate.hours.toLocaleString(locale) })}</span></p>
      <ul className="certificate-card__topics" aria-label={t('courses.topics')}>
        {certificate.topics.map(topic => <li key={l(topic)}>{l(topic)}</li>)}
      </ul>
      <a className="certificate-card__link" href={certificate.document} target="_blank" rel="noopener noreferrer"><Eye size={15} aria-hidden="true" /> {t('courses.view')}</a>
    </article>)}
  </div>
}
