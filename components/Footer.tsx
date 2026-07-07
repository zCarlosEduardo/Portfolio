type LinkItem = {
  descricao: string;
  href: string;
  corHover?: string;
};

const link: LinkItem[] = [
  {
    descricao: "github",
    href: "https://github.com/cseduardo",
  },
  {
    descricao: "linkedin",
    href: "https://www.linkedin.com/in/carlos-eduardo-09b24421a/",
    corHover:
      "hover:text-blue-400 hover:border-blue-700/50 hover:shadow-md shadow-blue-700/20",
  },
  {
    descricao: "email",
    href: "mailto:@gmail.com",
    corHover:
      "hover:text-red-400 hover:border-orange-700/50 hover:shadow-md shadow-red-700/20",
  },
];

export default function Footer() {
  const anoAtual = new Date().getFullYear();
  return (
    <footer className="py-10 flex flex-row gap-12 flex-wrap-reverse items-center justify-center md:justify-between text-center border-t border-neutral-900 lg:px-24 px-2">
      <p className="text-(--cor-secundaria) text-xs font-mono">
        © {anoAtual} - Todos os direitos reservados. Carlos Eduardo 🤨
      </p>
      <nav className="flex flex-row gap-3 md:gap-6 text-(--cor-secundaria) text-xs tracking-wide font-mono">
        {link.map((item) => (
          <a
            key={item.descricao}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3 py-1 border-(--background) border transition duration-300 hover:-translate-y-0.5 rounded-sm ${item.corHover ?? "hover:text-neutral-300 hover:border-neutral-700 hover:shadow-md shadow-neutral-700/20"}`}
          >
            {item.descricao}
          </a>
        ))}
      </nav>
    </footer>
  );
}
