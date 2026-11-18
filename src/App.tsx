import { Asterisk, Mail } from 'lucide-react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutMe } from './components/AboutMe'
import { SkillsAccordion } from './components/SkillsAccordion'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { ProjectsShowcase } from './components/ProjectsShowcase'
import { Brand } from './components/Brand'
import { portfolio } from './data/portfolio'

const marqueeItems = ['DEVELOPMENT', 'ARTIFICIAL INTELLIGENCE', 'AUTOMATIONS', 'TECHNOLOGY']

function SectionTitle({ index, title, side, accent }: { index: string; title: string; side?: string; accent?: string }) {
  return <div className="section-title"><span className="section-title__index">{index}</span><h2>{accent ? <><span className="section-title__accent">{accent}</span>{title.slice(accent.length)}</> : title}</h2>{side && <p>{side}</p>}</div>
}

function Pending({ title, body, kind }: { title: string; body: string; kind?: string }) {
  return <div className="pending"><span className="pending__mark"><Asterisk size={20} strokeWidth={1.5} /></span><div><span className="pending__kind">{kind || 'Conteúdo em preparação'}</span><h3>{title}</h3><p>{body}</p></div></div>
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

      <section id="habilidades" className="section section--panel" aria-labelledby="skills-title"><div className="shell"><SectionTitle index="02 / SKILLS" title="Technologies and tools." accent="Technologies" /><h3 id="skills-title" className="sr-only">Skills and technologies</h3><SkillsAccordion /></div></section>

      <section id="experiencia" className="section shell timeline-section" aria-labelledby="experience-title"><SectionTitle index="03 / EXPERIÊNCIA" title="Professional journey." accent="Professional" /><h3 id="experience-title" className="sr-only">Experiência profissional</h3><ExperienceTimeline /></section>

      <section id="projetos" className="section section--panel projects" aria-labelledby="projects-title"><div className="shell"><SectionTitle index="04 / PROJETOS" title="My projects" accent="My" /><h3 id="projects-title" className="sr-only">Projetos</h3><ProjectsShowcase /></div></section>

      <section id="certificacoes" className="section shell credentials" aria-labelledby="cert-title"><SectionTitle index="05 / CURSOS E CERTIFICAÇÕES" title="Aprendizado documentado." side="Registros e filtros serão ativados com os certificados reais." /><h3 id="cert-title" className="sr-only">Cursos e certificações</h3><div className="credentials__grid"><Pending title="Cursos e certificados" body="Nome, instituição, carga horária, conclusão e link de verificação aparecerão aqui." /><div className="credential-graphic" aria-hidden="true"><div className="credential-graphic__inner"><Asterisk size={48} strokeWidth={1} /><span>aprendizado<br />contínuo</span></div></div></div></section>

      <section id="formacao" className="section section--panel" aria-labelledby="education-title"><div className="shell education"><SectionTitle index="06 / FORMAÇÃO" title="A base da jornada." side="Composição pronta para curso, instituição e período." /><h3 id="education-title" className="sr-only">Formação acadêmica</h3><div className="education__slot"><span className="education__vertical">EDUCAÇÃO</span><Pending kind="Aguardando dados acadêmicos" title="Formação será apresentada aqui" body="Envie instituição, curso, grau, período e situação para montar a seção sem suposições." /></div></div></section>

      <section id="servicos" className="section shell services" aria-labelledby="services-title"><SectionTitle index="07 / SERVIÇOS" title="Ideias para trabalhar juntos." side="Possibilidades iniciais a confirmar antes de divulgar como oferta." /><h3 id="services-title" className="sr-only">Serviços possíveis</h3><div className="services__grid">{portfolio.services.map((service, index) => <div className="service" key={service}><span>0{index + 1}</span><h3>{service}</h3><span className="service__provisional">A confirmar</span></div>)}</div></section>

      <section id="contato" className="contact" aria-labelledby="contact-title"><div className="shell contact__inner"><div><span className="contact__label">08 / CONTATO</span><h2 id="contact-title">O próximo passo<br />começa por aqui<span>.</span></h2><p>Os canais de contato serão adicionados quando você definir quais deseja publicar.</p></div><div className="contact__aside"><Mail size={30} strokeWidth={1.3} /><span>E-mail, GitHub, LinkedIn e outros canais</span><strong>Em breve</strong></div></div></section>
    </main>
    <footer className="footer"><div className="shell footer__inner"><Brand compact /><span>© {new Date().getFullYear()} Livia.Dev</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>
  </>
}

export default App
