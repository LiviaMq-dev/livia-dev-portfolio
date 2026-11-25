import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { useI18n } from '../i18n/I18nProvider'

export function ProjectsShowcase() {
  const { t, l } = useI18n()
  const projects = portfolio.projects
  const listRef = useRef<HTMLDivElement>(null)
  const thumbnailsRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [selected, setSelected] = useState<number | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [activeImage, setActiveImage] = useState(0)
  const [scrollLimits, setScrollLimits] = useState({ prev: false, next: false })
  const highlighted = hovered ?? selected

  const updateScrollLimits = () => {
    const list = listRef.current
    if (!list) return
    const maxScroll = list.scrollWidth - list.clientWidth
    setScrollLimits({ prev: list.scrollLeft > 2, next: list.scrollLeft < maxScroll - 2 })
  }

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (activeProject !== null && !dialog.open) dialog.showModal()
    if (activeProject === null && dialog.open) dialog.close()
  }, [activeProject])

  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const observer = new ResizeObserver(updateScrollLimits)
    observer.observe(list)
    updateScrollLimits()
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const strip = thumbnailsRef.current
    const thumbnail = strip?.children[activeImage] as HTMLElement | undefined
    if (!strip || !thumbnail) return
    const left = thumbnail.offsetLeft - (strip.clientWidth - thumbnail.clientWidth) / 2
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    strip.scrollTo({ left, behavior: reduceMotion ? 'instant' : 'smooth' })
  }, [activeImage, activeProject])

  const moveCarousel = (direction: -1 | 1) => {
    const list = listRef.current
    if (!list) return
    const cards = list.children
    const step = cards.length > 1
      ? (cards[1] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft
      : list.clientWidth
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    list.scrollBy({ left: direction * step, behavior: reduceMotion ? 'instant' : 'smooth' })
  }

  const selectProject = (index: number) => {
    setSelected(index)
    const card = listRef.current?.children[index]
    if (card instanceof HTMLElement) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      card.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest', inline: 'center' })
    }
  }

  const updateSelectedOnScroll = () => {
    const list = listRef.current
    if (!list || list.scrollWidth <= list.clientWidth + 1) return
    const center = list.getBoundingClientRect().left + list.clientWidth / 2
    const cards = Array.from(list.children) as HTMLElement[]
    const nearest = cards.reduce((best, card, index) => {
      const rect = card.getBoundingClientRect()
      const distance = Math.abs(rect.left + rect.width / 2 - center)
      return distance < best.distance ? { index, distance } : best
    }, { index: 0, distance: Infinity })
    setSelected(nearest.index)
  }

  const projectInDialog = activeProject === null ? null : projects[activeProject]
  const projectImages = projectInDialog
    ? [{ src: projectInDialog.image, alt: l(projectInDialog.imageAlt) }, ...(projectInDialog.gallery ?? []).map(image => ({ src: image.src, alt: l(image.alt) }))]
    : []

  const openProject = (index: number) => {
    setActiveImage(0)
    setActiveProject(index)
  }

  return <div className="project-showcase">
    <div className="project-showcase__track" ref={listRef} onScroll={() => { updateSelectedOnScroll(); updateScrollLimits() }}>
      {projects.map((project, index) => <article
        className={`project-card${highlighted === index ? ' project-card--selected' : ''}`}
        key={project.image}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        onFocusCapture={() => setHovered(index)}
        onBlurCapture={event => {
          if (!event.currentTarget.contains(event.relatedTarget)) setHovered(null)
        }}
        onClick={() => setSelected(index)}
      >
        <div className="project-card__preview">
          <img src={project.image} alt={l(project.imageAlt)} loading="lazy" />
        </div>
        <div className="project-card__info">
          <span className="project-card__period">{l(project.period)}</span>
          <h3>{l(project.title)}</h3>
          <p>{l(project.summary)}</p>
          <button type="button" onClick={() => openProject(index)}>{t('projects.details')} <ArrowUpRight size={15} aria-hidden="true" /></button>
        </div>
      </article>)}
    </div>
    <div className="project-showcase__controls">
      <button className="project-showcase__arrow" type="button" aria-label={t('projects.prev')} disabled={!scrollLimits.prev} onClick={() => moveCarousel(-1)}><ChevronLeft size={20} aria-hidden="true" /></button>
      <div className="project-showcase__dots" aria-label={t('projects.select')}>
        {projects.map((project, index) => <button key={project.image} type="button" className={highlighted === index ? 'is-active' : ''} aria-label={t('projects.selectOne', { name: l(project.title) })} aria-pressed={highlighted === index} onClick={() => selectProject(index)} />)}
      </div>
      <button className="project-showcase__arrow" type="button" aria-label={t('projects.next')} disabled={!scrollLimits.next} onClick={() => moveCarousel(1)}><ChevronRight size={20} aria-hidden="true" /></button>
    </div>

    <dialog className="project-dialog" ref={dialogRef} aria-labelledby="project-dialog-title" onClose={() => setActiveProject(null)}>
      {projectInDialog && <>
        <button className="project-dialog__close" type="button" aria-label={t('projects.close')} onClick={() => dialogRef.current?.close()}><X size={22} /></button>
        <div className="project-dialog__gallery">
          <img className="project-dialog__image" src={projectImages[activeImage].src} alt={projectImages[activeImage].alt} draggable={false} />
          {projectImages.length > 1 && <>
            <button className="project-dialog__gallery-arrow project-dialog__gallery-arrow--prev" type="button" aria-label={t('projects.prevImage')} onClick={() => setActiveImage(index => (index - 1 + projectImages.length) % projectImages.length)}><ChevronLeft size={20} aria-hidden="true" /></button>
            <button className="project-dialog__gallery-arrow project-dialog__gallery-arrow--next" type="button" aria-label={t('projects.nextImage')} onClick={() => setActiveImage(index => (index + 1) % projectImages.length)}><ChevronRight size={20} aria-hidden="true" /></button>
            <span className="project-dialog__gallery-count">{activeImage + 1} / {projectImages.length}</span>
          </>}
        </div>
        {projectImages.length > 1 && <div className="project-dialog__thumbnails" ref={thumbnailsRef} aria-label={t('projects.images')}>
          {projectImages.map((image, index) => <button key={image.src} className={activeImage === index ? 'is-active' : ''} type="button" aria-label={t('projects.imageOf', { index: index + 1, total: projectImages.length })} aria-pressed={activeImage === index} onClick={() => setActiveImage(index)}><img src={image.src} alt="" loading="lazy" draggable={false} /></button>)}
        </div>}
        <div className="project-dialog__body">
          <span className="project-dialog__period">{l(projectInDialog.period)}</span>
          <h2 id="project-dialog-title">{l(projectInDialog.title)}</h2>
          {projectInDialog.details.map(paragraph => <p key={l(paragraph)}>{l(paragraph)}</p>)}
          <ul className="project-dialog__technologies" aria-label={t('projects.tech')}>
            {projectInDialog.technologies.map(technology => <li key={l(technology)}>{l(technology)}</li>)}
          </ul>
          {projectInDialog.href && <a className="project-dialog__link" href={projectInDialog.href} target="_blank" rel="noopener noreferrer">{t('projects.open')} <ArrowUpRight size={16} aria-hidden="true" /></a>}
        </div>
      </>}
    </dialog>
  </div>
}
