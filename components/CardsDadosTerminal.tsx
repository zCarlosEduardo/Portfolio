"use client";

import { Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Linha = { texto: string; digitada: boolean; cor?: string };

// Fora do componente: referência estável, não recria a cada render
const ROTEIRO: Linha[] = [
  { texto: "$ whoami", digitada: true },
  {
    texto: "carlos-eduardo · full stack dev · goiânia/br",
    digitada: false,
    cor: "text-stone-500",
  },
  { texto: "$ git log --oneline -2", digitada: true },
  {
    texto: "a1f2c3 feat: push energetico no dev",
    digitada: false,
    cor: "text-stone-500",
  },
  {
    texto: "b4d5e6 fix: orderBy + serverTimestamp",
    digitada: false,
    cor: "text-stone-500",
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
    descricao: "Auxiliar Administrativo · ARX Administradora",
  },
  {
    titulo: "Stack principal",
    descricao: "Next.js · JavaScript · PostgreSQL",
  },
  { titulo: "Formação", descricao: "Ciência da Computação (cursando)" },
  {
    titulo: "Diferencial",
    descricao: "Vim resolver o seu problema.",
  },
  { titulo: "Trajetória", descricao: "Suporte → Implantação → dev" },
  { titulo: "Contato", descricao: "cseduardoalonso@gmail.com" },
];

export default function CardsDadosTerminal() {
  const [prontas, setProntas] = useState<Linha[]>([]);
  const [digitando, setDigitando] = useState("");
  const [started, setStarted] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // 1) Observer: só marca started quando o terminal entra na viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect(); // dispara uma vez só
        }
      },
      { threshold: 0.6 }, // 60% do terminal visível
    );

    if (terminalRef.current) observer.observe(terminalRef.current);
    return () => observer.disconnect();
  }, []);

  // 2) Typing: só roda depois que started vira true
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
    <div className="container mx-auto grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
      <div className="bg-stone-900/30 rounded-xl border border-stone-800 p-4">
        <div className="flex gap-2 text-center">
          <Zap className="h-3.5 w-3.5 text-green-500" />
          <p className="font-mono text-xs uppercase tracking-wider text-stone-500 mb-4">
            Meus dados atuais
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          {informacoesAtuais.map((item) => (
            <div key={item.titulo} className="flex flex-col">
              <span className="text-xs text-stone-500">{item.titulo}</span>
              <span className="text-sm text-(--cor-primaria)">
                {item.descricao}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ref AQUI: é este elemento que o observer vigia */}
      <div
        ref={terminalRef}
        className="flex flex-col overflow-hidden rounded-xl border border-stone-800 bg-stone-950"
      >
        <div className="flex items-center gap-1.5 border-b border-stone-800 px-3.5 py-2.5">
          <i className="h-2.5 w-2.5 rounded-full bg-stone-700" />
          <i className="h-2.5 w-2.5 rounded-full bg-stone-800" />
          <i className="h-2.5 w-2.5 rounded-full bg-stone-800" />
          <span className="ml-2 font-mono text-[11px] text-stone-500">
            carlos@dev ~ zsh
          </span>
        </div>
        <div className="min-h-42.5 p-4 font-mono text-xs leading-relaxed">
          {prontas.map((l, i) => (
            <div key={i} className={l.cor ?? ""}>
              {l.texto}
            </div>
          ))}
          {digitando && <div>{digitando}</div>}
          <span className="inline-flex items-center gap-1">
            {!started && <span className="text-stone-400">$</span>}
            <span className="cursor-piscante inline-block h-3 w-[7px] bg-stone-400" />
          </span>
        </div>
      </div>
    </div>
  );
}