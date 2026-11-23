export type Snippet = { file: string; language: string; code: string }
export type Token = { text: string; kind: string }

// Trechos de código digitados na hero; o conteúdo vem do que já está no portfólio.
export const snippets: Snippet[] = [
  {
    file: 'livia.ts',
    language: 'TypeScript',
    code: `const livia = {
  role: 'Full Stack Developer',
  studying: 'Systems Analysis',
  stack: ['JavaScript', 'Python', 'Node.js'],
  focus: ['web', 'automation', 'AI'],
}

export default livia`,
  },
  {
    file: 'project.ts',
    language: 'TypeScript',
    code: `// every idea starts small
function buildProject(idea: string) {
  const plan = design(idea)
  const app = develop(plan)
  return deploy(app)
}`,
  },
  {
    file: 'automate.py',
    language: 'Python',
    code: `def automate(task):
    flow = map_process(task)
    result = run_with_ai(flow)
    return result

automate("daily reports")`,
  },
]

const KEYWORDS = /^(const|let|function|return|export|default|def|import|from|string)$/
const TOKEN = /(\/\/.*|#.*)|('[^']*'?|"[^"]*"?)|(\b[A-Za-z_]\w*\b)|(\s+)|([^\sA-Za-z_'"]+)/g

// Destaque de sintaxe simples: comentários, strings, palavras-chave, funções e chaves de objeto.
export function tokenize(code: string): Token[] {
  const tokens: Token[] = []
  for (const match of code.matchAll(TOKEN)) {
    const [text, comment, str, word] = match
    const rest = code.slice((match.index ?? 0) + text.length)
    let kind = 'plain'
    if (comment) kind = 'comment'
    else if (str) kind = 'string'
    else if (word && KEYWORDS.test(word)) kind = 'keyword'
    else if (word && /^\s*\(/.test(rest)) kind = 'function'
    else if (word && /^\s*:/.test(rest)) kind = 'property'
    else if (!word && !/^\s+$/.test(text)) kind = 'punct'
    tokens.push({ text, kind })
  }
  return tokens
}
