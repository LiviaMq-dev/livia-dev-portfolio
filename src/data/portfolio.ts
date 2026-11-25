import type { Text } from '../i18n/I18nProvider'

// Campos do tipo Text aceitam uma string fixa (nomes, siglas) ou { en, pt } para cada idioma.
export type Education = { program: Text; qualification: Text; institution: string; period: string; status: Text; done: boolean }
export type Experience = { role: Text; company: string; kind?: Text; period: Text; description: Text }
export type Certificate = { title: string; issuer: string; completed: string; hours: number; topics: Text[]; document: string; verificationUrl?: string }
export type Service = { id: string; title: Text; summary: Text; includes: Text[]; tools: string[] }
export type Project = {
  title: Text
  summary: Text
  period: Text
  image: string
  imageAlt: Text
  gallery?: { src: string; alt: Text }[]
  details: Text[]
  technologies: Text[]
  href?: string
}

// Apresentação e ferramentas fornecidas pela Livia; as demais áreas ainda usam dados provisórios.
export const portfolio = {
  about: [
    {
      en: 'I’m Lívia, a Systems Analysis and Development student and a Full Stack developer in training. I focus on web development and digital solutions, applying front-end and back-end knowledge through practical projects and continuous learning.',
      pt: 'Sou a Lívia, estudante de Análise e Desenvolvimento de Sistemas e desenvolvedora Full Stack em formação. Meu foco é desenvolvimento web e soluções digitais, aplicando conhecimentos de front-end e back-end em projetos práticos e aprendizado contínuo.',
    },
    {
      en: 'I am currently pursuing a Technology degree in Systems Analysis and Development at Universidade Cruzeiro do Sul (UNICSUL), São Paulo – Brazil, and I complement my education with technical courses and hands-on projects. I am seeking opportunities to apply my skills in real-world projects, grow technically, and contribute with efficient and well-structured solutions in the technology field.',
      pt: 'Atualmente curso Tecnólogo em Análise e Desenvolvimento de Sistemas na Universidade Cruzeiro do Sul (UNICSUL), em São Paulo, e complemento minha formação com cursos técnicos e projetos práticos. Busco oportunidades para aplicar minhas habilidades em projetos reais, crescer tecnicamente e contribuir com soluções eficientes e bem estruturadas na área de tecnologia.',
    },
  ] as Text[],
  navigation: [
    { label: { en: 'Home', pt: 'Início' }, href: '#inicio' },
    { label: { en: 'About', pt: 'Sobre' }, href: '#sobre' },
    { label: { en: 'Skills', pt: 'Habilidades' }, href: '#habilidades' },
    { label: { en: 'Experience', pt: 'Experiência' }, href: '#experiencia' },
    { label: { en: 'Projects', pt: 'Projetos' }, href: '#projetos' },
    { label: { en: 'Courses', pt: 'Cursos' }, href: '#certificacoes' },
    { label: { en: 'Education', pt: 'Formação' }, href: '#formacao' },
    { label: { en: 'Services', pt: 'Serviços' }, href: '#servicos' },
    { label: { en: 'Contact', pt: 'Contato' }, href: '#contato' },
  ] as { label: Text; href: string }[],
  skillAreas: [
    { id: 'frontend', label: { en: 'Front-end development', pt: 'Desenvolvimento front-end' }, tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'WordPress', 'Elementor'] },
    { id: 'backend', label: { en: 'Back-end development', pt: 'Desenvolvimento back-end' }, tools: ['Python', 'Node.js', 'Java', 'C#'] },
    { id: 'ai', label: { en: 'Artificial intelligence', pt: 'Inteligência artificial' }, tools: ['Codex', 'Claude', 'Orca'] },
    { id: 'automation', label: { en: 'Automation and integrations', pt: 'Automações e integrações' }, tools: ['n8n', 'BPMN'] },
    { id: 'devops', label: { en: 'DevOps and cloud', pt: 'DevOps e cloud' }, tools: ['Git', 'GitHub'] },
    { id: 'database', label: { en: 'Databases', pt: 'Banco de dados' }, tools: ['SQL', 'MySQL', 'PopSQL'] },
    { id: 'platforms', label: { en: 'Tools and platforms', pt: 'Ferramentas e plataformas' }, tools: ['Unity', 'Blender', 'Notion', 'Canva', 'ClickUp', 'Microsoft Office'] },
  ] as { id: string; label: Text; tools: string[] }[],
  projects: [
    {
      title: 'Bibliotech',
      summary: {
        en: 'Desktop app for managing school reading rooms, book collections and loans.',
        pt: 'Aplicativo desktop para gestão de salas de leitura escolares, acervo e empréstimos.',
      },
      period: { en: 'Academic project', pt: 'Projeto acadêmico' },
      image: '/projects/bibliotech.png',
      imageAlt: { en: 'Bibliotech overview screen with side menu and collection indicators', pt: 'Tela de visão geral do Bibliotech, com menu lateral e indicadores do acervo' },
      gallery: [
        { src: '/projects/bibliotech-management.png', alt: { en: 'Bibliotech management screen with shortcuts for registration, catalog and loans', pt: 'Tela de Gestão do Bibliotech com acessos para cadastro, catálogo e empréstimos' } },
        { src: '/projects/bibliotech-catalog.png', alt: { en: 'Bibliotech collection screen with indicators and book catalog', pt: 'Tela de Acervo do Bibliotech com indicadores e catálogo de livros' } },
        { src: '/projects/bibliotech-reports.png', alt: { en: 'Bibliotech reports screen with library analysis options', pt: 'Tela de Relatórios do Bibliotech com opções de análises da biblioteca' } },
        { src: '/projects/bibliotech-help.png', alt: { en: 'Bibliotech help center with system features and tutorial links', pt: 'Central de ajuda do Bibliotech com funções do sistema e links para tutoriais' } },
        { src: '/projects/bibliotech-about.png', alt: { en: 'Bibliotech About screen with presentation and team credits', pt: 'Tela Sobre o Bibliotech com apresentação e créditos da equipe' } },
        { src: '/projects/bibliotech-dark.png', alt: { en: 'Bibliotech overview with dark theme enabled', pt: 'Visão geral do Bibliotech com o tema escuro ativado' } },
        { src: '/projects/bibliotech-splash.png', alt: { en: 'Blue splash screen of the Bibliotech app', pt: 'Tela de abertura azul do aplicativo Bibliotech' } },
      ],
      details: [
        {
          en: 'Desktop app for managing school reading rooms, with control of the book collection, loans, returns and reports. It works offline on Windows.',
          pt: 'Aplicativo desktop para gestão de salas de leitura escolares, com controle de acervo, empréstimos, devoluções e relatórios. Funciona offline no Windows.',
        },
        {
          en: 'The overview brings together collection indicators, active loans and overdue returns, plus shortcuts to the main features.',
          pt: 'A visão geral reúne indicadores do acervo, empréstimos ativos e devoluções atrasadas, além de atalhos para as principais funcionalidades.',
        },
        {
          en: 'I worked on the front-end with HTML, CSS and JavaScript, building screens and integrating them with Electron. Academic team project at Universidade Cruzeiro do Sul.',
          pt: 'Atuei no desenvolvimento do front-end com HTML, CSS e JavaScript, construindo telas e integrando-as ao Electron. Projeto acadêmico em equipe na Universidade Cruzeiro do Sul.',
        },
        {
          en: 'The web preview lets you explore the project’s screens and look; registration and database features are only available in the desktop app.',
          pt: 'A prévia web permite explorar as telas e o visual do projeto; os recursos de cadastro e banco de dados ficam disponíveis apenas no aplicativo desktop.',
        },
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Electron', 'Node.js', 'SQLite', 'Git', 'GitHub'],
      href: 'https://liviamq-dev.github.io/Bibliotech/',
    },
    {
      title: { en: 'Responsive institutional website', pt: 'Site institucional responsivo' },
      summary: {
        en: 'Website for an animal physiotherapy and rehabilitation professional.',
        pt: 'Site para profissional de fisioterapia e reabilitação animal.',
      },
      period: { en: 'Jul 2026', pt: 'Jul 2026' },
      image: '/projects/site-institucional.png',
      imageAlt: { en: 'Home page of the animal rehabilitation website with main headline and a dog photo', pt: 'Página inicial do site de reabilitação animal com chamada principal e foto de cachorro' },
      gallery: [
        { src: '/projects/site-institucional-indicacoes.png', alt: { en: 'Page about indications for animal physiotherapy and rehabilitation with dog and cat cards', pt: 'Página de indicações para fisioterapia e reabilitação animal com cartões de cães e gato' } },
        { src: '/projects/site-institucional-servicos.png', alt: { en: 'Animal physiotherapy services page with four treatments in cards', pt: 'Página de serviços de fisioterapia animal com quatro tratamentos em cartões' } },
      ],
      details: [
        {
          en: 'Development of a responsive institutional website for an animal physiotherapy and rehabilitation professional, with a custom visual identity and intuitive navigation.',
          pt: 'Desenvolvimento de site institucional responsivo para profissional de fisioterapia e reabilitação animal, com identidade visual personalizada e navegação intuitiva.',
        },
        {
          en: 'The project includes mobile optimization, SEO best practices and integration with Google Search Console to track performance and indexing.',
          pt: 'O projeto inclui otimização para dispositivos móveis, boas práticas de SEO e integração com o Google Search Console para acompanhar desempenho e indexação.',
        },
      ],
      technologies: [{ en: 'Responsive design', pt: 'Design responsivo' }, 'SEO', 'Google Search Console'],
      href: 'https://dra-isabellaguimaraesvet.netlify.app/',
    },
    {
      title: 'MindOver',
      summary: {
        en: '2D platform game with action, adventure and challenges tied to emotions.',
        pt: 'Jogo de plataforma 2D com ação, aventura e desafios ligados às emoções.',
      },
      period: { en: 'Group final project', pt: 'TCC em grupo' },
      image: '/projects/mindover.png',
      imageAlt: { en: 'MindOver game scene in a forest, with the character facing a creature', pt: 'Cena do jogo MindOver em uma floresta, com a personagem diante de uma criatura' },
      gallery: [
        { src: '/projects/mindover-intro.png', alt: { en: 'Illustrated MindOver title screen with a computer and objects on the desk', pt: 'Tela inicial ilustrada do MindOver, com um computador e objetos sobre a mesa' } },
        { src: '/projects/mindover-castle.png', alt: { en: 'MindOver scene with the character in front of a castle and another character', pt: 'Cena do MindOver com a personagem diante de um castelo e outra personagem' } },
        { src: '/projects/mindover-forest.png', alt: { en: 'MindOver forest level with platforms and a hanging obstacle', pt: 'Fase de floresta do MindOver com plataformas e um obstáculo suspenso' } },
      ],
      details: [
        {
          en: '2D platform game developed as a team for our final course project. In the story, four developers are transported into a computer and face challenges related to their own emotions.',
          pt: 'Jogo de plataforma 2D desenvolvido em equipe como Trabalho de Conclusão de Curso. Na história, quatro desenvolvedores são transportados para dentro de um computador e enfrentam desafios relacionados às próprias emoções.',
        },
        {
          en: 'The project combined game development, programming and teamwork.',
          pt: 'O projeto reuniu desenvolvimento de jogos, programação e trabalho em equipe.',
        },
      ],
      technologies: [{ en: '2D game', pt: 'Jogo 2D' }, { en: 'Programming', pt: 'Programação' }, { en: 'Teamwork', pt: 'Trabalho em equipe' }],
      href: 'https://mura-173.itch.io/mindover',
    },
    {
      title: 'CamCore',
      summary: {
        en: 'Real-time helmet monitoring with AI, alerts and incident logging.',
        pt: 'Monitoramento de capacetes em tempo real com IA, alertas e registro de ocorrências.',
      },
      period: { en: 'Academic project', pt: 'Projeto acadêmico' },
      image: '/projects/camcore.png',
      imageAlt: { en: 'CamCore home page with a headline about real-time detection and a camera illustration', pt: 'Página inicial do CamCore com chamada sobre detecção em tempo real e ilustração de uma câmera' },
      details: [
        {
          en: 'CamCore analyzes webcam images to detect when a helmet is missing. If the situation lasts 3 seconds, it raises an alert, saves a photo and logs the incident with date and time. Managers can review the history in a reports dashboard.',
          pt: 'O CamCore analisa imagens da webcam para detectar a ausência de capacete. Se a situação durar 3 segundos, emite um alerta, salva uma foto e registra a ocorrência com data e hora. Gestores podem consultar o histórico em um painel de relatórios.',
        },
        {
          en: 'I worked on the front-end and the AI integration, building responsive interfaces and connecting them to the Flask backend. Academic project developed as a team.',
          pt: 'Atuei no desenvolvimento do front-end e na integração da IA, criando interfaces responsivas e conectando-as ao backend Flask. Projeto acadêmico desenvolvido em equipe.',
        },
        {
          en: 'The web preview shows the project’s screens. AI detection, registration and reports with real data depend on the Flask server.',
          pt: 'A prévia web apresenta as telas do projeto. A detecção por IA, o cadastro e os relatórios com dados reais dependem do servidor Flask.',
        },
      ],
      technologies: ['Python', 'Flask', 'YOLOv8', 'OpenCV', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
      href: 'https://liviamq-dev.github.io/camcore-web-preview/',
    },
    {
      title: { en: 'Calculator', pt: 'Calculadora' },
      summary: {
        en: 'Responsive web calculator with an adaptive interface and error handling.',
        pt: 'Calculadora web responsiva com interface adaptável e tratamento de erros.',
      },
      period: { en: 'Feb 2026', pt: 'Fev 2026' },
      image: '/projects/calculadora.png?v=de53742',
      imageAlt: { en: 'Light calculator with rounded keys and a digital display', pt: 'Calculadora clara com teclas arredondadas e visor digital' },
      details: [
        {
          en: 'Responsive web calculator built with HTML, CSS and JavaScript, with an interface that adapts to desktop, tablet and phone.',
          pt: 'Calculadora web responsiva desenvolvida com HTML, CSS e JavaScript, com interface adaptável para desktop, tablet e celular.',
        },
        {
          en: 'It implements math operations, percentage, decimal point, clear and delete last character. It handles division by zero and undefined operations.',
          pt: 'Implementa operações matemáticas, porcentagem, ponto decimal, limpar e apagar o último caractere. Inclui tratamento de divisão por zero e operações indefinidas.',
        },
        {
          en: 'The work involved DOM manipulation, click events, control flow and experience adjustments for mobile devices.',
          pt: 'O desenvolvimento envolveu manipulação do DOM, eventos de clique, controle de fluxo e ajustes de experiência para dispositivos móveis.',
        },
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'DOM', { en: 'Responsive design', pt: 'Design responsivo' }],
      href: 'https://liviamq-dev.github.io/Calculator/',
    },
  ] as Project[],
  experience: [
    {
      role: { en: 'IT Intern', pt: 'Estágio em TI' },
      company: 'Fuper',
      period: { en: 'May 2026 — Present', pt: 'Mai/2026 — atualmente' },
      description: {
        en: 'Help Desk support, workflows, systems, automation and AI solutions. Support in organizing processes, assisting users, solving technical problems and improving operational efficiency.',
        pt: 'Suporte Help Desk, fluxos, sistemas, automação e soluções com IA. Apoio na organização de processos, no atendimento a usuários, na resolução de problemas técnicos e na melhoria da eficiência operacional.',
      },
    },
    {
      role: { en: 'Young Apprentice', pt: 'Jovem aprendiz' },
      company: 'Teleperformance',
      period: { en: 'Sep 2025 — May 2026', pt: 'Set/2025 — Mai/2026' },
      description: {
        en: 'Customer service and support in solving problems related to orders, payments and deliveries.',
        pt: 'Atendimento ao cliente e suporte na resolução de problemas relacionados a pedidos, pagamentos e entregas.',
      },
    },
    {
      role: { en: 'Administrative Assistant', pt: 'Assistente Administrativo' },
      company: 'Campanhas de atendimento optométrico',
      kind: 'Freelance',
      period: { en: 'Jan 2024 — Oct 2024', pt: 'Jan/2024 — Out/2024' },
      description: {
        en: 'Support with triage and filling in patient information during optometric care campaigns.',
        pt: 'Apoio na triagem e no preenchimento das informações dos pacientes durante campanhas de atendimento optométrico.',
      },
    },
  ] as Experience[],
  certifications: [
    {
      title: 'Formação Inteligência Artificial: Do Zero ao Avançado',
      issuer: 'Udemy',
      completed: '2026-11-17',
      hours: 24.5,
      topics: [{ en: 'AI', pt: 'IA' }, { en: 'Fundamentals', pt: 'Fundamentos' }, { en: 'Advanced', pt: 'Avançado' }],
      document: '/certificates/ai-udemy.pdf',
      verificationUrl: 'https://ude.my/UC-49ff90f9-0a6a-4054-bcae-03a85ff239f2',
    },
    {
      title: 'Web Frontend Fundamentos: HTML5, CSS3, JavaScript + 10 Projetos',
      issuer: 'Udemy',
      completed: '2026-11-10',
      hours: 132.5,
      topics: ['HTML5', 'CSS3', 'JavaScript', { en: 'Projects', pt: 'Projetos' }],
      document: '/certificates/web-frontend-udemy.pdf',
      verificationUrl: 'https://ude.my/UC-a24a0e5a-8cad-4eaa-a8fd-3fee6b00f9e5',
    },
    {
      title: 'Banco de Dados SQL do Zero ao Avançado + Projetos Reais',
      issuer: 'Udemy',
      completed: '2026-02-22',
      hours: 8,
      topics: ['SQL', { en: 'Databases', pt: 'Banco de dados' }, { en: 'Projects', pt: 'Projetos' }],
      document: '/certificates/sql-udemy.pdf',
      verificationUrl: 'https://ude.my/UC-7e4df31d-034b-4382-aed2-e7c8a6685b25',
    },
    {
      title: 'Jornada Python',
      issuer: 'Hashtag Treinamentos',
      completed: '2026-01-15',
      hours: 8,
      topics: ['Python', { en: 'Programming', pt: 'Programação' }],
      document: '/certificates/jornada-python.jpg',
    },
    {
      title: 'Python - Basic Module',
      issuer: 'Huawei Talent Online',
      completed: '2025-03-03',
      hours: 32,
      topics: ['Python'],
      document: '/certificates/python-huawei.pdf',
    },
  ] as Certificate[],
  education: [
    {
      program: { en: 'Systems Analysis and Development', pt: 'Análise e Desenvolvimento de Sistemas' },
      qualification: { en: 'Associate degree in Technology', pt: 'Tecnólogo' },
      institution: 'Universidade Cruzeiro do Sul (UNICSUL)',
      period: '2025 — 2026',
      status: { en: '4th semester', pt: '4º semestre' },
      done: false,
    },
    {
      program: { en: 'Digital Game Programming', pt: 'Programação de Jogos Digitais' },
      qualification: { en: 'Technical high school', pt: 'Ensino médio técnico' },
      institution: 'ETEC Professor Adhemar Batista Heméritas',
      period: '2022 — 2024',
      status: { en: 'Completed', pt: 'Concluído' },
      done: true,
    },
  ] as Education[],
  // Serviços em avaliação: descrições de escopo editáveis, ainda não confirmadas como oferta pela Livia.
  services: [
    {
      id: 'websites',
      title: { en: 'Website development', pt: 'Desenvolvimento de sites' },
      summary: { en: 'Responsive websites for businesses and professionals, from single landing pages to complete institutional sites.', pt: 'Sites responsivos para empresas e profissionais, de landing pages a sites institucionais completos.' },
      includes: [
        { en: 'Layouts that adapt to mobile, tablet and desktop', pt: 'Layout que se adapta a celular, tablet e computador' },
        { en: 'Basic SEO and performance setup', pt: 'Configuração básica de SEO e desempenho' },
        { en: 'Contact channels and social links integrated', pt: 'Canais de contato e redes sociais integrados' },
      ],
      tools: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'Elementor'],
    },
    {
      id: 'portfolios',
      title: { en: 'Portfolio creation', pt: 'Criação de portfólios' },
      summary: { en: 'Personal sites that present your work, background and contact channels with a clear visual identity.', pt: 'Sites pessoais que apresentam seu trabalho, sua trajetória e seus contatos com uma identidade visual clara.' },
      includes: [
        { en: 'Sections for projects, courses and experience', pt: 'Seções para projetos, cursos e experiência' },
        { en: 'Your visual identity applied to the layout', pt: 'Sua identidade visual aplicada ao layout' },
        { en: 'Content structure that is easy to update', pt: 'Estrutura de conteúdo fácil de atualizar' },
      ],
      tools: ['HTML5', 'CSS3', 'JavaScript', 'Canva'],
    },
    {
      id: 'automation',
      title: { en: 'Process automation', pt: 'Automação de processos' },
      summary: { en: 'Repetitive tasks turned into automated flows, mapped clearly before anything is built.', pt: 'Tarefas repetitivas transformadas em fluxos automáticos, mapeados com clareza antes de qualquer desenvolvimento.' },
      includes: [
        { en: 'Process mapping with BPMN', pt: 'Mapeamento de processos com BPMN' },
        { en: 'Automated workflows with n8n', pt: 'Fluxos automatizados com n8n' },
        { en: 'Notifications and scheduled routines', pt: 'Notificações e rotinas agendadas' },
      ],
      tools: ['n8n', 'BPMN', 'Python'],
    },
    {
      id: 'integrations',
      title: { en: 'System integrations', pt: 'Integração de sistemas' },
      summary: { en: 'Connecting the tools you already use so data moves between them without manual copying.', pt: 'Conexão entre as ferramentas que você já usa, para os dados circularem sem cópia manual.' },
      includes: [
        { en: 'Integrations through APIs and webhooks', pt: 'Integrações por APIs e webhooks' },
        { en: 'Data synchronization between platforms', pt: 'Sincronização de dados entre plataformas' },
        { en: 'Clear records of what was sent and when', pt: 'Registro claro do que foi enviado e quando' },
      ],
      tools: ['n8n', 'Node.js', 'Python', 'SQL'],
    },
    {
      id: 'ai',
      title: { en: 'AI-powered solutions', pt: 'Soluções com inteligência artificial' },
      summary: { en: 'Practical use of AI assistants in everyday work, from support tasks to document handling.', pt: 'Uso prático de assistentes de IA no dia a dia, do suporte ao tratamento de documentos.' },
      includes: [
        { en: 'AI assistants for support and internal tasks', pt: 'Assistentes de IA para suporte e tarefas internas' },
        { en: 'Content and document automation', pt: 'Automação de conteúdo e documentos' },
        { en: 'Prompt and workflow design', pt: 'Criação de prompts e fluxos de trabalho' },
      ],
      tools: ['Claude', 'Codex', 'Python'],
    },
    {
      id: 'tools',
      title: { en: 'Custom tools', pt: 'Ferramentas personalizadas' },
      summary: { en: 'Small internal systems built around a specific need, such as registries, forms and simple dashboards.', pt: 'Pequenos sistemas internos feitos para uma necessidade específica, como cadastros, formulários e painéis simples.' },
      includes: [
        { en: 'Requirements gathered with you first', pt: 'Levantamento de requisitos com você antes de tudo' },
        { en: 'Database modeling', pt: 'Modelagem de banco de dados' },
        { en: 'Simple, documented interfaces', pt: 'Interfaces simples e documentadas' },
      ],
      tools: ['Python', 'Java', 'C#', 'MySQL'],
    },
  ] as Service[],
  contacts: { email: 'biolivia1206@icloud.com', github: '', linkedin: '', instagram: '', whatsapp: '5511971017655' },
  contactReasons: [
    { id: 'quote', label: { en: 'Project quote', pt: 'Orçamento de projeto' } },
    { id: 'job', label: { en: 'Job opportunity', pt: 'Oportunidade de trabalho' } },
    { id: 'partnership', label: { en: 'Partnership', pt: 'Parceria' } },
    { id: 'question', label: { en: 'Question', pt: 'Dúvida' } },
    { id: 'other', label: { en: 'Other', pt: 'Outro' } },
  ] as { id: string; label: Text }[],
}
