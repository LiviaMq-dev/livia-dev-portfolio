export type Education = { program: string; qualification: string; institution: string; period: string; status: string }
export type Experience = { role: string; company: string; period: string; description: string }
export type Certificate = { title: string; issuer: string; completed: string; hours: string; topics: string[]; document: string; verificationUrl?: string }
export type Service = { id: string; title: string; summary: string; includes: string[]; tools: string[] }
export type Project = {
  title: string
  summary: string
  period: string
  image: string
  imageAlt: string
  gallery?: { src: string; alt: string }[]
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
    { label: 'Home', href: '#inicio' },
    { label: 'About', href: '#sobre' },
    { label: 'Skills', href: '#habilidades' },
    { label: 'Experience', href: '#experiencia' },
    { label: 'Projects', href: '#projetos' },
    { label: 'Courses', href: '#certificacoes' },
    { label: 'Education', href: '#formacao' },
    { label: 'Services', href: '#servicos' },
    { label: 'Contact', href: '#contato' },
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
      period: 'Projeto acadêmico',
      image: '/projects/bibliotech.png',
      imageAlt: 'Tela de visão geral do Bibliotech, com menu lateral e indicadores do acervo',
      gallery: [
        { src: '/projects/bibliotech-management.png', alt: 'Tela de Gestão do Bibliotech com acessos para cadastro, catálogo e empréstimos' },
        { src: '/projects/bibliotech-catalog.png', alt: 'Tela de Acervo do Bibliotech com indicadores e catálogo de livros' },
        { src: '/projects/bibliotech-reports.png', alt: 'Tela de Relatórios do Bibliotech com opções de análises da biblioteca' },
        { src: '/projects/bibliotech-help.png', alt: 'Central de ajuda do Bibliotech com funções do sistema e links para tutoriais' },
        { src: '/projects/bibliotech-about.png', alt: 'Tela Sobre o Bibliotech com apresentação e créditos da equipe' },
        { src: '/projects/bibliotech-dark.png', alt: 'Visão geral do Bibliotech com o tema escuro ativado' },
        { src: '/projects/bibliotech-splash.png', alt: 'Tela de abertura azul do aplicativo Bibliotech' },
      ],
      details: [
        'Aplicativo desktop para gestão de salas de leitura escolares, com controle de acervo, empréstimos, devoluções e relatórios. Funciona offline no Windows.',
        'A visão geral reúne indicadores do acervo, empréstimos ativos e devoluções atrasadas, além de atalhos para as principais funcionalidades.',
        'Atuei no desenvolvimento do front-end com HTML, CSS e JavaScript, construindo telas e integrando-as ao Electron. Projeto acadêmico em equipe na Universidade Cruzeiro do Sul.',
        'A prévia web permite explorar as telas e o visual do projeto; os recursos de cadastro e banco de dados ficam disponíveis apenas no aplicativo desktop.',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Electron', 'Node.js', 'SQLite', 'Git', 'GitHub'],
      href: 'https://liviamq-dev.github.io/Bibliotech/',
    },
    {
      title: 'Site institucional responsivo',
      summary: 'Site para profissional de fisioterapia e reabilitação animal.',
      period: 'Jul 2026',
      image: '/projects/site-institucional.png',
      imageAlt: 'Página inicial do site de reabilitação animal com chamada principal e foto de cachorro',
      gallery: [
        { src: '/projects/site-institucional-indicacoes.png', alt: 'Página de indicações para fisioterapia e reabilitação animal com cartões de cães e gato' },
        { src: '/projects/site-institucional-servicos.png', alt: 'Página de serviços de fisioterapia animal com quatro tratamentos em cartões' },
      ],
      details: [
        'Desenvolvimento de site institucional responsivo para profissional de fisioterapia e reabilitação animal, com identidade visual personalizada e navegação intuitiva.',
        'O projeto inclui otimização para dispositivos móveis, boas práticas de SEO e integração com o Google Search Console para acompanhar desempenho e indexação.',
      ],
      technologies: ['Design responsivo', 'SEO', 'Google Search Console'],
      href: 'https://dra-isabellaguimaraesvet.netlify.app/',
    },
    {
      title: 'MindOver',
      summary: 'Jogo de plataforma 2D com ação, aventura e desafios ligados às emoções.',
      period: 'TCC em grupo',
      image: '/projects/mindover.png',
      imageAlt: 'Cena do jogo MindOver em uma floresta, com a personagem diante de uma criatura',
      gallery: [
        { src: '/projects/mindover-intro.png', alt: 'Tela inicial ilustrada do MindOver, com um computador e objetos sobre a mesa' },
        { src: '/projects/mindover-castle.png', alt: 'Cena do MindOver com a personagem diante de um castelo e outra personagem' },
        { src: '/projects/mindover-forest.png', alt: 'Fase de floresta do MindOver com plataformas e um obstáculo suspenso' },
      ],
      details: [
        'Jogo de plataforma 2D desenvolvido em equipe como Trabalho de Conclusão de Curso. Na história, quatro desenvolvedores são transportados para dentro de um computador e enfrentam desafios relacionados às próprias emoções.',
        'O projeto reuniu desenvolvimento de jogos, programação e trabalho em equipe.',
      ],
      technologies: ['Jogo 2D', 'Programação', 'Trabalho em equipe'],
      href: 'https://mura-173.itch.io/mindover',
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
        'A prévia web apresenta as telas do projeto. A detecção por IA, o cadastro e os relatórios com dados reais dependem do servidor Flask.',
      ],
      technologies: ['Python', 'Flask', 'YOLOv8', 'OpenCV', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
      href: 'https://liviamq-dev.github.io/camcore-web-preview/',
    },
    {
      title: 'Calculadora',
      summary: 'Calculadora web responsiva com interface adaptável e tratamento de erros.',
      period: 'Fev 2026',
      image: '/projects/calculadora.png?v=de53742',
      imageAlt: 'Calculadora clara com teclas arredondadas e visor digital',
      details: [
        'Calculadora web responsiva desenvolvida com HTML, CSS e JavaScript, com interface adaptável para desktop, tablet e celular.',
        'Implementa operações matemáticas, porcentagem, ponto decimal, limpar e apagar o último caractere. Inclui tratamento de divisão por zero e operações indefinidas.',
        'O desenvolvimento envolveu manipulação do DOM, eventos de clique, controle de fluxo e ajustes de experiência para dispositivos móveis.',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'DOM', 'Design responsivo'],
      href: 'https://liviamq-dev.github.io/Calculator/',
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
  certifications: [
    {
      title: 'Formação Inteligência Artificial: Do Zero ao Avançado',
      issuer: 'Udemy',
      completed: 'Nov 17, 2026',
      hours: '24.5 hours',
      topics: ['AI', 'Fundamentals', 'Advanced'],
      document: '/certificates/ai-udemy.pdf',
      verificationUrl: 'https://ude.my/UC-49ff90f9-0a6a-4054-bcae-03a85ff239f2',
    },
    {
      title: 'Web Frontend Fundamentos: HTML5, CSS3, JavaScript + 10 Projetos',
      issuer: 'Udemy',
      completed: 'Nov 10, 2026',
      hours: '132.5 hours',
      topics: ['HTML5', 'CSS3', 'JavaScript', 'Projects'],
      document: '/certificates/web-frontend-udemy.pdf',
      verificationUrl: 'https://ude.my/UC-a24a0e5a-8cad-4eaa-a8fd-3fee6b00f9e5',
    },
    {
      title: 'Banco de Dados SQL do Zero ao Avançado + Projetos Reais',
      issuer: 'Udemy',
      completed: 'Feb 22, 2026',
      hours: '8 hours',
      topics: ['SQL', 'Databases', 'Projects'],
      document: '/certificates/sql-udemy.pdf',
      verificationUrl: 'https://ude.my/UC-7e4df31d-034b-4382-aed2-e7c8a6685b25',
    },
    {
      title: 'Jornada Python',
      issuer: 'Hashtag Treinamentos',
      completed: 'Jan 15, 2026',
      hours: '8 hours',
      topics: ['Python', 'Programming'],
      document: '/certificates/jornada-python.jpg',
    },
    {
      title: 'Python - Basic Module',
      issuer: 'Huawei Talent Online',
      completed: 'Mar 3, 2025',
      hours: '32 hours',
      topics: ['Python'],
      document: '/certificates/python-huawei.pdf',
    },
  ] as Certificate[],
  education: [
    {
      program: 'Análise e Desenvolvimento de Sistemas',
      qualification: 'Tecnólogo',
      institution: 'Universidade Cruzeiro do Sul (UNICSUL)',
      period: '2025 — 2026',
      status: '4º semestre',
    },
    {
      program: 'Programação de Jogos Digitais',
      qualification: 'Ensino médio técnico',
      institution: 'ETEC Professor Adhemar Batista Heméritas',
      period: '2022 — 2024',
      status: 'Concluído',
    },
  ] as Education[],
  // Serviços em avaliação: descrições de escopo editáveis, ainda não confirmadas como oferta pela Livia.
  services: [
    { id: 'websites', title: 'Website development', summary: 'Responsive websites for businesses and professionals, from single landing pages to complete institutional sites.', includes: ['Layouts that adapt to mobile, tablet and desktop', 'Basic SEO and performance setup', 'Contact channels and social links integrated'], tools: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'Elementor'] },
    { id: 'portfolios', title: 'Portfolio creation', summary: 'Personal sites that present your work, background and contact channels with a clear visual identity.', includes: ['Sections for projects, courses and experience', 'Your visual identity applied to the layout', 'Content structure that is easy to update'], tools: ['HTML5', 'CSS3', 'JavaScript', 'Canva'] },
    { id: 'automation', title: 'Process automation', summary: 'Repetitive tasks turned into automated flows, mapped clearly before anything is built.', includes: ['Process mapping with BPMN', 'Automated workflows with n8n', 'Notifications and scheduled routines'], tools: ['n8n', 'BPMN', 'Python'] },
    { id: 'integrations', title: 'System integrations', summary: 'Connecting the tools you already use so data moves between them without manual copying.', includes: ['Integrations through APIs and webhooks', 'Data synchronization between platforms', 'Clear records of what was sent and when'], tools: ['n8n', 'Node.js', 'Python', 'SQL'] },
    { id: 'ai', title: 'AI-powered solutions', summary: 'Practical use of AI assistants in everyday work, from support tasks to document handling.', includes: ['AI assistants for support and internal tasks', 'Content and document automation', 'Prompt and workflow design'], tools: ['Claude', 'Codex', 'Python'] },
    { id: 'tools', title: 'Custom tools', summary: 'Small internal systems built around a specific need, such as registries, forms and simple dashboards.', includes: ['Requirements gathered with you first', 'Database modeling', 'Simple, documented interfaces'], tools: ['Python', 'Java', 'C#', 'MySQL'] },
  ] as Service[],
  contacts: { email: 'biolivia1206@icloud.com', github: '', linkedin: '', instagram: '', whatsapp: '5511971017655' },
  contactReasons: ['Project quote', 'Job opportunity', 'Partnership', 'Question', 'Other'],
}
