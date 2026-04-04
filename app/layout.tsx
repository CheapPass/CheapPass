import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 1. Importuj CartProvider (skontroluj si cestu k súboru!)
import { CartProvider } from "./context/CartContext"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CheapPass.eu | Prémiové herné passy",
  description: "Najlacnejšie herné predplatné na trhu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={inter.className}>
        {/* 2. Obaľ CELÝ obsah (children) do CartProvideru */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}