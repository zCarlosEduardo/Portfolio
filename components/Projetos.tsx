import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { AlarmClock, HeartHandshake, Car, Coins } from "lucide-react";

/* ============================================================
   CodeMock: janela de código com nome de arquivo.
   A linha importante de cada snippet vai pintada com var(--acc).
   ============================================================ */
function CodeMock({
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
      <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed text-neutral-400">
        <code>{children}</code>
      </pre>
    </div>
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
   Destaque: pinta a parte importante do snippet com o --acc
   ============================================================ */
function Hl({ children }: { children: ReactNode }) {
  return <span className="[color:var(--acc)]">{children}</span>;
}

/* ============================================================
   A seção: 4 projetos, cada um com seu código real
   ============================================================ */
export default function Projetos() {
  return (
    <>
      <CaseCard
        cor="#f472b6"
        icone={HeartHandshake}
        categoria="PWA · App para casais"
        nome="Pega Aí"
        link={{
          href: "https://pega-ai-eight.vercel.app",
          label: "ver em produção",
        }}
        contexto={
          <>
            <strong className="text-neutral-200">
              PWA mobile-first para casais organizarem a rotina juntos:
            </strong>{" "}
            listas compartilhadas, calendário com eventos recorrentes,
            atribuição de tarefas por pessoa e notificações push. Em produção e
            com uso diário real.
          </>
        }
        desafio={
          <>
            Sincronização em tempo real entre dois usuários, push notifications
            em PWA (incluindo as limitações do iOS) e custo de infraestrutura
            zero.
          </>
        }
        decisao={
          <>
            Migração completa de Supabase para{" "}
            <strong className="text-neutral-200">Firebase</strong> (Firestore +
            Auth) e um serviço Node.js standalone de push com{" "}
            <strong className="text-neutral-200">
              web-push + firebase-admin
            </strong>{" "}
            acionado por cron.
          </>
        }
        resultado={
          <>
            App instalável, realtime estável e notificações agendadas
            funcionando sem servidor pago.{" "}
            <strong className="text-neutral-200">Zero downtime</strong> desde a
            migração.
          </>
        }
        stack={[
          "Next.js",
          "TypeScript",
          "Firebase",
          "Firestore",
          "Service Worker",
          "web-push",
        ]}
        codigo={
          <CodeMock arquivo="notify.mjs">
            {`// serviço standalone de push (cron)
const inscritos = await db
  .collection("pushSubscriptions")
  .get();

for (const doc of inscritos.docs) {
  `}
            <Hl>{`await webpush.sendNotification(
    doc.data().subscription,
    JSON.stringify({ title, body })
  );`}</Hl>
            {`
}`}
          </CodeMock>
        }
      />

      <CaseCard
        cor="#fbbf24"
        icone={AlarmClock}
        categoria="Sistema de Gamificação"
        nome="Await"
        link={{
          href: "https://github.com/zCarlosEduardo",
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
            em vez de WebSocket, e Server Actions com validação Zod.
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
        stack={["Next.js", "Drizzle", "PostgreSQL", "Redis", "SSE", "Zod"]}
        codigo={
          <CodeMock arquivo="metas.service.ts">
            {`// toda query nasce presa ao tenant
export async function listarMetas(
  tenantId: string
) {
  return db
    .select()
    .from(metasDiarias)
    .where(`}
            <Hl>{`eq(metasDiarias.tenantId, tenantId)`}</Hl>
            {`)
    .orderBy(desc(metasDiarias.criadaEm));
}`}
          </CodeMock>
        }
      />

      <CaseCard
        cor="#60a5fa"
        icone={Car}
        categoria="Dashboard · Proteção Veicular"
        nome="ProtecAuto"
        contexto={
          <>
            <strong className="text-neutral-200">
              Dashboard SaaS que centraliza múltiplas associações de proteção
              veicular
            </strong>
            , cada uma com sua própria instância de ERP (Hinova SGA). Construído
            dentro do meu trabalho na ARX, do levantamento de requisitos ao
            código.
          </>
        }
        desafio={
          <>
            Unificar dados de vários ERPs independentes e traduzir o negócio em
            métricas: sinistralidade, ticket médio e frequência.
          </>
        }
        decisao={
          <>
            Modelar o domínio antes do código e estruturar acesso por papéis:{" "}
            <strong className="text-neutral-200">admin global</strong>, gestora
            de associação e usuário de cooperativa — cada um vê apenas o seu
            recorte.
          </>
        }
        resultado={
          <>
            Visão consolidada que antes exigia entrar em cada ERP separadamente.
            Aqui aprendi a{" "}
            <strong className="text-neutral-200">
              conversar com o negócio
            </strong>
            , não só com o código.
          </>
        }
        stack={[
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "RBAC",
          "Integração ERP",
        ]}
        codigo={
          <CodeMock arquivo="kpis.ts">
            {`// regra de negócio virando código
export function sinistralidade(
  despesasSinistros: number,
  receitaMensalidades: number
) {
  if (receitaMensalidades === 0) return 0;
  `}
            <Hl>{`return despesasSinistros
    / receitaMensalidades;`}</Hl>
            {`
}
// meta saudável do setor: < 60%`}
          </CodeMock>
        }
      />

      <CaseCard
        cor="#4ade80"
        icone={Coins}
        categoria="Integração · Next + Django"
        nome="Sys Coin"
        link={{
          href: "https://github.com/zCarlosEduardo",
          label: "ver no github",
        }}
        contexto={
          <>
            <strong className="text-neutral-200">
              Módulo de gamificação em Next.js integrado a um ERP Django
            </strong>{" "}
            que eu não controlava — cenário comum em empresa: seu código precisa
            conviver com o sistema legado de outra equipe.
          </>
        }
        desafio={
          <>
            Compartilhar autenticação e permissões com um backend Django de
            terceiro, sem duplicar usuários nem regras de acesso.
          </>
        }
        decisao={
          <>
            Consumir a API REST (
            <strong className="text-neutral-200">Django REST Framework</strong>)
            com auth unificada via{" "}
            <strong className="text-neutral-200">JWT</strong>, e containerizar
            tudo com Docker para o deploy ser reproduzível.
          </>
        }
        resultado={
          <>
            Gestão de departamentos com filtros e estatísticas — e uma lição
            prática de{" "}
            <strong className="text-neutral-200">case-sensitivity</strong> do
            filesystem Linux que só o deploy ensina.
          </>
        }
        stack={["Next.js", "Django REST", "JWT", "Docker", "Linux"]}
        codigo={
          <CodeMock arquivo="api.ts">
            {`// identidade vem SEMPRE do Django
export async function apiDjango(
  rota: string, token: string
) {
  const res = await fetch(BASE + rota, {
    headers: {
      `}
            <Hl>{`Authorization: "Bearer " + token,`}</Hl>
            {`
    },
  });
  if (res.status === 401) renovarToken();
  return res.json();
}`}
          </CodeMock>
        }
      />
    </>
  );
}
