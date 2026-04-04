"use client";

import { useState } from "react";
import { Mail, Shield, Info, CreditCard } from "lucide-react";
import Link from "next/link";
import { ContactModal } from "./ContactModal";

export function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer className="text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5" style={{
        background: '#0a0a12',
      }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* O nás / Logo */}
            <div className="space-y-5">
              <Link href="/" className="flex items-center gap-3 group outline-none">
                {/* Zväčšený kontajner (w-12 h-12) a posun obrázka (translate-x) */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 transition-transform group-hover:scale-110 shadow-lg shadow-purple-500/20" style={{ background: 'var(--gradient-btn)' }}>
                  <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="w-full h-full object-contain brightness-0 invert transform translate-x-[2px]" 
                  />
                </div>
                <span className="font-black text-2xl tracking-tight text-white">
                  CheapPass.eu
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-gray-400 max-w-[250px]">
                Vaša najlepšia voľba pre herné predplatné za skvelé ceny.
              </p>
            </div>

            {/* Rýchle odkazy */}
            <div>
              <h4 className="text-base font-bold mb-5 text-white">Rýchle odkazy</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/produkty" className="hover:text-white transition-colors">Produkty</Link></li>
                <li><Link href="/ako-to-funguje" className="hover:text-white transition-colors">Ako to funguje</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Podpora */}
            <div>
              <h4 className="text-base font-bold mb-5 text-white">Podpora</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="hover:text-white transition-colors outline-none text-left"
                  >
                    Kontakt
                  </button>
                </li>
                <li><Link href="/obchodne-podmienky" className="hover:text-white transition-colors">Vrátenie peňazí</Link></li>
                <li><Link href="/obchodne-podmienky" className="hover:text-white transition-colors">Obchodné podmienky</Link></li>
              </ul>
            </div>

            {/* Kontaktujte nás */}
            <div>
              <h4 className="text-base font-bold mb-5 text-white">Kontaktujte nás</h4>
              <div className="space-y-4 text-sm text-gray-400">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="flex items-center gap-3 hover:text-white transition-colors outline-none text-left w-full"
                >
                  <Mail className="w-5 h-5 text-gray-500" />
                  <span>info@cheappass.eu</span>
                </button>
                <div className="flex items-center gap-3">
                  <Info className="w-5 h-5 text-gray-500" />
                  <span>24/7 Zákaznícka podpora</span>
                </div>
              </div>
            </div>
          </div>

          {/* Spodná lišta */}
          <div className="pt-8 text-center border-t border-white/5">
            <p className="text-xs text-gray-500 tracking-wide">
              © 2026 CheapPass.eu. Všetky práva vyhradené.
            </p>
          </div>
        </div>
      </footer>

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
}