"use client";

import { motion } from "framer-motion";
import { ShoppingCart, User, Menu } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-sm"
      style={{ 
        background: 'rgba(13, 13, 26, 0.9)',
        borderColor: 'var(--border)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - Teraz používa tvoj gradient */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center p-2" style={{ background: 'var(--gradient-btn)' }}>
              <span className="text-white font-bold">CP</span>
            </div>
            <span className="font-bold text-xl" style={{ 
              background: 'var(--gradient-btn)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              CheapPass.eu
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Ponuka", "Ako to funguje", "FAQ", "Kontakt"].map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors text-[var(--text-muted)] hover:text-[var(--secondary-neon)]"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
             <button className="p-2 text-[var(--text-muted)] hover:text-white transition-colors">
                <ShoppingCart className="w-5 h-5" />
             </button>
             <button className="hidden sm:block px-6 py-2 rounded-lg font-medium text-white transition-transform hover:scale-105 active:scale-95" 
                     style={{ background: 'var(--gradient-btn)' }}>
                Prihlásiť sa
             </button>
             <button className="md:hidden p-2 text-[var(--text-muted)]">
                <Menu className="w-6 h-6" />
             </button>
          </div>

        </div>
      </div>
    </motion.header>
  );
}