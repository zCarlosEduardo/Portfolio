type Nivel = "producao" | "estudando";

const stack = [
  {
    categoria: "IA e automação",
    techs: [
      { nome: "n8n", nivel: "producao" },
      { nome: "Claude", nivel: "producao" },
      { nome: "ChatGPT", nivel: "producao" },
      { nome: "Claude Code", nivel: "producao" },
      { nome: "Cursor", nivel: "producao" },
      { nome: "Playwright", nivel: "producao" },
      { nome: "Gemini", nivel: "estudando" },
      { nome: "v0", nivel: "estudando" },
      { nome: "Bolt", nivel: "estudando" },
      { nome: "Lovable", nivel: "estudando" },
      { nome: "Replit", nivel: "estudando" },
      { nome: "Prompt engineering", nivel: "estudando" },
      { nome: "Webhooks / APIs REST", nivel: "producao" },
    ],
  },
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
  {
    categoria: "Dados e produto",
    techs: [
      { nome: "Power BI", nivel: "producao" },
      { nome: "DAX", nivel: "producao" },
      { nome: "Figma", nivel: "producao" },
      { nome: "Levantamento de requisitos", nivel: "producao" },
    ],
  },
] satisfies { categoria: string; techs: { nome: string; nivel: Nivel }[] }[];

const nivelStyle: Record<Nivel, string> = {
  producao: "border-green-800 text-green-400",
  estudando: "border-neutral-700 text-neutral-400",
};

const nivelLabel: Record<Nivel, string> = {
  producao: "produção",
  estudando: "estudando",
};

export default function StackCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 my-8">
      {stack.map((grupo) => (
        <div
          key={grupo.categoria}
          className={`border border-neutral-800 rounded-lg p-5 bg-neutral-900/50 ${grupo.techs.length > 6 ? "md:col-span-2 xl:col-span-4" : ""}`}
        >
          <h3 className="text-[13px] uppercase font-mono tracking-wide text-(--cor-secundaria) mb-2">
            {grupo.categoria}
          </h3>
          <div
            className={
              grupo.techs.length > 6 ? "grid sm:grid-cols-2 xl:grid-cols-3 gap-x-6" : ""
            }
          >
            {grupo.techs.map((tech) => (
              <div
                key={tech.nome}
                className="flex items-center justify-between gap-3 border-b border-neutral-800 last:border-b-0 py-2.5"
              >
                <span className="text-neutral-200 text-base">{tech.nome}</span>
                <span
                  className={`shrink-0 text-xs tracking-wider font-mono border px-2 py-1 rounded-full ${nivelStyle[tech.nivel]}`}
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
