import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentoria Distribuidora – Monte sua distribuidora de telas e baterias",
  description:
    "Aprenda o método completo para montar e escalar uma distribuidora de telas e baterias para celular com vendas estruturadas e crescimento real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
