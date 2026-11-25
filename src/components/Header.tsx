import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Brand } from './Brand'
import { ThemeToggle } from './ThemeToggle'
import { LangToggle } from './LangToggle'
import { useI18n } from '../i18n/I18nProvider'
import { portfolio } from '../data/portfolio'

export function Header() {
  const { t, l } = useI18n()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#inicio')
  const [moreOpen, setMoreOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const moreRef = useRef<HTMLDivElement>(null)
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
    if (!moreOpen) return
    const closeOutside = (event: PointerEvent) => {
      if (!moreRef.current?.contains(event.target as Node)) setMoreOpen(false)
    }
    document.addEventListener('pointerdown', closeOutside)
    return () => document.removeEventListener('pointerdown', closeOutside)
  }, [moreOpen])

  useEffect(() => {
    if (open || moreOpen) setHidden(false)
    let lastY = window.scrollY
    let frame = 0
    const updateVisibility = () => {
      frame = 0
      const currentY = window.scrollY
      const keyboardFocusInHeader = document.activeElement?.matches(':focus-visible') && headerRef.current?.contains(document.activeElement)
      if (currentY <= 120 || open || moreOpen || keyboardFocusInHeader) {
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
      <nav className="desktop-nav" aria-label={t('nav.main')}>
        {primary.map(item => <a key={item.href} href={item.href} aria-current={active === item.href ? 'location' : undefined}>{l(item.label)}</a>)}
        <div ref={moreRef} className={`nav-more ${moreOpen ? 'nav-more--open' : ''}`}><button type="button" aria-expanded={moreOpen} aria-controls="nav-more-panel" onClick={() => setMoreOpen(!moreOpen)}>{t('nav.more')} <span aria-hidden="true">⌄</span></button><div id="nav-more-panel" className="nav-more__panel">{secondary.map(item => <a key={item.href} href={item.href} onClick={() => setMoreOpen(false)}>{l(item.label)}</a>)}</div></div>
      </nav>
      <a className="header-contact" href="#contato">{t('nav.cta')} <ArrowUpRight size={15} aria-hidden="true" /></a>
      <LangToggle />
      <ThemeToggle />
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? t('nav.close') : t('nav.open')}>{open ? <X /> : <Menu />}</button>
    </div>
    <nav id="mobile-menu" className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`} aria-label={t('nav.mobile')} inert={!open}>
      {portfolio.navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{l(item.label)}</a>)}
    </nav>
  </header>
}
