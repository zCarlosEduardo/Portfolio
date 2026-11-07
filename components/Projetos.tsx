import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { AlarmClock, HeartHandshake, Coins, Workflow } from "lucide-react";

function Janela({
  arquivo,
  children,
}: {
  arquivo: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full sm:max-w-xl lg:w-96 xl:w-md shrink-0 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950/70">
      <div className="flex items-center gap-1.5 border-b border-neutral-800 px-3.5 py-2.5">
        <i className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
        <i className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
        <i className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
        <span className="ml-2 font-mono text-xs text-(--cor-secundaria)">
          {arquivo}
        </span>
      </div>
      {children}
    </div>
  );
}

// demo em vídeo (dados fictícios); fontes em ../hub-glpi-video e ../portfolio-videos (HyperFrames)
function VideoDemo({
  src,
  arquivo,
  label,
}: {
  src: string;
  arquivo: string;
  label: string;
}) {
  return (
    <Janela arquivo={arquivo}>
      <video
        src={src}
        poster={src.replace(".mp4", "-poster.jpg")}
        autoPlay
        loop
        muted
        playsInline
        aria-label={label}
        className="block w-full aspect-video"
      />
    </Janela>
  );
}

/* ============================================================
   CaseCard: o SEU markup, componentizado.
   ============================================================ */
type CaseCardProps = {
  cor: string;
  icone: LucideIcon;
  categoria: string;
  nome: string;
  link?: { href: string; label: string };
  selo?: string;
  contexto: ReactNode;
  desafio: ReactNode;
  decisao: ReactNode;
  resultado: ReactNode;
  stack?: string[];
  codigo?: ReactNode;
};

function CaseCard({
  cor,
  icone: Icone,
  categoria,
  nome,
  link,
  selo,
  contexto,
  desafio,
  decisao,
  resultado,
  stack,
  codigo,
}: CaseCardProps) {
  return (
    <article
      className="border border-neutral-800 rounded-lg p-5 md:p-6 bg-neutral-900/50 my-10"
      style={{ "--acc": cor } as CSSProperties}
    >
      {/* topo */}
      <div className="flex justify-between flex-wrap items-center gap-4">
        <div className="flex flex-wrap gap-4">
          <div className="p-4 border border-neutral-800 rounded-lg bg-neutral-900/50 [color:var(--acc)]">
            <Icone />
          </div>
          <div className="flex flex-col">
            <span className="font-mono tracking-wide text-(--cor-secundaria) text-[13px]">
              {categoria}
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{nome}</h3>
          </div>
        </div>
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener"
            className="border border-neutral-800 rounded-lg bg-neutral-950/50 py-2 px-4 text-[13px] font-mono text-(--cor-secundaria) tracking-wide hover:text-neutral-200 hover:border-neutral-600 transition-colors duration-300"
          >
            {link.label}
          </a>
        )}
        {selo && (
          <span className="border border-neutral-800 rounded-lg bg-neutral-950/50 py-2 px-4 text-[13px] font-mono text-(--cor-secundaria) tracking-wide">
            {selo}
          </span>
        )}
      </div>

      {/* contexto + código */}
      <div className="flex flex-col-reverse lg:flex-row gap-6 justify-between lg:items-center my-5">
        <p className="lg:max-w-2xl text-neutral-300 text-base md:text-lg leading-relaxed">
          {contexto}
        </p>
        {codigo}
      </div>

      {/* desafio / decisão / resultado */}
      <div className="grid md:grid-cols-3 rounded-2xl border border-neutral-800 bg-neutral-950/20">
        {[
          { titulo: "Desafio", corpo: desafio },
          { titulo: "Decisão", corpo: decisao, meio: true },
          { titulo: "Resultado", corpo: resultado },
        ].map((col) => (
          <div
            key={col.titulo}
            className={`p-5 ${col.meio ? "border-y md:border-y-0 md:border-x border-neutral-800" : ""}`}
          >
            <span className="font-mono tracking-wide uppercase text-[13px] text-(--cor-secundaria)">
              {col.titulo}
            </span>
            <p className="text-neutral-300 text-[15px] md:text-base leading-relaxed mt-2">{col.corpo}</p>
          </div>
        ))}
      </div>

      {/* stack */}
      {stack && (
        <div className="flex flex-wrap gap-2 mt-4">
          {stack.map((tec) => (
            <span
              key={tec}
              className="rounded-full border border-neutral-800 px-3 py-1 font-mono text-xs text-neutral-300 transition-colors hover:border-neutral-600 hover:text-neutral-100"
            >
              {tec}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

/* ============================================================
   A seção: 4 projetos, cada um com sua demo
   ============================================================ */
export default function Projetos() {
  return (
    <>
      <CaseCard
        cor="#a78bfa"
        icone={Workflow}
        categoria="Automação · API do GLPI"
        nome="Hub de Automações GLPI"
        selo="Ferramenta interna · código privado"
        contexto="A equipe da ARX executava à mão pedidos que chegavam por chamado no GLPI. O hub assumiu essas tarefas repetitivas e resolve os chamados sem ninguém encostar."
        desafio="Descobrir quais chamados já tinham automação pronta e executar cada uma sem intervenção humana."
        decisao="Integrei o hub à API do GLPI. Ele valida o chamado, procura uma automação criada pela equipe para aquele caso e executa o fluxo. Antes da execução, uma IA local confere o tipo do chamado."
        resultado={
          <>
            Em produção, com média de{" "}
            <strong className="text-neutral-200">1min53s</strong> por chamado e{" "}
            <strong className="text-neutral-200">
              mais de 13h de trabalho manual
            </strong>{" "}
            economizadas. Nenhuma execução é feita à mão.
          </>
        }
        stack={[
          "Node.js",
          "Express",
          "PostgreSQL",
          "API do GLPI",
          "Puppeteer",
          "Playwright",
          "Ollama (IA local)",
          "Docker",
        ]}
        codigo={
          <VideoDemo
            src="/hub-glpi.mp4"
            arquivo="hub-glpi · fluxo"
            label="Animação do fluxo: o chamado chega no GLPI, o hub valida, executa a automação e resolve o chamado"
          />
        }
      />

      <CaseCard
        cor="#fbbf24"
        icone={AlarmClock}
        categoria="Sistema de Gamificação"
        nome="Await"
        link={{
          href: "https://github.com/zCarlosEduardo/sistema-gamificacao",
          label: "ver no github",
        }}
        contexto="SaaS multitenant de gamificação corporativa, com metas diárias por colaborador, roleta de moedas, marketplace de pontos e leaderboard. Várias empresas dividem a mesma base, com os dados isolados entre elas."
        desafio="Garantir que um tenant nunca veja dados de outro e atualizar o leaderboard em tempo real sem estourar o custo."
        decisao="Reescrevi a v2 do zero com Drizzle e resolvi o isolamento na camada de dados antes de qualquer tela. O tempo real usa SSE e Redis pub/sub em vez de WebSocket, e a API é em NestJS com validação Zod."
        resultado="A arquitetura ficou mais simples que a da v1, e um documento de handoff registra cada decisão."
        stack={[
          "Next.js",
          "NestJS",
          "Drizzle",
          "PostgreSQL",
          "Redis",
          "SSE",
          "Better Auth",
          "Docker",
        ]}
        codigo={
          <VideoDemo
            src="/await.mp4"
            arquivo="await · demo"
            label="Telas do Await: dashboard, aprovação de metas, loja de resgates e equipes"
          />
        }
      />

      <CaseCard
        cor="#f97352"
        icone={HeartHandshake}
        categoria="App mobile · Expo + React Native"
        nome="Nozes"
        selo="Em desenvolvimento · código privado"
        contexto="App para o casal organizar a rotina: listas com prazo, tarefas, calendário de datas importantes e uma cor para cada pessoa. A mesma base roda em iOS, Android e web."
        desafio="Construir as telas antes do backend existir, sem retrabalho quando a API real chegar."
        decisao="Separei cada feature em camadas (domain, data, presentation). As telas dependem só da interface do repositório, e hoje um banco falso em memória cumpre esse contrato. Os dados passam pelo TanStack Query e o tema usa NativeWind."
        resultado="Trocar o mock pela API não vai mexer em nenhuma tela. As regras de negócio são puras e têm smoke tests executáveis, e o app tem tema claro, escuro e preto."
        stack={[
          "Expo",
          "React Native",
          "TypeScript",
          "expo-router",
          "TanStack Query",
          "NativeWind",
          "Reanimated",
        ]}
        codigo={
          <VideoDemo
            src="/nozes.mp4"
            arquivo="nozes · demo"
            label="Telas do Nozes: listas, tarefas, calendário do casal e tema escuro"
          />
        }
      />

      <CaseCard
        cor="#4ade80"
        icone={Coins}
        categoria="Ferramenta interna · Next.js + Prisma"
        nome="Sys Coin v1"
        selo="Ferramenta interna · código privado"
        contexto="Sistema de recompensas interno da ARX. Gestores lançam metas e coins por funcionário, coins viram pontos e pontos viram produtos. Cobre onze departamentos, com ranking, catálogo e dashboard."
        desafio="Toda mudança de saldo precisava ser rastreável: quem lançou, quanto, com qual multiplicador e o que foi resgatado, sem apagar histórico."
        decisao="Usei Server Actions com Prisma e PostgreSQL. Cada ajuste gera um log com o multiplicador usado, e o resgate e o débito de coins rodam na mesma transação. Funcionários e produtos têm exclusão lógica."
        resultado="Em produção na empresa, com deploy em Docker. Gera relatórios por departamento em Excel e gráficos de coins, pontos e metas. Serviu de base para o Await."
        stack={[
          "Next.js",
          "TypeScript",
          "Server Actions",
          "Prisma",
          "PostgreSQL",
          "Chart.js",
          "xlsx",
          "Docker",
        ]}
        codigo={
          <VideoDemo
            src="/arx-coin.mp4"
            arquivo="sys-coin · demo"
            label="Telas do Sys Coin: ranking, departamento, lançamento de coins com multiplicador, dashboard e produtos"
          />
        }
      />
    </>
  );
}
