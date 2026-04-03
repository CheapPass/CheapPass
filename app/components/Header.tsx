"use client";

import { motion } from "framer-motion";
import { ShoppingCart, User, Menu } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -60 }} // Začína vyššie, lebo je menší
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b shadow-sm"
      style={{ 
        background: 'rgba(13, 13, 26, 0.85)',
        borderColor: 'rgba(138, 43, 226, 0.15)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Zmenšená výška z h-16 na h-12 */}
        <div className="flex items-center justify-between h-12">
          
          {/* Reálne Logo zo súboru /logo.png */}
          <div className="flex items-center gap-1.5 cursor-pointer">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center p-1" style={{ background: 'var(--gradient-btn)' }}>
              <img 
                src="/logo.png" // Cesta k tvojmu logu
                alt="CheapPass Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            {/* Zmenšený text loga */}
            <span className="font-bold text-lg" style={{ 
              background: 'var(--gradient-btn)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              CheapPass.eu
            </span>
          </div>

          {/* Navigácia - Zmenšené písmo (text-sm) a menšie medzery */}
          <nav className="hidden md:flex items-center gap-6">
            {["Ponuka", "Ako to funguje", "FAQ", "Kontakt"].map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors text-sm text-[var(--text-muted)] hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Akcie - Zmenšené ikonky a tlačidlo */}
          <div className="flex items-center gap-2">
             <button className="p-1.5 text-[var(--text-muted)] hover:text-white transition-colors">
                <ShoppingCart className="w-4 h-4" />
             </button>
             {/* Zmenšené tlačidlo (px-4 py-1.5 text-xs) */}
             <button className="hidden sm:block px-4 py-1.5 rounded-md font-medium text-xs text-white transition-transform hover:scale-105 active:scale-95" 
                     style={{ background: 'var(--gradient-btn)' }}>
                Prihlásiť sa
             </button>
             <button className="md:hidden p-1.5 text-[var(--text-muted)]">
                <Menu className="w-5 h-5" />
             </button>
          </div>

        </div>
      </div>
    </motion.header>
  );
}