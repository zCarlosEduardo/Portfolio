"use client";

import { useEffect, useRef, useState } from "react";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

function Contato() {
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
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="Contato"
      ref={sectionRef}
      className="my-46 flex flex-col gap-6 items-center justify-center container mx-auto px-4 md:px-0 py-20"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      {/* Header com Animação */}
      <div
        className={`flex flex-col items-center justify-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-medium uppercase">
          Entre em Contato
        </h2>
        <div className="w-72 md:w-124 h-1 bg-blue-800 rounded-full mt-6 mb-4"></div>
        <span className="text-xl md:text-2xl">Vamos Conversar?</span>
      </div>

      {/* Descrição com Animação */}
      <div
        className={`max-w-4xl text-gray-800 dark:text-gray-300 flex flex-col mt-4 gap-6 px-4 md:px-0 text-center transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p>
          Curtiu meu trabalho? Quer bater um papo sobre{" "}
          <strong>tecnologia</strong>, <strong>desenvolvimento web</strong> ou
          tem algum <strong>projeto</strong> em mente? Manda uma mensagem,
          ficarei feliz em conversar sobre <strong>programação</strong>,{" "}
          <strong>React</strong>, <strong>Next.js</strong> e mais!
        </p>
      </div>

      {/* Botões de Contato com Animação Escalonada */}
      <div className="flex flex-row items-center justify-center w-full max-w-4xl gap-6 md:gap-12 px-4 md:px-0 mt-14 flex-wrap">
        {/* WhatsApp */}
        <div
          className={`md:mt-8 md:w-52 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://api.whatsapp.com/send?phone=5562983263038&text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-700/50 w-full"
            aria-label="Entrar em contato via WhatsApp"
            itemProp="url"
          >
            <SiWhatsapp
              size={24}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="hidden md:block">WhatsApp</span>
          </a>
        </div>

        {/* LinkedIn */}
        <div
          className={`md:mt-8 md:w-52 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://www.linkedin.com/in/carlos-eduardo-alonso-3a1462292/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-400 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-700/50 w-full"
            aria-label="Conectar no LinkedIn"
            itemProp="sameAs"
          >
            <SiLinkedin
              size={24}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="hidden md:block">LinkedIn</span>
          </a>
        </div>

        {/* GitHub */}
        <div
          className={`md:mt-8 md:w-52 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://github.com/zCarlosEduardo"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-center justify-center gap-3 px-8 py-4 bg-gray-900 hover:bg-gray-950 dark:bg-gray-950/60 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50 w-full"
            aria-label="Ver perfil no GitHub"
            itemProp="sameAs"
          >
            <SiGithub
              size={24}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="hidden md:block">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contato;
