import { ChevronsRight } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { useI18n } from '../i18n/I18nProvider'

export function AboutMe() {
  const { t, l } = useI18n()
  return <section className="about-me" id="sobre" aria-labelledby="about-title">
    <div className="shell">
      <span className="about-me__label">{t('about.index')}</span>
      <div className="about-me__inner">
        <div className="about-me__visual" aria-hidden="true"><span>{t('about.image')}</span></div>
        <div className="about-me__copy">
          <div className="about-me__heading">
            <h2 id="about-title"><span>{t('about.title1')}</span> {t('about.title2')}</h2>
            <span className="about-me__rule" aria-hidden="true" />
          </div>
          <div className="about-me__content">
            {portfolio.about.map(paragraph => <p key={l(paragraph)}>{l(paragraph)}</p>)}
            <a className="about-me__contact" href="#contato">{t('about.cta')} <ChevronsRight size={20} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
}
