export function Brand({ compact = false }: { compact?: boolean }) {
  return <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#inicio" aria-label="Livia.Dev, back to home">
    <span className="brand__symbol" aria-hidden="true">&lt;</span><span>Livia.Dev</span><span className="brand__symbol" aria-hidden="true">/&gt;</span>
  </a>
}
