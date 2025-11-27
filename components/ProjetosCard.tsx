import { Projeto } from '@/lib/projetos';
import { SiGithub, SiOpenproject } from 'react-icons/si';

interface ProjetosCardProps {
  projeto: Projeto;
}

export function ProjetosCard({ projeto }: ProjetosCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Header com ícone */}
      <div className="bg-linear-to-r from-blue-500 to-purple-600 h-32 flex items-center justify-center">
        <span className="text-6xl">{projeto.icon}</span>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col grow">
        {/* Título */}
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          {projeto.titulo}
        </h3>

        {/* Descrição */}
        <p className="text-gray-600 mb-4 grow">
          {projeto.descricao}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-4">
          {projeto.tecnologias.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <a
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-1 justify-center"
          >
            <SiOpenproject size={18} />
            <span>Ver Projeto</span>
          </a>

          {projeto.github && (
            <a
              href={projeto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors flex-1 justify-center"
            >
              <SiGithub size={18} />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}