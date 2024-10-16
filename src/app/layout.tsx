import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/header'
import { Footer } from '../components/footer/footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modul CRM",
  description: "Desenvolvido por Engenharia Modul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Header/> 
        {children}

        <Footer/> 
      </body>
    </html>
  );
}
