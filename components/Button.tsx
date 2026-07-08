"use client";

import { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "gitHub";
}

export default function Button({
  children,
  href = "",
  onClick,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3.5 md:px-10 border rounded-full text-sm cursor-pointer transition-all duration-300 hover:-translate-y-0.5";

  const variants = {
    primary:
      "bg-(--cor-primaria) text-(--background) border-stone-800 hover:bg-stone-100/80 font-medium",

    secondary:
      "border-stone-800 text-(--cor-secundaria) hover:border-(--cor-primaria) hover:text-(--cor-primaria)",

    gitHub:
      "border-stone-800 text-(--cor-secundaria) hover:border-blue-500 hover:text-blue-500",
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    if (e.defaultPrevented) return;

    if (href.startsWith("#")) {
      e.preventDefault();

      const id = href.substring(1);
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", window.location.pathname);
      }

      return;
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}