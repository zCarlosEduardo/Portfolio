"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState, useRef } from "react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="md:mt-24 mt-12 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 min-h-[calc(100vh-16em)]"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Conteúdo Principal com Animação */}
      <div
        className={`relative border-4 border-blue-800 rounded-4xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 md:hidden sm:block transition-all duration-1000 delay-300 mb-12 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/175896180?v=4"
          alt="Carlos Eduardo Alonso - Desenvolvedor Full Stack"
          width={384}
          height={384}
          className="w-72 h-72 md:w-96 md:h-96 object-cover"
          priority
          itemProp="image"
        />
      </div>
      <div
        className={`flex items-center gap-24 mb-10 md:mb-0 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <span
          className="h-[620px] w-2 bg-blue-800 rounded-full hidden md:block"
          aria-hidden="true"
        ></span>

        <div className="max-w-2xl flex flex-col gap-12">
          {/* Título e Animação de Texto */}
          <div className="gap-2 flex flex-col text-center md:text-start">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              itemProp="name"
            >
              Carlos Eduardo <span className="hidden md:block">Alonso</span>
            </h1>
            {isInView && (
              <TypeAnimation
                sequence={[
                  "Desenvolvedor Full Stack Júnior",
                  5000,
                  "Criando experiências web incríveis",
                  3000,
                  "Desenvolvedor Frontend e Backend Júnior",
                  3000,
                ]}
                wrapper="span"
                speed={50}
                className="text-2xl text-blue-800 ml-0 md:ml-12 font-medium dark:text-blue-500"
                repeat={Infinity}
                aria-label="Especialidades profissionais"
              />
            )}
          </div>

          {/* Descrição e CTA */}
          <div className="flex flex-col gap-6 text-center md:text-start md:items-start">
            <p
              className="text-base md:text-lg text-gray-600 leading-relaxed dark:text-gray-300"
              itemProp="description"
            >
              Transformo ideias em{" "}
              <strong>experiências digitais impactantes</strong>. Especializado
              em <strong>desenvolvimento full stack</strong>. Foco em criar
              aplicações web.
            </p>

            <a
              href="#Projetos"
              className="py-3 px-12 bg-blue-800 hover:bg-blue-900 rounded-md
               text-white font-medium transition-all duration-300 shadow-md
                hover:shadow-lg hover:scale-105 inline-block"
              aria-label="Navegar para seção de projetos"
            >
              Ver Projetos
            </a>
          </div>
        </div>
      </div>

      {/* Foto Profissional com Animação */}
      <div
        className={`relative border-4 border-blue-800 rounded-full shadow-lg overflow-hidden bg-white dark:bg-gray-800 hidden md:block transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/175896180?v=4"
          alt="Carlos Eduardo Alonso - Desenvolvedor Full Stack"
          width={384}
          height={384}
          className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover"
          priority
          itemProp="image"
        />
      </div>
    </section>
  );
}

export default Hero;
