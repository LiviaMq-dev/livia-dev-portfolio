import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutMe } from './components/AboutMe'
import { SkillsAccordion } from './components/SkillsAccordion'
import { SkillsGrid } from './components/SkillsGrid'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { ProjectsShowcase } from './components/ProjectsShowcase'
import { CertificatesGallery } from './components/CertificatesGallery'
import { EducationList } from './components/EducationList'
import { ServicesExplorer } from './components/ServicesExplorer'
import { ContactForm } from './components/ContactForm'
import { SiteFooter } from './components/SiteFooter'
import { useI18n } from './i18n/I18nProvider'
import type { UiKey } from './i18n/ui'

const marqueeKeys: UiKey[] = ['marquee.1', 'marquee.2', 'marquee.3', 'marquee.4']

function SectionTitle({ index, title, side, accent }: { index: string; title: string; side?: string; accent?: string }) {
  return <div className="section-title"><span className="section-title__index">{index}</span><h2>{accent && title.startsWith(accent) ? <><span className="section-title__accent">{accent}</span>{title.slice(accent.length)}</> : title}</h2>{side && <p>{side}</p>}</div>
}

function App() {
  const { t } = useI18n()
  return <>
    <a className="skip-link" href="#conteudo">{t('skip')}</a>
    <Header />
    <main id="conteudo">
      <Hero />

      <div className="marquee" aria-label={t('marquee.label')}>
        <div className="marquee__track">
          {[0, 1].map(copy => <div className="marquee__group" key={copy} aria-hidden={copy === 1}>
            {marqueeKeys.map(key => <span className="marquee__item" key={key}>{t(key)}<span className="marquee__star" aria-hidden="true">✳</span></span>)}
          </div>)}
        </div>
      </div>

      <AboutMe />

      <section id="habilidades" className="section section--panel" aria-labelledby="skills-title"><div className="shell"><SectionTitle index={t('skills.index')} title={t('skills.title')} accent={t('skills.accent')} /><h3 id="skills-title" className="sr-only">{t('skills.heading')}</h3><SkillsAccordion /><SkillsGrid /></div></section>

      <section id="experiencia" className="section shell timeline-section" aria-labelledby="experience-title"><SectionTitle index={t('experience.index')} title={t('experience.title')} accent={t('experience.accent')} /><h3 id="experience-title" className="sr-only">{t('experience.heading')}</h3><ExperienceTimeline /></section>

      <section id="projetos" className="section section--panel projects" aria-labelledby="projects-title"><div className="shell"><SectionTitle index={t('projects.index')} title={t('projects.title')} accent={t('projects.accent')} /><h3 id="projects-title" className="sr-only">{t('projects.heading')}</h3><ProjectsShowcase /></div></section>

      <section id="certificacoes" className="section shell credentials" aria-labelledby="cert-title"><SectionTitle index={t('courses.index')} title={t('courses.title')} accent={t('courses.accent')} /><h3 id="cert-title" className="sr-only">{t('courses.heading')}</h3><CertificatesGallery /></section>

      <section id="formacao" className="section section--panel" aria-labelledby="education-title"><div className="shell education"><SectionTitle index={t('education.index')} title={t('education.title')} accent={t('education.accent')} /><h3 id="education-title" className="sr-only">{t('education.heading')}</h3><EducationList /></div></section>

      <section id="servicos" className="section shell services" aria-labelledby="services-title"><SectionTitle index={t('services.index')} title={t('services.title')} accent={t('services.accent')} side={t('services.side')} /><h3 id="services-title" className="sr-only">{t('services.heading')}</h3><ServicesExplorer /></section>

      <section id="contato" className="section shell contact-section" aria-labelledby="contact-title"><SectionTitle index={t('contact.index')} title={t('contact.title')} accent={t('contact.accent')} side={t('contact.side')} /><h3 id="contact-title" className="sr-only">{t('contact.heading')}</h3><ContactForm /></section>
    </main>
    <SiteFooter />
  </>
}

export default App
