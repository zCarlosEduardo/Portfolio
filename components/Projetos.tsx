"use client";

import { useEffect, useRef, useState } from "react";
import { projetos } from "@/lib/projetos";
import { ProjetosCard } from "./ProjetosCard";
import { SiGithub } from "react-icons/si";

function Projetos() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      id="Projetos" 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
    >
      <div className="container mx-auto py-20 px-4 md:px-8 flex flex-col gap-16 items-center relative z-10">
        {/* Header da seção com Animação */}
        <div 
          className={`text-center flex flex-col gap-4 max-w-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <span className="text-gray-200 text-sm font-semibold tracking-widest uppercase">
            Portfólio
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-gray-300 text-lg">
            Conheça alguns dos <strong>projetos web modernos</strong> que desenvolvi 
            com <strong>React</strong>, <strong>Next.js</strong> e as melhores 
            práticas de <strong>desenvolvimento frontend</strong>
          </p>
        </div>

        {/* Grid de projetos com Animação Escalonada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProjetosCard projeto={projeto} />
            </div>
          ))}
        </div>

        {/* Botão para ver mais no GitHub com Animação */}
        <div 
          className={`mt-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <a
            href="https://github.com/zCarlosEduardo"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-gray-950 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50"
            aria-label="Ver mais repositórios no GitHub de Carlos Eduardo"
          >
            <SiGithub 
              size={24} 
              className="group-hover:rotate-12 transition-transform duration-300" 
            />
            <span className="flex flex-row flex-nowrap gap-1">
              Ver mais repositórios 
              <span className="hidden md:block">no GitHub</span>
            </span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projetos;