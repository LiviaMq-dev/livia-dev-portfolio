import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Brand } from './Brand'
import { portfolio } from '../data/portfolio'

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#inicio')
  const [moreOpen, setMoreOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const primary = [0, 1, 5, 2, 4, 8].map(index => portfolio.navigation[index])
  const secondary = [3, 6, 7].map(index => portfolio.navigation[index])

  useEffect(() => {
    const update = () => {
      const current = [...portfolio.navigation].reverse().find(item => {
        const section = document.querySelector(item.href)
        return section && section.getBoundingClientRect().top <= 150
      })
      setActive(current?.href || '#inicio')
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  useEffect(() => {
    if (!open && !moreOpen) return
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); setMoreOpen(false) } }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [open, moreOpen])

  useEffect(() => {
    if (open || moreOpen) setHidden(false)
    let lastY = window.scrollY
    let frame = 0
    const updateVisibility = () => {
      frame = 0
      const currentY = window.scrollY
      if (currentY <= 120 || open || moreOpen || headerRef.current?.contains(document.activeElement)) {
        setHidden(false)
        lastY = currentY
        return
      }
      if (Math.abs(currentY - lastY) < 8) return
      setHidden(currentY > lastY)
      lastY = currentY
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateVisibility)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [open, moreOpen])

  return <header ref={headerRef} className={`site-header ${hidden ? 'site-header--hidden' : ''}`} onFocusCapture={() => setHidden(false)}>
    <div className="header-inner shell">
      <Brand compact />
      <nav className="desktop-nav" aria-label="Navegação principal">
        {primary.map(item => <a key={item.href} href={item.href} aria-current={active === item.href ? 'location' : undefined}>{item.label}</a>)}
        <div className={`nav-more ${moreOpen ? 'nav-more--open' : ''}`}><button type="button" aria-expanded={moreOpen} aria-controls="nav-more-panel" onClick={() => setMoreOpen(!moreOpen)}>Mais <span aria-hidden="true">⌄</span></button><div id="nav-more-panel" className="nav-more__panel">{secondary.map(item => <a key={item.href} href={item.href} onClick={() => setMoreOpen(false)}>{item.label}</a>)}</div></div>
      </nav>
      <a className="header-contact" href="#contato">Fale comigo <ArrowUpRight size={15} aria-hidden="true" /></a>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button>
    </div>
    <nav id="mobile-menu" className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`} aria-label="Navegação para celular" inert={!open}>
      {portfolio.navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
    </nav>
  </header>
}
