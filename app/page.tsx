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

export default function Home() {
  return (
    <>
      <TopBar />
      {/* Hero Section */}
      <section className="relative flex min-h-[92vh] flex-col justify-center gap-16 px-6 md:px-0">
        <div
          className="hero-dots pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        {/* Glow de fundo Hero*/}
        {/* <div
          className="pointer-events-none absolute left-[-10%] top-[18%] h-[55%] w-[65%] blur-[10px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(237,237,237,0.05) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        /> */}
        <div className="container mx-auto flex flex-col gap-14">
          <div className="flex gap-4 items-center ">
            <div
              className="
                w-2 h-2
                rounded-full
                bg-green-500
                animate-pulse
                shadow-[0_0_8px_2px_rgb(34_197_94/0.25)] "
            />
            <span className="text-(--cor-secundaria) font-mono text-[10px] md:text-xs tracking-wide">
              Goiânia, Brasil · GMT-3 · disponível para projetos
            </span>
          </div>
          <ParticleCanvas text="Carlos Eduardo" />
          <p className="text-(--cor-secundaria) text-md md:text-lg max-w-lg ">
            Desenvolvedor que{" "}
            <span className="text-(--cor-primaria)">
              automatiza processos com IA e coloca em produção
            </span>
            . Ferramentas internas, integrações e bots que economizam horas
            reais de trabalho.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6">
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
      <section className="container mx-auto lg:px-0 flex flex-col gap-14">
        <CardsDadosTerminal />
      </section>

      {/* Carrosel de stacks usadas */}
      <MarqueeTecnologias />

      <div className="container mx-auto p-4 md:p-0 lg:px-0 flex flex-col gap-14">
        {/* Projetos */}

        <section id="projetos" className="pt-20">
          <TituloSections
            titulo="Não é lista de tutorial. É produto com decisão técnica."
            subtitulo="Projetos"
            paragrafo="Cada projeto resolveu um problema real: automação em produção, ferramenta interna ou produto com usuário. O formato é o mesmo que uso no trabalho: contexto, desafio, decisão, resultado."
          />
          <Projetos />
        </section>

        {/* Skills */}
        <section id="skills" className="pt-20">
          <TituloSections
            titulo="Stack"
            subtitulo="Skills"
            paragrafo="O que uso em produção hoje."
          />
          <StackCard />
        </section>

        {/* Sobres talves remover */}
        <section id="sobre" className="pt-20">
          <TituloSections
            titulo=" Sobre mim"
            subtitulo="Conheça-me"
            paragrafo={`Comecei em TI pelo suporte. Atendendo chamado em rede de supermercado, aprendi a transformar "o sistema não funciona" em problema técnico. Depois vieram infraestrutura e implantação de sistemas.

Na ARX, passei a automatizar as tarefas que tomavam horas do time. A automação virou função: hoje construo ferramentas internas com Next.js, n8n, Playwright e IA. Meu foco é achar o trabalho repetitivo e tirar ele das mãos das pessoas.`}
          />
        </section>

        {/* Carreira */}
        <section id="experiencia" className="pt-20">
          <TituloSections
            titulo="De suporte a desenvolvimento"
            subtitulo="Experiência"
            paragrafo="Comecei no suporte, ouvindo o problema real do usuário. Migrei para desenvolvimento e hoje automatizo processos. Enxergo o sistema pelos dois lados: de quem usa e de quem constrói."
          />
          <Experiencias />
          <div className="my-4 ml-3 ">
            <span className="text-xs text-(--cor-secundaria) tracking-wide uppercase font-mono">
              Formação
            </span>
          </div>
          <Formacoes />
        </section>

        {/* Contato */}
        <section id="contato" className="relative overflow-hidden">
          <div className="flex flex-col justify-center items-center text-center min-h-[90svh] md:min-h-[80svh]">
            <div
              className="pointer-events-none absolute bottom-[-40%] left-1/2 h-[70%] w-[80%]
               -translate-x-1/2 blur-md"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(237,237,237,0.06) 0%, transparent 65%)",
              }}
              aria-hidden="true"
            />
            <span className="text-xs text-(--cor-secundaria) tracking-wide uppercase ml-3 mb-12 font-mono">
              Contato
            </span>
            <h2 className="text-4xl font-bold max-w-lg">
              Procurando alguém que aprende rápido e entrega de verdade?
            </h2>
            <p className="py-6 max-w-lg text-(--cor-secundaria)">
              Respondo rápido e converso de forma direta. Na entrevista, mostro
              ferramentas em produção, não slides.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Button href="https://wa.me/5562983263038">
                Mandar mensagem
              </Button>
              <Button
                href="https://github.com/zCarlosEduardo"
                target="_blank"
                rel="noopener noreferrer"
                variant="gitHub"
              >
                Ver GitHub
              </Button>
              <Button
                href="/curriculo-carlos-eduardo-alonso.pdf"
                download
                variant="secondary"
              >
                Baixar currículo
              </Button>
            </div>
            <span className="mt-8 text-(--cor-secundaria) text-xs">
              ou direto:{" "}
              <a
                href="mailto:cseduardoalonso@gmail.com"
                className="border-b border-neutral-700 text-neutral-400 hover:animate-pulse"
              >
                cseduardoalonso@gmail.com
              </a>{" "}
              ·{" "}
              <a
                href="https://www.linkedin.com/in/zcarloseduardo/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-neutral-700 text-neutral-400 hover:animate-pulse"
              >
                linkedin
              </a>
            </span>
          </div>
        </section>
      </div>
    </>
  );
}
