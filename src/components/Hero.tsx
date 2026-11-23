import { useEffect, useState } from 'react'
import { Download, Github, Instagram, Linkedin } from 'lucide-react'

const lines = [
  "Hi, I'm Livia",
  'Full Stack',
  'Developer',
  'Learning, developing and evolving through real projects in the technology area.',
] as const
const starts = [0, lines[0].length, lines[0].length + lines[1].length, lines[0].length + lines[1].length + lines[2].length]
const total = lines.reduce((sum, line) => sum + line.length, 0)

function TypedLine({ index, progress }: { index: number; progress: number }) {
  const text = lines[index]
  const count = Math.max(0, Math.min(text.length, progress - starts[index]))
  const active = progress >= starts[index] && progress < starts[index] + text.length
  return <span className="typewriter__line" aria-hidden="true">
    <span className="typewriter__ghost">{text}</span>
    <span className="typewriter__text">{text.slice(0, count)}{active && <span className="typewriter__caret" />}</span>
  </span>
}

export function Hero() {
  const [progress, setProgress] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? total : 0
  )

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return
    let current = 0
    let timer = 0
    const advance = () => {
      current += 1
      setProgress(current)
      if (current < total) {
        const pause = starts.slice(1).includes(current) ? 340 : 0
        const speed = current >= starts[3] ? 30 : 68
        timer = window.setTimeout(advance, speed + pause)
      }
    }
    const onPreferenceChange = () => {
      if (media.matches) { window.clearTimeout(timer); setProgress(total) }
    }
    timer = window.setTimeout(advance, 320)
    media.addEventListener('change', onPreferenceChange)
    return () => { window.clearTimeout(timer); media.removeEventListener('change', onPreferenceChange) }
  }, [])

  return <section className="hero shell" id="inicio" aria-labelledby="hero-title">
    <div className="hero-glow" aria-hidden="true"><span /><span /><span /></div>
    <div className="hero__copy">
      <p className="hero__intro"><span className="sr-only">{lines[0]}</span><TypedLine index={0} progress={progress} /></p>
      <h1 id="hero-title"><span className="sr-only">Full Stack Developer</span><TypedLine index={1} progress={progress} /><TypedLine index={2} progress={progress} /></h1>
      <p className="hero__lead"><span className="sr-only">{lines[3]}</span><TypedLine index={3} progress={progress} /></p>
      <div className="hero__actions" aria-label="Currículo e redes sociais">
        <button className="hero__cv" type="button" disabled title="Currículo ainda não disponível">Download CV <Download size={21} aria-hidden="true" /></button>
        <span className="hero__socials">
          <button type="button" disabled aria-label="LinkedIn: link em breve" title="LinkedIn em breve"><Linkedin size={24} aria-hidden="true" /></button>
          <button type="button" disabled aria-label="GitHub: link em breve" title="GitHub em breve"><Github size={24} aria-hidden="true" /></button>
          <button type="button" disabled aria-label="Instagram: link em breve" title="Instagram em breve"><Instagram size={24} aria-hidden="true" /></button>
        </span>
      </div>
      <p className="hero__availability">Links e currículo serão ativados quando você fornecer os endereços e o arquivo.</p>
    </div>
  </section>
}
