export default function TituloSections({
  subtitulo,
  titulo,
  paragrafo,
}: {
  titulo: string;
  subtitulo: string;
  paragrafo: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[13px] text-(--cor-secundaria) tracking-wide uppercase font-mono">
        {subtitulo}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-(--cor-primaria) my-4 max-w-3xl">
        {titulo}
      </h2>
      <p className="text-base md:text-lg text-(--cor-secundaria) max-w-xl whitespace-pre-line leading-relaxed">{paragrafo}</p>
    </div>
  );
}
