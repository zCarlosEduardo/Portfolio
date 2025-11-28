import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

function Contato() {
  return (
    <div id="Contato" className="my-46 flex flex-col gap-6 items-center justify-center container mx-auto px-4 md:px-0 py-20">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-medium uppercase">Entre em Contato</h2>
        <div className="w-72 md:w-124 h-1 bg-blue-800 rounded-full mt-6 mb-4"></div>
        <span className="text-2xl">Vamos Conversar?</span>
      </div>
      <div className="max-w-4xl text-gray-800 dark:text-gray-300 flex flex-col mt-4 gap-6 px-4 md:px-0 text-center">
        <p>
          Curtiu meu trabalho? Quer bater um papo sobre tecnologia ou tem algum
          projeto em mente? Manda uma mensagem, ficarei feliz em conversar!
        </p>
      </div>
      <div className="flex flex-row items-center justify-center w-full max-w-4xl gap-6 md:gap-12 px-4 md:px-0 mt-14 flex-wrap">
        <div className="md:mt-8 md:w-52">
          <a
            href="https://api.whatsapp.com/send?phone=5562983263038&text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar"
            target="_blank"
            style={{ width: "100%" }}
            rel="noopener noreferrer"
            className="group inline-flex items-center text-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-700/50"
          >
            <SiWhatsapp size={24} className="group-hover/btn:rotate-12 transition-transform duration-300" />
            <span className="hidden md:block">Whatsapp</span>
          </a>
        </div>
        <div className="md:mt-8 md:w-52">
          <a
            href="https://www.linkedin.com/in/carlos-eduardo-alonso-3a1462292/"
            target="_blank"
            style={{ width: "100%" }}
            rel="noopener noreferrer"
            className="group inline-flex items-center text-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-400  text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-700/50"
          >
            <SiLinkedin size={24} className="group-hover/btn:rotate-12 transition-transform duration-300" />
            <span className="hidden md:block">Linkedin</span>
          </a>
        </div>
        <div className="md:mt-8 md:w-52">
          <a
            href="https://github.com/zCarlosEduardo"
            target="_blank"
            style={{ width: "100%" }}
            rel="noopener noreferrer"
            className="group inline-flex items-center text-center justify-center gap-3 px-8 py-4 bg-gray-900 hover:bg-gray-950 dark:bg-gray-950/60  text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50"
          >
            <SiGithub size={24} className="group-hover/btn:rotate-12 transition-transform duration-300" />
            <span className="hidden md:block">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contato;