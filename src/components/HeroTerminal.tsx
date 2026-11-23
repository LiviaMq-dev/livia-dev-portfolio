import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { snippets, tokenize, type Token } from './codeSnippets'

const ROWS = 11

// Linha do tempo de um trecho: digita o comando, dá "enter" e escreve o código caractere por caractere.
type Event = { command: number; code: number; delay: number }
function buildTimeline(command: string, code: string): Event[] {
  const events: Event[] = []
  for (let i = 1; i <= command.length; i += 1) events.push({ command: i, code: -1, delay: 45 + Math.random() * 70 })
  events.push({ command: command.length, code: 0, delay: 380 })
  for (let i = 1; i <= code.length; i += 1) events.push({ command: command.length, code: i, delay: code[i - 1] === '\n' ? 140 : 26 + Math.random() * 45 })
  return events
}

// Divide os tokens em linhas, cortando no último caractere já digitado.
function visibleLines(tokens: Token[], count: number) {
  const lines: Token[][] = [[]]
  let remaining = count
  for (const token of tokens) {
    if (remaining <= 0) break
    const text = token.text.slice(0, remaining)
    remaining -= text.length
    text.split('\n').forEach((part, index) => {
      if (index > 0) lines.push([])
      if (part) lines[lines.length - 1].push({ text: part, kind: token.kind })
    })
  }
  return lines
}

function Prompt() {
  return <><span className="term-user">livia@dev</span><span className="term-path">:~$</span> </>
}

export function HeroTerminal() {
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [index, setIndex] = useState(0)
  const snippet = snippets[index]
  const command = `cat ${snippet.file}`
  const tokens = useMemo(() => tokenize(snippet.code), [snippet])
  const timeline = useMemo(() => buildTimeline(command, snippet.code), [command, snippet])
  const [position, setPosition] = useState(() => (reduced ? timeline.length : 0))
  const [visible, setVisible] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  // Avança um evento por vez; ao terminar o trecho, segura a tela e passa para o próximo.
  useEffect(() => {
    if (reduced || !visible) return
    if (position >= timeline.length) {
      const timer = window.setTimeout(() => { setIndex(value => (value + 1) % snippets.length); setPosition(0) }, 3000)
      return () => window.clearTimeout(timer)
    }
    const timer = window.setTimeout(() => setPosition(value => value + 1), position === 0 ? 700 : timeline[position].delay)
    return () => window.clearTimeout(timer)
  }, [position, visible, reduced, timeline])

  const current = position > 0 ? timeline[position - 1] : { command: 0, code: -1 }
  const finished = position >= timeline.length
  const rows: { content: ReactNode; cursor: boolean }[] = [
    { content: <><Prompt /><span className="term-command">{command.slice(0, current.command)}</span></>, cursor: current.code < 0 },
  ]
  if (current.code >= 0) {
    const lines = visibleLines(tokens, current.code)
    lines.forEach((line, lineIndex) => rows.push({
      content: line.map((token, tokenIndex) => <span key={tokenIndex} className={`tok-${token.kind}`}>{token.text}</span>),
      cursor: !finished && lineIndex === lines.length - 1,
    }))
  }
  if (finished) rows.push({ content: <Prompt />, cursor: true })

  return <div className="hero-terminal" ref={ref} aria-hidden="true">
    <div className="hero-terminal__bar">
      <span className="hero-terminal__title">livia@dev: ~</span>
      <span className="hero-terminal__controls"><span /><span /><span /></span>
    </div>
    <div className="hero-terminal__body">
      {Array.from({ length: ROWS }, (_, row) => <div className="hero-terminal__line" key={row}>
        {rows[row]?.content}
        {rows[row]?.cursor && <span className="hero-terminal__cursor" />}
      </div>)}
    </div>
  </div>
}
