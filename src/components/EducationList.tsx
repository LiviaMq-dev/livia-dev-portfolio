import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { BookOpen, CalendarDays, CircleCheck, Gamepad2, GraduationCap, School, type LucideIcon } from 'lucide-react'
import { portfolio } from '../data/portfolio'

function years(period: string) {
  const [start, end = start] = (period.match(/\d{4}/g) ?? []).map(Number)
  return { start, end }
}

// Ícone escolhido pelo tipo de formação; cursos sem correspondência usam um livro.
function iconFor(qualification: string, program: string): LucideIcon {
  if (/jogos|games/i.test(program)) return Gamepad2
  if (/tecn[oó]logo|gradua|bacharel|licenciatura/i.test(qualification)) return GraduationCap
  return BookOpen
}

export function EducationList() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVisible(true); return }
    const observer = new IntersectionObserver(entries => {
      if (entries[0]?.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: .25 })
    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  const items = portfolio.education.map(item => ({ ...item, ...years(item.period), done: /conclu/i.test(item.status) }))
  const first = Math.min(...items.map(item => item.start))
  const last = Math.max(...items.map(item => item.end))
  const span = last - first + 1
  const ticks = Array.from({ length: span }, (_, index) => first + index)
  const chronological = [...items].sort((a, b) => a.start - b.start)

  return <div className={`education-journey ${visible ? 'education-journey--visible' : ''}`} ref={rootRef}>
    <div className="education-axis" aria-hidden="true">
      <div className="education-axis__ticks">
        {ticks.map(year => <span key={year} style={{ '--x': (year - first) / span } as CSSProperties}>{year}</span>)}
      </div>
      <div className="education-axis__tracks">
        {chronological.map((item, index) => <div key={item.program} className={`education-axis__bar ${item.done ? '' : 'education-axis__bar--current'}`} style={{ '--x': (item.start - first) / span, '--w': (item.end - item.start + 1) / span, '--i': index } as CSSProperties}>
          <span>{item.program}</span>
        </div>)}
      </div>
    </div>

    <ol className="education-cards">
      {items.map((item, index) => {
        const Icon = iconFor(item.qualification, item.program)
        return <li key={item.program} className={`education-card ${item.done ? '' : 'education-card--current'}`} style={{ '--i': index } as CSSProperties}>
          <div className="education-card__top">
            <span className="education-card__icon"><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></span>
            <span className="education-card__qualification">{item.qualification}</span>
            <span className={`education-card__status ${item.done ? 'education-card__status--done' : ''}`}>
              {item.done ? <CircleCheck size={14} aria-hidden="true" /> : <span className="education-card__pulse" aria-hidden="true" />}
              {item.status}
            </span>
          </div>
          <h3>{item.program}</h3>
          <ul className="education-card__facts">
            <li><School size={16} aria-hidden="true" />{item.institution}</li>
            <li><CalendarDays size={16} aria-hidden="true" /><span className="education-card__period">{item.period}</span></li>
          </ul>
        </li>
      })}
    </ol>
  </div>
}
