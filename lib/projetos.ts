export interface Projeto {
    icon: string;
    titulo: string;
    descricao: string;
    link: string;
    github?: string;
    tecnologias: string[];
}

export const projetos: Projeto[] = [
  {
    icon: "🚀", // Pode usar emoji ou uma URL de imagem
    titulo: "Coin System",
    descricao: "Sistema de gamificação para gestão de incentivos corporativos. Permite que colaboradores acumulem moedas virtuais ao completarem metas e as troquem por recompensas.",
    link: "#",
    github: "https://github.com/seu-usuario/ecommerce",
    tecnologias: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"]
  },
  {
    icon: "📊",
    titulo: "Black Ancore",
    descricao: "Landing page promocional desenvolvida para campanha de Black Friday. Design moderno, responsivo e otimizado para alta conversão de visitantes em leads.",
    link: "#",
    github: "https://github.com/seu-usuario/dashboard",
    tecnologias: ["React", "Node.js", "Docker", "PostgreSQL"]
  },
  {
    icon: "💬",
    titulo: "Velo - Automação Empresarial",
    descricao: "Landing page institucional para empresa de automação empresarial. Apresenta soluções, cases de sucesso e formulário de captação de leads qualificados.",
    link: "#",
    tecnologias: ["Next.js", "WebSocket", "Prisma", "Tailwind CSS"]
  }
];

export const getProjetoById = (index: number) => {
  return projetos[index];
};

export const totalProjetos = projetos.length;