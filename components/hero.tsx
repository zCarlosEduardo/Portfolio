import ParticleCanvas from "./ParticleCanvas";

export default function Hero() {
  return (
    <header className="relative flex min-h-[92vh] flex-col justify-center gap-16 px-6 md:px-0">
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
          <span className="text-(--cor-secundaria) font-mono text-sm tracking-wide">
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
          <a
            href="#projetos"
            className="px-6 py-3.5 md:px-10 border rounded-full border-stone-800 text-sm cursor-pointer bg-(--cor-primaria) hover:bg-stone-100/85 text-(--background) hover:-translate-y-0.5 transition-all duration-300 font-medium"
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
    </header>
  );
}
