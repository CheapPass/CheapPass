"use client";

import { motion } from "framer-motion";
import { Gamepad2, TrendingDown } from "lucide-react";

// Dočasný Button, kým nebudeme mať ten z Figmy/shadcn
const Button = ({ children, className, style, size }: any) => (
  <button 
    className={`flex items-center justify-center font-bold transition-all hover:scale-105 active:scale-95 ${className}`} 
    style={style}
  >
    {children}
  </button>
);

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" style={{ background: 'var(--bg-color)' }}>
      {/* Animované pozadie */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[120px]"
          style={{ background: 'rgba(138, 43, 226, 0.2)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'rgba(0, 245, 255, 0.2)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Obsah */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span style={{
            background: 'var(--gradient-btn)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            CheapPass.eu
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl mb-10 max-w-2xl mx-auto font-light"
          style={{ color: 'var(--text-muted)' }}
        >
          Herné predplatné za najlepšie ceny! Ušetrite až 50% na vašich obľúbených herných passoch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <Button
            className="text-white px-10 py-5 rounded-2xl text-lg shadow-[0_8px_32px_rgba(138,43,226,0.4)]"
            style={{ background: 'var(--gradient-btn)' }}
          >
            <Gamepad2 className="w-6 h-6 mr-3" />
            Prehliadnuť passy
          </Button>
          
          <Button
            className="border-2 text-white px-10 py-5 rounded-2xl text-lg backdrop-blur-sm"
            style={{
              borderColor: 'var(--primary-neon)',
              background: 'rgba(138, 43, 226, 0.1)'
            }}
          >
            <TrendingDown className="w-6 h-6 mr-3" />
            Ako to funguje
          </Button>
        </motion.div>

        {/* Štatistiky */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl mx-auto border-t border-white/10 pt-10"
        >
          <div>
            <div className="text-4xl font-bold mb-2 text-white">100%</div>
            <div className="text-sm uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Garancia</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 text-white">200+</div>
            <div className="text-sm uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Predajov</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 text-white">50%</div>
            <div className="text-sm uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Úspora</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}