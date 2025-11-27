"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function NavBar() {
  return (
    <nav className="w-full bg-white p-4 shadow-md">
      {(() => {
        const linkClass =
          "text-gray-800 hover:text-gray-900 transition-colors hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300";
        return (
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className={linkClass}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={linkClass}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className={linkClass}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#" className={linkClass}>
                Contato
              </a>
            </li>
          </ul>
        );
      })()}
    </nav>
  );
}

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 min-h-[calc(100vw-96em)]">
      <div className="flex items-center gap-24 mb-10 md:mb-0">
        <span className="h-[720px] w-2 bg-blue-800 rounded-full hidden md:block"></span>
        <div className="max-w-2xl flex flex-col gap-12">
          <div className="gap-2 flex flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Carlos Eduardo Alonso
            </h1>
            <TypeAnimation
              sequence={[
                "Desenvolvedor Full Stack Júnior",
                4000,
                "Especialista em Next.js & React",
                4000,
                "Transformando ideias em código",
                2000,
                "Criando experiências web incríveis",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl text-blue-800 ml-0 md:ml-12 font-medium"
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-col gap-6 items-start">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Transformo ideias em experiências digitais impactantes.
              Especializado em desenvolvimento full stack com Next.js, React e
              TypeScript.
            </p>

            <a
              href="#projetos"
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
      <div className="relative border-4 border-blue-800 rounded-full shadow-lg overflow-hidden bg-white ">
        <Image
          src="/profile.jpg"
          alt="Carlos Eduardo Alonso"
          width={384}
          height={384}
          className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover "
        />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-zinc-100 container mx-auto">
      <NavBar />
      <Hero />
    </div>
  );
}
