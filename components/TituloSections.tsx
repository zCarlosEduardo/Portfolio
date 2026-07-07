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
      <span className="text-xs text-(--cor-secundaria) tracking-wide uppercase font-mono">
        {subtitulo}
      </span>
      <h2 className="text-2xl font-bold text-(--cor-primaria) my-4">
        {titulo}
      </h2>
      <p className="text-md text-(--cor-secundaria) max-w-lg">{paragrafo}</p>
    </div>
  );
}
