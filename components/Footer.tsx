"use client";

import { useEffect, useRef, useState } from "react";

function Footer() {


  return (
    <footer
      className="bg-gray-900 text-gray-400 py-12 mt-20 dark:bg-gray-950/80 dark:text-gray-300"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div
        className={`container mx-auto px-4 text-center transition-all duration-1000 opacity-100 translate-y-0"}`}
      >
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <strong itemProp="creator">Carlos Eduardo</strong>.{" "}
          <span itemProp="description">
            Desenvolvido com carinho e muito ☕ | <strong>Desenvolvedor Full Stack</strong> |{" "}
            <strong>React</strong>, <strong>Next.js</strong> e <strong>TypeScript</strong>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;