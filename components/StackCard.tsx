type Nivel = "producao" | "estudando";

const stack = [
  {
    categoria: "Front-End",
    techs: [
      { nome: "TypeScript", nivel: "producao" },
      { nome: "React / Next.js", nivel: "producao" },
      { nome: "Tailwind CSS", nivel: "producao" },
      { nome: "Canvas 2D", nivel: "estudando" },
      { nome: "PWA / Service Workers", nivel: "estudando" },
    ],
  },
  {
    categoria: "Back-end e dados",
    techs: [
      { nome: "PostgreSQL", nivel: "producao" },
      { nome: "Prisma / Drizzle", nivel: "estudando" },
      { nome: "Firebase / Firestore", nivel: "estudando" },
      { nome: "Node.js", nivel: "producao" },
      { nome: "REST / integração DRF", nivel: "estudando" },
    ],
  },
  {
    categoria: "Infra e ferramentas",
    techs: [
      { nome: "Docker", nivel: "producao" },
      { nome: "Linux (Debian)", nivel: "producao" },
      { nome: "Vercel", nivel: "producao" },
      { nome: "Redis", nivel: "estudando" },
      { nome: "Git / GitHub", nivel: "producao" },
    ],
  },
] satisfies { categoria: string; techs: { nome: string; nivel: Nivel }[] }[];

const nivelStyle: Record<Nivel, string> = {
  producao: "border-green-800 text-green-400",
  estudando: "rounded-full border-neutral-800 text-neutral-500",
};

const nivelLabel: Record<Nivel, string> = {
  producao: "produção",
  estudando: "estudando",
};

export default function StackCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8 md:max-w-6xl mx-auto">
      {stack.map((grupo) => (
        <div
          key={grupo.categoria}
          className="border border-neutral-800 rounded-lg p-5 bg-neutral-900/50"
        >
          <span className="text-xs uppercase ml-4 font-mono tracking-wide text-(--cor-secundaria)">
            {grupo.categoria}
          </span>
          <div>
            {grupo.techs.map((tech) => (
              <div
                key={tech.nome}
                className="flex items-center justify-between border-b border-neutral-800 last:border-b-0 py-2.5 hover:animate-pulse"
              >
                <span className="text-neutral-400 text-md">{tech.nome}</span>
                <span
                  className={`text-[10px] tracking-wider font-mono border px-2 py-1 rounded-full ${nivelStyle[tech.nivel]}`}
                >
                  {nivelLabel[tech.nivel]}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
