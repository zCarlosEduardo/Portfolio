"use client";

import { Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Linha = { texto: string; digitada: boolean; cor?: string };

const ROTEIRO: Linha[] = [
  { texto: "$ whoami", digitada: true },
  {
    texto: "carlos-eduardo · dev · automação com IA · goiânia/br",
    digitada: false,
    cor: "text-stone-400",
  },
  { texto: "$ git log --oneline -2", digitada: true },
  {
    texto: "a1f2c3 feat: push energetico",
    digitada: false,
    cor: "text-stone-400",
  },
  {
    texto: "b4d5e6 fix: orderBy + serverTimestamp",
    digitada: false,
    cor: "text-stone-400",
  },
  { texto: "$ status", digitada: true },
  {
    texto: "● aberto a novos projetos",
    digitada: false,
    cor: "text-green-400",
  },
];

const informacoesAtuais = [
  {
    titulo: "Cargo atual",
    descricao: "Analista de Suporte e Desenvolvimento @ ARX Administradora",
  },
  {
    titulo: "Stack principal",
    descricao: "Next.js · JavaScript · PostgreSQL",
  },
  {
    titulo: "Formação",
    descricao:
      "Bacharel em Ciência da Computação (2026) · cursando ADS (previsão dez/2028)",
  },
  {
    titulo: "Foco",
    descricao: "Automação de processos com IA",
  },
  { titulo: "Trajetória", descricao: "Suporte → Dev → Automação com IA" },
  { titulo: "Contato", descricao: "cseduardoalonso@gmail.com" },
];

export default function CardsDadosTerminal() {
  const [prontas, setProntas] = useState<Linha[]>([]);
  const [digitando, setDigitando] = useState("");
  const [started, setStarted] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );

    if (terminalRef.current) observer.observe(terminalRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function proximaLinha() {
      if (i >= ROTEIRO.length) return;
      const linha = ROTEIRO[i];
      i++;

      if (!linha.digitada) {
        setProntas((p) => [...p, linha]);
        timeouts.push(setTimeout(proximaLinha, 350));
        return;
      }

      let j = 0;
      function digitaLetra() {
        j++;
        setDigitando(linha.texto.slice(0, j));
        if (j < linha.texto.length) {
          timeouts.push(setTimeout(digitaLetra, 40));
        } else {
          setDigitando("");
          setProntas((p) => [...p, linha]);
          timeouts.push(setTimeout(proximaLinha, 300));
        }
      }
      digitaLetra();
    }

    proximaLinha();
    return () => timeouts.forEach(clearTimeout);
  }, [started]);

  return (
    <div className="grid w-full gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="bg-neutral-800/40 rounded-xl border border-neutral-800 px-5 py-6">
        <div className="flex gap-4 text-center">
          <Zap className="h-3.5 w-3.5 text-green-300/50" />
          <h2 className="font-mono text-[13px] uppercase tracking-wider text-(--cor-secundaria) mb-4">
            Meus dados atuais
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          {informacoesAtuais.map((item) => (
            <div key={item.titulo} className="flex flex-col">
              <span className="text-[13px] text-(--cor-secundaria) font-mono mb-1">
                {item.titulo}
              </span>
              <span className="text-base text-(--cor-primaria)">
                {item.descricao}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={terminalRef}
        className="flex flex-col overflow-hidden rounded-xl border border-stone-800 bg-neutral-900/30"
      >
        <div className="flex items-center gap-1.5 border-b border-stone-800 px-3.5 py-2.5">
          <i className="h-2.5 w-2.5 rounded-full bg-stone-700" />
          <i className="h-2.5 w-2.5 rounded-full bg-stone-800" />
          <i className="h-2.5 w-2.5 rounded-full bg-stone-800" />
          <span className="ml-2 font-mono text-xs text-(--cor-secundaria)">
            carlos@dev ~ zsh
          </span>
        </div>
        <div className="min-h-42.5 p-4 font-mono text-[13px] leading-relaxed">
          {prontas.map((l, i) => (
            <div key={i} className={l.cor ?? ""}>
              {l.texto}
            </div>
          ))}
          {digitando && <div>{digitando}</div>}
          <span className="inline-flex items-center gap-1">
            {!started && <span className="text-stone-400">$</span>}
            <span className="cursor-piscante inline-block h-3 w-1.75 bg-stone-400" />
          </span>
        </div>
      </div>
    </div>
  );
}
