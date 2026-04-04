import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { CartModalWrapper } from "./components/CartModalWrapper";

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