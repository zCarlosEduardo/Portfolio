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
            paragrafo="Cada projeto abaixo passou por problema real, escolha de arquitetura, bug difícil e refatoração honesta. O formato é o mesmo que uso no trabalho: contexto, desafio, decisão, resultado."
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
            subtitulo="Conheça me"
            paragrafo='Do chamado de suporte ao deploy em produção
Sou o Carlos, Cadu pros íntimos desenvolvedor full stack em Goiânia. Entrei em tecnologia pela porta do suporte: atendendo chamado em rede de supermercado, aprendendo na marra a traduzir "o sistema não funciona" em problema técnico de verdade. Isso mudou como eu programo até hoje: antes de escrever qualquer linha, quero entender quem vai usar e onde dói.
Na ARX entrei pra implantar sistemas e virei dev por iniciativa própria comecei automatizando uma tarefa que tomava horas do time, e a automação virou função. Hoje construo produto de ponta a ponta com Next.js, TypeScript e PostgreSQL, e mantenho apps em produção com usuários reais, do tipo que reclama na hora quando algo quebra.
Fora do código, sou o cara que desmonta as coisas pra entender: eletrônica, robótica, carrinho RC de drift. O padrão é sempre o mesmo aprendo fazendo, quebro, conserto, documento. Júnior no crachá, mentalidade de dono do problema.'
          />
        </section>

        {/* Carreira */}
        <section id="experiencia" className="pt-20">
          <TituloSections
            titulo="De suporte a desenvolvimento"
            subtitulo="Experiência"
            paragrafo="Entrei em tecnologia resolvendo chamado de suporte aquele tipo de trabalho que te ensina a ouvir o problema real do usuário antes de qualquer linha de código. Foi ali que decidi migrar pra desenvolvimento, e hoje isso pesa a favor: enxergo o sistema pelos dois lados, de quem usa e de quem constrói."
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
              Respondo rápido, converso sem enrolação e chego na entrevista com
              código em produção pra mostrar não só slides.
            </p>
            <div className="flex gap-8">
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
        </section>
      </div>
    </>
  );
}
