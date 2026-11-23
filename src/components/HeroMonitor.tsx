import { useEffect, useMemo, useRef, useState } from 'react'
import { snippets, tokenize, type Token } from './codeSnippets'

const LINES = 8

export function HeroMonitor() {
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(() => (reduced ? snippets[0].code.length : 0))
  const [visible, setVisible] = useState(true)
  const ref = useRef<HTMLDivElement>(null)
  const snippet = snippets[index]
  const tokens = useMemo(() => tokenize(snippet.code), [snippet])

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  // Digita um caractere por vez; ao terminar, espera e passa para o próximo trecho.
  useEffect(() => {
    if (reduced || !visible) return
    const total = snippet.code.length
    let timer: number
    if (count < total) {
      const next = snippet.code[count]
      const delay = next === '\n' ? 140 : 28 + Math.random() * 45
      timer = window.setTimeout(() => setCount(value => value + 1), delay)
    } else {
      timer = window.setTimeout(() => { setIndex(value => (value + 1) % snippets.length); setCount(0) }, 2600)
    }
    return () => window.clearTimeout(timer)
  }, [count, snippet, visible, reduced])

  // Monta as linhas visíveis a partir dos tokens, cortando no caractere atual.
  const lines: Token[][] = [[]]
  let remaining = count
  for (const token of tokens) {
    if (remaining <= 0) break
    const text = token.text.slice(0, remaining)
    remaining -= text.length
    text.split('\n').forEach((part, partIndex) => {
      if (partIndex > 0) lines.push([])
      if (part) lines[lines.length - 1].push({ text: part, kind: token.kind })
    })
  }
  const cursorLine = lines.length
  const cursorColumn = lines[lines.length - 1].reduce((sum, token) => sum + token.text.length, 0) + 1

  return <div className="hero-monitor" ref={ref} aria-hidden="true">
    <div className="hero-monitor__screen">
      <div className="hero-monitor__bar">
        <span className="hero-monitor__tab">{snippet.file}</span>
        <span className="hero-monitor__title">Livia.Dev — editor</span>
      </div>
      <div className="hero-monitor__code">
        {Array.from({ length: LINES }, (_, row) => <div className="hero-monitor__line" key={row}>
          <span className="hero-monitor__number">{row + 1}</span>
          <span className="hero-monitor__text">
            {lines[row]?.map((token, tokenIndex) => <span key={tokenIndex} className={`tok-${token.kind}`}>{token.text}</span>)}
            {row === cursorLine - 1 && <span className="hero-monitor__cursor" />}
          </span>
        </div>)}
      </div>
      <div className="hero-monitor__status">
        <span>{snippet.language}</span>
        <span>Ln {cursorLine}, Col {cursorColumn}</span>
      </div>
    </div>
    <div className="hero-monitor__stand"><span /></div>
  </div>
}
