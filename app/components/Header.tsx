"use client";

import { useState } from "react"; // Pridané pre ovládanie modalu
import { motion } from "framer-motion";
import { ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";
import { ContactModal } from "./ContactModal"; // Importuj tvoj modal

export function Header() {
  // 1. Vytvoríme stav, či je modal otvorený alebo zatvorený
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b shadow-sm"
        style={{ 
          background: 'rgba(13, 13, 26, 0.85)',
          borderColor: 'rgba(138, 43, 226, 0.15)'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 cursor-pointer">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center p-1" style={{ background: 'var(--gradient-btn)' }}>
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-lg text-white">CheapPass.eu</span>
            </Link>

            {/* Navigácia */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/ponuka" className="transition-colors text-sm text-gray-400 hover:text-white">
                Ponuka
              </Link>
              <Link href="/#features" className="transition-colors text-sm text-gray-400 hover:text-white">
                Ako to funguje
              </Link>
              <Link href="#" className="transition-colors text-sm text-gray-400 hover:text-white">
                FAQ
              </Link>
              
              {/* 2. TU JE ZMENA: Namiesto <a> použijeme button, ktorý otvorí modal */}
              <button 
                onClick={() => setIsContactOpen(true)}
                className="transition-colors text-sm text-gray-400 hover:text-white outline-none"
              >
                Kontakt
              </button>
            </nav>

            {/* Akcie */}
            <div className="flex items-center gap-2">
               <button className="p-1.5 text-gray-400 hover:text-white transition-colors">
                  <ShoppingCart className="w-4 h-4" />
               </button>
               <button className="hidden sm:block px-4 py-1.5 rounded-md font-medium text-xs text-white" 
                       style={{ background: 'var(--gradient-btn)' }}>
                  Prihlásiť sa
               </button>
               <button className="md:hidden p-1.5 text-gray-400">
                  <Menu className="w-5 h-5" />
               </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* 3. Vložíme komponent modalu pod header */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
}