import { useState, type CSSProperties } from 'react'
import { Braces, ChevronDown, Code2, Database, GitBranch, Layers3, Sparkles, Workflow } from 'lucide-react'
import { FaJava } from 'react-icons/fa6'
import { TbBrandCSharp, TbBrandCss3, TbBrandOpenai } from 'react-icons/tb'
import {
  SiBlender, SiBootstrap, SiClaude, SiClickup, SiElementor, SiGit,
  SiGithub, SiHtml5, SiJavascript, SiN8N, SiNodedotjs,
  SiNotion, SiPython, SiUnity, SiWordpress,
} from 'react-icons/si'
import { portfolio } from '../data/portfolio'

const canvaIcon = new URL('../assets/canva.ico', import.meta.url).href

const icons = [Code2, Braces, Sparkles, Workflow, GitBranch, Database, Layers3]
const toolIcons = {
  HTML5: SiHtml5,
  CSS3: TbBrandCss3,
  JavaScript: SiJavascript,
  Bootstrap: SiBootstrap,
  WordPress: SiWordpress,
  Elementor: SiElementor,
  Python: SiPython,
  'Node.js': SiNodedotjs,
  Java: FaJava,
  'C#': TbBrandCSharp,
  Codex: TbBrandOpenai,
  Claude: SiClaude,
  n8n: SiN8N,
  Git: SiGit,
  GitHub: SiGithub,
  SQL: Database,
  MySQL: Database,
  Unity: SiUnity,
  Blender: SiBlender,
  Notion: SiNotion,
  ClickUp: SiClickup,
}
const toolColors: Record<string, string> = {
  HTML5: '#e34f26',
  CSS3: '#2f9bdf',
  JavaScript: '#f7df1e',
  Bootstrap: '#a585e8',
  WordPress: '#5bafd1',
  Elementor: '#e46598',
  Python: '#4c9ccc',
  'Node.js': '#5fa04e',
  Java: '#ed8b30',
  'C#': '#b47ac7',
  Codex: '#f5f5f5',
  Claude: '#d97757',
  n8n: '#ff91ac',
  Git: '#f03c2e',
  GitHub: '#f5f5f5',
  SQL: '#6cadd1',
  MySQL: '#6cadd1',
  Unity: '#f5f5f5',
  Blender: '#e87d0d',
  Notion: '#f5f5f5',
  ClickUp: '#9b8cf2',
}

export function SkillsAccordion() {
  const [expanded, setExpanded] = useState<string[]>([])

  function toggle(id: string) {
    setExpanded(current => current.includes(id)
      ? current.filter(item => item !== id)
      : [...current, id])
  }

  return <div className="skills-accordion">
    {portfolio.skillAreas.map((area, index) => {
      const Icon = icons[index]
      const isExpanded = expanded.includes(area.id)
      const panelId = `skill-panel-${area.id}`
      return <div className={`skill-category${isExpanded ? ' skill-category--open' : ''}`} key={area.id}>
        <button className="skill-category__trigger" type="button" aria-expanded={isExpanded} aria-controls={panelId} onClick={() => toggle(area.id)}>
          <span className="skill-category__number">0{index + 1}</span>
          <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
          <span className="skill-category__label">{area.label}</span>
          <ChevronDown className="skill-category__chevron" size={22} strokeWidth={1.5} aria-hidden="true" />
        </button>
        <div className="skill-category__panel" id={panelId} aria-hidden={!isExpanded}>
          <div className="skill-category__panel-inner">
            <ul className="skill-category__tools">
              {area.tools.map(tool => {
                const ToolIcon = toolIcons[tool as keyof typeof toolIcons]
                return <li key={tool} className="skill-category__tool" style={{ '--tool-icon-color': toolColors[tool] } as CSSProperties}>
                  {tool === 'Canva' && <img src={canvaIcon} alt="" aria-hidden="true" />}
                  {ToolIcon && <ToolIcon aria-hidden="true" />}
                  <span>{tool}</span>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    })}
  </div>
}
