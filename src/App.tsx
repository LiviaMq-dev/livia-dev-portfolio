import { Asterisk, Braces, Code2, Database, GitBranch, Layers3, Mail, Sparkles, Workflow } from 'lucide-react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Brand } from './components/Brand'
import { portfolio } from './data/portfolio'

const skillIcons = [Code2, Braces, Sparkles, Workflow, GitBranch, Database, Layers3]
const marqueeItems = ['DEVELOPMENT', 'ARTIFICIAL INTELLIGENCE', 'AUTOMATIONS', 'TECHNOLOGY']

function SectionTitle({ index, title, side }: { index: string; title: string; side?: string }) {
  return <div className="section-title"><span className="section-title__index">{index}</span><h2>{title}</h2>{side && <p>{side}</p>}</div>
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

      <section id="sobre" className="section shell about" aria-labelledby="about-title">
        <SectionTitle index="01 / SOBRE" title="Uma identidade em código." side="O conteúdo pessoal desta seção será completado com a sua história." />
        <div className="about__grid"><div className="about__statement"><span className="asterisk"><Asterisk size={54} strokeWidth={1} /></span><h3 id="about-title">Curiosidade técnica.<br />Olhar humano.</h3></div><div className="about__body"><p>Esta é a base visual de um portfólio que vai apresentar sua trajetória, interesses, áreas de atuação e objetivos profissionais.</p><p>Os textos biográficos finais dependerão das informações fornecidas por você. Assim, a narrativa permanece autêntica e fácil de atualizar.</p><span className="edit-label">Texto provisório · editar em próxima etapa</span></div></div>
      </section>

      <section id="habilidades" className="section section--panel" aria-labelledby="skills-title"><div className="shell"><SectionTitle index="02 / HABILIDADES" title="Um mapa de possibilidades." side="Categorias iniciais, sem afirmar domínio ou experiência." /><h3 id="skills-title" className="sr-only">Áreas de habilidades</h3><div className="skills-list">{portfolio.skillAreas.map((area, index) => { const Icon = skillIcons[index]; return <div className="skill-row" key={area}><span className="skill-row__num">0{index + 1}</span><Icon size={24} strokeWidth={1.5} aria-hidden="true" /><span>{area}</span><span className="skill-row__state">A definir</span></div> })}</div></div></section>

      <section id="experiencia" className="section shell timeline-section" aria-labelledby="experience-title"><SectionTitle index="03 / EXPERIÊNCIA" title="Trajetória profissional." side="Uma linha do tempo pronta para receber informações reais." /><h3 id="experience-title" className="sr-only">Experiência profissional</h3><div className="timeline"><span className="timeline__dot" /><Pending kind="Aguardando dados" title="Experiências serão adicionadas aqui" body="Cargo, empresa, período, responsabilidades e resultados entrarão nesta linha do tempo quando você enviar as informações." /></div></section>

      <section id="projetos" className="section section--panel projects" aria-labelledby="projects-title"><div className="shell"><SectionTitle index="04 / PROJETOS" title="Projetos, com contexto." side="Espaço preparado para imagens, tecnologias e links verificáveis." /><h3 id="projects-title" className="sr-only">Projetos</h3><div className="project-layout"><div className="project-art" aria-hidden="true"><div className="project-art__window"><span /><span /><span /></div><span className="project-art__slash">/</span><span className="project-art__text">Seu próximo<br />projeto aqui.</span></div><Pending kind="Vitrine de projetos" title="Histórias reais merecem destaque" body="A estrutura de dados aceita nome, descrição, imagem, tecnologias, funcionalidades e links. Nenhum projeto fictício foi publicado." /></div></div></section>

      <section id="certificacoes" className="section shell credentials" aria-labelledby="cert-title"><SectionTitle index="05 / CURSOS E CERTIFICAÇÕES" title="Aprendizado documentado." side="Registros e filtros serão ativados com os certificados reais." /><h3 id="cert-title" className="sr-only">Cursos e certificações</h3><div className="credentials__grid"><Pending title="Cursos e certificados" body="Nome, instituição, carga horária, conclusão e link de verificação aparecerão aqui." /><div className="credential-graphic" aria-hidden="true"><div className="credential-graphic__inner"><Asterisk size={48} strokeWidth={1} /><span>aprendizado<br />contínuo</span></div></div></div></section>

      <section id="formacao" className="section section--panel" aria-labelledby="education-title"><div className="shell education"><SectionTitle index="06 / FORMAÇÃO" title="A base da jornada." side="Composição pronta para curso, instituição e período." /><h3 id="education-title" className="sr-only">Formação acadêmica</h3><div className="education__slot"><span className="education__vertical">EDUCAÇÃO</span><Pending kind="Aguardando dados acadêmicos" title="Formação será apresentada aqui" body="Envie instituição, curso, grau, período e situação para montar a seção sem suposições." /></div></div></section>

      <section id="servicos" className="section shell services" aria-labelledby="services-title"><SectionTitle index="07 / SERVIÇOS" title="Ideias para trabalhar juntos." side="Possibilidades iniciais a confirmar antes de divulgar como oferta." /><h3 id="services-title" className="sr-only">Serviços possíveis</h3><div className="services__grid">{portfolio.services.map((service, index) => <div className="service" key={service}><span>0{index + 1}</span><h3>{service}</h3><span className="service__provisional">A confirmar</span></div>)}</div></section>

      <section id="contato" className="contact" aria-labelledby="contact-title"><div className="shell contact__inner"><div><span className="contact__label">08 / CONTATO</span><h2 id="contact-title">O próximo passo<br />começa por aqui<span>.</span></h2><p>Os canais de contato serão adicionados quando você definir quais deseja publicar.</p></div><div className="contact__aside"><Mail size={30} strokeWidth={1.3} /><span>E-mail, GitHub, LinkedIn e outros canais</span><strong>Em breve</strong></div></div></section>
    </main>
    <footer className="footer"><div className="shell footer__inner"><Brand compact /><span>© {new Date().getFullYear()} Livia.Dev</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>
  </>
}

export default App
