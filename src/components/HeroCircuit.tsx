import { useEffect, useRef, type CSSProperties } from 'react'

// Trilhas saindo dos pinos do chip (centro em 280,260). `end` é o ponto que acende quando o pulso chega.
const traces = [
  { d: 'M235 185 V120 H150 V60', end: [150, 60], dur: 3.4, delay: 0 },
  { d: 'M265 185 V40', end: [265, 40], dur: 2.6, delay: 1.1 },
  { d: 'M295 185 V100 H380 V50', end: [380, 50], dur: 3.8, delay: .5 },
  { d: 'M325 185 V140 H470', end: [470, 140], dur: 3, delay: 2 },
  { d: 'M355 215 H430 V190 H520', end: [520, 190], dur: 3.2, delay: .8 },
  { d: 'M355 260 H530', end: [530, 260], dur: 2.4, delay: 1.7 },
  { d: 'M355 305 H420 V330 H530', end: [530, 330], dur: 3.5, delay: .3 },
  { d: 'M325 335 V370 H500', end: [500, 370], dur: 3.1, delay: 2.4 },
  { d: 'M295 335 V400 H400 V470', end: [400, 470], dur: 3.9, delay: 1.3 },
  { d: 'M265 335 V480', end: [265, 480], dur: 2.7, delay: .6 },
  { d: 'M235 335 V420 H120', end: [120, 420], dur: 3.3, delay: 1.9 },
  { d: 'M205 305 H110 V350 H50', end: [50, 350], dur: 3.6, delay: 1 },
  { d: 'M205 260 H40', end: [40, 260], dur: 2.5, delay: 2.2 },
  { d: 'M205 215 H140 V160 H60', end: [60, 160], dur: 3.7, delay: .2 },
]
const pins = [235, 250, 265, 280, 295, 310, 325]

// Ilustração decorativa da hero: chip com pulsos de luz roxa percorrendo as trilhas do circuito.
export function HeroCircuit() {
  const ref = useRef<HTMLDivElement>(null)

  // Pausa as animações quando a hero sai da tela.
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => element.classList.toggle('hero-circuit--paused', !entry.isIntersecting))
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div className="hero-circuit" ref={ref} aria-hidden="true">
    <svg viewBox="0 0 560 520" role="presentation">
      <defs>
        <pattern id="circuit-dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="#2c1d3d" /></pattern>
        <linearGradient id="circuit-fade-x"><stop offset="0%" stopColor="#fff" stopOpacity="0" /><stop offset="22%" stopColor="#fff" /><stop offset="78%" stopColor="#fff" /><stop offset="100%" stopColor="#fff" stopOpacity="0" /></linearGradient>
        <linearGradient id="circuit-fade-y" x2="0" y2="1"><stop offset="0%" stopColor="#fff" stopOpacity="0" /><stop offset="22%" stopColor="#fff" /><stop offset="78%" stopColor="#fff" /><stop offset="100%" stopColor="#fff" stopOpacity="0" /></linearGradient>
        <mask id="circuit-mask-x"><rect width="560" height="520" fill="url(#circuit-fade-x)" /></mask>
        <mask id="circuit-mask-y"><rect width="560" height="520" fill="url(#circuit-fade-y)" /></mask>
        <filter id="circuit-blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" /></filter>
        <filter id="circuit-halo-blur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="38" /></filter>
      </defs>

      <g mask="url(#circuit-mask-y)"><rect width="560" height="520" fill="url(#circuit-dots)" mask="url(#circuit-mask-x)" /></g>
      <rect className="hero-circuit__halo" x="150" y="130" width="260" height="260" rx="24" filter="url(#circuit-halo-blur)" />
      <rect className="hero-circuit__frame" x="160" y="140" width="240" height="240" rx="6" />

      <g className="hero-circuit__traces">
        {traces.map(trace => <path key={trace.d} d={trace.d} />)}
      </g>
      {traces.map(trace => {
        const style = { '--dur': `${trace.dur}s`, '--delay': `${trace.delay}s` } as CSSProperties
        return <g key={trace.d} style={style}>
          <path className="hero-circuit__pulse hero-circuit__pulse--glow" d={trace.d} pathLength={100} />
          <path className="hero-circuit__pulse" d={trace.d} pathLength={100} />
          <rect className="hero-circuit__node" x={trace.end[0] - 5} y={trace.end[1] - 5} width="10" height="10" rx="2" />
        </g>
      })}

      <g className="hero-circuit__pins">
        {pins.map(x => <path key={`t${x}`} d={`M${x} 185 v-8 M${x} 335 v8`} />)}
        {[215, 230, 245, 260, 275, 290, 305].map(y => <path key={`s${y}`} d={`M205 ${y} h-8 M355 ${y} h8`} />)}
      </g>
      <rect className="hero-circuit__chip" x="205" y="185" width="150" height="150" rx="10" />
      <rect className="hero-circuit__chip-inner" x="225" y="205" width="110" height="110" rx="5" />
      <text className="hero-circuit__label hero-circuit__label--glow" x="280" y="272" textAnchor="middle" filter="url(#circuit-blur)">&lt;/&gt;</text>
      <text className="hero-circuit__label" x="280" y="272" textAnchor="middle">&lt;/&gt;</text>
    </svg>
  </div>
}
