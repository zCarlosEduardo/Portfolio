import { Projeto } from "@/lib/projetos";
import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjetosCardProps {
  projeto: Projeto;
  highlight?: boolean;
}

export function ProjetosCard({ projeto, highlight }: ProjetosCardProps) {
  return (
    <div className="group relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 flex flex-col h-full border border-slate-700/50 hover:border-blue-500/50 shadow-2xl hover:shadow-blue-500/20">
      {/* Header com imagem/ícone */}
      <div className="relative h-48  flex items-center justify-center overflow-hidden">
        {/* Padrão de fundo animado */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-linear(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        {/* Imagem ou ícone */}
        {projeto.link ? (
          <iframe
            src={projeto.link}
            title={projeto.titulo}
            className="w-full h-full rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-500 border-none"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms "
          />
        ) : typeof projeto.icon === "string" && projeto.icon.startsWith("http") ? (
          <Image
            src={projeto.icon}
            alt={projeto.titulo}
            width={100}
            height={100}
            className="object-contain rounded-xl shadow-2xl group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <span className="text-7xl drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">
            {projeto.icon}
          </span>
        )}

        {/* Overlay lineare */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="relative p-6 flex flex-col grow">
        {/* Título */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {projeto.titulo}
        </h3>

        {/* Descrição */}
        <p className="text-slate-300 mb-5 leading-relaxed grow">
          {projeto.descricao}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-6">
          {projeto.tecnologias.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-slate-800/80 backdrop-blur-sm text-blue-300 text-xs rounded-lg font-semibold border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-700/80 transition-all duration-300 shadow-lg cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
        {projeto.link && (
            <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 px-5 py-3 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all duration-300 flex-1 justify-center font-semibold shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            >
                <ExternalLink
                    size={18}
                    className="group-hover/btn:rotate-12 transition-transform duration-300"
                />
                <span>Ver Projeto</span>
            </a>
        )}

          {projeto.github && (
            <a
              href={projeto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 px-5 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all duration-300 flex-1 justify-center font-semibold border border-slate-700 hover:border-slate-600 shadow-lg hover:scale-105"
            >
              <SiGithub
                size={18}
                className="group-hover/btn:rotate-12 transition-transform duration-300"
              />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
