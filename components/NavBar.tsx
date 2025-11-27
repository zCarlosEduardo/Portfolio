function NavBar() {
  return (
    <div className="w-full bg-white p-4 shadow-md z-50">
      {(() => {
        const linkClass =
          "text-gray-800 hover:text-gray-900 transition-colors hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300";
        return (
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className={linkClass}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={linkClass}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className={linkClass}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#" className={linkClass}>
                Contato
              </a>
            </li>
          </ul>
        );
      })()}
    </div>
  );
}

export default NavBar;
