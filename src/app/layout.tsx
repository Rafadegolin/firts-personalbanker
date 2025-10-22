import type { Metadata } from "next";
import ClientToaster from "@/components/ClientToaster";
import { Montserrat } from "next/font/google";
// @ts-ignore: side-effect import of global CSS without type declarations
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "First Serviços e Negócios Especializados",
  description: "Seu Advisor Pessoal para as melhores soluções financeiras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <ClientToaster />
      </body>
    </html>
  );
}
