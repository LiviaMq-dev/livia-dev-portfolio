export function CatFallback() {
  return <svg className="cat-fallback" viewBox="0 0 500 500" role="img" aria-label="Silhueta de um gato preto com detalhes roxos">
    <defs><radialGradient id="halo"><stop stopColor="#5216e4" stopOpacity=".25"/><stop offset="1" stopColor="#5216e4" stopOpacity="0"/></radialGradient></defs>
    <circle cx="250" cy="255" r="220" fill="url(#halo)"/>
    <path d="M140 173 145 75 212 126 Q250 112 288 126 L355 75 360 173 Q389 224 372 289 Q355 363 250 370 Q145 363 128 289 Q111 224 140 173Z" fill="#17151c" stroke="#684187" strokeWidth="4"/>
    <path d="m162 153 3-48 39 36M338 153l-3-48-39 36" fill="#5216e4" opacity=".5"/>
    <ellipse cx="205" cy="244" rx="17" ry="24" fill="#c5a4e2"/><ellipse cx="295" cy="244" rx="17" ry="24" fill="#c5a4e2"/>
    <ellipse cx="209" cy="243" rx="5" ry="19" fill="#1b1322"/><ellipse cx="291" cy="243" rx="5" ry="19" fill="#1b1322"/>
    <path d="m240 295 20 0-10 12Z" fill="#5216e4"/><path d="M250 307q-12 18-27 6m27-6q12 18 27 6" fill="none" stroke="#a88fb9" strokeWidth="3" strokeLinecap="round"/>
  </svg>
}
