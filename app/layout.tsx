import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistFira = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seusite.com.br"), // Altere para seu domínio
  title: {
    default: "Carlos Eduardo Alonso | Desenvolvedor Full Stack",
    template: "%s | Carlos Eduardo Alonso",
  },
  description:
    "Portfólio de Carlos Eduardo de Souza Alonso - Desenvolvedor Full Stack Júnior especializado em Next.js, React, TypeScript e desenvolvimento de aplicações web modernas e responsivas.",
  keywords: [
    "Carlos Eduardo Alonso",
    "desenvolvedor full stack",
    "desenvolvedor full stack júnior",
    "desenvolvedor web",
    "react developer",
    "next.js developer",
    "typescript developer",
    "frontend developer",
    "backend developer",
    "programador",
    "portfólio desenvolvedor",
    "desenvolvimento web",
    "aplicações web",
    "sites responsivos",
  ],
  authors: [{ name: "Carlos Eduardo de Souza Alonso" }],
  creator: "Carlos Eduardo Alonso",
  publisher: "Carlos Eduardo Alonso",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seusite.com.br",
    siteName: "Carlos Eduardo Alonso - Portfólio",
    title: "Carlos Eduardo Alonso | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack especializado em Next.js, React e TypeScript. Criando experiências web modernas e de alta performance.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/175896180?v=4",
        width: 1200,
        height: 630,
        alt: "Carlos Eduardo Alonso - Desenvolvedor Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Eduardo Alonso | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack especializado em Next.js, React e TypeScript",
    images: ["https://avatars.githubusercontent.com/u/175896180?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://seusite.com.br" />
      </head>
      <body
        className={`${geistInter.variable} ${geistFira.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}