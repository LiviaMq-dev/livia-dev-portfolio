import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { ArrowUpRight, BrainCircuit, Cable, Check, MonitorSmartphone, PanelsTopLeft, Workflow, Wrench, type LucideIcon } from 'lucide-react'
import { portfolio } from '../data/portfolio'

const icons: Record<string, LucideIcon> = { websites: MonitorSmartphone, portfolios: PanelsTopLeft, automation: Workflow, integrations: Cable, ai: BrainCircuit, tools: Wrench }

// Desktop: lista à esquerda e o detalhe do item ativo posicionado na coluna direita.
// Mobile: o mesmo detalhe aparece logo abaixo do item, como acordeão.
export function ServicesExplorer() {
  const [active, setActive] = useState(portfolio.services[0]?.id)
  const explorer = useRef<HTMLDivElement>(null)
  // No desktop o detalhe é absoluto: a altura do container acompanha o maior entre lista e painel.
  useLayoutEffect(() => {
    const root = explorer.current
    const detail = root?.querySelector<HTMLElement>('.service-item--active .service-item__detail')
    if (!root || !detail) return
    const fit = () => { root.style.minHeight = window.matchMedia('(min-width: 900px)').matches ? `${detail.offsetHeight}px` : '' }
    fit()
    const observer = new ResizeObserver(fit)
    observer.observe(detail)
    return () => observer.disconnect()
  }, [active])
  const selectOnHover = (id: string, pointerType: string) => {
    if (pointerType === 'mouse' && window.matchMedia('(min-width: 900px)').matches) setActive(id)
  }

  return <div className="services-explorer" ref={explorer}>
    <ul className="services-explorer__list">
      {portfolio.services.map(service => {
        const Icon = icons[service.id] ?? Wrench
        const isActive = service.id === active
        return <li key={service.id} className={`service-item ${isActive ? 'service-item--active' : ''}`}>
          <button type="button" className="service-item__trigger" aria-expanded={isActive} aria-controls={`service-${service.id}`} onClick={() => setActive(service.id)} onPointerEnter={event => selectOnHover(service.id, event.pointerType)}>
            <span className="service-item__icon"><Icon size={19} strokeWidth={1.6} aria-hidden="true" /></span>
            <span className="service-item__title"><span className="service-item__bracket" aria-hidden="true">&lt;</span>{service.title}<span className="service-item__bracket service-item__bracket--end" aria-hidden="true">/&gt;</span></span>
            <ArrowUpRight className="service-item__arrow" size={18} aria-hidden="true" />
          </button>
          <div id={`service-${service.id}`} className="service-item__detail" hidden={!isActive}>
            <Icon className="service-item__glyph" size={110} strokeWidth={0.8} aria-hidden="true" />
            <p className="service-item__summary">{service.summary}</p>
            <h4 className="service-item__heading">What’s included</h4>
            <ul className="service-item__includes">
              {service.includes.map((item, index) => <li key={item} style={{ '--i': index } as CSSProperties}><Check size={16} strokeWidth={2.2} aria-hidden="true" />{item}</li>)}
            </ul>
            <ul className="service-item__tools" aria-label="Tools">
              {service.tools.map(tool => <li key={tool}>{tool}</li>)}
            </ul>
            <a className="service-item__cta" href="#contato">Let’s talk about it <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </li>
      })}
    </ul>
  </div>
}
