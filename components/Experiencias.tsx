"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Experiencia = {
  label: string;
  cargo: string;
  empresa: string;
  local: string;
  periodo?: string;
  descricao: string;
  bullets?: string[];
};

const experiencias: Experiencia[] = [
  {
    label: "atual",
    cargo: "Analista de Suporte e Desenvolvimento",
    empresa: "ARX Administradora",
    local: "Goiânia",
    periodo: "mai/2025 – atual",
    descricao:
      "Comecei automatizando tarefas do time por conta própria. Virou função oficial.",
    bullets: [
      "Hub de automações integrado à API do GLPI: identifica chamados com automação pronta e executa o fluxo sozinho. 1min53s por chamado, mais de 13h de trabalho manual economizadas, zero execuções manuais.",
      "Sistema interno de gamificação em Next.js, em produção.",
      "Deploy com Docker em servidores Linux.",
      "Dashboards no Power BI.",
      "Implantação de CRMs e ERP.",
    ],
  },
  {
    label: "anterior",
    cargo: "Assistente de TI",
    empresa: "SferaRol-Planalto",
    local: "Goiânia",
    descricao:
      "Sustentação de infraestrutura, atendimento a usuários e manutenção de sistemas internos.",
  },
  {
    label: "início",
    cargo: "Analista de Help Desk",
    empresa: "Rede Tatico de Supermercados",
    local: "Goiânia",
    descricao:
      "Primeira experiência em TI: suporte de alto volume no varejo, priorização sob pressão e comunicação com usuário não técnico. ",
  },
];

export default function Experiencias() {
  const [aberto, setAberto] = useState<number | null>(0);

  const toggle = (index: number) =>
    setAberto((prev) => (prev === index ? null : index));

  return (
    <div className="w-full my-12">
      {experiencias.map((item, index) => {
        const isAtual = index === 0;
        const isAberto = aberto === index;
        const isUltimo = index === experiencias.length - 1;
        return (
          <div
            key={index}
            className="grid grid-cols-[auto_1fr] sm:grid-cols-[auto_90px_1fr] gap-x-4"
          >
            {/* ── Coluna 1: bolinha + linha ── */}
            <div className="flex flex-col items-center">
              <div
                className={`w-2.5 h-2.5 rounded-full border shrink-0 mt-1.5 transition-colors ${
                  isAtual
                    ? "border-green-500 bg-green-500/20 shadow-[0_0_10px] shadow-green-500/30"
                    : "border-neutral-600"
                }`}
              />
              {!isUltimo && <div className="w-px flex-1 bg-neutral-900" />}
            </div>

            {/* ── Coluna 2: label temporal (some no mobile) ── */}
            <span
              className={`hidden sm:block font-mono text-xs mt-1 ${
                isAtual ? "text-green-400" : "text-(--cor-secundaria)"
              }`}
            >
              {item.label}
            </span>

            {/* ── Coluna 3: conteúdo clicável ── */}
            <button
              onClick={() => toggle(index)}
              aria-expanded={isAberto}
              className="text-left pb-10 cursor-pointer group min-w-0"
            >
              {/* Cargo + badge (só no atual) + chevron */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-semibold text-neutral-100">
                  {item.cargo}
                </span>

                <ChevronDown
                  className={`w-4 h-4 text-neutral-600 transition-transform duration-300 group-hover:text-neutral-400 ${
                    isAberto ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Empresa · local */}
              <span className="block font-mono text-sm text-(--cor-secundaria) mt-1">
                {item.empresa} · {item.local}
                {item.periodo && ` · ${item.periodo}`}
              </span>

              {/* Descrição expansível — mesmo truque dos certificados */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isAberto
                    ? "grid-rows-[1fr] opacity-100 mt-3"
                    : "grid-rows-[0fr] opacity-0 mt-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {item.descricao}
                  </p>
                  {item.bullets && (
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-400 leading-relaxed">
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
