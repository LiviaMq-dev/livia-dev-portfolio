import { ChevronRight, Github, Instagram, Linkedin, Mail, Phone, type LucideIcon } from 'lucide-react'
import { Brand } from './Brand'
import { portfolio } from '../data/portfolio'

const { contacts } = portfolio
const menu = portfolio.navigation
const socials: { label: string; href: string; Icon: LucideIcon }[] = [
  { label: 'LinkedIn', href: contacts.linkedin, Icon: Linkedin },
  { label: 'GitHub', href: contacts.github, Icon: Github },
  { label: 'Instagram', href: contacts.instagram, Icon: Instagram },
]
const phoneLabel = contacts.whatsapp.replace(/^55(\d{2})(\d)(\d{4})(\d{4})$/, '($1) $2 $3 $4')

export function SiteFooter() {
  return <footer className="footer site-footer">
    <div className="shell site-footer__grid">
      <div className="site-footer__brand">
        <Brand />
        <p className="site-footer__tagline">Turning ideas into code.</p>
        <div className="site-footer__socials">
          {/* Sem URL cadastrada, o ícone aparece desabilitado em vez de parecer um link funcional. */}
          {socials.map(({ label, href, Icon }) => href
            ? <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon size={20} aria-hidden="true" /></a>
            : <button key={label} type="button" disabled aria-label={`${label}: coming soon`} title={`${label} coming soon`}><Icon size={20} aria-hidden="true" /></button>)}
        </div>
      </div>

      <nav className="site-footer__column" aria-labelledby="footer-menu-title">
        <h2 id="footer-menu-title">Menu</h2>
        <ul className="site-footer__links">
          {menu.map(item => <li key={item.href}><a href={item.href}><ChevronRight size={16} aria-hidden="true" />{item.label}</a></li>)}
        </ul>
      </nav>

      <div className="site-footer__column">
        <h2>Contact</h2>
        <ul className="site-footer__contacts">
          {contacts.email && <li><a href={`mailto:${contacts.email}`}><Mail size={18} aria-hidden="true" />{contacts.email}</a></li>}
          {contacts.whatsapp && <li><a href={`tel:+${contacts.whatsapp}`}><Phone size={18} aria-hidden="true" />{phoneLabel}</a></li>}
        </ul>
      </div>
    </div>

    <div className="site-footer__bottom">
      <p className="shell">© {new Date().getFullYear()} Livia.Dev — All rights reserved.</p>
    </div>
  </footer>
}
