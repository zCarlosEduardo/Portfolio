import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import { TechCarrosel } from "@/components/TechCarrosel";
import Projetos from "@/components/Projetos";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <main itemScope itemType="https://schema.org/WebPage">
      <div className="container mx-auto">
        <Hero />
        <Sobre />
        <TechCarrosel />
      </div>
      <Projetos />
      <Contato />
    </main>
  );
}