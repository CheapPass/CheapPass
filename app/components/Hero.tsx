"use client";

import { motion } from "framer-motion";
import { Gamepad2, TrendingDown } from "lucide-react";
import { FloatingReviews } from "./FloatingReviews";

// Komponent Button pre Hero sekciu
const Button = ({ children, className, style }: any) => (
  <button 
    className={`flex items-center justify-center font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer ${className}`} 
    style={style}
  >
    {children}
  </button>
);

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden" style={{ background: 'var(--bg-color)' }}>
      
      {/* 1. Animované farebné fľaky v pozadí */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[120px]"
          style={{ background: 'rgba(138, 43, 226, 0.25)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'rgba(0, 245, 255, 0.2)' }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* 2. Kontajner pre plávajúce bubliny (FloatingReviews) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-7xl h-full">
          <FloatingReviews />
        </div>
      </div>

      {/* 3. Hlavný obsah (Text a Tlačidlá) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        
        {/* Nadpis */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl sm:text-7xl lg:text-9xl font-extrabold mb-8 tracking-tighter"
        >
          <span style={{
            background: 'var(--gradient-btn)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block'
          }}>
            CheapPass.eu
          </span>
        </motion.h1>

        {/* Podnadpis */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          Herné predplatné za najlepšie ceny! <br className="hidden sm:block" />
          Ušetrite až <span className="text-white font-bold">50%</span> na vašich obľúbených herných passoch.
        </motion.p>

        {/* Tlačidlá */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            className="text-white px-12 py-6 rounded-2xl text-xl shadow-[0_10px_40px_rgba(138,43,226,0.4)]"
            style={{ background: 'var(--gradient-btn)' }}
          >
            <Gamepad2 className="w-6 h-6 mr-3" />
            Prehliadnuť passy
          </Button>
          
          <Button
            className="border-2 text-white px-12 py-6 rounded-2xl text-xl backdrop-blur-md"
            style={{
              borderColor: 'var(--primary-neon)',
              background: 'rgba(138, 43, 226, 0.1)'
            }}
          >
            <TrendingDown className="w-6 h-6 mr-3" />
            Ako to funguje
          </Button>
        </motion.div>

        {/* Štatistiky v spodnej časti */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto border-t border-white/5 pt-12"
        >
          <div className="group cursor-default">
            <div className="text-5xl font-black mb-2 text-white group-hover:text-[var(--secondary-neon)] transition-colors">100%</div>
            <div className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: 'var(--text-muted)' }}>Bezpečná Garancia</div>
          </div>
          <div className="group cursor-default">
            <div className="text-5xl font-black mb-2 text-white group-hover:text-[var(--primary-neon)] transition-colors">200+</div>
            <div className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: 'var(--text-muted)' }}>Spokojných hráčov</div>
          </div>
          <div className="group cursor-default">
            <div className="text-5xl font-black mb-2 text-white group-hover:text-[var(--secondary-neon)] transition-colors">50%</div>
            <div className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: 'var(--text-muted)' }}>Priemerná úspora</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}