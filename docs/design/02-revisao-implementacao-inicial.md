# Revisão #1 — implementação inicial do Codex

> Revisor: Claude. Data: 2026-11-17. Base: árvore de trabalho não commitada (commit base `b30ac09`).
> Referência de direção: `docs/design/01-direcao-artistica.md` (ainda pendente de aprovação da Livia).

## O que foi verificado e o que não foi

- ✅ Leitura completa de: `src/App.tsx`, `src/styles.css`, `src/main.tsx`, `src/components/*`, `src/three/CatScene.tsx`, `src/data/portfolio.ts`, `index.html`, `public/og-image.svg`, `DESIGN.md`, `package.json`, `tsconfig.json`.
- ✅ `npx tsc --noEmit -p .` → **sem erros**.
- ❌ **Sem inspeção no navegador:** não havia navegador disponível nesta sessão. Os itens marcados como **[inferido]** vêm da leitura do CSS e do código e precisam ser confirmados visualmente. Os itens **[comprovado]** decorrem diretamente do código ou de cálculo de contraste WCAG.
- ❌ Build de produção (`npm run build`) não executado, para não gerar `dist/` enquanto o Codex trabalha.

---

## Problemas críticos

| # | Onde | Problema | Correção |
|---|---|---|---|
| C1 | `three/CatScene.tsx:47` + `:39` | **[comprovado]** A cauda é um `TubeGeometry` com vértices em coordenadas absolutas (base em `(0.6,-0.75,-0.38)`), mas é rotacionada (`tail.rotation.x`) em torno da **origem do grupo**, não da base. A base se desloca cerca de 0,09 unidade a cada oscilação, então a cauda se descola do corpo. | Transladar a geometria para que a base fique em `(0,0,0)` e posicionar o mesh na base, ou animar uma cadeia de segmentos/ossos. Ver §5 da direção. |
| C2 | `three/CatScene.tsx:45–67` | **[comprovado]** O gato é feito de esferas escaladas, tubo, cone e torus **sem fusão** entre as peças. É exatamente o “formas primitivas mal conectadas / protótipo” que o briefing rejeita. Funciona como placeholder, mas não como primeira versão de qualidade. | Introduzir a interface `CatRig` agora e planejar GLB autoral (ou MarchingCubes gerado uma vez) — direção §5. |
| C3 | `styles.css` `.section-title__index`, `.pending__kind`, `.service>span:first-child`, `.contact__label` | **[comprovado]** Texto de 11–12px em `#a700f1` sobre preto = **3,9:1** (reprova WCAG AA 4,5:1). `.contact__label` `#f1d8ff` sobre `#a700f1` ≈ 4,1:1 (reprova). `.education__vertical` `#684c75` 11px ≈ 2,7:1 (reprova). | Texto roxo pequeno → `--violet-300 #cf73f7` (≈7,5:1). Remover ou reavaliar os rótulos (ver I1). |
| C4 | `App.tsx` (todo), `CatStage.tsx:32` | **[comprovado]** O texto visível ao visitante descreve o próprio site em construção: “em construção / 2026”, “Mascote em desenvolvimento 01 / 01”, “Texto provisório · editar em próxima etapa”, “Nenhum projeto fictício foi publicado”, “sem afirmar domínio ou experiência”, “A definir”, “A confirmar”, “Em breve”. Com isso, **nenhuma seção tem estrutura real**: timeline, projetos, certificados, formação e contato são todos o mesmo componente `Pending`. O briefing pede “estrutura das demais seções”, e hoje não é possível avaliar nenhum layout com conteúdo. | Criar componentes reais (`ProjectCard`, `TimelineItem`, `CredentialRow`, `ServiceItem`, `ContactLinks`) alimentados por entradas `placeholder: true` com tamanho realista. Selo “PLACEHOLDER” só em `import.meta.env.DEV`. Direção §7. |
| C5 | `index.html:11`, `public/og-image.svg` | **[comprovado]** `og:image` em **SVG** não é suportado por Facebook, LinkedIn, X e WhatsApp, e a URL é relativa (o Open Graph exige URL absoluta). Também faltam favicon, `og:url`, `twitter:card` e `link rel=canonical`. | PNG 1200×630 com a logo real, URL absoluta (depende do domínio — pendência), favicon SVG + PNG 32/180. |

## Problemas importantes

| # | Onde | Problema | Correção |
|---|---|---|---|
| I1 | `App.tsx` `SectionTitle`, `skill-row__num`, `service>span` | **[comprovado]** Padrão `01 / SOBRE` + numeração `01–07` em habilidades e serviços, que **não são sequências**. É o principal “tique” de template gerado por IA (skill `frontend-design`). O título da hero destaca uma única palavra em roxo (`<span>intenção.</span>`), outro tique. | Remover eyebrows e numeração (manter números só onde há ordem real: timeline). Hero conforme direção §4. |
| I2 | `styles.css` | **[comprovado]** O CSS está minificado em uma linha, sem nenhuma custom property. Há cerca de 30 hexadecimais diferentes, muitos fora da paleta (`#ca68ff`, `#8c00c9`, `#b883cf`, `#25112e`, `#161319`, `#3b3044`, `#120b16`, `#0b0a0d`…), e os neutros são **tingidos de roxo**, o que dilui o roxo da marca. | Reescrever com tokens (`:root { --black … }`) da direção §3, formatado e separado por camada (tokens / base / layout / componentes / seções). |
| I3 | `styles.css` `.contact{background:#a700f1}` | **[comprovado]** A seção inteira tem fundo roxo, contrariando “evite exagerar no roxo” e o princípio “roxo é luz, não tinta”. | Fundo preto; o roxo aparece só no link do e-mail e no foco. |
| I4 | `Header.tsx:20`, `styles.css .nav-more` | **[comprovado]** O dropdown “Mais” abre só com `:hover`/`:focus-within`, sem `onClick` e sem `aria-expanded`. **[inferido]** No Safari (iPad em 1024px, onde o nav desktop aparece), tocar no `<button>` não dá foco, e o painel provavelmente não abre. | Estado controlado com clique, `aria-expanded`, Esc fecha e devolve o foco. Melhor ainda: agrupamento “Trajetória” (direção §6). |
| I5 | `styles.css .desktop-nav>a` | **[comprovado]** Links sem padding em 12–13px: área de toque de cerca de 16px de altura, abaixo do mínimo WCAG 2.5.8 (24×24) em tablets touch. | `padding-block: 12px` (alvo ≥ 44px) ou `min-height: 44px` com flex. |
| I6 | `App.tsx:34`, `.marquee` | **[inferido, alta confiança]** A faixa “marquee” não tem animação (não existe `@keyframes`). Em 360px, com `white-space:nowrap` + `width:max-content` + `overflow:hidden`, o texto (cerca de 70 caracteres em 10px com tracking .14em ≈ 500px) **é cortado no meio da palavra**. Esse é o “ocultar com overflow hidden” que o briefing proíbe. Além disso, o glifo `✳` (U+2733) pode ser renderizado como **emoji** no iOS/Android. | Remover a marquee ou transformá-la em lista que quebra linha (`flex-wrap`), com separador SVG. Texto ≥ 12px. |
| I7 | `App.tsx:7`, `:41` | **[comprovado]** `skillIcons[index]` acopla o ícone à posição no array. Se uma 8ª categoria for adicionada em `portfolio.ts`, `Icon` fica `undefined` e o React quebra a página. | O ícone deve fazer parte do dado (`{ name, icon }`) ou de um mapa por `id`. |
| I8 | `data/portfolio.ts` | **[comprovado]** O tipo `Entry {title, detail, meta, href}` é genérico demais para os campos pedidos no briefing (empresa, cargo, período, carga horária, verificação, stack, links de código e demo, categoria…). | Tipos específicos em `src/types/portfolio.ts`: `Project`, `Experience`, `Education`, `Certification`, `Service`, `SkillCategory`, `ContactChannel`. |
| I9 | `CatScene.tsx:30–42` | **[comprovado]** `pointer` do R3F só atualiza com o cursor **sobre o canvas**, então o gato não acompanha o cursor no resto da página. Além disso, o piscar é periódico (`sin(t*1.7)` → a cada ~3,7s, como um metrônomo). | `eventSource` no root com `eventPrefix="client"` (ou listener em `window`). Piscar com intervalo aleatório (direção §5). |
| I10 | `CatScene.tsx:72` | **[comprovado]** O loop renderiza o tempo todo, mesmo com a hero fora da viewport. | `frameloop` controlado por IntersectionObserver ou `demand` + `invalidate`. |
| I11 | `CatStage.tsx:29` | **[comprovado]** `aria-label` em `<div>` sem role é ignorado por leitores de tela. Quando o fallback aparece, ele traz o próprio `role="img"`, e o rótulo fica duplicado ou inconsistente. `.cat-stage__rings` é renderizado mas não tem CSS (o efeito vem de `::before/::after`). | `role="img"` + `aria-label` no container e filhos `aria-hidden`, ou tudo decorativo. Remover o elemento morto. |
| I12 | `styles.css .cat-stage` | **[comprovado]** O gato está dentro de uma caixa quadrada com borda, degradê radial e anéis elípticos, o que parece um “visualizador de produto” separado da página. | Sem caixa: gato integrado à composição, sentado na linha-chão (direção §2 e §4). |
| I13 | `Brand.tsx`, `main.tsx` | **[comprovado]** A logo é texto em Space Grotesk, não a logo real (letras diferentes, roxo diferente — ver ⚑1). São 7 arquivos de fonte estáticos (Space Grotesk ×4, DM Sans ×3). | Logo em SVG com contorno. Fontes variáveis (1 arquivo cada), com `preload` do display. |
| I14 | `styles.css` | **[comprovado]** Falta `scroll-padding-top` com header sticky de 78px. Falta `color-scheme: dark` (scrollbars e controles nativos ficam claros). | `html { scroll-padding-top: 96px; color-scheme: dark }`. |

## Melhorias opcionais (estéticas, subjetivas)

- **O1.** Space Grotesk + DM Sans são o par “tech” mais frequente em sites gerados por IA e não conversam com a logo. Proposta: Lexend + Martian Mono (direção §3.2).
- **O2.** `letter-spacing: -.075em` em todos os títulos é apertado demais, principalmente no `.brand` e no `.pending h3`. Usar a escala de tracking da direção.
- **O3.** `.button:hover { translateY(-2px) }` e `.skill-row:hover { padding-inline }` são microinterações genéricas e deslocam o layout. Preferir mudança de cor/borda e o indicador `< >` da navegação.
- **O4.** `App.tsx` concentra todas as seções em linhas de 300+ caracteres. Separar em `src/sections/*.tsx`.
- **O5.** `supportsWebGL()` cria um contexto WebGL e não o libera. Chamar `getExtension('WEBGL_lose_context')?.loseContext()`.

## Pontos aprovados ✅

- Lazy-load do Three via `React.lazy` + IntersectionObserver + `ErrorBoundary` + fallback SVG: arquitetura correta.
- Fallback para WebGL ausente e para `prefers-reduced-motion`.
- `dpr={[1, 1.5]}` e `powerPreference: 'low-power'`.
- Skip link, `inert` no menu mobile fechado, Esc fecha o menu, `aria-expanded` no toggle.
- `lang="pt-BR"`, `theme-color`, `<main>`/`<section aria-labelledby>`.
- Dados centralizados em `portfolio.ts` (precisam de tipos melhores, mas o lugar é o certo).
- Nenhuma dependência desnecessária (não instalou Motion, Drei ou Tailwind sem necessidade).
- Nenhum conteúdo profissional inventado, como pede o briefing.

## Recomendação ao Codex (ordem sugerida)

1. **Aguardar a aprovação da direção pela Livia** antes de polir o visual (fontes, hero e layout das seções mudam).
2. Corrigir já, porque independem da direção: C1, C3, C5 (parte técnica), I4, I5, I7, I9, I10, I11, I14.
3. Depois da aprovação: tokens + CSS reorganizado (I2), tipos de dados (I8), seções com componentes reais (C4), hero e gato conforme a direção.
