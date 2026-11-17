export type Entry = { title: string; detail: string; meta?: string; href?: string }

// Dados provisórios: substitua somente quando Livia fornecer conteúdo verificável.
export const portfolio = {
  navigation: [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Cursos', href: '#certificacoes' },
    { label: 'Formação', href: '#formacao' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Contato', href: '#contato' },
  ],
  skillAreas: [
    'Desenvolvimento front-end', 'Desenvolvimento back-end', 'Inteligência artificial',
    'Automações e integrações', 'DevOps e cloud', 'Banco de dados', 'Ferramentas e plataformas',
  ],
  projects: [] as Entry[],
  experience: [] as Entry[],
  certifications: [] as Entry[],
  education: [] as Entry[],
  services: [
    'Desenvolvimento de sites', 'Criação de portfólios', 'Automações de processos',
    'Integrações de sistemas', 'Soluções com inteligência artificial', 'Ferramentas personalizadas',
  ],
  contacts: { email: '', github: '', linkedin: '', whatsapp: '' },
}
