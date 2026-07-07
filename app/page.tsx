import CardsDadosTerminal from "@/components/CardsDadosTerminal";
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
            <a
              href="#projetos"
              className="px-6 py-3.5 md:px-10 border rounded-full border-stone-800 text-sm cursor-pointer bg-(--cor-primaria) hover:bg-stone-100/80 text-(--background) hover:-translate-y-0.5 transition-all duration-300 font-medium"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="px-6 py-3.5 md:px-10 border rounded-full border-stone-800 text-sm cursor-pointer  text-(--cor-secundaria) hover:border-(--cor-primaria) hover:text-(--cor-primaria) hover:-translate-y-0.5 transition-all duration-300 "
            >
              Entrar em contato
            </a>
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
          <h4 className="text-xs text-(--cor-secundaria) tracking-wide uppercase ml-3 my-3 font-mono">
            Formação
          </h4>
          <div>
            <div className="flex gap-2 justify-between border-y border-0 border-neutral-900 py-4 flex-wrap">
              <span className="ml-3">Ciência da Computação — em andamento</span>
              <span className="text-(--cor-secundaria) text-sm tracking-wide font-mono">
                {" "}
                Descomplica Faculdade Digital
              </span>
            </div>
            <div className="flex gap-2 justify-between border-b border-0 border-neutral-900 py-4 flex-wrap">
              <span className="ml-3">Formações em desenvolvimento web</span>
              <span className="text-(--cor-secundaria) text-sm tracking-wide font-mono">
                Alura · Codédex
              </span>
            </div>
          </div>
        </div>
        <div id="contato" className="pt-20"></div>
      </div>
    </>
  );
}
