"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { tecnologias } from "@/lib/tecnologias";
import Autoplay from "embla-carousel-autoplay";
import { TechCard } from "./TechCard";

export function TechCarrosel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      dragFree: true,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

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

  // Duplica tecnologias para carrossel infinito
  const duplicaTech = [
    ...tecnologias,
    ...tecnologias,
    ...tecnologias,
    ...tecnologias,
    ...tecnologias,
    ...tecnologias,
    ...tecnologias,
    ...tecnologias,
    ...tecnologias,
  ];

  return (
    <section
      ref={sectionRef}
      className="my-16"
      aria-label="Ferramentas e tecnologias utilizadas"
    >
      {/* Título com Animação */}
      <div
        className={`text-center mb-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Ferramentas & Tecnologias
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          <strong>Stack tecnológico</strong> que utilizo no{" "}
          <strong>desenvolvimento web</strong>
        </p>
      </div>

      {/* Carrossel com Animação */}
      <div
        className={`overflow-hidden max-w-90 md:max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        ref={emblaRef}
      >
        <div className="flex gap-6 py-10">
          {duplicaTech.map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="flex-[0_0_auto]">
              <TechCard technologia={tech} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
