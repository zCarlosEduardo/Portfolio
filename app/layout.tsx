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

export const metadata: Metadata = {
  title: "Carlos Eduardo · Full Stack Developer",
  description:
    "Desenvolvedor Full Stack em Goiânia/BR. Next.js, TypeScript e PostgreSQL. Construo produtos do banco de dados à interface.",
  keywords: [
    "desenvolvedor full stack",
    "desenvolvedor full stack junior",
    "desenvolvedor junior",
    "desenvolvedor web junior",
    "desenvolvedor web",
    "next.js",
    "typescript",
    "postgresql",
    "goiânia",
  ],
  authors: [{ name: "Carlos Eduardo" }],
  openGraph: {
    title: "Carlos Eduardo · Full Stack Developer",
    description: "Next.js, TypeScript e PostgreSQL. Do suporte ao código.",
    url: "https://cseduardo.com.br",
    siteName: "cadu.dev",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      data-lt-installed="true"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth `}
    >
      <body className="min-h-full ">
        {children}
        <Footer />
      </body>
    </html>
  );
}
