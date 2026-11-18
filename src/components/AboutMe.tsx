import { ChevronsRight } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export function AboutMe() {
  return <section className="about-me" id="sobre" aria-labelledby="about-title">
    <div className="shell">
      <span className="about-me__label">01 / ABOUT ME</span>
      <div className="about-me__inner">
        <div className="about-me__visual" aria-hidden="true"><span>Espaço para imagem</span></div>
        <div className="about-me__copy">
          <div className="about-me__heading">
            <h2 id="about-title"><span>About</span> Me</h2>
            <span className="about-me__rule" aria-hidden="true" />
          </div>
          <div className="about-me__content">
            {portfolio.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            <a className="about-me__contact" href="#contato">Let's Talk <ChevronsRight size={20} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
}
