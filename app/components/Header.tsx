"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { ContactModal } from "./ContactModal";

export function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-lg"
        style={{ 
          background: 'rgba(13, 13, 26, 0.9)',
          borderColor: 'rgba(138, 43, 226, 0.2)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo - OPRAVENÉ pre biely text a gradient koncovku */}
            <Link href="/" className="flex items-center gap-2.5 group transition-transform hover:scale-105 outline-none">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center p-1.5 shadow-lg shadow-purple-500/20" style={{ background: 'var(--gradient-btn)' }}>
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-black text-xl tracking-tight text-white flex items-center">
                CheapPass
                <span style={{
                  background: 'var(--gradient-btn)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                  marginLeft: '1px' // Malý odstup od textu
                }}>
                  .eu
                </span>
              </span>
            </Link>

            {/* Desktop Navigácia */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/ponuka" className="text-sm font-medium text-gray-400 hover:text-white transition-all hover:translate-y-[-1px]">
                Ponuka
              </Link>
              <Link href="/ako-to-funguje" className="text-sm font-medium text-gray-400 hover:text-white transition-all hover:translate-y-[-1px]">
                Ako to funguje
              </Link>
              <Link href="/faq" className="text-sm font-medium text-gray-400 hover:text-white transition-all hover:translate-y-[-1px]">
                FAQ
              </Link>
              
              {/* Kontakt Button (Otvorí Modal) */}
              <button 
                onClick={() => setIsContactOpen(true)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-all hover:translate-y-[-1px] outline-none"
              >
                Kontakt
              </button>
            </nav>

            {/* Pravá strana (Košík + Login) */}
            <div className="flex items-center gap-3">
               <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full border-2 border-[#0d0d1a]"></span>
               </button>
               
               <button className="hidden sm:block px-5 py-2 rounded-xl font-bold text-xs text-white shadow-lg shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all outline-none" 
                       style={{ background: 'var(--gradient-btn)' }}>
                  PRIHLÁSIŤ SA
               </button>

               {/* Mobilné Menu Toggle */}
               <button 
                 className="md:hidden p-2 text-gray-400 hover:text-white outline-none"
                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
               </button>
            </div>

          </div>
        </div>

        {/* Mobilné Menu Rozbalenie */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-[#0d0d1a] px-4 py-6 space-y-4"
          >
            <Link href="/ponuka" className="block text-gray-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Ponuka</Link>
            <Link href="/ako-to-funguje" className="block text-gray-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Ako to funguje</Link>
            <Link href="/faq" className="block text-gray-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
            <button 
              onClick={() => { setIsContactOpen(true); setIsMobileMenuOpen(false); }}
              className="block text-gray-400 font-medium w-full text-left outline-none"
            >
              Kontakt
            </button>
            <button className="w-full py-3 rounded-xl font-bold text-white text-sm outline-none" style={{ background: 'var(--gradient-btn)' }}>
              PRIHLÁSIŤ SA
            </button>
          </motion.div>
        )}
      </motion.header>

      {/* Komponent modalu */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
}