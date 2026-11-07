import Button from "@/components/Button";
import CardsDadosTerminal from "@/components/CardsDadosTerminal";
import Experiencias from "@/components/Experiencias";
import Formacoes from "@/components/Formacoes";
import MarqueeTecnologias from "@/components/MarqueeTecnologias";
import ParticleCanvas from "@/components/ParticleCanvas";
import Projetos from "@/components/Projetos";
import StackCard from "@/components/StackCard";
import TituloSections from "@/components/TituloSections";
import TopBar from "@/components/TopBar";

// mesma margem lateral em todas as larguras (antes sumia entre 768 e 1023px)
const MOLDURA = "container mx-auto px-6 md:px-8";

// números reais do currículo e dos projetos
const numeros = [
  { valor: "13h+", texto: "de trabalho manual economizadas pelo hub de automações" },
  { valor: "1min53s", texto: "por chamado no GLPI, sem execução manual" },
  { valor: "11", texto: "departamentos cobertos pelo sistema de recompensas" },
  { valor: "2023", texto: "ano em que comecei em TI, no suporte" },
];

// do currículo: trabalhos sem case próprio no site
const outrosTrabalhos = [
  {
    titulo: "Bot de atendimento no WhatsApp",
    texto:
      "Atendimento automatizado com n8n e webhooks, integrado por API. Desenhei os fluxos e coloquei para funcionar.",
  },
  {
    titulo: "Dashboards no Power BI",
    texto:
      "Indicadores de áreas de negócio em Power BI e DAX, com as telas prototipadas antes no Figma.",
  },
  {
    titulo: "Landing pages institucionais",
    texto:
      "Páginas em Next.js com foco em performance e SEO, como este portfólio.",
  },
];

export default function Home() {
  return (
    <>
      <TopBar />
      {/* Hero Section */}
      <section className="relative flex min-h-[88svh] flex-col justify-center pt-24 pb-12">
        <div
          className="hero-dots pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        <div className={`${MOLDURA} relative flex flex-col gap-10 md:gap-14`}>
          <div className="flex gap-3 items-center">
            <div
              className="
                w-2 h-2 shrink-0
                rounded-full
                bg-green-500
                animate-pulse motion-reduce:animate-none"
            />
            <span className="text-(--cor-secundaria) font-mono text-[13px] tracking-wide">
              Goiânia, Brasil · GMT-3 · disponível para remoto
            </span>
          </div>
          <h1>
            <span className="sr-only">
              Carlos Eduardo Alonso, desenvolvedor e automação de processos com
              IA
            </span>
            <ParticleCanvas text="Carlos Eduardo" />
          </h1>
          <p className="text-(--cor-secundaria) text-lg md:text-2xl max-w-2xl leading-snug">
            <span className="text-(--cor-primaria)">
              Automatizo processos com IA e coloco em produção.
            </span>{" "}
            Faço ferramentas internas, integrações e bots que tiram trabalho
            manual da equipe.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-6">
            <Button href="#projetos">Ver projetos</Button>

            <Button href="#contato" variant="secondary">
              Entrar em contato
            </Button>
            <Button
              href="/curriculo-carlos-eduardo-alonso.pdf"
              download
              variant="secondary"
            >
              Baixar currículo
            </Button>
          </div>
        </div>
      </section>

      {/* Cards Informações e terminal */}
      <section className={`${MOLDURA} flex flex-col gap-14`}>
        <CardsDadosTerminal />
      </section>

      {/* Carrosel de stacks usadas */}
      <MarqueeTecnologias />

      <div className={`${MOLDURA} flex flex-col gap-24 md:gap-32`}>
        {/* Projetos */}
        <section id="projetos" className="scroll-mt-24">
          <TituloSections
            titulo="O que eu construí"
            subtitulo="Projetos"
            paragrafo="Automações, ferramentas internas e produtos próprios. Em cada um, conto o contexto, o desafio, a decisão técnica e o resultado."
          />
          <Projetos />

          <h3 className="mt-16 mb-6 text-xl md:text-2xl font-semibold">
            Também no currículo
          </h3>
          <ul className="grid gap-4 md:grid-cols-3">
            {outrosTrabalhos.map((item) => (
              <li
                key={item.titulo}
                className="rounded-lg bg-neutral-900/60 p-5 md:p-6"
              >
                <p className="font-semibold text-neutral-100">{item.titulo}</p>
                <p className="mt-2 text-base text-(--cor-secundaria) leading-relaxed">
                  {item.texto}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24">
          <TituloSections
            titulo="Stack"
            subtitulo="Skills"
            paragrafo="O que uso em produção hoje e o que estou estudando."
          />
          <StackCard />
        </section>

        {/* Sobre */}
        <section
          id="sobre"
          className="scroll-mt-24 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16"
        >
          <TituloSections
            titulo="Do suporte ao desenvolvimento"
            subtitulo="Sobre mim"
            paragrafo={`Comecei em TI pelo suporte. Atendendo chamado em rede de supermercado, aprendi a transformar "o sistema não funciona" em problema técnico. Depois vieram infraestrutura, implantação de sistemas e as primeiras linhas de código.

Hoje desenvolvo ferramentas internas, integrações e produtos próprios com Next.js, n8n, Playwright e IA. Como passei pelo suporte, sei onde o trabalho repetitivo pesa, e é esse trabalho que procuro automatizar.`}
          />
          <dl className="grid grid-cols-2 gap-4 self-end">
            {numeros.map((n) => (
              <div
                key={n.valor}
                className="rounded-lg bg-neutral-900/60 p-5 md:p-6"
              >
                <dt className="sr-only">{n.texto}</dt>
                <dd className="text-3xl md:text-5xl font-bold tracking-tight text-(--cor-primaria)">
                  {n.valor}
                </dd>
                <dd className="mt-2 text-sm md:text-base text-(--cor-secundaria) leading-snug">
                  {n.texto}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Carreira */}
        <section id="experiencia" className="scroll-mt-24">
          <TituloSections
            titulo="Onde trabalhei"
            subtitulo="Experiência"
            paragrafo="Três empresas, do atendimento às lojas de um supermercado ao desenvolvimento de ferramentas internas."
          />
          <Experiencias />
          <h3 className="mb-4 text-xl md:text-2xl font-semibold">Formação</h3>
          <Formacoes />
        </section>

        {/* Contato */}
        <section
          id="contato"
          className="scroll-mt-24 flex flex-col items-center text-center py-12 md:py-16"
        >
          <span className="text-[13px] text-(--cor-secundaria) tracking-wide uppercase mb-8 font-mono">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl">
            Vamos conversar?
          </h2>
          <p className="py-6 max-w-lg text-base md:text-lg text-(--cor-secundaria)">
            Respondo rápido. Numa entrevista, posso mostrar as ferramentas
            funcionando.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            <Button href="https://wa.me/5562983263038">Mandar mensagem</Button>
            <Button
              href="https://www.linkedin.com/in/zcarloseduardo/"
              target="_blank"
              rel="noopener noreferrer"
              variant="gitHub"
            >
              LinkedIn
            </Button>
            <Button
              href="https://github.com/zCarlosEduardo"
              target="_blank"
              rel="noopener noreferrer"
              variant="gitHub"
            >
              GitHub
            </Button>
            <Button
              href="/curriculo-carlos-eduardo-alonso.pdf"
              download
              variant="secondary"
            >
              Baixar currículo
            </Button>
          </div>
          <span className="mt-8 text-(--cor-secundaria) text-base">
            ou direto:{" "}
            <a
              href="mailto:cseduardoalonso@gmail.com"
              className="border-b border-neutral-700 text-neutral-300 hover:text-white"
            >
              cseduardoalonso@gmail.com
            </a>
          </span>
        </section>
      </div>
    </>
  );
}
