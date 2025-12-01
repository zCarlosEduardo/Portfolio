"use client";

import { useState, useEffect } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const linkClass =
    "text-gray-800 hover:text-gray-900 transition-colors hover:bg-blue-100 dark:hover:bg-blue-900 dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300";

  return (
    <nav
      className={`fixed top-0 w-full bg-white/90 backdrop-blur-sm p-4 shadow-md z-50 dark:bg-gray-950/90 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#")}
          className="text-xl font-bold text-gray-800 dark:text-white"
        >
          Portfólio
        </button>
        <button
          onClick={() => scrollToSection("#")}
          className="text-xl font-bold text-gray-800 dark:text-white block md:hidden"
        ></button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <button onClick={() => scrollToSection("#")} className={linkClass}>
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("Sobre")}
              className={linkClass}
            >
              Sobre
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("Projetos")}
              className={linkClass}
            >
              Projetos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("Contato")}
              className={linkClass}
            >
              Contato
            </button>
          </li>
        </ul>

        {/* Botão Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center group"
          aria-label="Menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 dark:bg-white rounded-full transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-800 dark:bg-white rounded-full my-1 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-800 dark:bg-white rounded-full transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-2 pb-4">
          <li>
            <button
              onClick={() => scrollToSection("#")}
              className={`${linkClass} w-full text-left`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("Sobre")}
              className={`${linkClass} w-full text-left`}
            >
              Sobre
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("Projetos")}
              className={`${linkClass} w-full text-left`}
            >
              Projetos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("Contato")}
              className={`${linkClass} w-full text-left`}
            >
              Contato
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
