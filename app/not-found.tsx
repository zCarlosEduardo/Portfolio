import Link from "next/link";
import { Home } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("/background-404.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-2xl">
        <div className=" p-8 md:p-12 text-center">
          {/* Ícone animado */}
          <div className="flex justify-center mb-6">
            <Image
              src="/404Error.webp"
              alt="Erro 404"
              width={960}
              height={960}
            />
          </div>

          <div className="bg-white/2 rounded-2xl backdrop-blur-md bg-opacity-70 py-6 mb-6 dark:shadow-lg">
            {/* Título */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-100  mb-4 uppercase">
              Página Não Encontrada
            </h2>

            {/* Descrição */}
            <p className="text-gray-600 dark:text-gray-200 mb-8 text-lg">
              Ué, deu 404! A página sumiu igual bug em produção.
            </p>
          </div>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Home className="w-5 h-5" />
              Voltar para Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
