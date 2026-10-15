import type { Metadata } from "next";
import { Hanken_Grotesk, Unbounded } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/site";

const display = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const body = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.tagline}`,
  description: `Site oficial de ${profile.name}, ator e humorista de Aracaju e criador da Rayssa Rayanna. Shows, teatro, publis e contato para contratação.`,
  openGraph: {
    title: profile.name,
    description: profile.tagline,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip">{children}</body>
    </html>
  );
}
