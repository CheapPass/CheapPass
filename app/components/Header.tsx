"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { ContactModal } from "./ContactModal";
import { useCart } from "../context/CartContext";

export function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items } = useCart();

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
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group transition-transform hover:scale-105 outline-none">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center p-2 transition-transform group-hover:rotate-12 shadow-lg shadow-purple-500/20" style={{ background: 'var(--gradient-btn)' }}>
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <span className="font-black text-xl tracking-tight text-white uppercase italic">
                CheapPass<span className="text-[var(--secondary-neon)]">.eu</span>
              </span>
            </Link>

            {/* Desktop Navigácia - ZVÄČŠENÉ PÍSMO (text-base + font-semibold) */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/produkty" className="text-gray-400 hover:text-white font-semibold text-base transition-colors relative group">
                Produkty
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--secondary-neon)] transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/ako-to-funguje" className="text-gray-400 hover:text-white font-semibold text-base transition-colors relative group">
                Ako to funguje
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--secondary-neon)] transition-all group-hover:w-full"></span>
              </Link>
              {/* PRIDANÉ FAQ */}
              <Link href="/faq" className="text-gray-400 hover:text-white font-semibold text-base transition-colors relative group">
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--secondary-neon)] transition-all group-hover:w-full"></span>
              </Link>
              <button 
                onClick={() => setIsContactOpen(true)}
                className="text-gray-400 hover:text-white font-semibold text-base transition-colors outline-none cursor-pointer"
              >
                Kontakt
              </button>
            </nav>

            {/* Akcie (Košík + Login) */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.dispatchEvent(new Event("open-cart"))}
                className="relative p-2 hover:bg-white/5 rounded-xl transition-all group outline-none"
              >
                <ShoppingCart className="w-6 h-6 text-gray-300 group-hover:text-[var(--secondary-neon)] transition-colors" />
                {items.length > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--primary-neon)] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-[#0d0d1a]"
                  >
                    {items.length}
                  </motion.span>
                )}
              </button>

              <button className="hidden md:block px-6 py-2.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-opacity outline-none" style={{ background: 'var(--gradient-btn)' }}>
                PRIHLÁSIŤ SE
              </button>

              {/* Mobilný menu trigger */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-white outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobilné Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/5 bg-[#0d0d1a] px-4 py-6 space-y-4"
            >
              <Link href="/produkty" className="block text-gray-300 font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Produkty</Link>
              <Link href="/ako-to-funguje" className="block text-gray-300 font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Ako to funguje</Link>
              <Link href="/faq" className="block text-gray-300 font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
              <button 
                onClick={() => { setIsContactOpen(true); setIsMobileMenuOpen(false); }}
                className="block text-gray-300 font-bold text-lg w-full text-left outline-none"
              >
                Kontakt
              </button>
              <button className="w-full py-4 rounded-xl font-bold text-white text-base outline-none mt-2" style={{ background: 'var(--gradient-btn)' }}>
                PRIHLÁSIŤ SA
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}