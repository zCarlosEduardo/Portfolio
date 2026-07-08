"use client";

import { ChevronDown, ChevronsDown } from "lucide-react";
import { useState } from "react";

const certificados = [
  { certificado: "DB Developer", empresa: "Descomplica", cursos: "160 Horas" },
  {
    certificado: "Arquitetura e Organização de computadores",
    empresa: "Descomplica",
    cursos: "240 Horas",
  },
  {
    certificado: "The Origins III: JavaScript",
    empresa: "Codédex",
    cursos: "16h",
  },
  {
    certificado: "Formação A partir do zero: iniciante em programação",
    empresa: "Alura",
    cursos: "4 Cursos",
  },
  { certificado: "HTML e CSS", empresa: "Alura", cursos: "5 Cursos" },
  {
    certificado: "WordPress: crie sites do zero",
    empresa: "Alura",
    cursos: "17 Horas",
  },
  {
    certificado: "Pratique HTML e CSS em projetos Web",
    empresa: "Alura",
    cursos: "4 Cursos",
  },
  {
    certificado: "Cursos de Back-end (Go e JavaScript)",
    empresa: "Alura",
    cursos: "124 Horas",
  },
  { certificado: "Cursos de Front-End", empresa: "Alura", cursos: "110 Horas" },
  {
    certificado: "Curso: Colorização digital",
    empresa: "Alura",
    cursos: "8 Horas",
  },
  {
    certificado: "SEO: Otimização de sites",
    empresa: "Alura",
    cursos: "8 Horas",
  },
];

export default function Formacoes() {
  const [limite, setLimite] = useState(0);

  const isAberto = limite > 0;

  const verMais = () => setLimite((prev) => prev + 12);
  const recolher = () => setLimite(0);

  return (
    <div className="w-full">
      {/* Bloco Fixo Principal */}
      <div>
        <div className="flex gap-2 justify-between border-y border-0 border-neutral-900 py-4">
          <div className="">
            <span className="ml-3 truncate ">Ciência da Computação </span>
            <i className="text-xs text-(--cor-secundaria)">(cursando)</i>
          </div>
          <span className="text-(--cor-secundaria) text-sm tracking-wide font-mono truncate">
            Descomplica Faculdade Digital
          </span>
        </div>
        <div className="flex gap-2 justify-between border-b border-0 border-neutral-900 py-4">
          <div className="truncate">
            <span className="ml-3 truncate">
              Desenvolva aplicações web Acessíveis
            </span>
              <span className="text-[10px] text-(--cor-secundaria) tracking-wide font-mono">
                {" "}
                3 cursos
              </span>
          </div>
          <span className="text-(--cor-secundaria) text-sm tracking-wide font-mono">
            Alura
          </span>
        </div>
      </div>

      {/* Lista de Certificados Animada individualmente */}
      <div className="flex flex-col">
        {certificados.map((item, index) => {
          // Cada item decide se deve estar visível com base no limite atual
          const deveMostrar = index < limite;

          return (
            <div
              key={index}
              className={`grid transition-all duration-500 ease-in-out ${
                deveMostrar
                  ? "grid-rows-[1fr] opacity-100 border-b border-0 border-neutral-900 py-4"
                  : "grid-rows-[0fr] opacity-0 border-none py-0 pointer-events-none"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex gap-2 justify-between">
                  <div>
                  <span className="ml-3 text-neutral-300 max-w-6 truncate">
                    {item.certificado}
                  </span>
                    <span className="text-[8px] text-(--cor-secundaria) tracking-wide font-mono">
                      {" "}
                      {item.cursos}
                    </span>
                  </div>
                  <span className="text-(--cor-secundaria) text-sm tracking-wide font-mono truncate">
                    {item.empresa}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Botões de Ação */}
      <div className="flex gap-4 justify-center pt-6">
        {limite < certificados.length && (
          <button
            onClick={verMais}
            className="flex items-center gap-2 px-4 py-1.5 text-sm border border-(--background) rounded  hover:border-(--cor-ok)/10 hover:shadow-md hover:shadow-green-800/20 font-mono transition hover:-translate-y-0.5 "
          >
            {isAberto ? (
              <>
                Ver mais
                <ChevronDown className="w-4 h-4 animate-pulse text-green-300" />
              </>
            ) : (
              <>
                Ver certificados
                <ChevronsDown className="w-4 h-4 animate-pulse text-green-300" />
              </>
            )}
          </button>
        )}

        {isAberto && (
          <button
            onClick={recolher}
            className="px-4 py-1.5 bg-transparent text-neutral-500 text-sm font-mono border border-neutral-900 rounded hover:border-neutral-700 transition"
          >
            Recolher tudo
          </button>
        )}
      </div>
    </div>
  );
}
