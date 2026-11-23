import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Braces, Code2, Database, GitBranch, Layers3, Sparkles, Workflow, type LucideIcon } from 'lucide-react'
import { FaJava } from 'react-icons/fa6'
import { TbBrandCSharp, TbBrandCss3, TbBrandOpenai } from 'react-icons/tb'
import {
  SiBlender, SiBootstrap, SiClaude, SiClickup, SiElementor, SiGit,
  SiGithub, SiHtml5, SiJavascript, SiN8N, SiNodedotjs,
  SiNotion, SiPython, SiUnity, SiWordpress,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import { portfolio } from '../data/portfolio'

const canvaIcon = new URL('../assets/canva.ico', import.meta.url).href

// Ícone de cada categoria pelo id (não pela posição), para novas categorias não quebrarem a seção.
const categoryIcons: Record<string, LucideIcon> = {
  frontend: Code2, backend: Braces, ai: Sparkles, automation: Workflow,
  devops: GitBranch, database: Database, platforms: Layers3,
}
const toolIcons: Record<string, IconType | LucideIcon> = {
  HTML5: SiHtml5, CSS3: TbBrandCss3, JavaScript: SiJavascript, Bootstrap: SiBootstrap,
  WordPress: SiWordpress, Elementor: SiElementor, Python: SiPython, 'Node.js': SiNodedotjs,
  Java: FaJava, 'C#': TbBrandCSharp, Codex: TbBrandOpenai, Claude: SiClaude, n8n: SiN8N,
  Git: SiGit, GitHub: SiGithub, SQL: Database, MySQL: Database, Unity: SiUnity,
  Blender: SiBlender, Notion: SiNotion, ClickUp: SiClickup,
}
const toolColors: Record<string, string> = {
  HTML5: '#e34f26', CSS3: '#2f9bdf', JavaScript: '#f7df1e', Bootstrap: '#a585e8',
  WordPress: '#5bafd1', Elementor: '#e46598', Python: '#4c9ccc', 'Node.js': '#5fa04e',
  Java: '#ed8b30', 'C#': '#b47ac7', Codex: '#f5f5f5', Claude: '#d97757', n8n: '#ff91ac',
  Git: '#f03c2e', GitHub: '#f5f5f5', SQL: '#6cadd1', MySQL: '#6cadd1', Unity: '#f5f5f5',
  Blender: '#e87d0d', Notion: '#f5f5f5', ClickUp: '#9b8cf2',
}
// Categorias com mais ferramentas ocupam duas colunas no desktop (layout em bento).
const wide = new Set(['frontend', 'platforms'])

export function SkillsGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVisible(true); return }
    const observer = new IntersectionObserver(entries => {
      if (entries[0]?.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: .15 })
    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return <div className={`skills-grid ${visible ? 'skills-grid--visible' : ''}`} ref={gridRef}>
    {portfolio.skillAreas.map((area, index) => {
      const Icon = categoryIcons[area.id] ?? Layers3
      return <article key={area.id} className={`skill-card ${wide.has(area.id) ? 'skill-card--wide' : ''}`} style={{ '--i': index } as CSSProperties}>
        <header className="skill-card__header">
          <span className="skill-card__icon"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></span>
          <h3>{area.label}</h3>
          <span className="skill-card__count">{area.tools.length} {area.tools.length === 1 ? 'tool' : 'tools'}</span>
        </header>
        <ul className="skill-card__tools">
          {area.tools.map(tool => {
            const ToolIcon = toolIcons[tool]
            return <li key={tool} className="skill-chip" style={{ '--tool-icon-color': toolColors[tool] } as CSSProperties}>
              {tool === 'Canva' && <img src={canvaIcon} alt="" aria-hidden="true" />}
              {ToolIcon && <ToolIcon aria-hidden="true" />}
              <span>{tool}</span>
            </li>
          })}
        </ul>
      </article>
    })}
  </div>
}
