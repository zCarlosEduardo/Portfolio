// components/Projetos.tsx
import { projetos } from "@/lib/projetos";
import { ProjetosCard } from "./ProjetosCard";
import { SiGithub } from "react-icons/si";

function Projetos() {
  return (
    <div id="Projetos" className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      
      <div className="container mx-auto py-20 px-4 md:px-8 flex flex-col gap-16 items-center relative z-10">
        {/* Header da seção */}
        <div className="text-center flex flex-col gap-4 max-w-3xl">
          <span className="text-gray-200 text-sm font-semibold tracking-widest uppercase">
            Portfólio
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-gray-300 text-lg">
            Conheça alguns dos projetos que desenvolvi com paixão e dedicação
          </p>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {projetos.map((projeto, index) => (
            <ProjetosCard key={index} projeto={projeto} />
          ))}
        </div>

        {/* Botão para ver mais no GitHub */}
        <div className="mt-8">
          <a
            href="https://github.com/zCarlosEduardo"
            target="_blank"
            style={{ width: "100%" }}
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-gray-950 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50"
          >
            <SiGithub size={24} className="group-hover/btn:rotate-24 transition-transform duration-300" />
            <span className="flex flex-row flex-nowrap">Ver mais repositórios <span className="hidden md:block">no GitHub</span></span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projetos;