import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistFira = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio | Carlos Eduardo",
  description: "Portfólio de Carlos Eduardo de Souza Alonso - Desenvolvedor Full Stack Júnior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistInter.variable} ${geistFira.variable} antialiased`}
      >
      <NavBar />
        {children}
      </body>
    </html>
  );
}
