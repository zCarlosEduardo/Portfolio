function Sobre() {
  return (
    <section
      id="Sobre"
      className="w-full  p-2 flex flex-col items-center py-16"
    >
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl font-medium uppercase">CONHEÇA-ME</h2>
        <div className="w-72 md:w-124 h-1 bg-blue-800 rounded-full mt-6 mb-4"></div>
        <span className="text-xl md:text-2xl">Um Pouco Sobre Minha Jornada</span>
      </div>
      <div className="max-w-4xl text-gray-800 dark:text-gray-300 flex flex-col mt-4 gap-6 px-4 md:px-0 text-center md:text-left">
        <p>
          Desenvolvedor Full Stack Júnior especializado em Next.js, React e
          TypeScript. Atualmente desenvolvo sistemas, páginas web e implemento
          soluções para automatizar processos empresariais.
        </p>
        <p>
          Minha trajetória começou no suporte técnico, o que me deu uma
          perspectiva única: desenvolvo pensando tanto na qualidade do código
          quanto na experiência do usuário. Essa combinação me permite criar
          aplicações que são tecnicamente sólidas e intuitivas de usar.
        </p>
        <p>
          Graduando em Ciências da Computação e sempre aprendendo. Acredito que
          a melhor tecnologia é aquela que resolve problemas reais de forma
          simples e eficiente.
        </p>
      </div>
    </section>
  );
}

export default Sobre;
