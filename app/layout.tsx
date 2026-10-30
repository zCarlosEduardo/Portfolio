import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.ceduardo.com.br";
const TITULO = "Carlos Eduardo Alonso · Desenvolvedor e Automação com IA";
const DESCRICAO =
  "Carlos Eduardo Alonso, desenvolvedor em Goiânia. Automação de processos com IA, ferramentas internas em produção e produtos com Next.js, n8n e Playwright.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITULO,
  description: DESCRICAO,
  keywords: [
    "Carlos Eduardo Alonso",
    "Carlos Eduardo desenvolvedor",
    "automação com ia",
    "automação de processos",
    "ai builder",
    "n8n",
    "playwright",
    "desenvolvedor full stack",
    "desenvolvedor junior",
    "desenvolvedor web",
    "next.js",
    "typescript",
    "goiânia",
  ],
  authors: [{ name: "Carlos Eduardo Alonso", url: SITE_URL }],
  creator: "Carlos Eduardo Alonso",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITULO,
    description: DESCRICAO,
    url: SITE_URL,
    siteName: "Carlos Eduardo Alonso",
    locale: "pt_BR",
    type: "profile",
  },
  twitter: { card: "summary_large_image", title: TITULO, description: DESCRICAO },
};

// dados estruturados: ajuda o Google a ligar o nome ao site e aos perfis
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Carlos Eduardo Alonso",
  alternateName: "Carlos Eduardo",
  url: SITE_URL,
  email: "mailto:cseduardoalonso@gmail.com",
  jobTitle: "Analista de Suporte e Desenvolvimento",
  worksFor: { "@type": "Organization", name: "ARX Administradora" },
  address: { "@type": "PostalAddress", addressLocality: "Goiânia", addressRegion: "GO", addressCountry: "BR" },
  knowsAbout: ["Automação de processos", "Inteligência artificial", "Next.js", "TypeScript", "n8n", "Playwright"],
  sameAs: [
    "https://www.linkedin.com/in/zcarloseduardo/",
    "https://github.com/zCarlosEduardo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-lt-installed="true"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth `}
    >
      <body className="min-h-full ">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
