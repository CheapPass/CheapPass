import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body className="bg-[#0d0d1a] text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}