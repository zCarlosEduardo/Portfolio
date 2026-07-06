"use client";

export default function MarqueeTecnologias() {
    const tecnologias = [
        "VERCEL",
        "NEXT.JS",
        "TYPESCRIPT",
        "REACT",
        "JAVASCRIPT",
        "POSTGRESQL",
        "TAILWIND",
        "LINUX",
        "CAFÉ",
        "NODE.JS",
        "DOCKER",
    ];

    const listaDuplicada = [...tecnologias, ...tecnologias, ...tecnologias];

    return (
        <div className="w-full overflow-hidden border-y border-neutral-800 py-4 mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] my-20">
            <div className="flex w-max animate-marquee items-center">
                {listaDuplicada.map((tech, index) => (
                    <div key={index} className="flex items-center text-xs font-medium tracking-[0.2em] text-(--cor-secundaria)">
                        <span className="px-8 transition-colors duration-200 hover:text-neutral-200">
                            {tech}
                        </span>
                        <span className="text-[10px] text-neutral-700 select-none">✦</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
