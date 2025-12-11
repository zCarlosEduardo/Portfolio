"use client";

import { useEffect, useRef, useState } from "react";

function Sobre() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="Sobre"
      ref={sectionRef}
      className="w-full p-2 flex flex-col items-center py-16"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Header da Seção com Animação */}
      <div
        className={`flex flex-col items-center mb-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-medium uppercase">CONHEÇA-ME</h2>
        <div className="w-72 md:w-124 h-1 bg-blue-800 rounded-full mt-6 mb-4"></div>
        <span className="text-xl md:text-2xl">
          Um Pouco Sobre Minha Jornada
        </span>
      </div>

      {/* Conteúdo com Animação Escalonada */}
      <div className="max-w-4xl text-gray-800 dark:text-gray-300 flex flex-col mt-4 gap-6 px-4 md:px-0 text-center md:text-left">
        <p
          className={`transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
          itemProp="description"
        >
          <strong>Desenvolvedor Full Stack Júnior</strong> especializado em{" "}
          <strong>Next.js</strong>, <strong>React</strong> e{" "}
          <strong>TypeScript</strong>. Atualmente desenvolvo{" "}
          <strong>sistemas web</strong>, <strong>landing pages</strong> e
          implemento soluções para{" "}
          <strong>automatizar processos empresariais</strong>, focando em{" "}
          <strong>performance</strong> e <strong>escalabilidade</strong>.
        </p>

        <p
          className={`transition-all duration-1000 delay-400 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          Minha trajetória começou no <strong>suporte técnico</strong>, o que me
          deu uma perspectiva única: desenvolvo pensando tanto na{" "}
          <strong>qualidade do código</strong> quanto na{" "}
          <strong>experiência do usuário (UX)</strong>. Essa combinação me
          permite criar aplicações que são tecnicamente sólidas,{" "}
          <strong>acessíveis</strong> e intuitivas de usar.
        </p>

        <p
          className={`transition-all duration-1000 delay-600 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
          itemProp="alumniOf"
        >
          <strong>Graduando em Ciências da Computação</strong> e sempre
          aprendendo novas <strong>tecnologias</strong> e{" "}
          <strong>metodologias ágeis</strong>. Acredito que a melhor tecnologia
          é aquela que resolve <strong>problemas reais</strong> de forma
          simples, eficiente e elegante.
        </p>
      </div>
    </section>
  );
}

export default Sobre;
