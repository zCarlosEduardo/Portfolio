"use client";

import { ChevronDown, ChevronsDown } from "lucide-react";
import { useState } from "react";

const certificados = [
  { certificado: "The Origins III: JavaScript", empresa: "Codédex", data: "" },
  {
    certificado: "Formação A partir do zero: iniciante em programação",
    empresa: "Alura",
    data: "",
  },
  { certificado: "HTML5 e CSS3 parte 2", empresa: "Alura", data: "" },
  { certificado: "HTML5 e CSS3 parte 3", empresa: "Alura", data: "" },
  { certificado: "CSS Grid", empresa: "Alura", data: "" },
  { certificado: "HTML5 e CSS3 parte 4", empresa: "Alura", data: "" },
  { certificado: "Guia de estilos", empresa: "Alura", data: "" },
  { certificado: "Flexbox", empresa: "Alura", data: "" },
  { certificado: "Acessibilidade web", empresa: "Alura", data: "" },
  { certificado: "Acessibilidade web parte 1", empresa: "Alura", data: "" },
  { certificado: "Acessibilidade web parte 2", empresa: "Alura", data: "" },
  { certificado: "Start na programação", empresa: "OneBitCode", data: "" },
  { certificado: "Algoritmos com JavaScript II", empresa: "Alura", data: "" },
  { certificado: "Front-end UI", empresa: "Alura", data: "" },
  { certificado: "JavaScript para Web", empresa: "Alura", data: "" },
  { certificado: "Colorização digital", empresa: "Alura", data: "" },
];

export default function Formacoes() {
  const [limite, setLimite] = useState(0);

  const isAberto = limite > 0;

  const verMais = () => setLimite((prev) => prev + 10);
  const recolher = () => setLimite(0);

  return (
    <div className="w-full">
      {/* Bloco Fixo Principal */}
      <div>
        <div className="flex gap-2 justify-between border-y border-0 border-neutral-900 py-4 flex-wrap">
          <span className="ml-3">
            Ciência da Computação{" "}
            <i className="text-xs text-(--cor-secundaria)">(cursando)</i>
          </span>
          <span className="text-(--cor-secundaria) text-sm tracking-wide font-mono">
            Descomplica Faculdade Digital
          </span>
        </div>
        <div className="flex gap-2 justify-between border-b border-0 border-neutral-900 py-4 flex-wrap">
          <span className="ml-3">Formações em desenvolvimento web</span>
          <span className="text-(--cor-secundaria) text-sm tracking-wide font-mono">
            Alura · Codédex
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
                <div className="flex gap-2 justify-between flex-wrap">
                  <span className="ml-3 text-neutral-300">
                    {item.certificado}
                  </span>
                  <span className="text-(--cor-secundaria) text-sm tracking-wide font-mono">
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
                Ver mais (+10)
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
