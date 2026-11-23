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

const marqueeItems = ['DEVELOPMENT', 'ARTIFICIAL INTELLIGENCE', 'AUTOMATIONS', 'TECHNOLOGY']

function SectionTitle({ index, title, side, accent }: { index: string; title: string; side?: string; accent?: string }) {
  return <div className="section-title"><span className="section-title__index">{index}</span><h2>{accent ? <><span className="section-title__accent">{accent}</span>{title.slice(accent.length)}</> : title}</h2>{side && <p>{side}</p>}</div>
}

function App() {
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <Header />
    <main id="conteudo">
      <Hero />

      <div className="marquee" aria-label="Areas of interest: development, artificial intelligence, automations and technology">
        <div className="marquee__track">
          {[0, 1].map(copy => <div className="marquee__group" key={copy} aria-hidden={copy === 1}>
            {marqueeItems.map(item => <span className="marquee__item" key={item}>{item}<span className="marquee__star" aria-hidden="true">✳</span></span>)}
          </div>)}
        </div>
      </div>

      <AboutMe />

      <section id="habilidades" className="section section--panel" aria-labelledby="skills-title"><div className="shell"><SectionTitle index="02 / SKILLS" title="Technologies and tools." accent="Technologies" /><h3 id="skills-title" className="sr-only">Skills and technologies</h3><SkillsAccordion /><SkillsGrid /></div></section>

      <section id="experiencia" className="section shell timeline-section" aria-labelledby="experience-title"><SectionTitle index="03 / EXPERIÊNCIA" title="Professional journey." accent="Professional" /><h3 id="experience-title" className="sr-only">Experiência profissional</h3><ExperienceTimeline /></section>

      <section id="projetos" className="section section--panel projects" aria-labelledby="projects-title"><div className="shell"><SectionTitle index="04 / PROJETOS" title="My projects" accent="My" /><h3 id="projects-title" className="sr-only">Projetos</h3><ProjectsShowcase /></div></section>

      <section id="certificacoes" className="section shell credentials" aria-labelledby="cert-title"><SectionTitle index="05 / LEARNING" title="Courses & Certifications." accent="Courses" /><h3 id="cert-title" className="sr-only">Courses and certifications</h3><CertificatesGallery /></section>

      <section id="formacao" className="section section--panel" aria-labelledby="education-title"><div className="shell education"><SectionTitle index="06 / FORMAÇÃO" title="My academic journey." accent="My academic" /><h3 id="education-title" className="sr-only">Formação acadêmica</h3><EducationList /></div></section>

      <section id="servicos" className="section shell services" aria-labelledby="services-title"><SectionTitle index="07 / SERVICES" title="How I can help." accent="How I" side="Pick a service to see what it covers." /><h3 id="services-title" className="sr-only">Services</h3><ServicesExplorer /></section>

      <section id="contato" className="section shell contact-section" aria-labelledby="contact-title"><SectionTitle index="08 / CONTACT" title="Let's talk." accent="Let's" side="Fill in the form and continue the conversation on WhatsApp." /><h3 id="contact-title" className="sr-only">Contact form</h3><ContactForm /></section>
    </main>
    <SiteFooter />
  </>
}

export default App
