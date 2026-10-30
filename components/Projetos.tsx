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
    <div className="w-full md:w-96 shrink-0 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950/70">
      <div className="flex items-center gap-1.5 border-b border-neutral-800 px-3.5 py-2.5">
        <i className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
        <i className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
        <i className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
        <span className="ml-2 font-mono text-[10px] text-(--cor-secundaria)">
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
      className="border border-neutral-800 rounded-lg p-5 bg-neutral-900/50 my-10 shadow-lg shadow-neutral-900/20"
      style={{ "--acc": cor } as CSSProperties}
    >
      {/* topo */}
      <div className="flex justify-between flex-wrap items-center gap-4">
        <div className="flex flex-wrap gap-4">
          <div className="p-4 border border-neutral-800 rounded-lg bg-neutral-900/50 [color:var(--acc)]">
            <Icone />
          </div>
          <div className="flex flex-col">
            <span className="font-mono tracking-wide text-(--cor-secundaria) text-xs">
              {categoria}
            </span>
            <span className="text-2xl font-semibold">{nome}</span>
          </div>
        </div>
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener"
            className="border border-neutral-800 rounded-lg bg-neutral-950/50 py-2 px-4 text-xs font-mono text-(--cor-secundaria) tracking-wide hover:text-neutral-300 hover:scale-103 shadow-lg hover:shadow-neutral-950/50 transition-all duration-300"
          >
            {link.label}
          </a>
        )}
        {selo && (
          <span className="border border-neutral-800 rounded-lg bg-neutral-950/50 py-2 px-4 text-xs font-mono text-(--cor-secundaria) tracking-wide">
            {selo}
          </span>
        )}
      </div>

      {/* contexto + código */}
      <div className="flex flex-wrap-reverse md:flex-nowrap gap-6 justify-between items-center my-4">
        <p className="md:max-w-96 lg:max-w-3xl text-neutral-400 text-md">
          {contexto}
        </p>
        {codigo}
      </div>

      {/* desafio / decisão / resultado */}
      <div className="grid md:grid-cols-3 min-h-44 rounded-2xl border border-neutral-800 bg-neutral-950/20">
        {[
          { titulo: "Desafio", corpo: desafio },
          { titulo: "Decisão", corpo: decisao, meio: true },
          { titulo: "Resultado", corpo: resultado },
        ].map((col) => (
          <div
            key={col.titulo}
            className={`p-4 ${col.meio ? "border-y md:border-y-0 md:border-x border-neutral-800" : ""}`}
          >
            <span className="font-mono tracking-wide uppercase text-xs text-(--cor-secundaria) ml-2">
              {col.titulo}
            </span>
            <p className="text-neutral-400 text-sm mt-2">{col.corpo}</p>
          </div>
        ))}
      </div>

      {/* stack */}
      {stack && (
        <div className="flex flex-wrap gap-2 mt-4">
          {stack.map((tec) => (
            <span
              key={tec}
              className="rounded-full border border-neutral-800 px-3 py-1 font-mono text-[11px] text-neutral-400 transition-colors hover:border-neutral-600 hover:text-neutral-200"
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
        contexto={
          <>
            <strong className="text-neutral-200">
              Hub que executa sozinho as tarefas repetitivas do suporte:
            </strong>{" "}
            a equipe da ARX gastava tempo executando à mão pedidos que chegavam
            por chamado no GLPI. Hoje o hub resolve esses casos sem ninguém
            encostar.
          </>
        }
        desafio={
          <>
            Identificar automaticamente quais chamados já tinham automação
            pronta e executá-las sem intervenção humana.
          </>
        }
        decisao={
          <>
            Hub integrado à{" "}
            <strong className="text-neutral-200">API do GLPI</strong>: valida o
            chamado, verifica se existe automação criada pela equipe para aquele
            caso e executa o fluxo automaticamente. Uma{" "}
            <strong className="text-neutral-200">IA local</strong> confere o
            tipo do chamado antes da execução.
          </>
        }
        resultado={
          <>
            Em produção.{" "}
            <strong className="text-neutral-200">1min53s</strong> de tempo
            médio por chamado,{" "}
            <strong className="text-neutral-200">
              mais de 13h de trabalho manual
            </strong>{" "}
            economizadas e zero execuções manuais.
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
        contexto={
          <>
            <strong className="text-neutral-200">
              SaaS multitenant de gamificação corporativa:
            </strong>{" "}
            metas diárias por colaborador, roleta de moedas, marketplace de
            pontos e leaderboard. Várias empresas na mesma base, com isolamento
            total de dados entre elas.
          </>
        }
        desafio={
          <>
            Multitenancy seguro (um tenant jamais pode ver dados de outro) e
            atualizações em tempo real no leaderboard sem estourar custo.
          </>
        }
        decisao={
          <>
            Reescrever a v2 do zero com{" "}
            <strong className="text-neutral-200">Drizzle</strong>, garantindo o
            isolamento na camada de dados antes de qualquer UI.{" "}
            <strong className="text-neutral-200">
              Realtime com SSE + Redis pub/sub
            </strong>{" "}
            em vez de WebSocket, e API em NestJS com validação Zod.
          </>
        }
        resultado={
          <>
            Arquitetura mais simples que a v1, com um{" "}
            <strong className="text-neutral-200">documento de handoff</strong>{" "}
            registrando cada decisão — saber quando recomeçar também é
            engenharia.
          </>
        }
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
        contexto={
          <>
            <strong className="text-neutral-200">
              App de casal para organizar a rotina a dois:
            </strong>{" "}
            listas com prazo, tarefas, calendário de datas importantes e cor
            própria para cada pessoa. Uma base só para iOS, Android e web.
          </>
        }
        desafio={
          <>
            Construir as telas antes do backend existir, sem retrabalho quando a
            API real chegar.
          </>
        }
        decisao={
          <>
            Camadas por feature (domain, data, presentation). A UI depende só
            da <strong className="text-neutral-200">interface do repositório</strong>;
            hoje um banco falso em memória cumpre o contrato.{" "}
            <strong className="text-neutral-200">TanStack Query</strong> nos
            dados e NativeWind no tema.
          </>
        }
        resultado={
          <>
            Trocar o mock pela API não toca nenhuma tela. Regras de negócio
            puras com smoke tests executáveis e tema{" "}
            <strong className="text-neutral-200">claro, escuro e preto</strong>.
          </>
        }
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
        contexto={
          <>
            <strong className="text-neutral-200">
              Sistema de recompensas interno da ARX:
            </strong>{" "}
            gestores lançam metas e coins por funcionário, coins viram pontos e
            pontos viram produtos. Onze departamentos, ranking, catálogo e
            dashboard.
          </>
        }
        desafio={
          <>
            Toda mudança de saldo precisava ser rastreável: quem lançou, quanto,
            com qual multiplicador e o que foi resgatado, sem apagar histórico.
          </>
        }
        decisao={
          <>
            <strong className="text-neutral-200">Server Actions</strong> com
            Prisma e PostgreSQL. Cada ajuste gera um log com o multiplicador
            usado, e resgate e débito de coins rodam na{" "}
            <strong className="text-neutral-200">mesma transação</strong>.
            Exclusão lógica em funcionários e produtos.
          </>
        }
        resultado={
          <>
            Em produção na empresa, com deploy em Docker. Relatórios por
            departamento em Excel e gráficos de coins, pontos e metas. Serviu de
            base para o <strong className="text-neutral-200">Await</strong>.
          </>
        }
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
