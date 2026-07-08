import Button from "@/components/Button";
import CardsDadosTerminal from "@/components/CardsDadosTerminal";
import Formacoes from "@/components/Formacoes";
import MarqueeTecnologias from "@/components/MarqueeTecnologias";
import ParticleCanvas from "@/components/ParticleCanvas";
import TituloSections from "@/components/TituloSections";
import TopBar from "@/components/topBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <section className="relative flex min-h-[92vh] flex-col justify-center gap-16 px-6 md:px-0">
        <div
          className="hero-dots pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-[-10%] top-[18%] h-[55%] w-[65%] blur-[10px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(237,237,237,0.05) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
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
          <ParticleCanvas text="CarlosEduardo" />
          <p className="text-(--cor-secundaria) text-md md:text-lg max-w-lg ">
            Full stack developer que{" "}
            <span className="text-(--cor-primaria)">
              tira produto do papel e coloca em produção
            </span>{" "}
            do schema do banco ao deploy. Next.js, TypeScript e PostgreSQL, com
            atenção real a design e experiência do usuário.
          </p>
          <div className="flex gap-6">
            <Button href="#projetos">Ver projetos</Button>

            <Button href="#contato" variant="secondary">
              Entrar em contato
            </Button>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 lg:px-0 flex flex-col gap-14">
        <CardsDadosTerminal />
      </div>
      <MarqueeTecnologias />
      <div id="projetos" className="pt-20"></div>

      <div className="container mx-auto px-4 lg:px-0 flex flex-col gap-14">
        <TituloSections
          titulo="Não é lista de tutorial. É produto com decisão técnica."
          subtitulo="Projetos"
          paragrafo="Cada projeto abaixo passou por problema real, escolha de arquitetura, bug difícil e refatoração honesta. O formato é o mesmo que uso no trabalho: contexto, desafio, decisão, resultado."
        />

        <div id="processo" className="pt-20">
          <TituloSections
            titulo="O que você leva contratando um júnior que pensa assim"
            subtitulo="Como eu trabalho"
            paragrafo="Júnior não significa esperar tarefa pronta. Significa aprender rápido e entregar com responsabilidade. Meu processo:"
          />
        </div>
        <div id="experiencia" className="pt-20"></div>
        <TituloSections
          titulo="De suporte a desenvolvimento"
          subtitulo="Experiência"
          paragrafo="Entrei em tecnologia resolvendo chamado de suporte aquele tipo de trabalho que te ensina a ouvir o problema real do usuário antes de qualquer linha de código. Foi ali que decidi migrar pra desenvolvimento, e hoje isso pesa a favor: enxergo o sistema pelos dois lados, de quem usa e de quem constrói."
        />
        <div id="skills" className="pt-20">
          <TituloSections
            titulo="Stack"
            subtitulo="Skills"
            paragrafo="O que uso em produção hoje."
          />
          <span className="text-xs text-(--cor-secundaria) tracking-wide uppercase ml-3 my-3 font-mono">
            Formação
          </span>
          <Formacoes />
        </div>
        <div id="contato" className="relative overflow-hidden">
          <div className="flex flex-col justify-center items-center text-center min-h-[90svh] md:min-h-[50svh]">
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
              Respondo rápido, converso sem enrolação e chego na entrevista com
              código em produção pra mostrar não só slides.
            </p>
            <div className="flex gap-8">
              <Button href="">Ver projetos</Button>
              <Button
                href="https://github.com/zCarlosEduardo"
                target="_blank"
                rel="noopener noreferrer"
                variant="gitHub"
              >
                Ver GitHub
              </Button>
            </div>
            <span className="mt-8 text-(--cor-secundaria) text-xs">
              ou direto:{" "}
              <a
                href="mailto:contato.cseduardo@gmail.com"
                className="border-b border-neutral-700 text-neutral-400 hover:animate-pulse"
              >
                contato.cseduardo@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
