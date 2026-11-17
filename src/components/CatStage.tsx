import { useEffect, useRef } from 'react'

export function CatStage() {
  const stage = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = stage.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const move = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return
      const bounds = element.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width - 0.5
      const y = (event.clientY - bounds.top) / bounds.height - 0.5
      element.style.setProperty('--cat-x', `${x * 16}px`)
      element.style.setProperty('--cat-y', `${y * 12}px`)
      element.style.setProperty('--halo-x', `${50 + x * 12}%`)
      element.style.setProperty('--halo-y', `${45 + y * 10}%`)
    }
    const reset = () => {
      element.style.setProperty('--cat-x', '0px')
      element.style.setProperty('--cat-y', '0px')
      element.style.setProperty('--halo-x', '50%')
      element.style.setProperty('--halo-y', '45%')
    }
    element.addEventListener('pointermove', move)
    element.addEventListener('pointerleave', reset)
    return () => { element.removeEventListener('pointermove', move); element.removeEventListener('pointerleave', reset) }
  }, [])

  return <div className="cat-stage cat-stage--illustrated" ref={stage} role="img" aria-label="Gato preto ilustrado em 2.5D, de olhos dourados e expressão curiosa">
    <span className="cat-stage__halo" aria-hidden="true" />
    <img src="/livia-cat-2_5d.png" width="1024" height="1536" alt="" fetchPriority="high" />
    <span className="cat-stage__ground" aria-hidden="true" />
  </div>
}
