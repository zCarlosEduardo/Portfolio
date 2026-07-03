import Hero from "@/components/hero";
import TopBar from "@/components/topBar";

export default function Home() {

  return (
    <>
    <TopBar />
    <Hero />
    <div id="projetos" className="h-screen bg-(--background)"></div>
    <div id="processo" className="h-screen bg-(--background)"></div>
    <div id="experiencia" className="h-screen bg-(--background)"></div>
    <div id="skills" className="h-screen bg-(--background)"></div>
    <div id="contato" className="h-screen bg-(--background)"></div>
    </>
  );
}
