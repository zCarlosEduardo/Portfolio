export default function Footer() {
  const anoAtual = new Date().getFullYear();
  return (
    <footer className="py-10 flex flex-row gap-12 flex-wrap-reverse items-center justify-center md:justify-between text-center border-t border-neutral-900 lg:px-24 px-2">
      <p className="text-(--cor-secundaria) text-xs font-mono">
        © {anoAtual} - Todos os direitos reservados.
      </p>
      <nav className="flex flex-row gap-3 md:gap-6 text-(--cor-secundaria) text-xs tracking-wide font-mono">
        <a
          href="https://github.com/cseduardo"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 border-(--background) hover:border-neutral-900 border transition duration-300 hover:-translate-y-1 rounded-sm hover:text-neutral-300 hover:shadow-md shadow-neutral-700/20 "
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/carlos-eduardo-09b24421a/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 border-(--background) hover:border-neutral-900 border transition duration-300 hover:-translate-y-1 "
        >
          linkedin
        </a>
        <a
          href="mailto:@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 border-(--background) hover:border-neutral-900 border transition duration-300 hover:-translate-y-1 "
        >
          email
        </a>
      </nav>
    </footer>
  );
}
