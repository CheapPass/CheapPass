import { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { CartModalWrapper } from "./components/CartModalWrapper";

export const metadata: Metadata = {
  title: "CheapPass.eu | Herné Passy",
  description: "Najlacnejšie herné passy pre Clash of Clans, Clash Royale a ďalšie hry.",
  // Nastavenie ikonky webu
  icons: {
    icon: "/logo.png", // Tento súbor musí byť v priečinku public/logo.png
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body className="bg-[#0d0d1a] text-white">
        <CartProvider>
          <Header />
          <main>{children}</main>
          {/* Tento wrapper už nepotrebuje posielať props manuálne v layoute */}
          <CartModalWrapper />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}