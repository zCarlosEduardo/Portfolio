import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPostman,
  SiDocker,
  SiUbuntu,
  SiDebian,
  SiGit,
  SiGithub,
  SiFigma,
} from 'react-icons/si';

export interface Tecnologia {
    name: string;
    icon: React.ComponentType;
    color: string;
    category: 'frontend' | 'backend' | 'devops';
}

export const tecnologias: Tecnologia[] = [
// Frontend
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "frontend" },
  { name: "React", icon: SiReact, color: "#149ECA", category: "frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#2F74C0", category: "frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#D4A017", category: "frontend" },
  { name: "HTML5", icon: SiHtml5, color: "#DD4B25", category: "frontend" },
  { name: "CSS3", icon: SiCss3, color: "#0C73B8", category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#0EA5E9", category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "#2D7A2E", category: "backend" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#31648C", category: "backend" },
  { name: "Prisma", icon: SiPrisma, color: "#1A202C", category: "backend" },
  { name: "REST API", icon: SiPostman, color: "#EF5B25", category: "backend" },
  
  // DevOps & Tools
  { name: "Docker", icon: SiDocker, color: "#1D8FE1", category: "devops" },
  { name: "Ubuntu", icon: SiUbuntu, color: "#E95420", category: "devops" }, 
  { name: "Debian", icon: SiDebian, color: "#A81D33", category: "devops" },
  { name: "Git", icon: SiGit, color: "#E44C30", category: "devops" },
  { name: "GitHub", icon: SiGithub, color: "#0D1117", category: "devops" },
  { name: "Figma", icon: SiFigma, color: "#D9431B", category: "devops" },
];

// Função auxiliar para pegar tecnologias por categoria
export const getTechnologiesByCategory = (category: Tecnologia['category']) => {
  return tecnologias.filter(tech => tech.category === category);
};

// Exportar todas as categorias
export const frontendTechs = getTechnologiesByCategory('frontend');
export const backendTechs = getTechnologiesByCategory('backend');
export const devopsTechs = getTechnologiesByCategory('devops');