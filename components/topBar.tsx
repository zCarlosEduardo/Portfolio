"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "projetos", label: "projetos" },
  { id: "processo", label: "processo" },
  { id: "experiencia", label: "experiência" },
  { id: "skills", label: "skills" },
];

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function irPara(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 
        
        ${scrolled ? "border-b border-stone-800 bg-(--background)/50 backdrop-blur" : "border-stone-950"}
      `}
    >
      <div className="flex text-sm text-center items-center container mx-auto py-4 px-6 lg:px-6 justify-between">
        <h2 className="font-bold flex gap-2">
          ce
          <span className="font-normal text-(--cor-secundaria)">.dev</span>
        </h2>

        <div className="flex gap-6 text-center items-center">
          <nav className="hidden md:flex gap-6 font-extralight text-(--cor-secundaria)">
            {LINKS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => irPara(e, item.id)}
                className="transition-colors duration-300 hover:text-(--cor-primaria)"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            onClick={(e) => irPara(e, "contato")}
            className="px-6 py-1.5 border rounded-full border-stone-800 text-sm cursor-pointer hover:bg-(--cor-primaria) hover:text-(--background) transition-colors duration-300 "
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </header>
  );
}
