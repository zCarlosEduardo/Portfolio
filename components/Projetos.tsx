import { projetos } from "@/lib/projetos";
import { ProjetosCard } from "./ProjetosCard";

function Projetos() {
  return (
    <div className="min-h-screen bg-blue-800">
        <div className="container mx-auto  py-16 px-4 md:px-0 flex flex-col gap-12 items-center">

      <div className="text-white text-center flex flex-col gap-4  p-6">
        <span className="text-xl">PORTFÓLIO</span>
        <h3 className="text-4xl">Projetos em Destaque</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projetos.map((projeto, index) => (
            <ProjetosCard key={index} projeto={projeto} />
        ))}
      </div>
        </div>
    </div>
  );
}

export default Projetos;