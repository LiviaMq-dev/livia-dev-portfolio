# Revisão #2 — estado em 2026-11-23

> Revisor: Claude. Base: `490fe97` + alterações não commitadas (App, SkillsAccordion, portfolio, layout, main, CertificatesGallery, EducationList, certificates.css, education.css).

## Como foi testado

- **Navegador real (Chrome headless via DevTools Protocol)**, com emulação de dispositivo em **360, 390, 768, 1024 e 1440px** (`mobile: true` e touch abaixo de 1024). Screenshots de página inteira em 390, 768 e 1440.
- Medição automática: `scrollWidth` × `clientWidth`, elementos fora da viewport, alvos de toque < 24px e erros de console.
- Limites: sem WebGL/GPU no headless; sem teste com leitor de tela; sem dispositivo físico.

## Resultado das medições [comprovado]

| Largura | Rolagem horizontal | Erros de console |
|---|---|---|
| 360 / 390 / 768 / 1024 / 1440 | **Nenhuma** ✅ | Só `favicon.ico` 404 |

Alvos de toque abaixo de 24px de altura em todas as larguras: logo do header (93×19), os 5 links **“View certificate”** (130×16) e **“Voltar ao topo”** (93×16).

---

## Críticos

| # | Problema | Evidência | Correção |
|---|---|---|---|
| C1 | **O gato não aparece no site.** `CatStage` existe, mas não é importado em lugar nenhum. A hero fica com a metade direita vazia no desktop e no tablet. | `grep CatStage src` → só o próprio arquivo; screenshots 1440/768 | Implementar o gato 2.5D (direção §5, decisão 2.5D) na coluna direita da hero. Até lá, usar ao menos o fallback SVG para não deixar o buraco. |
| C2 | **Seção Contato é toda placeholder** e o fundo é roxo chapado: “Os canais de contato serão adicionados…”, “Em breve”, “08 / CONTATO”. É o fim da página e o principal objetivo de conversão. | screenshot 1440, `App.tsx:48` | Fundo preto, e-mail real + botão copiar, links reais. Enquanto não houver dados, ocultar a seção em produção. |
| C3 | **Textos internos visíveis ao visitante:** “Links e currículo serão ativados quando você fornecer os endereços e o arquivo.” (hero), “Espaço para imagem” (Sobre), “A confirmar” ×6 e “Possibilidades iniciais a confirmar antes de divulgar como oferta.” (Serviços). | screenshots | Mover para comentário/dev-only (`import.meta.env.DEV`). Ocultar Serviços e a imagem do Sobre até haver conteúdo. |

## Importantes

| # | Problema | Correção |
|---|---|---|
| I1 | **Idioma misturado:** hero, Sobre, Skills, Projetos (título) e Certificados em inglês; nav, Experiência, Formação, Serviços, Contato e eyebrows (“03 / EXPERIÊNCIA”) em português. `<html lang="pt-BR">`. | Decisão da Livia (pendente desde a revisão 1). Definir um idioma, ou implementar troca PT/EN. |
| I2 | **Fonte da hero ≠ referência pedida.** Usa Space Mono (monoespaçada); a referência da Livia é sans bold (Open Sans/Roboto). O texto virou “Hi, I’m Livia” (a referência diz “I am Livia”). O degradê (`#9853eb → #b38aef`) é mais fraco que o da referência (`#885bf2 → #cab7f7`). | Confirmar com a Livia se a troca foi pedida por ela. Se não foi, seguir a referência (direção §4). |
| I3 | **Máquina de escrever leva ~6s** para completar a hero (68ms/caractere + pausas de 340ms + 30ms/caractere no subtítulo). Na captura com 4,5s, o subtítulo ainda estava pela metade. O espaço é reservado (sem CLS ✅), mas quem chega lê frases incompletas. | Reduzir para ≤ 2s no total, ou animar só o título e mostrar o subtítulo de imediato. |
| I4 | **Eyebrow `0X / SEÇÃO` + uma palavra destacada em roxo em todos os títulos** (“**About** Me”, “**Technologies** and tools.”, “**My** projects”, “**My academic** journey.”). Mesmo padrão repetido 7 vezes. Os eyebrows em roxo pequeno têm ~3,9:1 (reprova AA). | Já apontado na revisão 1 (I1/C3). Remover os eyebrows ou usar `#cf73f7`; variar o tratamento dos títulos. |
| I5 | **Header em pílula lilás clara** (`rgba(201,166,227,.84)`): é o elemento mais claro da página e inverte a logo (texto escuro em vez de branco). Puxa da Ref. 2 (rosa) e briga com o “preto predominante” do briefing. | Header escuro (`#000` 85% + blur) com a logo original, branca. |
| I6 | **Fundos tingidos de roxo** (`#0e0a14`-ish na hero e no Sobre), alternando com `#000` e `#0b0b0d`: três pretos diferentes. | Preto `#000` como base; uma única superfície neutra para alternar. |
| I7 | Alvos de toque < 24px (ver medições). | `padding-block` nos links “View certificate”, “Voltar ao topo” e na logo. |
| I8 | **Skills:** “C# C#” duplicado (ícone em texto + label); chips sem ícone (Orca, BPMN, PopSQL, Microsoft Office) ao lado de chips com logo colorido. Todos os acordeões abertos por padrão, então o acordeão não acrescenta nada. | Ícone monocromático consistente (ou nenhum) e corrigir o C#. Decidir: lista aberta ou acordeão fechado. |
| I9 | Projetos: título centralizado enquanto todos os outros são alinhados à esquerda. O carrossel no mobile mostra um card cortado (affordance ok), mas no desktop são 5 pontos para 6 projetos visíveis em grupos de 3: verificar a paginação. | Alinhar à esquerda; conferir a contagem de páginas. |
| I10 | `favicon.ico` 404; `og:image` ainda em SVG (revisão 1, C5). | Favicon e OG em PNG. |

## Aprovado ✅

- **Responsividade estrutural:** nenhuma rolagem horizontal nas 5 larguras; menu hambúrguer abaixo de 1024.
- **Conteúdo real** em Experiência, Formação, Certificados e Projetos, sem dados inventados.
- **Timeline de experiência** clara, com datas legíveis e boa hierarquia.
- **Cards de certificado** organizados (curso, instituição, horas, tags, ano), inspirados na Ref. 2 sem copiar a paleta.
- **Projetos com screenshots reais** e links.
- Hero: botões desabilitados de verdade (`disabled` + `aria-label`), o que respeita a regra de não simular funcionalidades. `sr-only` com o texto completo para leitores de tela, reduced motion e escuta de mudança da preferência.
- O CSS agora está separado por seção (`hero.css`, `skills.css`…), uma melhoria em relação à revisão 1.

## Prioridade sugerida ao Codex

1. C1 (gato 2.5D na hero), C3 (remover textos internos), C2 (contato).
2. Aguardar a Livia em I1 (idioma) e I2 (fonte/texto da hero) antes de mexer.
3. I3, I5, I6, I7, I8, I10.
