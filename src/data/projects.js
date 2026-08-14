export const projects = [
  {
    id: 1,
    title: 'SESI Manutenção Osasco',
    description:
      'Sistema web de gerenciamento de estoque desenvolvido para otimizar o controle de materiais da manutenção do SESI Osasco. A plataforma permite cadastrar materiais, registrar entradas e saídas, monitorar estoque disponível, gerenciar categorias e acompanhar movimentações de forma prática e eficiente.',
    technologies: ['React', 'JavaScript', 'Material UI', 'Tailwind CSS', 'Node.js', 'Supabase'],
    github: 'https://github.com/camposdevs/sesi-manutencao-osasco.git',
    demo: 'em desenvolvimento',
    image: null,
    featured: true,
    stars: 0,
    forks: 0,
    categories: ['fullstack', 'react', 'nodejs'],
    status: 'Em desenvolvimento',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },

  {
    id: 2,
    title: 'API E-commerce de Camisas Tailandesas',
    description:
      'API RESTful desenvolvida em Node.js com Express e Supabase/MongoDB para gerenciamento completo de e-commerce. Contém rotas para controle de estoque, autenticação, catálogo de produtos, carrinho de compras e gestão de pedidos.',
    technologies: ['Node.js', 'Express', 'JavaScript', 'Supabase'],
    github: 'https://github.com/camposdevs/api_ecommerce.git',
    demo: 'Em desenvolvimento',
    image: null,
    featured: true,
    stars: 0,
    forks: 0,
    categories: ['backend', 'nodejs', 'fullstack'],
    status: 'Em desenvolvimento',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },


  {
    id: 3,
    title: 'Calculadora de Média Escolar',
    description:
      'Aplicação mobile desenvolvida em Flutter para cálculo de média escolar e verificação da situação acadêmica do aluno. Recursos incluem validação de notas (0 a 10), identificação de maior e menor nota, cálculo de pontos faltantes para aprovação e feedback em tempo real via SnackBar.',
    technologies: ['Flutter', 'Dart'],
    github: 'https://github.com/camposdevs/calculadora_media.git',
    demo: 'Em desenvolvimento',
    image: null,
    featured: false,
    stars: 0,
    forks: 0,
    categories: ['flutter', 'frontend'],
    status: 'Concluído',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  }

];

export const projectFilters = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'React', value: 'react' },
  { label: 'Node.js', value: 'nodejs' },
  { label: 'Backend', value: 'backend' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Flutter', value: 'flutter' },
  { label: 'Python', value: 'python' },
  { label: 'DevOps', value: 'devops' },
];
