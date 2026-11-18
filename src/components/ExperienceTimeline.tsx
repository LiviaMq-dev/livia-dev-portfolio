import { useEffect, useRef } from 'react'
import { portfolio } from '../data/portfolio'

export function ExperienceTimeline() {
  const listRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    const list = listRef.current
    if (!list || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const items = Array.from(list.querySelectorAll<HTMLElement>('.experience-item'))
    const markers = items.map(item => item.querySelector<HTMLElement>('.experience-item__marker'))
    const descriptions = items.map(item => item.querySelector<HTMLElement>('.experience-item__description'))
    let frame = 0

    const update = () => {
      frame = 0
      const first = markers[0]
      const last = markers[markers.length - 1]
      if (!first || !last) return

      const firstY = first.getBoundingClientRect().top + first.offsetHeight / 2
      const lastY = last.getBoundingClientRect().top + last.offsetHeight / 2
      const threshold = window.innerHeight * .72
      const progress = Math.max(0, Math.min(1, (threshold - firstY) / Math.max(1, lastY - firstY)))

      list.style.setProperty('--timeline-length', `${lastY - firstY}px`)
      list.style.setProperty('--timeline-progress', String(progress))
      items.forEach((item, index) => {
        if (markers[index] && markers[index].getBoundingClientRect().top <= threshold) {
          item.classList.add('is-revealed')
        }
        if (descriptions[index] && descriptions[index].getBoundingClientRect().top <= window.innerHeight * .8) {
          item.classList.add('is-description-revealed')
        }
      })
    }

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    list.classList.add('experience-list--motion')
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.cancelAnimationFrame(frame)
      list.classList.remove('experience-list--motion')
    }
  }, [])

  return <ol className="experience-list" ref={listRef}>
    {portfolio.experience.map(item => <li className="experience-item" key={`${item.company}-${item.period}`}>
      <span className="experience-item__marker" aria-hidden="true" />
      <div className="experience-item__content">
        <div className="experience-item__topline">
          <h3>{item.role}</h3>
          <span className="experience-item__period">{item.period}</span>
        </div>
        <p className="experience-item__company">{item.company}</p>
        <p className="experience-item__description">{item.description}</p>
      </div>
    </li>)}
  </ol>
}
