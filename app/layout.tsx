import { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { CartModalWrapper } from "./components/CartModalWrapper";

// Definícia metadát pre celú aplikáciu vrátane ikonky s pozadím
export const metadata: Metadata = {
  title: "CheapPass.eu | Herné Passy",
  description: "Najlacnejšie herné passy pre Clash of Clans, Clash Royale a ďalšie hry.",
  // Nastavenie ikonky webu s gradientným pozadím
  icons: {
    icon: [
      {
        url: "/logoo.png", // Cesta k obrázku image_a1c1d4.png, ktorý si nahráš do public priečinka
        // Pre istotu môžeme definovať, že toto je aj favicon a apple-touch-icon
        href: "/logoo.png",
      }
    ],
    shortcut: "/logoo.png",
    apple: "/logoo.png",
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