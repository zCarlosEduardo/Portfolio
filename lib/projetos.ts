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
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", // Pode usar emoji ou uma URL de imagem
    titulo: "Coin System",
    descricao: "Sistema de gamificação para gestão de incentivos corporativos. Permite que colaboradores acumulem moedas virtuais ao completarem metas e as troquem por recompensas.",
    link: "",
    github: "https://github.com/zCarlosEduardo/coin-sys",
    tecnologias: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Docker"]
  },
  {
    icon: "🚘",
    titulo: "Black Ancore",
    descricao: "Landing page promocional desenvolvida para campanha de Black Friday. Design moderno, responsivo e otimizado para alta conversão de visitantes em leads.",
    link: "", // https://black.ancore.app
    github: "https://github.com/zCarlosEduardo/black-ancore",
    tecnologias: ["Next.js", "Docker", "Tailwind CSS"]
  },
  {
    icon: "💬",
    titulo: "Velo - Automação Empresarial",
    descricao: "Landing page institucional para empresa de automação empresarial. Apresenta soluções, cases de sucesso e formulário de captação de leads qualificados.",
    link: "",
    github: "https://github.com/zCarlosEduardo/landing-page",
    tecnologias: ["Next.js", "Tailwind CSS", "Docker"]
  }
];

export const getProjetoById = (index: number) => {
  return projetos[index];
};

export const totalProjetos = projetos.length;