# Livia.Dev — Direção artística v0.1

> Autor: Claude (direção de arte / revisão). Destinatário: Codex (implementação) e Livia (aprovação).
> Status: **proposta — aguardando aprovação da Livia** nos pontos marcados com ⚑.
> Skills consultadas: `frontend-design`, `responsive-design`, `threejs-r3f`, `threejs-accessibility`.

---

## 1. Leitura das referências

| Ref. | O que aproveitar | O que **não** levar |
|---|---|---|
| **Logo** `<Livia.Dev/>` | Sans geométrica clara, peso leve, sintaxe de tag em roxo. A marca **é** uma tag JSX autofechada, e essa é a ideia mais forte disponível. | — |
| **Ref. 2 (Laila, rosa)** | Ornamento autoral recorrente (as flores emolduram títulos); objeto decorativo grande que divide a seção "Sobre"; certificados com ano em destaque; formação como lista editorial ao lado de uma ilustração. | Paleta rosa, glow em tudo, flores literais, cards idênticos. |
| **Ref. 3 (gato pixel)** | Preto absoluto, roxo só em acentos, gato como mascote, timeline com marcador por ano, chips de tecnologia com contorno. | Pixel art (queremos 3D), cards repetidos de “Developer”. |
| **Ref. 4 (CodeCraft)** | Hierarquia da hero (identificação → promessa → CTA), card de código sobreposto à imagem, header enxuto com um CTA, projetos com screenshot. | Barras de porcentagem (proibidas pelo briefing), grade de 4 KPIs fictícios, eyebrow em caixa alta acima de cada título. |

**Dado verificado da logo (amostragem de pixels do PNG):** o roxo da logo é **`#8C52FF`** (roxo padrão do Canva), e o fundo é `#171810`. O briefing define **`#a700f1`**. Ver decisão ⚑1.

---

## 2. Conceito: “Turno da noite”

Uma desenvolvedora trabalhando à noite num quarto escuro, iluminado apenas pelo monitor. Um gato preto está sentado ao lado da tela. Tudo é preto, e o que aparece aparece **porque a luz roxa bate nele**.

Três princípios derivam disso e valem para o site inteiro:

1. **O roxo é luz e sintaxe, nunca tinta.** Ele aparece onde haveria luz (rim light do gato, olhos, cursor, anel de foco, item ativo) ou onde haveria sintaxe de código (`<`, `/>`, `/`, nomes de atributo). Nunca como fundo de seção, nunca em degradê decorativo. Orçamento: **≤ 5% da área visível** em qualquer posição de rolagem.
2. **A marca é uma tag.** O motivo `<` … `/>` é o elemento gráfico autoral do site (substitui as flores da Ref. 2). Aparece em poucos lugares: hero, indicador de navegação ativa e rodapé.
3. **O gato senta nas linhas.** As linhas finas de divisão funcionam como “chão”. Na hero, o gato 3D senta sobre a linha que separa a hero da próxima seção, e a cauda passa por cima dela. No rodapé, uma silhueta 2D do gato senta sobre a borda superior. Esse é o detalhe recorrente que dá identidade sem sobrecarregar.

**Onde gastar a ousadia:** no gato 3D e na hero tipográfica. Todo o resto é quieto, disciplinado e editorial.

---

## 3. Tokens

### 3.1 Cor

Neutros **puros** (sem tingimento roxo), para que o roxo continue especial.

| Token | Hex | Uso | Contraste s/ `#000` |
|---|---|---|---|
| `--black` | `#000000` | Fundo da página (predominante) | — |
| `--surface` | `#0c0c0d` | Superfícies elevadas (painéis, menu mobile, imagem de projeto) | — |
| `--surface-hover` | `#161618` | Hover de linhas e itens | — |
| `--line` | `#262628` | Linhas finas, divisórias, “chão” | decorativo |
| `--line-strong` | `#3a3a3d` | Bordas de inputs e botões secundários | ≥ 3:1 não exigido (com label) |
| `--text` | `#ffffff` | Títulos e texto principal | 21:1 |
| `--text-muted` | `#a1a1a6` | Texto corrido secundário | ≈ 8:1 ✅ |
| `--text-meta` | `#8a8a8f` | Datas, metadados pequenos | ≈ 6:1 ✅ |
| `--violet` | `#a700f1` | Sintaxe da marca, botão primário (texto branco), anel de foco, títulos ≥ 24px | **≈ 3,9:1** ⚠ |
| `--violet-300` | `#cf73f7` | **Texto roxo pequeno** e links sobre preto (mesmo matiz, clareado) | ≈ 7,5:1 ✅ |
| `--violet-700` | `#5c0087` | Estado pressionado e bordas roxas sutis | — |

> ⚠ **Regra de acessibilidade comprovada:** `#a700f1` sobre preto tem ~3,9:1. **Reprova AA para texto < 24px** (normal) ou < 18,66px bold. Pode ser usado em texto grande, ícones e componentes de UI (mínimo 3:1). Texto roxo pequeno deve usar `--violet-300`. Texto branco sobre `#a700f1` = ~5,4:1 ✅.
>
> Proibido: `linear-gradient` roxo decorativo, `text-shadow` com glow, `box-shadow` colorida em cards. Exceções: o halo radial atrás do gato (é luz motivada pela cena) e o degradê do título “Full Stack Developer” na hero (pedido explícito da Livia, ver §4). Nenhum outro degradê.

### 3.2 Tipografia

As escolhas atuais do Codex (Space Grotesk + DM Sans) são os pares “tech” mais comuns em sites gerados por IA e não conversam com a logo. Proposta:

| Papel | Família | Pesos | Por quê |
|---|---|---|---|
| Display + texto | **Lexend** (variable, `@fontsource-variable/lexend`) | 300 / 400 / 500 | Geométrica e arredondada como a logo; foi desenhada para legibilidade, então serve também para texto corrido. Em peso 300 e tamanho grande fica elegante, não “startup”. |
| Código | **Martian Mono** (variable) | 400 | Monoespaçada larga, com personalidade. **Só** para sintaxe real (a tag da hero, trechos de código). Nunca para rótulos ou metadados. |

⚑ Se a logo foi feita no Canva, o nome da fonte aparece no editor. Se for uma fonte livre (ex.: Glacial Indifference, SIL OFL), podemos avaliar usá-la no display. Mesmo assim, a logo do site deve ser um **SVG com texto convertido em contorno**, sem depender da fonte.

**Escala fluida** (razão ~1,25 no mobile → ~1,333 no desktop):

| Nível | Tamanho | Peso | Entrelinha | Tracking |
|---|---|---|---|---|
| Display (hero) | `clamp(2.75rem, 1.4rem + 5.6vw, 6rem)` | 300 | 1.0 | -0.035em |
| H2 | `clamp(2rem, 1.3rem + 3vw, 3.5rem)` | 400 | 1.05 | -0.025em |
| H3 | `clamp(1.25rem, 1.1rem + .6vw, 1.5rem)` | 500 | 1.2 | -0.01em |
| Corpo | `clamp(1rem, .95rem + .25vw, 1.125rem)` | 300 | 1.6 | 0 |
| Pequeno | `.875rem` | 400 | 1.5 | 0.005em |
| Código | `.9375rem` | 400 | 1.55 | 0 |

Linha de texto: máximo de **68ch**. Sentence case em todos os títulos. **Sem** eyebrow em caixa alta e sem `01 / SEÇÃO`.

### 3.3 Espaço, grid e forma

- Base 4px. Escala: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 176.
- Padding vertical das seções: `clamp(5rem, 3rem + 8vw, 11rem)`.
- Container: `max-width: 1240px`, gutter `clamp(1rem, 4vw, 3rem)` (16px a 360px).
- Grid: 4 colunas (< 640) · 8 (640–1023) · 12 (≥ 1024). Breakpoints definidos pelo conteúdo; ver §6.
- **Raio por hierarquia** (não um raio único para tudo): layout e linhas `0`; imagens e painéis `12px`; botões e inputs `6px`; chips de tecnologia `999px`.
- Elevação: **sem sombras**. Profundidade = `--surface` + 1px `--line`.

### 3.4 Movimento

- Easing: `--ease-out: cubic-bezier(.2,.7,.2,1)`, `--ease-in-out: cubic-bezier(.65,0,.35,1)`.
- Durações: 120ms (hover), 200ms (estado), 320ms (abrir/fechar), 1200ms (momento único da hero).
- **Um único momento orquestrado: “a luz acende”.** No carregamento, a tag da hero aparece linha a linha (60ms de stagger), a rim light roxa do gato sobe de 0 a 1 em ~1,2s, e o gato **abre os olhos por último**.
- Depois disso, nada de fade-up em cada seção ao rolar. Movimento só responde a ação (hover, foco, abrir menu, filtrar, copiar e-mail).
- `prefers-reduced-motion: reduce`: sem sequência de entrada, sem cursor piscando, sem marquee, e o gato fica em pose estática (render de um frame ou fallback SVG). Ouvir também **mudanças** da preferência (`matchMedia(...).addEventListener('change')`).
- Sem dependência nova de animação nesta fase: CSS + `useFrame` resolvem. Só avaliar Motion se surgir uma necessidade real (ex.: layout animado nos filtros).

---

## 4. Hero (especificação)

**Objetivo:** em 3 segundos o visitante sabe quem é, o que faz e para onde ir, e lembra do gato.

### ✅ Decisão da Livia (2026-11-17): bloco de texto da referência “I am Livia”

A Livia enviou uma referência e pediu **essa escrita, com essa fonte e esse design**, no início do site. **Isso substitui o conceito da tag JSX descrito mais abaixo** (mantido só como histórico). Valores medidos por amostragem de pixels da referência:

| Elemento | Texto | Estilo |
|---|---|---|
| Saudação | `I am Livia` | Branco, sans bold (**identificada visualmente como Open Sans 700** — confirmar com a Livia), ≈ 45% do tamanho do título |
| Título (`h1`) | `Full Stack Developer` (2 linhas: “Full Stack” / “Developer”) | Mesma família, 700, **degradê horizontal `#885bf2` → `#cab7f7`** via `background-clip: text` |
| Subtítulo | `Learning, developing and evolving through real projects in the technology area.` | Sans light (**identificada como Roboto 300**), cinza-lilás ≈ `#a39aab`, ~55 caracteres por linha |
| Botão | `Download CV` + ícone de download | Pílula com contorno de 2px roxo, texto roxo (Roboto 500), fundo transparente |
| Redes | LinkedIn, GitHub, Instagram | Botões circulares com contorno de 2px roxo e ícone roxo, mesmo diâmetro da altura do botão |

Regras de implementação:
- `I am Livia` + `Full Stack Developer` ficam **dentro do mesmo `<h1>`** (duas linhas visuais).
- O texto está em inglês e o site em `pt-BR`: aplicar `lang="en"` no bloco. ⚑ Confirmar com a Livia se o site todo será em inglês.
- **Download CV** e as redes só funcionam com URL real em `portfolio.ts`. Sem PDF ou sem link, o elemento **não pode parecer funcional** (regra 7 do briefing): ocultar ou renderizar como desabilitado, com `aria-disabled`.
- Fundo da hero continua `#000` (o `#120a19` da referência é tingido; o briefing pede preto).
- O roxo da referência pertence à família `#8C52FF` (igual à logo), não `#a700f1` → reforça a decisão ⚑1.

### Conceito tipográfico: a marca como componente (substituído — ver decisão acima)

O título é a própria tag da logo, “renderizada” com props editáveis:

```
<Livia.Dev
    foco="desenvolvimento, IA e automações"
    agora="[definir — ex.: estudando X / trabalhando em Y]"
    status="[definir — ex.: aberta a projetos]"
/>
```

- `<Livia.Dev` e `/>`: Lexend 300, tamanho display, `Livia.Dev` em branco e `<` `/>` em `--violet`.
- Linhas de atributo: Martian Mono no tamanho de corpo. Nome do atributo em `--violet-300` e valor em branco. **Os valores ficam em `portfolio.ts`.**
- Cursor `▍` roxo piscando após o último valor (desligado em reduced motion).
- Semântica: `<h1>` contém “Livia.Dev”, com os colchetes `aria-hidden`. Os atributos são uma `<dl>` real (termo/valor), legível por leitor de tela.
- Abaixo: um parágrafo curto em linguagem simples (máx. 2 linhas, ≤ 140 caracteres) para quem não é dev, e os CTAs “Ver projetos” (primário) e “Falar comigo” (secundário). “Baixar currículo” fica previsto e **oculto até existir o PDF**.
- **Alternativa** caso a Livia ache técnico demais para clientes: título em linguagem natural mantendo `<` `/>` como moldura do nome. A estrutura de dados é a mesma.

### Composição

```
DESKTOP ≥1024                                         
┌───────────────────────────────────────────────────────────┐
│ <Livia.Dev/>      Sobre  Trajetória▾  Projetos  Serviços [Falar comigo] │
├───────────────────────────────────────────────────────────┤
│                                                           │
│  <Livia.Dev                               ░░ halo ░░      │
│      foco="…"                            ░  /\_/\   ░     │
│      agora="…"                           ░ ( o.o )  ░     │
│      status="…" ▍                         ░ > ^ <  ░      │
│  />                                         |   |  ╲       │
│  Frase simples de 1–2 linhas.               |___|   ╲      │
│  [Ver projetos]  Falar comigo               cols 7–12      │
│  cols 1–7                                         ╲(cauda) │
├──────────────────────────────── linha-chão ──────╲────────┤  ← gato senta aqui, cauda cruza a linha
│  faixa de tecnologias (estática, sem marquee)              │
```

```
MOBILE 360–639
┌──────────────────────┐
│ <Livia.Dev/>     [≡] │
├──────────────────────┤
│ <Livia.Dev           │
│   foco="…"           │  props quebram 1 por linha
│   agora="…"          │
│   status="…" ▍       │
│ />                   │
│ Frase simples.       │
│ [Ver projetos]       │  botões 100% largura, ≥ 48px
│ [Falar comigo]       │
│      /\_/\           │  gato: altura min(46svh, 360px)
│     ( o.o )          │  sem drag; toque = reação
├──── linha-chão ──────┤
```

- O texto vem **antes** do gato no DOM e no mobile (o LCP é texto).
- Área do gato com `aspect-ratio` fixo, reservada desde o primeiro paint (CLS = 0).
- Altura da hero: `min-height: min(100svh, 900px)` no desktop; no mobile, altura do conteúdo (não forçar 100vh).

### Critérios de aceite da hero
- [ ] Nenhum texto roxo < 24px usa `#a700f1`.
- [ ] A 360px, nenhuma linha de atributo causa rolagem horizontal (valores quebram com `overflow-wrap: anywhere`).
- [ ] Tab percorre: skip link → logo → nav → CTA do header → CTAs da hero, com foco visível (anel `--violet` 2px + offset 3px).
- [ ] Com WebGL desativado, aparece o fallback com a mesma silhueta e proporção, sem salto de layout.
- [ ] Lighthouse mobile: LCP < 2,5s; o bundle do three **não** bloqueia o LCP.

---

## 5. Gato 3D (especificação)

### Direção de arte — revisada com a referência da Livia (`gato ilustrado`, 2026-11-17)

> A referência enviada pela Livia substitui a ideia anterior de “vinyl toy” liso. O alvo agora é um **filhote de livro ilustrado transformado em 3D**: fofo, expressivo e com acabamento de traço à mão. Cores medidas por amostragem de pixels da referência.

**Anatomia (o que faz o personagem ser “ele”):**
- **Filhote**, não gato adulto: cabeça grande e arredondada (≈ 40% da altura total), **pescoço fino** saindo de um peito fofo, corpo em forma de pera, patas dianteiras juntas e retas, patas traseiras dobradas aparecendo dos lados.
- **Orelhas altas e pontudas**, levemente abertas para fora, com **interior colorido** (referência `#ca6d4e`) e tufos de pelo saindo de dentro.
- **Olhos enormes e redondos** (cada olho ≈ 22% da largura da cabeça), íris preenchida (referência âmbar `#e5ab55`), **pupila redonda grande** (não fenda) e **um único brilho branco** no canto superior direito. Fino traço de “sobrancelha” acima de cada olho.
- **Focinho pequeno:** nariz triangular arredondado (referência `#c26a55`) e boca em “w” com um sorriso leve.
- **Bigodes longos e finos**, 3 de cada lado, ultrapassando a silhueta da cabeça.
- **Silhueta peluda:** tufos pontudos nas bochechas (laterais da cabeça), no topo da cabeça, no peito e na ponta da cauda. É a silhueta “arrepiada” que dá o charme; o contorno **não** pode ser liso.
- **Cauda** saindo da direita, subindo em S e terminando com a ponta curvada para dentro, mais fofa na ponta.
- **Pose:** sentado, **de frente** para o visitante (não ¾), olhando levemente para o lado do texto.

**Linguagem visual (transpor o lápis para o 3D):**
- **Contorno escuro** fino por inverted hull (casca invertida de 1–1,5% de espessura), irregular via ruído para parecer traço.
- **Tonalização toon de 2–3 faixas** (`MeshToonMaterial` com `gradientMap` próprio ou shader), não PBR realista.
- **Pelo:** shell texturing (12–20 camadas no desktop, 6–8 no mobile, com alfa por ruído) para a sensação fofa, mais *hair cards* para os tufos da silhueta (bochechas, orelhas, peito, ponta da cauda).
- **Grão de papel/lápis** sutil no shader (ruído em espaço de tela, intensidade baixa), para evocar a ilustração sem sujar a UI.

**Adaptação ao site preto:** a referência é preto sobre papel creme. Sobre `#000`, o gato desaparece se não houver luz de recorte. Portanto:
- **Rim light roxa** (`#a700f1`) atrás do gato, que **acende as pontas dos tufos**. É ela que desenha a silhueta arrepiada contra o preto e conecta o personagem à marca.
- O corpo é **preto-azulado bem escuro** (`#16181a`, medido na referência), não `#000`, para que as faixas do toon sejam legíveis.
- **Sem acessórios** (decisão da Livia): sem coleira, plaquinha ou qualquer outro adereço.
- Sombra: blob shadow (plano com textura radial) sobre a “linha-chão”, sem shadow map.

**⚑ Cor dos olhos e do interior das orelhas** (ver decisão ⚑6):
- **Opção A — manter âmbar** (`#e5ab55`). O âmbar é complementar ao roxo, então os olhos viram o **único ponto quente do site** e o foco instantâneo da hero. As orelhas e o nariz passam de terracota para um **rosa-malva** (`#b9708f`), para não brigar com o roxo. **Recomendado.**
- **Opção B — olhos roxos** (`--violet-300`). Mais “on-brand”, mas o gato perde a expressividade da referência e se mistura à rim light roxa.

### Movimento (prioridade)
1. **Respiração:** escala Y do peito de ±1,5%, período de ~3,5s.
2. **Piscar:** intervalo **aleatório** de 2,5–7s, duração ~140ms, piscada dupla ocasional (~15%). Nunca periódico.
3. **Cabeça segue o cursor na janela inteira** (não só sobre o canvas), com limite de yaw ±25° e pitch ±12°, `damp` λ≈3. Sem cursor por 4s: volta ao centro olhando para o texto.
4. **Cauda:** 4–5 segmentos (ossos ou curva atualizada) com onda defasada. A base da cauda **fica presa ao corpo**.
5. **Orelha mexe** sozinha de vez em quando (uma orelha por vez, intervalo aleatório de 6–14s): é o movimento que mais vende “filhote vivo”.
6. Reação a clique/toque: as duas orelhas mexem e o gato pisca devagar (o “eu te amo” felino), com cooldown de 2s.

### Interação
- **Sem zoom na roda do mouse** (sequestra a rolagem). Sem OrbitControls livre.
- Desktop: arrastar gira ±30° no eixo Y com retorno por mola ao soltar.
- Touch: `touch-action: pan-y` no canvas, **sem arrastar**; toque = reação. A rolagem vertical nunca é bloqueada.
- Se a interação de clique existir, oferecer equivalente HTML (botão discreto “Fazer carinho no gato”) — opcional; caso contrário, o canvas é decorativo (`aria-hidden`) e o container recebe `role="img"` + `aria-label`.

### ✅ Decisão da Livia (2026-11-17): gato em **2.5D**

O gato será feito em **camadas ilustradas com profundidade** (opção 3 abaixo), não como modelo 3D completo. Consequências para a implementação e a revisão:
- Camadas separadas, no mínimo: cauda, corpo, patas traseiras, patas dianteiras, cabeça, orelha esquerda, orelha direita, olhos (íris, pupila, brilho), pálpebras, focinho e boca, bigodes.
- Movimentos viáveis em 2.5D: paralaxe entre camadas com o cursor (rotação aparente de ~±15°), **pupilas seguindo o cursor**, piscar, orelha mexendo, cauda balançando a partir da base, respiração no peito.
- O contorno arrepiado (tufos) e o traço de lápis vêm do próprio desenho das camadas, não de shader.
- A rim light roxa pode ser um `drop-shadow` roxo sobre a silhueta inteira, mais um halo radial atrás.
- **Three.js deixa de ser obrigatório para o gato.** Camadas SVG com transforms CSS/JS entregam o mesmo efeito sem o bundle do Three (~150 KB gzip). Se o Codex mantiver o Three.js (camadas como planos), justificar o ganho. Qualquer que seja a escolha, aplicar as regras de performance e reduced motion acima.
- Os parágrafos de shell fur, toon shading e GLB do Blender **não se aplicam mais**.

### Estratégia de asset (histórico — substituída pela decisão 2.5D) ⚑3
O modelo atual por primitivas (esferas escaladas + tubo + cone) é **adequado só como placeholder**. Ele está longe da referência ilustrada: é liso, sem tufos, com olhos pequenos e pose ¾. Mesmo melhorado, um gato montado só com código **não chega** ao nível da ilustração. O caminho realista é:

1. **Agora (Codex):** criar a interface `CatRig` (refs `head`, `eyelids` ou morph `blink`, `ears[]`, `tailBones[]`, `chest`) e fazer o procedural implementá-la. Assim, trocar pelo GLB não muda `CatStage`. Ajustar o placeholder à anatomia acima (filhote frontal, olhos grandes redondos, orelhas altas) e implementar **já** os shaders reutilizáveis: toon, contorno por casca invertida e shell fur. Eles servem para o modelo final também.
2. **Qualidade final:** **GLB modelado no Blender** a partir da referência (Livia ou um artista 3D contratado). Orçamento: **≤ 15k triângulos** no corpo + hair cards para os tufos, rig com 8–10 ossos (cabeça, 2 orelhas, peito, 4–5 da cauda), shape key `blink`, compressão Draco ou meshopt, **≤ 500 KB**. Exportar com a malha do corpo separada dos hair cards, para o shell fur ser aplicado só ao corpo.
3. **Alternativa 2.5D (mais fiel ao traço, menos 3D):** pintar o gato em camadas (cabeça, olhos, pálpebras, orelhas, corpo, cauda) e montá-las em planos com profundidade dentro do Three.js. Fica idêntico ao estilo ilustrado e é muito leve, mas a rotação é limitada a ~±15° de paralaxe. Só faz sentido se a Livia aceitar abrir mão do 3D completo.

Sobre a imagem de referência: ela serve para **estilo e proporção**. Não deve ser usada como textura nem publicada sem confirmar quem tem os direitos sobre ela.

### Performance
- Pausar o loop quando a hero sai da viewport (`frameloop="demand"` + `invalidate`, ou alternar `frameloop` via IntersectionObserver).
- `dpr={[1, 1.5]}`; em dispositivos com `hardwareConcurrency ≤ 4` ou `deviceMemory ≤ 4`, usar dpr 1 e reduzir o shell fur para 6 camadas (ou desligá-lo, mantendo os hair cards da silhueta).
- Carregar o chunk do three **após o LCP** (`requestIdleCallback` com timeout), mostrando antes o SVG de fallback na mesma pose.

---

## 6. Seções — layouts distintos

Regra: **nenhuma seção repete o layout da anterior.**

| Seção | Layout | Detalhe autoral |
|---|---|---|
| **Sobre** | Editorial em 2 colunas: frase grande (H2 Lexend 300) à esquerda e 2–3 parágrafos curtos à direita; “áreas de atuação” como lista inline separada por `/`. | ⚑2 Foto da Livia? Se sim: tratamento monocromático com luz roxa lateral (mesma lógica de luz do gato), pré-processado em AVIF/WebP. |
| **Habilidades** | Índice tipográfico em linhas, não cards: categoria à esquerda (H3) e chips com logo monocromático à direita, com separação por `--line`. **Sem porcentagens.** | Logos via **Simple Icons (CC0)**, monocromáticos em branco a 80%. O Lucide não tem marcas. Hover: chip ganha borda `--violet`. |
| **Trajetória** (Experiência + Formação + Cursos) | Uma espinha vertical única (1px `--line`) com três faixas filtráveis: Todos / Trabalho / Formação / Cursos (`<button aria-pressed>`). Ano em sticky à esquerda no desktop. Item atual com nó `--violet`. | Certificados como **linhas compactas** (nome, instituição, carga horária, data, link “Verificar certificado ↗”), não cards. Cada sub-bloco mantém a própria âncora (`#experiencia`, `#formacao`, `#certificacoes`). |
| **Projetos** | 1 projeto em destaque com largura total (imagem 16:10) + grade de 2 colunas para os demais. | Screenshot dentro de uma moldura mínima de navegador mostrando **o domínio real** (sem os 3 pontinhos coloridos). Links “Código” e “Demo” com ícone e texto. |
| **Serviços** | Lista em acordeão (`<details>`): título grande por linha e, ao abrir, escopo e “Pedir orçamento”. | CTA = `mailto:` com assunto pré-preenchido pelo serviço. Sem formulário falso. |
| **Contato** | Afirmação grande + e-mail como link gigante + botão “Copiar e-mail” (feedback real: “E-mail copiado”) + lista de redes. | Sem formulário nesta fase (não há backend). |
| **Rodapé** | Logo, links, redes, © ano. | **Silhueta 2D do gato sentada na borda superior**, com a cauda pendurada (SVG inline, `aria-hidden`). |

### Navegação
- Itens: **Sobre · Habilidades · Trajetória ▾ (Experiência, Formação, Cursos) · Projetos · Serviços** + CTA “Falar comigo”. “Início” é redundante com a logo.
- **Indicador ativo assinado:** o item da seção atual ganha `<` `>` roxos que deslizam para dentro (120ms), em vez de sublinhado. É o motivo da marca aplicado à navegação.
- Seção ativa via IntersectionObserver; `aria-current="true"` no link ativo.
- Dropdown “Trajetória”: abre por **clique** (não só hover, porque tablets de 1024px são touch), com `aria-expanded`, Esc fecha e foco devolvido ao botão.
- Header: transparente sobre a hero; após 24px de rolagem, ganha `--black` 85% + `backdrop-filter: blur(12px)` + `--line` inferior.
- Mobile (< 1024): painel em tela cheia, links grandes (Lexend 400, 2rem), foco movido para o primeiro link, scroll do body travado, Esc fecha.

---

## 7. Conteúdo provisório (regra)

- Os textos de interface **não falam sobre o próprio site em construção** (“estrutura”, “em breve”, “texto provisório”, “nenhum projeto fictício foi publicado”). Isso é nota interna aparecendo para o visitante e impede avaliar o layout com conteúdo real.
- Em vez disso: entradas de exemplo **com comprimento realista** e marcadas como placeholder no dado (`placeholder: true`), com texto obviamente genérico (`"[Nome do projeto]"`, `"[Instituição]"`, `"AAAA"`).
- Um selo visual “PLACEHOLDER” aparece **somente em desenvolvimento** (`import.meta.env.DEV`). Em build de produção, entradas `placeholder: true` são filtradas, e a seção some ou mostra um estado vazio digno.

---

## 8. Decisões pendentes da Livia (⚑)

1. **Roxo da logo:** a logo usa `#8C52FF` e o briefing pede `#a700f1`. Opções: (a) recolorir a logo para `#a700f1` (consistência total); (b) manter `#8C52FF` só na logo; (c) adotar `#8C52FF` no site todo (tem ~4,8:1 sobre preto, mais legível). **Recomendação: (a)**, desde que você aprove a alteração.
2. **Foto pessoal** na hero ou em “Sobre”?
3. **Arquivo-fonte da logo** (SVG/PDF do Canva ou o nome da fonte) e caminho do gato final (GLB autoral ou modelo licenciado).
4. ~~Hero como tag JSX ou título em linguagem natural?~~ ✅ Resolvido: bloco “I am Livia / Full Stack Developer” da referência (§4). ⚑ Pendente: o site todo será em inglês?
5. Aprovar o agrupamento **Trajetória** (Experiência + Formação + Cursos).
6. **Gato — cor dos olhos:** âmbar como na referência (recomendado) ou roxo? (Acessórios: ✅ resolvido, nenhum.)
7. ~~Gato — 3D completo ou 2.5D?~~ ✅ Resolvido: **2.5D**.
