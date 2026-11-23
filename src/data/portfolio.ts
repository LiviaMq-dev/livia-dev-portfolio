export type Entry = { title: string; detail: string; meta?: string; href?: string }
export type Experience = { role: string; company: string; period: string; description: string }
export type Project = {
  title: string
  summary: string
  period: string
  image: string
  imageAlt: string
  details: string[]
  technologies: string[]
  href?: string
}

// Apresentação e ferramentas fornecidas pela Livia; as demais áreas ainda usam dados provisórios.
export const portfolio = {
  about: [
    'I’m Lívia, a Systems Analysis and Development student and a Full Stack developer in training. I focus on web development and digital solutions, applying front-end and back-end knowledge through practical projects and continuous learning.',
    'I am currently pursuing a Technology degree in Systems Analysis and Development at Universidade Cruzeiro do Sul (UNICSUL), São Paulo – Brazil, and I complement my education with technical courses and hands-on projects. I am seeking opportunities to apply my skills in real-world projects, grow technically, and contribute with efficient and well-structured solutions in the technology field.',
  ],
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
    { id: 'frontend', label: 'Front-end development', tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'WordPress', 'Elementor'] },
    { id: 'backend', label: 'Back-end development', tools: ['Python', 'Node.js', 'Java', 'C#'] },
    { id: 'ai', label: 'Artificial intelligence', tools: ['Codex', 'Claude', 'Orca'] },
    { id: 'automation', label: 'Automation and integrations', tools: ['n8n', 'BPMN'] },
    { id: 'devops', label: 'DevOps and cloud', tools: ['Git', 'GitHub'] },
    { id: 'database', label: 'Databases', tools: ['SQL', 'MySQL', 'PopSQL'] },
    { id: 'platforms', label: 'Tools and platforms', tools: ['Unity', 'Blender', 'Notion', 'Canva', 'ClickUp', 'Microsoft Office'] },
  ],
  projects: [
    {
      title: 'Bibliotech',
      summary: 'Aplicativo desktop para gestão de salas de leitura escolares, acervo e empréstimos.',
      period: 'Ago — Nov 2026',
      image: '/projects/bibliotech.png',
      imageAlt: 'Tela de visão geral do Bibliotech, com menu lateral e indicadores do acervo',
      details: [
        'Aplicativo desktop para gestão de salas de leitura escolares, com controle de acervo, empréstimos, devoluções e relatórios. Funciona offline no Windows.',
        'A visão geral reúne indicadores do acervo, empréstimos ativos e devoluções atrasadas, além de atalhos para as principais funcionalidades.',
        'Atuei no desenvolvimento do front-end com HTML, CSS e JavaScript, construindo telas e integrando-as ao Electron. Projeto acadêmico em equipe na Universidade Cruzeiro do Sul.',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Electron', 'Node.js', 'SQLite', 'Git', 'GitHub'],
    },
    {
      title: 'Site institucional responsivo',
      summary: 'Site para profissional de fisioterapia e reabilitação animal.',
      period: 'Jul 2026',
      image: '/projects/site-institucional.png',
      imageAlt: 'Página inicial do site de reabilitação animal com chamada principal e foto de cachorro',
      details: [
        'Desenvolvimento de site institucional responsivo para profissional de fisioterapia e reabilitação animal, com identidade visual personalizada e navegação intuitiva.',
        'O projeto inclui otimização para dispositivos móveis, boas práticas de SEO e integração com o Google Search Console para acompanhar desempenho e indexação.',
      ],
      technologies: ['Design responsivo', 'SEO', 'Google Search Console'],
    },
    {
      title: 'MindOver',
      summary: 'Jogo de plataforma 2D com ação, aventura e desafios ligados às emoções.',
      period: 'TCC em grupo',
      image: '/projects/mindover.png',
      imageAlt: 'Cena do jogo MindOver em uma floresta, com a personagem diante de uma criatura',
      details: [
        'Jogo de plataforma 2D desenvolvido em equipe como Trabalho de Conclusão de Curso. Na história, quatro desenvolvedores são transportados para dentro de um computador e enfrentam desafios relacionados às próprias emoções.',
        'O projeto reuniu desenvolvimento de jogos, programação e trabalho em equipe.',
      ],
      technologies: ['Jogo 2D', 'Programação', 'Trabalho em equipe'],
      href: 'https://mura-173.itch.io/mindover',
    },
    {
      title: 'Calculadora',
      summary: 'Calculadora web responsiva com interface adaptável e tratamento de erros.',
      period: 'Fev 2026',
      image: '/projects/calculadora.png',
      imageAlt: 'Calculadora clara com teclas arredondadas e visor digital',
      details: [
        'Calculadora web responsiva desenvolvida com HTML, CSS e JavaScript, com interface adaptável para desktop, tablet e celular.',
        'Implementa operações matemáticas, porcentagem, ponto decimal, limpar e apagar o último caractere. Inclui tratamento de divisão por zero e operações indefinidas.',
        'O desenvolvimento envolveu manipulação do DOM, eventos de clique, controle de fluxo e ajustes de experiência para dispositivos móveis.',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'DOM', 'Design responsivo'],
      href: 'https://liviamq-dev.github.io/Calculator/'
    },
    {
      title: 'CamCore',
      summary: 'Monitoramento de capacetes em tempo real com IA, alertas e registro de ocorrências.',
      period: 'Projeto acadêmico',
      image: '/projects/camcore.png',
      imageAlt: 'Página inicial do CamCore com chamada sobre detecção em tempo real e ilustração de uma câmera',
      details: [
        'O CamCore analisa imagens da webcam para detectar a ausência de capacete. Se a situação durar 3 segundos, emite um alerta, salva uma foto e registra a ocorrência com data e hora. Gestores podem consultar o histórico em um painel de relatórios.',
        'Atuei no desenvolvimento do front-end e na integração da IA, criando interfaces responsivas e conectando-as ao backend Flask. Projeto acadêmico desenvolvido em equipe.',
      ],
      technologies: ['Python', 'Flask', 'YOLOv8', 'OpenCV', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
      href: 'https://github.com/mmmaryae/capacete',
    },
  ] as Project[],
  experience: [
    {
      role: 'Estágio em TI',
      company: 'Fuper',
      period: 'Mai/2026 — atualmente',
      description: 'Suporte Help Desk, fluxos, sistemas, automação e soluções com IA. Apoio na organização de processos, no atendimento a usuários, na resolução de problemas técnicos e na melhoria da eficiência operacional.',
    },
    {
      role: 'Jovem aprendiz',
      company: 'Teleperformance',
      period: 'Set/2025 — Mai/2026',
      description: 'Atendimento ao cliente e suporte na resolução de problemas relacionados a pedidos, pagamentos e entregas.',
    },
    {
      role: 'Assistente Administrativo',
      company: 'Campanhas de atendimento optométrico · Freelance',
      period: 'Jan/2024 — Out/2024',
      description: 'Apoio na triagem e no preenchimento das informações dos pacientes durante campanhas de atendimento optométrico.',
    },
  ] as Experience[],
  certifications: [] as Entry[],
  education: [] as Entry[],
  services: [
    'Desenvolvimento de sites', 'Criação de portfólios', 'Automações de processos',
    'Integrações de sistemas', 'Soluções com inteligência artificial', 'Ferramentas personalizadas',
  ],
  contacts: { email: '', github: '', linkedin: '', whatsapp: '' },
}
