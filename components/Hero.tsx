"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="mt-24 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 min-h-[calc(100vw-96em)] ">
      <div className="flex items-center gap-24 mb-10 md:mb-0">
        <span className="h-[620px] w-2 bg-blue-800 rounded-full hidden md:block"></span>
        <div className="max-w-2xl flex flex-col gap-12">
          <div className="gap-2 flex flex-col text-center md:text-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Carlos Eduardo <span className="hidden md:block">Alonso</span>
            </h1>
            <TypeAnimation
              sequence={[
                "Desenvolvedor Full Stack Júnior",
                5000,
                "Criando experiências web incríveis",
                3000,
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl text-blue-800 ml-0 md:ml-12 font-medium dark:text-blue-500"
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-col gap-6 text-center md:text-start md:items-start">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed dark:text-gray-300 items-start">
              Transformo ideias em experiências digitais impactantes.
              Especializado em desenvolvimento full stack com Next.js, React e
              TypeScript.
            </p>

            <a
              href="#Projetos"
              className="py-3 px-12 bg-blue-800 hover:bg-blue-900 rounded-md
               text-white font-medium transition-all duration-300 shadow-md
                hover:shadow-lg hover:scale-105"
            >
              Ver Projetos
            </a>
          </div>
        </div>
      </div>

      {/* Foto */}
      <div className="relative border-4 border-blue-800 rounded-full shadow-lg overflow-hidden bg-white dark:bg-gray-800 hidden md:block">
        <Image
          src="https://avatars.githubusercontent.com/u/175896180?v=4"
          alt="Carlos Eduardo Alonso"
          width={384}
          height={384}
          className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover "
        />
      </div>
    </section>
  );
}
export default Hero;